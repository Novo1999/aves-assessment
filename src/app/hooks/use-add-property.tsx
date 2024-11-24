import { Property } from '@/data/data'
import { useToast } from '@/hooks/use-toast'
import { useState } from 'react'
import { useDataContext } from '../contexts/DataContext'
import { useModal } from '../contexts/ModalContext'
import { initialPropertyData, useProperty } from '../contexts/PropertyContext'

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const numInputs = ['area', 'checkIns', 'checkOuts', 'earnings', 'requests', 'tenants']

const useAddProperty = () => {
    const { setModalOpen } = useModal()
    const { setData } = useDataContext()
    const { toast } = useToast()
    const { propertyData, setPropertyData } = useProperty()
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setPropertyData((prev) => ({ ...prev, [name]: numInputs.includes(name) ? Number(value) : value }))
    }

    const handleStatusChange = (value: string) => {
        setPropertyData((prev) => ({ ...prev, status: value }))
    }

    const handleSubmit = async (e: React.FormEvent, id?: number | null) => {
        e.preventDefault()
        const { name, status, requests, area, tenants, checkIns, checkOuts, earnings } = propertyData
        setIsLoading(true)
        await sleep(1000)

        if (id) {
            setData((prev) => {
                const updatedProperties = prev.activeProperties.properties.map((property) => (property.id === id ? { ...property, ...propertyData } : property))

                return {
                    ...prev,
                    activeProperties: {
                        ...prev.activeProperties,
                        properties: updatedProperties,
                    },
                }
            })
        } else {
            setData((prev) => {
                const newId = prev.activeProperties.properties.length > 0 ? prev.activeProperties.properties[prev.activeProperties.properties.length - 1].id + 1 : 1
                const newProperty = { id: newId, name, status, requests, area, tenants, checkIns, checkOuts, earnings }

                return {
                    ...prev,
                    activeProperties: {
                        ...prev.activeProperties,
                        properties: [...prev.activeProperties.properties, newProperty as Property],
                    },
                }
            })
        }
        setIsLoading(false)
        setModalOpen(false)
        toast({
            title: `Property ${name} added successfully`,
            duration: 3000,
        })
        setPropertyData(initialPropertyData)
    }

    return { isLoading, handleChange, handleStatusChange, handleSubmit, propertyData, setPropertyData }
}
export default useAddProperty
