'use client'
import React, { useState } from 'react'
import Rays from '../shared/icons/rays'
import Logo from '../shared/icons/logo'
import Eye from '../shared/icons/eye'
import AnimatedContainer from '../shared/animatedContainer'
import { aclonica, headerLinks, mulish } from '@/constants'
import Image from 'next/image'
import Hamburger from 'hamburger-react'
import Apple from '../shared/icons/apple'
import Android from '../shared/icons/android'
import ArrowDown from '../shared/icons/arrowDown'
import Twitch from '../shared/icons/twitch'
import Twitter from '../shared/icons/twitter'
import Instagram from '../shared/icons/instagram'

type Props = {}

const Hero = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <section
            className={`flex flex-col items-center justify-center lg:px-8 lg:py-14 overflow-hidden relative text-white ${aclonica.className} `}
        >
            <div
                className={`bg-black flex flex-col overflow-hidden items-center absolute top-0 transition-all duration-500 ease-in-out left-0 z-40 w-full h-full ${
                    isOpen ? 'max-w-full p-12 ' : 'max-w-0'
                } lg:hidden`}
            >
                <div className="flex lg:hidden z-50 self-end ">
                    <Hamburger toggled={isOpen} toggle={setIsOpen} />
                </div>
                <ul className="flex flex-col gap-5 m-auto">
                    {headerLinks.map((item, index) => {
                        return (
                            <li key={item?.text + index} className="uppercase">
                                {item?.text}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="h-full w-full bg-black lg:rounded-[78px] flex flex-col justify-between relative px-6 py-2 sm:py-10 items-center">
                <Image src={'/rays.png'} fill className="object-cover" alt="" />
                <div className="flex justify-center items-center w-full relative">
                    <AnimatedContainer
                        initialClassName="translate-x-[-200px] translate-y-[-200px]"
                        whileInViewClassName="translate-x-0 translate-y-0"
                        transitionClassName=" duration-[1200ms] transition-all ease-in-out flex flex-row items-center gap-[3vw] xl:gap-[7vw]"
                        className="absolute top-0 lg:top-[-20px] left-0 lg:left-[5%]  "
                    >
                        <Logo className="animate-pulse" />
                        <Image
                            src={'/cube.png'}
                            width={74}
                            height={74}
                            alt="cube"
                            className="animate-[spin_4s_ease-in-out_infinite]"
                        />
                    </AnimatedContainer>
                    <AnimatedContainer
                        initialClassName="translate-x-[200px] translate-y-[-200px]"
                        whileInViewClassName="translate-x-0 translate-y-0"
                        transitionClassName=" duration-[1200ms] transition-all ease-in-out flex items-center gap-5"
                        className="absolute top-0 right-0 lg:right-[5%]"
                    >
                        <Eye className="animate-pulse" />
                        <div className="flex lg:hidden">
                            <Hamburger toggled={isOpen} toggle={setIsOpen} />
                        </div>
                    </AnimatedContainer>
                    <AnimatedContainer
                        initialClassName="translate-x-[200px] translate-y-[-200px]"
                        whileInViewClassName="translate-x-0 translate-y-0"
                        transitionClassName=" duration-[1200ms] transition-all ease-in-out flex items-center gap-5"
                        className="absolute top-[10px] right-[5%] hidden lg:flex"
                    >
                        <Image
                            src={'/hero-stairs.png'}
                            alt="stairs"
                            width={200}
                            height={260}
                            className="animate-rotate"
                        />
                    </AnimatedContainer>
                    <AnimatedContainer
                        initialClassName="opacity-0 "
                        whileInViewClassName=" opacity-100"
                        transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                        className="hidden lg:flex"
                    >
                        <ul className="flex gap-5">
                            {headerLinks.map((item, index) => {
                                return (
                                    <li
                                        key={item?.text + index}
                                        className="uppercase"
                                    >
                                        {item?.text}
                                    </li>
                                )
                            })}
                        </ul>
                    </AnimatedContainer>
                </div>

                <div className="flex flex-col items-center justify-center uppercase relative pt-20 ">
                    <h1>Mustafa</h1>
                    <Image
                        src={'/hero-phone.png'}
                        alt="phone"
                        width={370}
                        height={450}
                        className="absolute  animate-flip w-[250px] sm:w-[370px] max-h-[350px] lg:max-h-[30vw] object-contain"
                    />
                    <h1 className="max-w-xl xl:max-w-3xl text-center z-10 pt-4">
                        Money in the bank
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-5 self-start z-10">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-md flex items-center gap-6 border border-white bg-black">
                            <Apple />
                            <span className="uppercase">app store</span>
                        </div>
                        <div className="p-3 rounded-md flex items-center gap-6 border border-white bg-black">
                            <Android />
                            <span className="uppercase">google play</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-8 justify-between">
                        <span
                            className={`max-w-[363px] text-[10px] text-brand-200 ${mulish.className} font-bold line-clamp-5`}
                        >
                            Brokerage services by Cash App Investing LLC, member
                            FINRA / SIPC. See our BrokerCheck. Investing
                            involves risk; you may lose money. Bitcoin trading
                            offered by Cash App. Cash App Investing does not
                            trade bitcoin and Cash App is not a member of FINRA
                            or SIPC. Cash App facilitates banking services
                            through Sutton Bank and Lincoln Savings Bank,
                            Members FDIC.
                        </span>

                        <div className="flex items-center gap-5 w-full sm:w-fit justify-end">
                            <Twitch />
                            <Twitter />
                            <Instagram />
                        </div>
                    </div>
                </div>

                <ArrowDown className="absolute bottom-4 lg:bottom-12 animate-bounce z-20" />
                <AnimatedContainer
                    initialClassName="translate-x-[-200px] translate-y-[200px] "
                    whileInViewClassName="translate-x-0 translate-y-0"
                    transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                    className="absolute bottom-[180px] left-[0px] lg:bottom-[90px] lg:left-[150px]"
                >
                    <Image
                        src={'/hero-cubes.png'}
                        alt="cubes"
                        width={188}
                        height={176}
                        className=" w-auto lg:w-[188px] animate-shrink"
                    />
                </AnimatedContainer>
            </div>
            <AnimatedContainer
                initialClassName="translate-x-[200px] translate-y-[200px] "
                whileInViewClassName="translate-x-0 translate-y-0"
                transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                className="absolute bottom-0 right-10 lg:right-60"
            >
                <Image
                    src={'/hero-pillar.png'}
                    alt="pillar"
                    width={280}
                    height={330}
                    className="animate-float"
                />
            </AnimatedContainer>
        </section>
    )
}

export default Hero
