'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Property } from '@/data/data'
import { useToast } from '@/hooks/use-toast'
import { Loader2, X } from 'lucide-react'
import { useState } from 'react'
import { FaEdit, FaInfoCircle, FaSearch, FaTrash, FaUser } from 'react-icons/fa'
import { useDataContext } from '../contexts/DataContext'
import { useModal } from '../contexts/ModalContext'
import { useProperty } from '../contexts/PropertyContext'
import useIntersectionObserver from '../hooks/use-intersection-observer'
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
    const { hasMore, activeProperties, infiniteScrollRef, properties } = useIntersectionObserver(query)

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

    return (
        <section className="text-black dark:text-white">
            <div className="flex justify-between items-center border-b py-2 flex-wrap gap-2">
                {!query ? <h2 className="font-bold">Active Properties ({activeProperties.properties.length})</h2> : <h2 className="font-result">{properties.length} results</h2>}
                {isSearching && <Input value={query} onChange={(e) => setQuery(e.target.value)} type="search" autoFocus className="w-fit focus-visible:ring-violet-500" />}
                <Button
                    onClick={() => {
                        setIsSearching(!isSearching)
                        if (query) setQuery('')
                    }}
                    variant="secondary"
                    className='dark:bg-white dark:text-black dark:hover:bg-slate-200'
                >
                    {isSearching ? <X /> : <FaSearch />}
                </Button>
            </div>
            <div className="overflow-y-auto lg:h-[34rem]">
                {properties.length > 0 ? (
                    properties.map((property) => (
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
                {hasMore && (
                    <div ref={infiniteScrollRef}>
                        <Loader2 className={`animate-spin m-auto ${properties.length > 0 ? 'block' : 'hidden'}`} />
                    </div>
                )}
            </div>
        </section>
    )
}
export default ActiveProperties
