import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { useState } from 'react'
import { useDataContext } from '../contexts/DataContext'
import { useModal } from '../contexts/ModalContext'
import { initialPropertyData, useProperty } from '../contexts/PropertyContext'


const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const useAddProperty = () => {
    const {  setModalOpen } = useModal()
    const { setData } = useDataContext()
    const { toast } = useToast()
    const {propertyData,setPropertyData} = useProperty()
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setPropertyData((prev) => ({ ...prev, [name]: value }))
    }

    const handleStatusChange = (value: string) => {
        setPropertyData((prev) => ({ ...prev, status: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const { name, status, requests, area, tenants } = propertyData
        setIsLoading(true)
        await sleep(1000)
        setData((prev) => {
            const newId = prev.activeProperties.properties.length > 0 ? prev.activeProperties.properties[prev.activeProperties.properties.length - 1].id + 1 : 1
            const newProperty = { id: newId, name, status, requests, area: `${area} sq m`, tenants }

            return {
                ...prev,
                activeProperties: {
                    ...prev.activeProperties,
                    properties: [...prev.activeProperties.properties, newProperty],
                },
            }
        })
        setIsLoading(false)
        setModalOpen(false)
        toast({
            title: `Property ${name} added successfully`,
            description: <Button variant="destructive">Undo</Button>,
            duration: 3000,
        })
        setPropertyData(initialPropertyData)
    }

    return { isLoading, handleChange, handleStatusChange, handleSubmit, propertyData,setPropertyData }
}
export default useAddProperty
