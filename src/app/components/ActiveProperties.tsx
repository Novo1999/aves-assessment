'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'
import { usePathname, useRouter } from 'next/navigation'
import { FaEdit, FaInfoCircle, FaSearch, FaTrash, FaUser } from 'react-icons/fa'
import { useDataContext } from '../contexts/DataContext'
import { useModal } from '../contexts/ModalContext'
import useAddProperty from '../hooks/use-add-property'
import PropertyForm from './PropertyForm'

const statusColors = {
    active: 'bg-green-500',
    inactive: 'bg-red-500',
    pending: 'bg-orange-500',
}

const ActiveProperties = () => {
    const router = useRouter()
    const pathname = usePathname()
    const {setPropertyData} = useAddProperty()
    const { toast } = useToast()
    const { setContent, setModalOpen } = useModal()
    const {
        data: { activeProperties },
        setData,
    } = useDataContext()

    const handleDelete = (id: number) => {
        const propertyName = activeProperties.properties.find((prop: any) => prop.id === id)?.name

        // this will help with undoing
        const toDelete = activeProperties.properties.find((prop: any) => prop.id === id)

        setData((prev) => ({
            ...prev,
            activeProperties: {
                ...prev.activeProperties,
                properties: prev.activeProperties.properties.filter((property: any) => property.id !== id),
            },
        }))
        toast({
            title: `${propertyName} deleted`,
            description: (
                <Button
                    onClick={() =>
                        setData((prev) => ({
                            ...prev,
                            activeProperties: {
                                ...prev.activeProperties,
                                properties: [...prev.activeProperties.properties, toDelete],
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
        <section className="text-black">
            <div className="flex justify-between items-center border-b py-2">
                <h2 className="font-bold">Active Properties ({activeProperties.properties.length})</h2>
                <Button variant="secondary">
                    <FaSearch />
                </Button>
            </div>
            <div className="overflow-y-auto lg:h-[34rem]">
                {activeProperties.properties.map((property: any) => (
                    <div key={property.id} className="*:py-1 p-2 border-b">
                        <div className="flex justify-between">
                            <div>
                                <p className="font-semibold">
                                    <span className="bg-violet-200 text-violet-500 rounded-full p-1">{property.id}</span> {property.name}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Badge className={`${statusColors[property.status as keyof typeof statusColors]} capitalize`}>{property.status}</Badge>
                                <p className="font-bold text-xs self-end">{property.area}</p>
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
                                        const searchParams = new URLSearchParams()
                                        searchParams.set("edit_id", property.id.toString())
                                        router.replace(`${pathname}?${searchParams.toString()}`)
                                        setPropertyData(property)
                                        setContent(<PropertyForm />)
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
                                                    <Button onClick={() => setModalOpen(false)} variant="secondary">Cancel</Button>
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
                ))}
            </div>
        </section>
    )
}
export default ActiveProperties
