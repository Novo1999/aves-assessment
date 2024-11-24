'use client'

import { useDataContext } from "../contexts/DataContext"

const StatsOverview = () => {
    const {data: {activeProperties}} = useDataContext()
    const checkIns = activeProperties.properties.reduce((acc, prop) => acc += Number(prop.checkIns), 0)
    const checkOuts = activeProperties.properties.reduce((acc, prop) => acc += Number(prop.checkOuts), 0)
    return (
        <section>
            <div className="p-6 space-y-8">
                <h2 className="text-2xl font-semibold text-center">Stats Overview</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-sm font-semibold text-gray-700">Available Properties</h3>
                        <p className="text-2xl font-bold text-gray-900">{activeProperties.properties.length}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-sm font-semibold text-gray-700">Rented Properties</h3>
                        <p className="text-2xl font-bold text-gray-900">{activeProperties.properties.filter(prop => prop.status === 'active').length}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-sm font-semibold text-gray-700">Check-ins</h3>
                        <p className="text-2xl font-bold text-gray-900">{checkIns}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-sm font-semibold text-gray-700">Check-outs</h3>
                        <p className="text-2xl font-bold text-gray-900">{checkOuts}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default StatsOverview
