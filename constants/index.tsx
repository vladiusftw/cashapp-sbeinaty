import { Aclonica, Antonio, Mulish } from 'next/font/google'

export const mulish = Mulish({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
})

export const aclonica = Aclonica({
    subsets: ['latin'],
    weight: ['400'],
})

export const antonio = Antonio({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const headerLinks = [
    {
        text: 'sign in',
    },
    {
        text: 'security',
    },
    {
        text: 'careers',
    },
    {
        text: 'press',
    },
    {
        text: 'support',
    },
    {
        text: 'status',
    },
]
