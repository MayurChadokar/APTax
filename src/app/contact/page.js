import React from 'react'
import ContactHero from '../../components/contact/ContactHero'
import ContactInfo from '../../components/contact/ContactInfo'
import ContactForm from '../../components/contact/ContactForm'
import OfficeLocations from '../../components/contact/OfficeLocations'
import MapSection from '../../components/contact/MapSection'

export default function Contact() {
    return (
        <div className="contact-page-container">
            {/* Banner */}
            <ContactHero />

            {/* Overlapping double-bordered Contact details & Inputs grid */}
            <section className="contact-form-overlap-sec">
                <div className="container form-overlap-container">
                    <div className="form-overlap-card">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Office hubs info */}
            <OfficeLocations />

            {/* Map Section */}
            <MapSection />
        </div>
    )
}
