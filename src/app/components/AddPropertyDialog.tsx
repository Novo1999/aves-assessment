'use client'
import { Button } from '@/app/components/ui/button'
import { FaPlusCircle } from 'react-icons/fa'
import { useModal } from '../contexts/ModalContext'
import { initialPropertyData } from '../contexts/PropertyContext'
import useAddProperty from '../hooks/use-add-property'
import PropertyForm from './PropertyForm'

const AddPropertyDialog = () => {
    const { setContent, setModalOpen } = useModal()
    const { setPropertyData } = useAddProperty()
    return (
        <Button
            onClick={() => {
                setModalOpen(true)
                setContent(<PropertyForm />)
                setPropertyData(initialPropertyData)
            }}
            className="bg-violet-200 text-violet-800 font-semibold hover:bg-violet-300"
        >
            <div className="flex items-center space-x-2">
                <FaPlusCircle />
                <p>Add Property</p>
            </div>
        </Button>
    )
}

export default AddPropertyDialog
