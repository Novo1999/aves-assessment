import { Property, Stats } from '@/data/data';
import { FaCheckCircle, FaDollarSign, FaSignOutAlt, FaStar } from 'react-icons/fa';
import { useDataContext } from '../contexts/DataContext';


const iconMap = [<FaCheckCircle key="check" />, <FaSignOutAlt key="signout" />, <FaDollarSign key="dollar" />, <FaStar key="star" />]

const DetailsItem = ({ className, statDetails, index }: { className?: string; statDetails: Stats; index: number }) => {
    const {
        data: { activeProperties },
    } = useDataContext()

    // review data would come from property renters
    const reviewData = activeProperties?.properties?.reduce((acc, curr) => {
        const currentAverageRating = curr?.reviews?.averageRating
        acc += currentAverageRating || 0
        return acc
    }, 0)

    const averageRating = (reviewData / activeProperties.properties.length).toFixed(2) || 0

    return (
        <div className={`flex justify-between items-center p-4 w-full ${className || ''}`}>
            <div>
                <p className="text-slate-400">{statDetails.title}</p>
                {statDetails.id === 4 ? (
                    <div className="text-xl font-bold text-black dark:text-white">
                        {averageRating} ({activeProperties.properties.reduce((acc, prop) => (acc += prop?.reviews?.totalReviews || 0), 0)})
                    </div>
                ) : (
                    <div className="text-xl font-bold text-black dark:text-white">
                        {activeProperties.properties.reduce((acc, prop) => (acc += prop?.[statDetails.key as keyof Property] as number), 0)}
                    </div>
                )}
            </div>
            <div className="text-violet-600 p-2 rounded-full border bg-violet-200">{iconMap[index]}</div>
        </div>
    )
}
export default DetailsItem
