'use client'
import { useDataContext } from '../contexts/DataContext'
import DetailsItem, { StatDetails } from './DetailsItem'

const DetailsBar = () => {
    const {
        data: { stats },
    } = useDataContext()

    return (
        <div className="border border-slate-400 rounded-lg *:border-b-2 flex flex-col lg:flex-row justify-evenly lg:*:border-b-0 w-full">
            {stats.map((stat, index) => (
                <DetailsItem statDetails={stat as StatDetails} index={index} key={stat.id} className={`lg:px-4 ${index === stats.length - 1 ? "lg:border-r-0" : "lg:border-r-2"}`} />
            ))}
        </div>
    )
}
export default DetailsBar
