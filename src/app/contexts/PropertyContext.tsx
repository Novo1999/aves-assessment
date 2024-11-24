'use client'
import { Property } from '@/data/data'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

interface PropertyContextType {
    propertyData: Property
    setPropertyData: Dispatch<SetStateAction<Property>>
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined)

export const initialPropertyData: Property = {
    name: '',
    tenants: 0,
    requests: 0,
    status: '',
    area: 0,
    checkIns: 0,
    checkOuts: 0,
    earnings: 0,
    id: 0,
    reviews: {
        averageRating: 0,
        totalReviews: 0
    },
}

export const PropertyProvider = ({ children }: { children: ReactNode }) => {
    const [propertyData, setPropertyData] = useState<Property>(initialPropertyData)
    return <PropertyContext.Provider value={{ propertyData, setPropertyData }}>{children}</PropertyContext.Provider>
}

export const useProperty = () => {
    const context = useContext(PropertyContext)
    if (!context) {
        throw new Error('useProperty must be used within a PropertyProvider')
    }
    return context
}
