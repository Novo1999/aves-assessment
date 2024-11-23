'use client'
import { Badge } from '@/components/ui/badge'
import { FaInfoCircle, FaSearch, FaUser } from 'react-icons/fa'
import { useDataContext } from '../contexts/DataContext'

const statusColors = {
    active: 'bg-green-500',
    inactive: 'bg-red-500',
    pending: 'bg-orange-500',
}

const ActiveProperties = () => {
    const {
        data: { activeProperties },
    } = useDataContext()

    return (
        <section className="text-black">
            <div className="flex justify-between border-b py-2">
                <h2 className="font-bold">Active Properties ({activeProperties.properties.length})</h2>
                <FaSearch />
            </div>
            <div className="overflow-y-auto lg:h-[34rem]">
                {activeProperties.properties.map((property) => (
                    <div key={property.id} className="*:py-1 p-2 border-b">
                        <div className="flex justify-between">
                            <div>
                                <p className="font-semibold">{property.name}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Badge className={`${statusColors[property.status]} capitalize`}>{property.status}</Badge>
                                <p className="font-bold text-xs self-end">{property.area}</p>
                            </div>
                        </div>
                        <div className="flex gap-4 *:text-xs">
                            <p className="text-slate-400 flex gap-2 items-center">
                                <FaUser />
                                {property.tenants} {property.tenants > 1 ? 'Tenants' : 'Tenant'}
                            </p>
                            <p className="text-slate-400 flex gap-2 items-center">
                                <FaInfoCircle />
                                {property.requests} {property.requests > 1 ? 'Requests' : 'Request'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="font-semibold underline underline-offset-4">See 10 more</button>
        </section>
    )
}
export default ActiveProperties
