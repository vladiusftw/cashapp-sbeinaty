import React from 'react'
import AnimatedContainer from '../shared/animatedContainer'
import Image from 'next/image'
import { antonio } from '@/constants'
type Props = {}

const Payments = (props: Props) => {
    return (
        <section
            className={`flex flex-col items-center justify-center lg:px-8 lg:py-14 overflow-hidden relative  bg-black `}
        >
            <div className="h-full w-full bg-white lg:rounded-[78px] flex flex-col justify-center items-center gap-5 relative px-6 py-2 sm:py-10">
                <div className="flex flex-col gap-3 lg:absolute top-[30%]  left-[20%]">
                    <h2
                        className={`font-thin ${antonio.className} text-brand-100 animate-pulse`}
                    >
                        Payments
                    </h2>
                    <p className="text-black max-w-[320px]">
                        Send and receive money with anyone, donate to an
                        important cause, or tip professionals. Just enter a
                        $cashtag, phone number, or scan their QR code to pay.
                    </p>
                </div>
                <AnimatedContainer
                    initialClassName=" translate-y-[500px]"
                    whileInViewClassName=" translate-y-0"
                    transitionClassName=" duration-[1000ms] transition-all ease-in-out flex flex-row items-center gap-[3vw] xl:gap-[7vw]"
                    className="lg:absolute top-[20%] left-[25%]  "
                >
                    <Image
                        src={'/payments-phone.png'}
                        alt="phone"
                        width={750}
                        height={430}
                        className=" animate-shrink lg:animate-grow w-auto md:w-[750px] max-h-[50vh] object-contain"
                    />
                </AnimatedContainer>
            </div>
            <AnimatedContainer
                initialClassName=" translate-y-[500px]"
                whileInViewClassName=" translate-y-0"
                transitionClassName=" duration-[2000ms] transition-all ease-in-out flex flex-row items-center gap-[3vw] xl:gap-[7vw]"
                className="absolute bottom-0 lg:bottom-[-40px] left-[-5px] w-full  "
            >
                <Image
                    src={'/pillars.png'}
                    alt="pillars"
                    className=" animate-float h-auto max-h-[70vh]"
                    width={2000}
                    height={640}
                />
            </AnimatedContainer>
        </section>
    )
}

export default Payments
