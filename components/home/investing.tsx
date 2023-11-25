import Image from 'next/image'
import React from 'react'
import Apple from '../shared/icons/apple'
import Android from '../shared/icons/android'
import Twitch from '../shared/icons/twitch'
import Twitter from '../shared/icons/twitter'
import Instagram from '../shared/icons/instagram'
import AnimatedContainer from '../shared/animatedContainer'
import { aclonica, antonio } from '@/constants'

type Props = {}

const Investing = (props: Props) => {
    return (
        <section
            className={`flex flex-col items-center justify-center  2xl:pt-14 overflow-hidden relative 2xl:gap-5   `}
        >
            <Image src={'/rays2.png'} alt="rays" fill className="z-10" />
            <div className="h-full 2xl:h-[60%] w-full 2xl:w-[96%] bg-brand-100 2xl:rounded-t-[78px] flex flex-col  items-center gap-5 px-6 py-2 sm:py-10">
                <h2
                    className={`${antonio.className} font-thin text-white opacity-60 `}
                >
                    Investing
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 2xl:gap-16 m-auto z-20 2xl:absolute bottom-[30%] px-4 ">
                    <div className="flex gap-5 items-center justify-center md:gap-5">
                        <div className="flex flex-col gap-4">
                            <h3 className={`${antonio.className} font-thin`}>
                                Stocks
                            </h3>
                            <p className="max-w-[352px] line-clamp-5">
                                {
                                    "Whether you're an expert or just getting started, Cash App is the fastest and most accessible way to invest in stocks. Start now with as little as $1."
                                }
                            </p>
                        </div>

                        <Image
                            src={'/investing-stocks.png'}
                            alt="stocks"
                            width={160}
                            height={344}
                            className="w-auto md:w-[160px] animate-flip"
                        />
                    </div>

                    <div className="flex gap-5 items-center justify-center flex-row-reverse md:gap-5">
                        <div className="flex flex-col gap-4">
                            <h3 className={`${antonio.className} font-thin`}>
                                Bitcoin
                            </h3>
                            <p className="max-w-[352px] line-clamp-5">
                                {
                                    "Cash App is the fastest way to convert dollars to bitcoin. From your home screen, six taps are all it takes to stack sats, buy an entire bitcoin, or just see what it's all about."
                                }
                            </p>
                        </div>
                        <Image
                            src={'/investing-stocks.png'}
                            alt="stocks"
                            width={160}
                            height={344}
                            className="w-auto md:w-[160px] animate-flip"
                        />
                    </div>
                </div>
            </div>
            <AnimatedContainer
                initialClassName=" translate-y-[200px] "
                whileInViewClassName="translate-x-0 translate-y-0"
                transitionClassName={` duration-[600ms] h-full transition-all ease-in-out flex flex-col sm:flex-row sm:items-center justify-end sm:justify-between pb-4 px-4 w-full gap-5 self-start relative  ${aclonica.className}`}
                className="w-full h-full 2xl:h-[40%] relative"
            >
                <Image
                    src={'/investing-floor 1.png'}
                    alt="floor"
                    fill
                    className="absolute z-10 bottom-[-56px] left-0 object-cover"
                />

                <div className="flex items-center gap-4 z-50 ">
                    <div className="p-3 rounded-md flex items-center gap-6 border border-black bg-white">
                        <Apple />
                        <span className="uppercase">app store</span>
                    </div>
                    <div className="p-3 rounded-md flex items-center gap-6 border border-black bg-white">
                        <Android />
                        <span className="uppercase">google play</span>
                    </div>
                </div>

                <div className="flex items-center gap-5 w-full sm:w-fit sm:justify-end z-10 ">
                    <Twitch className="fill-black" />
                    <Twitter className="fill-black" />
                    <Instagram className="fill-black" />
                </div>
            </AnimatedContainer>
        </section>
    )
}

export default Investing
