import React from 'react'
import HeroSection from '../components/home/HeroSection'
import ServicesSection from '../components/home/ServicesSection'
import IndustriesSection from '../components/home/IndustriesSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import WhoWeAre from '../components/home/WhoWeAre'
import CTASection from '../components/home/CTASection'

export default function Home() {
    return (
        <div className="home-page-container">
            {/* Visual top photo hero banner */}
            <HeroSection />

            {/* Corporate offered services rounded row */}
            <ServicesSection />

            {/* Alternating Red / Photo 3x2 Grid */}
            <IndustriesSection />

            {/* Timeline Steps and Overlapping Team graphics */}
            <WhyChooseUs />

            {/* Executive Experience years badge & detailed statement */}
            <WhoWeAre />

            {/* Bottom high-contrast subscription helper */}
            <CTASection />
        </div>
    )
}
