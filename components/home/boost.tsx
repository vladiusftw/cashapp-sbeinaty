import React from 'react'
import AnimatedContainer from '../shared/animatedContainer'
import Image from 'next/image'
import { antonio } from '@/constants'

type Props = {}

const Boost = (props: Props) => {
    return (
        <section
            className={`flex flex-col items-center justify-center xl:px-8 xl:py-14 overflow-hidden relative bg-brand-200   `}
        >
            <div className="h-full w-full bg-black xl:rounded-[78px] flex flex-col justify-center items-center gap-5 relative px-2 py-2 sm:py-0 ">
                <div className="flex flex-col xl:flex-row items-center xl:items-start gap-5 xl:absolute bottom-[45px] right-[620px] z-20">
                    <div className="flex flex-col gap-3 mt-20 ms-5 ps-2 z-10 bg-black">
                        <h2
                            className={`text-brand-100 ${antonio.className} font-thin animate-pulse xl:max-w-[130px] `}
                        >
                            Cash Card & Boost
                        </h2>
                        <p className="max-w-[320px] text-white">
                            {
                                "The Cash Card is a free, customizable debit card that lets you pay online and in stores. It's the only way to get Boosts—instant discounts that work at places where you want to spend."
                            }
                        </p>
                    </div>
                    <AnimatedContainer
                        initialClassName="translate-y-[200px] "
                        whileInViewClassName=" translate-y-0"
                        transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                        className="overflow-hidden animate-flip"
                    >
                        <Image
                            src={'/boost-phone.png'}
                            alt="phone"
                            width={250}
                            height={509}
                            className="w-[150px] md:w-[250px]"
                        />
                    </AnimatedContainer>
                </div>
            </div>

            <Image
                src={'/boost-stairs-2.png'}
                alt="stairs1"
                width={550}
                height={725}
                className="absolute bottom-[-15%] xl:bottom-[-10%] left-0 md:left-[-15%] xl:left-[-7%] w-auto md:w-[550px]"
            />

            <AnimatedContainer
                initialClassName="translate-y-[200px] "
                whileInViewClassName=" translate-y-0"
                transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                className="w-full"
            >
                <Image
                    src={'/boost-stairs-1.png'}
                    alt="stairs1"
                    width={1050}
                    height={898}
                    className="absolute bottom-[-60px] right-0"
                />

                <Image
                    src={'/boost-burger.png'}
                    alt="burger"
                    width={70}
                    height={92.6}
                    className="absolute bottom-[240px] right-[470px] animate-bounce hidden lg:flex"
                />

                <Image
                    src={'/boost-coffee.png'}
                    alt="coffee"
                    width={80}
                    height={100.9}
                    className="absolute bottom-[75px] right-[355px] hidden lg:flex animate-bounce"
                />

                <Image
                    src={'/boost-card.png'}
                    alt="card"
                    width={80}
                    height={135}
                    className="absolute bottom-[410px] right-[360px] hidden lg:flex animate-bounce"
                />

                <Image
                    src={'/boost-shoe.png'}
                    alt="shoe"
                    width={100}
                    height={80}
                    className="absolute bottom-[240px] right-[30px] hidden lg:flex animate-bounce"
                />

                <AnimatedContainer
                    initialClassName="translate-y-[200px] "
                    whileInViewClassName=" translate-y-0"
                    transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                    className="overflow-hidden absolute bottom-[570px] right-[250px] hidden lg:flex"
                >
                    <Image
                        src={'/boost-hand.png'}
                        alt="stairs1"
                        width={75}
                        height={93.5}
                        className="animate-float"
                    />
                </AnimatedContainer>
            </AnimatedContainer>
        </section>
    )
}

export default Boost
