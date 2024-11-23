'use client'
import { useModal } from '@/app/contexts/ModalContext'
import { Dialog } from '@/components/ui/dialog'

export const MyModal = () => {
    const { content, modalOpen, setModalOpen } = useModal()
    return (
        <Dialog open={modalOpen} onOpenChange={() => setModalOpen(!modalOpen)}>
            {content}
        </Dialog>
    )
}
