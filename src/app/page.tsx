import { showCurrentDate } from '@/lib/utils'
import ActiveProperties from './components/ActiveProperties'
import AddPropertyDialog from './components/AddPropertyDialog'
import DetailsBar from './components/DetailsBar'
import InitLocalStorage from './components/InitLocalStorage'
import StatsOverview from './components/StatsOverview'
import AnalogClock from './components/ui/AnalogClock'

export default function Home() {
    return (
        <main className="container">
            <div className="flex gap-2 mb-4">
                <AnalogClock />
                <p className="text-black mt-6 dark:text-white">{showCurrentDate()}</p>
            </div>
            <section className='flex justify-between'>
                <div>
                    <p className="text-xl font-bold text-black dark:text-white">Welcome back, Novodip!</p>
                    <p className="text-slate-400">This is property portfolio report.</p>
                </div>
                <AddPropertyDialog />
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-3 mt-6 border rounded-lg">
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
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200 dark:from-purple-500 to-transparent rounded-full z-[-10] blur-lg fixed top-6 right-0 transform translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%]"></div>
        </main>
    )
}
