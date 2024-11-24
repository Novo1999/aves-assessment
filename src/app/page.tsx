
import { showCurrentDate } from '@/lib/utils'
import ActiveProperties from './components/ActiveProperties'
import DetailsBar from './components/DetailsBar'
import InitLocalStorage from './components/InitLocalStorage'
import StatsOverview from './components/StatsOverview'
import AnalogClock from './components/ui/AnalogClock'

export default function Home() {
    return (
        <main className="container">
            <div className="flex gap-2 mb-4">
                <AnalogClock />
                <p className="text-black mt-6">{showCurrentDate()}</p>
            </div>
            <p className="text-xl font-bold text-black">Welcome back, Iquas!</p>
            <p className="text-slate-400">This is property portfolio report.</p>
            <section className="grid grid-cols-1 lg:grid-cols-3 mt-6 border">
                <div className="border-r border-b col-span-2 p-2 flex items-center justify-center">
                    <DetailsBar />
                </div>
                <div className="cols-span-1 p-2 row-span-2">
                    <ActiveProperties />
                </div>
                <div className="col-span-2 border-r p-2">
                    <StatsOverview />
                </div>
            </section>
            <InitLocalStorage />
        </main>
    )
}
