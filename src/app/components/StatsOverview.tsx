const StatsOverview = () => {
    return (
        <section>
            <div className="p-6 space-y-8">
                <h2 className="text-2xl font-semibold text-center">Stats Overview</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-sm font-semibold text-gray-700">Available Properties</h3>
                        <p className="text-2xl font-bold text-gray-900">10</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-sm font-semibold text-gray-700">Rented Properties</h3>
                        <p className="text-2xl font-bold text-gray-900">5</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-sm font-semibold text-gray-700">Check-ins</h3>
                        <p className="text-2xl font-bold text-gray-900">8</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-sm font-semibold text-gray-700">Check-outs</h3>
                        <p className="text-2xl font-bold text-gray-900">3</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default StatsOverview
