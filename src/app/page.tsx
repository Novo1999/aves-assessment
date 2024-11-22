import DetailsBar from "./components/DetailsBar";

export default function Home() {
    return (
        <main className="container">
            <p className="text-black">Mon, 18 Jul 2022</p>
            <p className="text-xl font-bold text-black">Welcome back, Iquas!</p>
            <p className="text-slate-400">This is property portfolio report.</p>
            <DetailsBar />
        </main>
    )
}
