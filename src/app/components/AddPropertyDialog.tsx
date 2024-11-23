import { Button } from '@/components/ui/button'
import { FaPlusCircle } from 'react-icons/fa'
import { useModal } from '../contexts/ModalContext'
import PropertyForm from './PropertyForm'

const AddPropertyDialog = () => {
    const { setContent, setModalOpen } = useModal()

    return (
        <Button
            onClick={() => {
                setModalOpen(true)
                setContent(<PropertyForm />)
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
