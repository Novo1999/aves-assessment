import { Badge } from '@/components/ui/badge'
import { FaInfoCircle, FaSearch, FaUser } from 'react-icons/fa'

const ActiveProperties = () => {
    return (
        <section className="text-black">
            <div className="flex justify-between">
                <h2>Active Properties (118)</h2>
                <FaSearch />
            </div>
            <div className="*:py-4">
                <div className="border-b flex justify-between">
                    <div>
                        <p className="font-semibold">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Badge>Badge</Badge>
                        <p className='font-bold text-xs self-end'>124sqm</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <p className="text-slate-400 flex gap-2 items-center">
                        <FaUser />2 Tenant
                    </p>
                    <p className="text-slate-400 flex gap-2 items-center">
                        <FaInfoCircle />1 Request
                    </p>
                </div>
            </div>
            <button className='font-semibold underline underline-offset-4'>See 100 more</button>
        </section>
    )
}
export default ActiveProperties
