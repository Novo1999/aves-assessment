import ActiveProperties from './components/ActiveProperties'
import DetailsBar from './components/DetailsBar'
import StatsOverview from './components/StatsOverview'

export default function Home() {
    return (
        <main className="container">
            <p className="text-black">Mon, 18 Jul 2022</p>
            <p className="text-xl font-bold text-black">Welcome back, Iquas!</p>
            <p className="text-slate-400">This is property portfolio report.</p>
            <section className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <DetailsBar />
                <ActiveProperties />
                <StatsOverview />
            </section>
        </main>
    )
}
