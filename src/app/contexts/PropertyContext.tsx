'use client'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

interface PropertyContextType {
    propertyData: typeof initialPropertyData
    setPropertyData: Dispatch<SetStateAction<typeof initialPropertyData>>
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined)

export const initialPropertyData = {
    name: '',
    tenants: 0,
    requests: 0,
    status: '',
    area: '',
}

export const PropertyProvider = ({ children }: { children: ReactNode }) => {
    const [propertyData, setPropertyData] = useState(initialPropertyData)
    return <PropertyContext.Provider value={{ propertyData, setPropertyData }}>{children}</PropertyContext.Provider>
}

export const useProperty = () => {
    const context = useContext(PropertyContext)
    if (!context) {
        throw new Error('useProperty must be used within a PropertyProvider')
    }
    return context
}
