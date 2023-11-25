import Banking from '@/components/home/banking'
import Boost from '@/components/home/boost'
import Hero from '@/components/home/hero'
import Investing from '@/components/home/investing'
import Payments from '@/components/home/payments'
import ScrollPage from '@/components/shared/scrollPage'

export default function Home() {
    return (
        <ScrollPage>
            <Hero />
            <Payments />
            <Banking />
            <Boost />
            <Investing />
        </ScrollPage>
    )
}
