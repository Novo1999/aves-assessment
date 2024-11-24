import { Button } from '@/app/components/ui/button'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/app/components/ui/dialog'
import { Input } from '@/app/components/ui/input'
import { Label } from '@/app/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select'
import { Loader } from 'lucide-react'
import useAddProperty from '../hooks/use-add-property'

const PropertyForm = ({ editId }: { editId?: number }) => {
    const { handleChange, handleStatusChange, handleSubmit, propertyData, isLoading } = useAddProperty()

    return (
        <DialogContent className="overflow-y-scroll max-h-[40rem]">
            <DialogHeader>
                <DialogTitle>
                    {editId ? 'Edit' : 'Add'} {editId ? '' : 'New'} Property
                </DialogTitle>
                <DialogDescription>Fill out the details below to create or edit a property entry.</DialogDescription>
            </DialogHeader>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    if (editId) return handleSubmit(e, editId)
                    else handleSubmit(e)
                }}
                className="space-y-4"
            >
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="name">Property Name</Label>
                    <Input id="name" name="name" type="text" placeholder="e.g., 19' 1st Floor Single Building" value={propertyData.name} onChange={handleChange} required />
                </div>

                <div className="flex flex-col space-y-2">
                    <Label htmlFor="tenants">Tenants</Label>
                    <Input id="tenants" name="tenants" type="number" placeholder="e.g., 2" value={Number(propertyData.tenants).toString()} onChange={handleChange} required />
                </div>

                <div className="flex flex-col space-y-2">
                    <Label htmlFor="requests">Requests</Label>
                    <Input id="requests" name="requests" type="number" placeholder="e.g., 1" value={Number(propertyData.requests).toString()} onChange={handleChange} required />
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
                    <Input id="area" name="area" type="number" placeholder="e.g., 124 sq m" value={Number(propertyData.area).toString()} onChange={handleChange} required />
                </div>

                <div className="flex flex-col space-y-2">
                    <Label htmlFor="checkIns">Check-Ins</Label>
                    <Input id="checkIns" name="checkIns" type="number" placeholder="e.g., 5" value={Number(propertyData.checkIns).toString()} onChange={handleChange} required />
                </div>

                <div className="flex flex-col space-y-2">
                    <Label htmlFor="checkOuts">Check-Outs</Label>
                    <Input id="checkOuts" name="checkOuts" type="number" placeholder="e.g., 3" value={Number(propertyData.checkOuts).toString()} onChange={handleChange} required />
                </div>

                <div className="flex flex-col space-y-2">
                    <Label htmlFor="earnings">Earnings</Label>
                    <Input id="earnings" name="earnings" type="number" placeholder="1000" value={Number(propertyData.earnings).toString()} onChange={handleChange} required />
                </div>

                <Button disabled={isLoading} type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                    {isLoading ? <Loader className="animate-spin" /> : <p>{editId ? 'Edit' : 'Add'} Property</p>}
                </Button>
            </form>
        </DialogContent>
    )
}

export default PropertyForm
