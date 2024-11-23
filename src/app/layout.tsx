import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Navbar from './components/Navbar'
import { ThemeProvider } from './components/theme-provider'
import { MyModal } from './components/ui/MyModal'
import { DataProvider } from './contexts/DataContext'
import { ModalProvider } from './contexts/ModalContext'
import { PropertyProvider } from './contexts/PropertyContext'
import './globals.css'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})

export const metadata: Metadata = {
    title: 'Property Dashboard',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
                <DataProvider>
                    <PropertyProvider>
                        <ModalProvider>
                            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                                <Navbar />
                                {children}
                            </ThemeProvider>
                            <MyModal />
                        </ModalProvider>
                    </PropertyProvider>
                </DataProvider>
                <Toaster />
            </body>
        </html>
    )
}
