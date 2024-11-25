import { Slider } from '@/components/ui/slider'
import { ReactNode, useState } from 'react'
import { useDataContext } from '../contexts/DataContext'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'

type FilterDropdownProps = {
    onFilterChange: (key: string, value: string | number) => void
    isFiltering: boolean
}

const initFilterVal = {
    area: 0,
    earnings: 0,
}

const FilterDropdown = ({ children, onFilterChange, isFiltering }: { children: ReactNode } & FilterDropdownProps) => {
    const {
        data: {
            activeProperties: { properties },
        },
    } = useDataContext()
    const maxArea = properties.reduce((max, prop) => (prop.area > max.area ? prop : max), properties[0])?.area
    const maxEarnings = properties.reduce((max, prop) => (prop.earnings > max.earnings ? prop : max), properties[0])?.earnings
    const [sliderValue, setSliderValue] = useState(initFilterVal)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="flex justify-between">
                    <p>Filter</p>
                    {isFiltering && (
                        <Button
                            onClick={() => {
                                onFilterChange('reset', '')
                                setSliderValue(initFilterVal)
                            }}
                            className="size-6 text-xs px-6 bg-violet-500"
                        >
                            Reset
                        </Button>
                    )}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => onFilterChange('status', 'active')}>Active Properties</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onFilterChange('status', 'inactive')}>Inactive Properties</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onFilterChange('status', 'pending')}>Pending Properties</DropdownMenuItem>
                    <DropdownMenuLabel className="flex justify-between">
                        <p>Area</p>
                        <p>{sliderValue.area}</p>
                    </DropdownMenuLabel>
                    <DropdownMenuItem>
                        <Slider
                            onValueChange={([val]) => {
                                setSliderValue((prev) => ({ ...prev, area: val }))
                                onFilterChange('area', val)
                            }}
                            defaultValue={[sliderValue.area]}
                            max={maxArea}
                            step={1}
                            className="w-[100%]"
                        />
                    </DropdownMenuItem>
                    <DropdownMenuLabel className="flex justify-between">
                        <p>Earnings</p>
                        <p>{sliderValue.earnings}</p>
                    </DropdownMenuLabel>
                    <DropdownMenuItem>
                        <Slider
                            onValueChange={([val]) => {
                                setSliderValue((prev) => ({ ...prev, earnings: val }))
                                onFilterChange('earnings', val)
                            }}
                            defaultValue={[sliderValue.earnings]}
                            max={maxEarnings}
                            step={1}
                            className="w-[100%]"
                        />
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default FilterDropdown
