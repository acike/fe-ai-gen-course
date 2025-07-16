import { useState, useEffect } from 'react'
import Header from '../../components/shared/Header'
import AnimatedHero from './AnimatedHero'
import FeatureGrid from './FeatureGrid'
import CallToAction from './CallToAction'
import AnimatedBackground from '../../components/shared/AnimatedBackground'
import TailwindBadge from '../../components/shared/TailwindBadge'
import Footer from '../../components/shared/Footer'

function HomePage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-web-green-400 to-web-green-700 flex items-center justify-center p-5">
            <TailwindBadge />
            <AnimatedBackground />

            {/* Main Content */}
            <div className={`bg-white/95 backdrop-blur-lg border border-white/20 rounded-xl p-10 max-w-4xl w-full shadow-lg relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Header />

                <main className="text-center mb-10">
                    <AnimatedHero />
                    <FeatureGrid />
                    <CallToAction />
                </main>

                <Footer />
            </div>
        </div>
    )
}

export default HomePage
