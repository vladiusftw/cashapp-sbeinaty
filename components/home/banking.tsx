import Image from 'next/image'
import React from 'react'
import AnimatedContainer from '../shared/animatedContainer'
import { antonio } from '@/constants'

type Props = {}

const Banking = (props: Props) => {
    return (
        <section
            className={`flex flex-col items-center justify-center lg:px-8 lg:py-14 overflow-hidden relative   `}
        >
            <div className="h-full w-full bg-brand-100 lg:rounded-[78px] flex flex-col justify-center items-center gap-5 relative px-2 py-2 sm:py-10 ">
                <div className="flex flex-col lg:flex-row items-center gap-5 lg:absolute left-[16%] z-20 ">
                    <div className="flex flex-col gap-3 bg-white rounded-md p-4 lg:bg-transparent">
                        <h2
                            className={`text-black lg:text-white ${antonio.className} font-thin animate-pulse`}
                        >
                            Banking
                        </h2>
                        <p className="max-w-[320px]">
                            Receive your paycheck, tax returns, and other direct
                            deposits up to two days early using your Cash App
                            routing and account number.
                        </p>
                    </div>
                    <AnimatedContainer
                        initialClassName="translate-y-[200px] "
                        whileInViewClassName=" translate-y-0"
                        transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                        className="overflow-hidden "
                    >
                        <Image
                            src={'/banking-phone.png'}
                            alt="phone"
                            width={350}
                            height={407}
                            className="animate-float w-fit md:w-[350px]"
                        />
                    </AnimatedContainer>
                </div>
                <AnimatedContainer
                    initialClassName="translate-y-[-200px] translate-x-[-200px] "
                    whileInViewClassName=" translate-y-0 translate-x-0"
                    transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                    className="absolute top-[5%] lg:top-[10%] left-[0%] lg:left-[5%] z-10 hidden md:flex"
                >
                    <Image
                        src={'/banking-column.png'}
                        alt="pole"
                        width={130}
                        height={200}
                        className=""
                    />
                </AnimatedContainer>

                <AnimatedContainer
                    initialClassName="translate-x-[-200px] translate-y-[200px] "
                    whileInViewClassName=" translate-x-0 translate-y-0"
                    transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                    className="absolute bottom-[-1%] left-[12%] hidden lg:flex"
                >
                    <Image
                        src={'/banking-ramp-2.png'}
                        alt="track"
                        width={280}
                        height={187}
                        className=""
                    />
                </AnimatedContainer>

                <AnimatedContainer
                    initialClassName="translate-x-[-200px] "
                    whileInViewClassName=" translate-x-0"
                    transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                    className="absolute bottom-[30%] md:bottom-[10%] left-[2%] animate-bounce"
                >
                    <Image
                        src={'/banking-stairs-2.png'}
                        alt="track"
                        width={80}
                        height={223}
                        className=""
                    />
                </AnimatedContainer>

                <AnimatedContainer
                    initialClassName="translate-y-[-200px] "
                    whileInViewClassName=" translate-y-0"
                    transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                    className="absolute top-[21%] left-[29%] hidden lg:flex"
                >
                    <Image
                        src={'/banking-track-1.png'}
                        alt="track"
                        width={270}
                        height={166}
                        className=" "
                    />
                </AnimatedContainer>

                <AnimatedContainer
                    initialClassName="translate-y-[-200px] translate-x-[200px] "
                    whileInViewClassName=" translate-y-0 translate-x-0"
                    transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                    className="absolute top-[0%] lg:top-[-5%] right-[2%] lg:right-[10%] hidden sm:flex"
                >
                    <Image
                        src={'/banking-track-2.png'}
                        alt="track"
                        width={250}
                        height={160}
                        className=""
                    />
                </AnimatedContainer>

                <AnimatedContainer
                    initialClassName="translate-y-[-200px] translate-x-[200px] "
                    whileInViewClassName=" translate-y-0 translate-x-0"
                    transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                    className="absolute top-[28%] right-[17%] hidden lg:flex"
                >
                    <Image
                        src={'/banking-ramp-1.png'}
                        alt="track"
                        width={280}
                        height={187}
                        className=""
                    />
                </AnimatedContainer>

                <AnimatedContainer
                    initialClassName="translate-x-[200px] "
                    whileInViewClassName=" translate-x-0"
                    transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                    className="absolute top-[38%] right-[6%] animate-bounce"
                >
                    <Image
                        src={'/banking-stairs-1.png'}
                        alt="track"
                        width={90}
                        height={247}
                        className="  "
                    />
                </AnimatedContainer>

                <AnimatedContainer
                    initialClassName="translate-y-[200px] translate-x-[200px] "
                    whileInViewClassName=" translate-y-0 translate-x-0"
                    transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                    className="absolute bottom-[8%] right-[17%] hidden lg:flex"
                >
                    <Image
                        src={'/banking-cubes.png'}
                        alt="track"
                        width={240}
                        height={139}
                        className=""
                    />
                </AnimatedContainer>

                <AnimatedContainer
                    initialClassName="translate-y-[200px] translate-x-[200px] "
                    whileInViewClassName=" translate-y-0 translate-x-0"
                    transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                    className="absolute bottom-[2%] right-[2%]  overflow-hidden"
                >
                    <Image
                        src={'/banking-monster.png'}
                        alt="track"
                        width={120}
                        height={80}
                        className="animate-float"
                    />
                </AnimatedContainer>
            </div>
            <AnimatedContainer
                initialClassName="translate-y-[-200px] translate-x-[-200px] "
                whileInViewClassName=" translate-y-0 translate-x-0"
                transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                className="absolute top-[-5%] lg:top-0 left-[-10%] lg:left-0"
            >
                <Image
                    src={'/banking-hole.png'}
                    alt="hole"
                    width={380}
                    height={160}
                    className=""
                />
            </AnimatedContainer>

            <AnimatedContainer
                initialClassName="translate-y-[200px]  "
                whileInViewClassName=" translate-y-0 "
                transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                className="absolute bottom-[-16%] right-[20%]"
            >
                <Image
                    src={'/banking-hole.png'}
                    alt="hole"
                    width={380}
                    height={160}
                    className=""
                />
            </AnimatedContainer>

            <AnimatedContainer
                initialClassName="translate-y-[200px]  "
                whileInViewClassName=" translate-y-0 "
                transitionClassName=" duration-[1200ms] transition-all ease-in-out"
                className="absolute bottom-[0%] left-[10%] lg:left-[36%] hidden md:flex"
            >
                <Image
                    src={'/banking-tube.png'}
                    alt="hole"
                    width={150}
                    height={157}
                    className=" "
                />
            </AnimatedContainer>
        </section>
    )
}

export default Banking
