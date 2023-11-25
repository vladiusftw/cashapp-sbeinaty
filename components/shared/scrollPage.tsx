'use client'
import React, { useEffect } from 'react'

type Props = {
    children: React.ReactNode
}

const ScrollPage = ({ children }: Props) => {
    useEffect(() => {
        if (window.navigator.vendor == 'Google Inc.') {
            const container = document.querySelector('.scroll-container')
            container?.addEventListener('wheel', (event: any) => {
                event?.preventDefault()
                const delta = event?.deltaY

                container?.scrollBy({
                    top: delta,
                    behavior: 'smooth',
                })
            })
        }
    }, [])
    return (
        <main className="scroll-container h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
            {children}
        </main>
    )
}

export default ScrollPage
