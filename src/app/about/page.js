import React from 'react'
import AboutHero from '../../components/about/AboutHero'
import MissionVision from '../../components/about/MissionVision'
import CompanyValues from '../../components/about/CompanyValues'
import GlobalPresence from '../../components/about/GlobalPresence'
import WhyWorkWithUs from '../../components/about/WhyWorkWithUs'

export default function About() {
    return (
        <div className="about-page-container">
            {/* Visual background blurred overlay banner */}
            <AboutHero />

            {/* Overlapping Pillars grid */}
            <MissionVision />

            {/* Portrait frames block with golden lightbulbs & narratives */}
            <CompanyValues />

            {/* Dynamic leadership cards */}
            {/* <TeamSection /> */}

            {/* Global cities Skyscrapers */}
            <GlobalPresence />

            {/* Why working center text block */}
            <WhyWorkWithUs />
        </div>
    )
}
