import { ReactNode } from 'react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'

type FilterDropdownProps = {
    onFilterChange: (filterKey: string, filterValue: string) => void
    isFiltering: boolean
}

const FilterDropdown = ({ children, onFilterChange, isFiltering }: { children: ReactNode } & FilterDropdownProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="flex justify-between">
                    <p>Filter</p>
                    {isFiltering && <Button onClick={() => onFilterChange('reset', '')} className="size-6 text-xs px-6 bg-violet-500">
                        Reset
                    </Button>}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => onFilterChange('status', 'active')}>Active Properties</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onFilterChange('status', 'inactive')}>Inactive Properties</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onFilterChange('status', 'pending')}>Pending Properties</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default FilterDropdown
