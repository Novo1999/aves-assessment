import { FaCheckCircle, FaDollarSign, FaSignOutAlt, FaStar } from 'react-icons/fa'

export type StatDetails = {
    id: number
    title: string
    data: Record<string, string> | string | number
    icon: string
}

const iconMap = [<FaCheckCircle key="check" />, <FaSignOutAlt key="signout" />, <FaDollarSign key="dollar" />, <FaStar key="star" />]

const DetailsItem = ({ className, statDetails, index }: { className?: string; statDetails: StatDetails; index: number }) => {
    return (
        <div className={`flex justify-between items-center p-4 w-full ${className || ''}`}>
            <div>
                <p className="text-slate-400">{statDetails.title}</p>
                {statDetails.id === 4 ? (
                    <div className="text-xl font-bold text-black">
                        {(statDetails.data as Record<string, string>).averageRating} ({(statDetails.data as Record<string, string>).totalReviews})
                    </div>
                ) : (
                    <div className="text-xl font-bold text-black">{statDetails.data as number}</div>
                )}
            </div>
            <div className='text-violet-600 p-2 rounded-full border bg-violet-200'>{iconMap[index]}</div>
        </div>
    )
}
export default DetailsItem
