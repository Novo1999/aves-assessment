import { Button } from '@/components/ui/button'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Loader } from 'lucide-react'
import useAddProperty from '../hooks/use-add-property'

const PropertyForm = () => {
    const { handleChange, handleStatusChange, handleSubmit, propertyData, isLoading } = useAddProperty()
    return (
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
                    <Select defaultValue={propertyData.status} onValueChange={handleStatusChange}>
                        <SelectTrigger id="status" className="w-full">
                            <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
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
    )
}
export default PropertyForm
