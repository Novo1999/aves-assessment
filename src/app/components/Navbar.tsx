'use client'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import SearchBar from './SearchBar'
import Sidebar from './Sidebar'
import { ModeToggle } from './theme-toggle'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="flex justify-between p-4 text-purple-700">
            <div className='flex gap-6 items-center'>
                <p>Picture</p>
                <div className="lg:flex hidden justify-between gap-2 *:bg-violet-200 *:text-violet-800 *:font-semibold">
                    <Button>Hello</Button>
                    <Button>Hello</Button>
                    <Button>Hello</Button>
                </div>
            </div>
            <div className="flex gap-2">
                <SearchBar />
                <div>
                    <ModeToggle />
                </div>
                <button className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <FaBars />
                </button>
            </div>
            <Sidebar className={`${isOpen ? 'w-64 px-4' : 'w-0 px-0'}`} />
        </nav>
    )
}
export default Navbar
