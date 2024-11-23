import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { Loader } from 'lucide-react'
import { useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { useDataContext } from '../contexts/DataContext'

const initialPropertyData = {
    name: '',
    tenants: 0,
    requests: 0,
    status: '',
    area: '',
} 

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const AddPropertyDialog = () => {
    const { data, setData } = useDataContext()
    const { toast } = useToast()
    const [propertyData, setPropertyData] = useState(initialPropertyData)
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setPropertyData((prev) => ({ ...prev, [name]: value }))
    }

    const handleStatusChange = (value: string) => {
        setPropertyData((prev) => ({ ...prev, status: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const { name, status, requests, area, tenants } = propertyData
        setIsLoading(true)
        await sleep(1000)
        setData((prev) => {
            const newId = prev.activeProperties.properties.length > 0 ? prev.activeProperties.properties[prev.activeProperties.properties.length - 1].id + 1 : 1
            const newProperty = { id: newId, name, status, requests, area: `${area} sq m`, tenants }

            return {
                ...prev,
                activeProperties: {
                    ...prev.activeProperties,
                    properties: [...prev.activeProperties.properties, newProperty],
                },
            }
        })
        setIsLoading(false)
        setIsOpen(false)
        toast({
            title: `Property ${name} added successfully`,
            description: <Button variant="destructive">Undo</Button>,
            duration: 3000,
        })
        setPropertyData(initialPropertyData)
    }

    return (
        <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
            <DialogTrigger>
                <Button asChild className="bg-violet-200 text-violet-800 font-semibold hover:bg-violet-300">
                    <div className="flex items-center space-x-2">
                        <FaPlusCircle />
                        <p>Add Property</p>
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Property</DialogTitle>
                    <DialogDescription>Fill out the details below to create a new property entry.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="name">Property Name</Label>
                        <Input id="name" name="name" type="text" placeholder="e.g., 19' 1st Floor Single Building" value={propertyData.name} onChange={handleChange} required />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="tenants">Tenants</Label>
                        <Input id="tenants" name="tenants" type="number" placeholder="e.g., 2" value={propertyData.tenants} onChange={handleChange} required />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="requests">Requests</Label>
                        <Input id="requests" name="requests" type="number" placeholder="e.g., 1" value={propertyData.requests} onChange={handleChange} required />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="status">Status</Label>
                        <Select onValueChange={handleStatusChange}>
                            <SelectTrigger id="status" className="w-full">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Active">Active</SelectItem>
                                <SelectItem value="Inactive">Inactive</SelectItem>
                                <SelectItem value="Pending">Pending</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="area">Area</Label>
                        <Input id="area" name="area" type="text" placeholder="e.g., 124 sq m" value={propertyData.area} onChange={handleChange} required />
                    </div>
                    <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                        {isLoading ? <Loader className="animate-spin" /> : <p>Add Property</p>}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default AddPropertyDialog
