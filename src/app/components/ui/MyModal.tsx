'use client'
import { Dialog } from '@/app/components/ui/dialog'
import { useModal } from '@/app/contexts/ModalContext'

export const MyModal = () => {
    const { content, modalOpen, setModalOpen } = useModal()
    return (
        <Dialog open={modalOpen} onOpenChange={() => setModalOpen(!modalOpen)}>
            {content}
        </Dialog>
    )
}
