'use client'
import { useState } from "react"
import { FaBars } from "react-icons/fa"
import Sidebar from "./Sidebar"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="flex justify-between p-4 text-purple-700">
      <p>Picture</p>
      <button onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>
        <Sidebar className={`${isOpen ? "w-64 px-4" : "w-0 px-0"}`} />
    </nav>
  )
}
export default Navbar