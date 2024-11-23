import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
    return (
        <div className="hidden md:block">
            <div className="relative flex items-center">
                <FaSearch className='absolute left-4' />
                <input
                    type="text"
                    placeholder="Search properties..."
                    className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    )
}
export default SearchBar
