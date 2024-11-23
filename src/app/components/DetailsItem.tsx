import { FaCheckCircle, FaDollarSign, FaSignOutAlt, FaStar } from 'react-icons/fa'

type StatDetails = {
    id: number
    title: string
    data: any
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
                        {statDetails.data.averageRating}({statDetails.data.totalReviews})
                    </div>
                ) : (
                    <div className="text-xl font-bold text-black">{statDetails.data}</div>
                )}
            </div>
            <div>{iconMap[index]}</div>
        </div>
    )
}
export default DetailsItem
