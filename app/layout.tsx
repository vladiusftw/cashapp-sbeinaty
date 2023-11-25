import type { Metadata } from 'next'
import { Mulish, Aclonica, Antonio } from 'next/font/google'
import './globals.css'

const mulish = Mulish({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
})
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={mulish.className}>{children}</body>
        </html>
    )
}
