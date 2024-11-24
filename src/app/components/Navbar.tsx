'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar'
import { ModeToggle } from './ui/theme-toggle'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="flex justify-between p-4 text-purple-700 border">
            <div className="flex gap-6 items-center">
                <Avatar className="md:w-16">
                    <AvatarImage src="https://novodip.vercel.app/_next/image?url=%2Fimages%2Ffolio-hero.png&w=640&q=75" alt="novodip" className="object-cover" />
                    <AvatarFallback>N</AvatarFallback>
                </Avatar>
                <div className="lg:flex hidden justify-between gap-2 *:bg-violet-200 *:text-violet-800 *:font-semibold">
                    <Button className="hover:bg-violet-300">Dashboard</Button>
                    <Button className="hover:bg-violet-300">All Properties</Button>
                    <Button className="hover:bg-violet-300">Deposits</Button>
                </div>
            </div>

            <div className="flex gap-2">
                <ModeToggle />
                <button className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <FaBars />
                </button>
            </div>
            <Sidebar className={`${isOpen ? 'w-64 px-4' : 'w-0 px-0'}`} />
        </nav>
    )
}
export default Navbar
