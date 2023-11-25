/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            height: {
                screen: '100dvh',
            },
            colors: {
                'brand-100': 'var(--theme-default)',
                'brand-200': 'var(--theme-default2)',
            },
            keyframes: {
                flip: {
                    '0%, 100%': {
                        transform: 'rotateY(-180deg)',
                    },
                    '50%': {
                        transform: 'rotateY(0deg)',
                    },
                },
                rotate: {
                    '0%, 100%': {
                        transform: 'rotate(-20deg)',
                    },
                    '50%': {
                        transform: 'rotate(0deg)',
                    },
                },
                shrink: {
                    '0%, 100%': {
                        transform: 'scale(75%)',
                    },
                    '50%': {
                        transform: 'scale(100%)',
                    },
                },
                grow: {
                    '0%, 100%': {
                        transform: 'scale(125%)',
                    },
                    '50%': {
                        transform: 'scale(100%)',
                    },
                },
                float: {
                    '0%, 100%': {
                        transform: 'translateY(50px)',
                    },
                    '50%': {
                        transform: 'translateY(0px)',
                    },
                },
            },
            animation: {
                flip: 'flip 6s ease-in-out infinite',
                rotate: 'rotate 6s ease-in-out infinite',
                shrink: 'shrink 6s ease-in-out infinite',
                float: 'float 5s ease-in-out infinite',
                grow: 'grow 6s ease-in-out infinite',
                bounce: 'bounce 1.5s ease-in-out infinite',
            },
            screens: {
                '2xl': '1300px',
            },
        },
    },
    plugins: [],
}
