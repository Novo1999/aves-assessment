'use client'
import { Badge } from '@/app/components/ui/badge'
import { Button } from '@/app/components/ui/button'
import { DialogContent, DialogHeader, DialogTitle } from '@/app/components/ui/dialog'
import { Input } from '@/app/components/ui/input'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/app/components/ui/tooltip'
import { Property } from '@/data/data'
import { useToast } from '@/hooks/use-toast'
import { Loader2, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { FaEdit, FaFilter, FaInfoCircle, FaSearch, FaTrash, FaUser } from 'react-icons/fa'
import { useDataContext } from '../contexts/DataContext'
import { useModal } from '../contexts/ModalContext'
import { useProperty } from '../contexts/PropertyContext'
import useIntersectionObserver from '../hooks/use-intersection-observer'
import FilterDropdown from './FilterDropdown'
import PropertyForm from './PropertyForm'

const statusColors = {
    active: 'bg-green-500 dark:bg-green-500',
    inactive: 'bg-red-500 dark:bg-red-500',
    pending: 'bg-orange-500 dark:bg-orange-500',
}

const ActiveProperties = () => {
    const { toast } = useToast()
    const { setContent, setModalOpen } = useModal()
    const { setPropertyData } = useProperty()
    const { setData } = useDataContext()
    const [isSearching, setIsSearching] = useState(false)
    const [query, setQuery] = useState('')
    const { hasMore, activeProperties, infiniteScrollRef, properties, limit, setLimit, setHasMore } = useIntersectionObserver()
    const [filteredData, setFilteredData] = useState(properties || [])
    const [filters, setFilters] = useState<Record<string, string | number>>({})
    const [isFiltering, setIsFiltering] = useState(false)

    // if limit changes, set filtered data to properties
    useEffect(() => {
        if (isFiltering || isSearching) return
        if (limit) setFilteredData(properties)
    }, [limit, isFiltering, isSearching])

    const handleDelete = (id: number) => {
        const propertyName = activeProperties.properties.find((prop) => prop.id === id)?.name

        // this will help with undoing
        const toDelete = activeProperties.properties.find((prop) => prop.id === id)

        setData((prev) => ({
            ...prev,
            activeProperties: {
                ...prev.activeProperties,
                properties: prev.activeProperties.properties.filter((property) => property.id !== id),
            },
        }))

        // toast has undo button to revert deletion
        toast({
            title: `${propertyName} deleted`,
            description: (
                <Button
                    onClick={() =>
                        setData((prev) => ({
                            ...prev,
                            activeProperties: {
                                ...prev.activeProperties,
                                properties: [...prev.activeProperties.properties, toDelete as Property].sort((a, b) => a.id - b.id), // so if the item was deleted from the middle, it goes back to that place again
                            },
                        }))
                    }
                    variant="destructive"
                >
                    Undo
                </Button>
            ),
            duration: 3000,
        })
        setModalOpen(false)
    }

    const applyFilters = () => {
        let updatedData = [...properties]

        // chain filters
        Object.entries(filters).forEach(([key, value]) => {
            if (key === 'status') {
                updatedData = updatedData.filter((item) => item.status === value)
            } else if (key === 'area') {
                updatedData = updatedData.filter((item) => item.area < (value as number))
            } else if (key === 'query') {
                updatedData = updatedData.filter((item) => item.name.toLowerCase().includes((value as string).toLowerCase()))
            } else if (key === 'earnings') {
                updatedData = updatedData.filter((item) => item.earnings < (value as number))
            } else if (key === 'reset') {
                updatedData = properties
            }
        })

        setFilteredData(updatedData)
    }

    const onFilterChange = (key: string, value: string | number | null) => {
        setIsFiltering(true)
        setFilters((prev) => {
            const newFilters = { ...prev }
            if (value === null) {
                delete newFilters[key]
            } else {
                newFilters[key] = value
            }
            return newFilters
        })
    }

    useEffect(() => {
        applyFilters()
    }, [filters])

    return (
        <section className="text-black dark:text-white">
            <div className="flex justify-between items-center border-b py-2 flex-wrap gap-2">
                {!query ? <h2 className="font-bold">Active Properties ({activeProperties.properties.length})</h2> : <h2 className="font-result">{properties.length} results</h2>}
                {isSearching && (
                    <Input
                        value={query}
                        onChange={(e) => {
                            const value = e.target.value
                            setQuery(value)
                            setFilteredData(() => (filteredData.length > 0 ? filteredData : properties).filter((property) => property.name.toLowerCase().includes(query.toLowerCase())))
                        }}
                        type="search"
                        autoFocus
                        className="w-fit focus-visible:ring-violet-500"
                    />
                )}
                <div className="space-x-2">
                    <TooltipProvider delayDuration={0}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <FilterDropdown isFiltering={isFiltering} onFilterChange={onFilterChange}>
                                    <Button className="dark:bg-white dark:text-black dark:hover:bg-slate-200 bg-violet-200 hover:bg-violet-400">
                                        <FaFilter />
                                    </Button>
                                </FilterDropdown>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Filter</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    onClick={() => {
                                        setIsSearching(!isSearching)
                                        if (query) {
                                            setQuery('')
                                            setFilteredData(properties)
                                            setLimit(10)
                                            setHasMore(true)
                                        }
                                    }}
                                    variant="secondary"
                                    className="dark:bg-white dark:text-black dark:hover:bg-slate-200 bg-violet-200 hover:bg-violet-400"
                                >
                                    {isSearching ? <X /> : <FaSearch />}
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>{query || filteredData.length > 0 ? <p>Cancel</p> : <p>Search</p>}</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
            <div className="overflow-y-auto lg:h-[34rem]">
                {filteredData.length > 0 ? (
                    filteredData.map((property) => (
                        <div key={property.id} className="*:py-1 p-2 border-b">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-semibold">
                                        <span className="bg-violet-200 text-violet-500 rounded-full p-1">{property.id}</span> {property.name}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Badge className={`${statusColors[property.status as keyof typeof statusColors]} capitalize dark:text-white`}>{property.status}</Badge>
                                    <p className="font-bold text-xs self-end">{`${property.area} sqm`}</p>
                                </div>
                            </div>
                            <div className="flex gap-4 *:text-xs justify-between">
                                <div className="flex gap-4">
                                    <p className="text-slate-400 flex gap-2 items-center">
                                        <FaUser />
                                        {property.tenants} {property.tenants > 1 ? 'Tenants' : 'Tenant'}
                                    </p>
                                    <p className="text-slate-400 flex gap-2 items-center">
                                        <FaInfoCircle />
                                        {property.requests} {property.requests > 1 ? 'Requests' : 'Request'}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        onClick={() => {
                                            setModalOpen(true)
                                            setContent(<PropertyForm editId={property.id} />)
                                            setPropertyData(property)
                                        }}
                                        className="size-8"
                                        variant="secondary"
                                    >
                                        <FaEdit />
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            setModalOpen(true)
                                            setContent(
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>Delete {property.name}?</DialogTitle>
                                                    </DialogHeader>
                                                    <div className="flex gap-4">
                                                        <Button onClick={() => handleDelete(property.id)} variant="destructive">
                                                            Delete
                                                        </Button>
                                                        <Button onClick={() => setModalOpen(false)} variant="secondary">
                                                            Cancel
                                                        </Button>
                                                    </div>
                                                </DialogContent>
                                            )
                                        }}
                                        className="size-8"
                                        variant="destructive"
                                    >
                                        <FaTrash />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex justify-center items-center h-full gap-2">
                        <FaSearch />
                        No Results
                    </div>
                )}

                <div className={`${hasMore && !isFiltering && !isSearching ? 'visible' : 'invisible'}`} ref={infiniteScrollRef}>
                    <Loader2 className={`animate-spin m-auto ${properties.length > 0 ? 'block' : 'hidden'}`} />
                </div>
            </div>
        </section>
    )
}
export default ActiveProperties
