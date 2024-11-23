'use client'
import { createContext, ReactNode, useContext, useState } from 'react'

interface ModalContextType {
    modalOpen: boolean
    setModalOpen: (open: boolean) => void
    content: ReactNode | null
    setContent: (content: JSX.Element) => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [content, setContent] = useState<JSX.Element | null>(null)

    return <ModalContext.Provider value={{ setContent, content, modalOpen, setModalOpen }}>{children}</ModalContext.Provider>
}

export const useModal = () => {
    const context = useContext(ModalContext)
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider')
    }
    return context
}
