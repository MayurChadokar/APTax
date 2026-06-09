import React from 'react'
import ServiceHero from '../../components/services/ServiceHero'
import ServiceDetails from '../../components/services/ServiceDetails'
import ConsultationBanner from '../../components/services/ConsultationBanner'

export default function Services() {
    return (
        <div className="services-page-container">
            {/* Dynamic top banner with solutions trigger */}
            <ServiceHero />

            {/* Sticky scroll-based service sections with tab navigation */}
            <ServiceDetails />

            {/* Bottom promo cards */}
            <section className="vertical-services-sec">
                <div className="container">
                    <ConsultationBanner />
                </div>
            </section>
        </div>
    )
}
