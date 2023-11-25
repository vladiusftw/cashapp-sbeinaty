import React from 'react'

type Props = {
    className?: string
}

const Android = ({ className }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            className={className}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.504946 21.3146L9.8176 12.0284L13.1002 15.3012L2.0295 21.4392C1.60857 21.6727 1.09301 21.6692 0.674726 21.4295L0.504946 21.3146ZM8.87849 11.0919L0 19.9448V2.23907L8.87849 11.0919ZM14.4267 7.43351L18.7642 9.83795C19.1904 10.075 19.4548 10.5189 19.4548 11C19.4548 11.481 19.1904 11.9249 18.7642 12.1619L14.3082 14.6318L10.7576 11.0919L14.4267 7.43351ZM0.406786 0.771114C0.486376 0.694178 0.575686 0.626971 0.674726 0.570375C1.09301 0.330727 1.60857 0.327189 2.0295 0.560648L13.2187 6.76409L9.8176 10.1554L0.406786 0.771114Z"
                fill="#00D54B"
            />
        </svg>
    )
}

export default Android
