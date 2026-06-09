import React from 'react'

const MapSection = () => {
  return (
    <section className="about-global-presence-sec" style={{ padding: '40px 0 0' }}>
      <div className="container" style={{ width: '100%', maxWidth: '100%', padding: '0' }}>
        <div style={{
          width: '100%',
          height: '400px',
          boxShadow: 'var(--shadow-inner)',
          borderTop: '1px solid var(--border-grey)',
          overflow: 'hidden'
        }}>
          {/* Atulya IT Park Google Maps Iframe */}
          <iframe
            title="ApTaxLedger Solution Office Location Indore India"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.258758832961!2d75.8778749!3d22.6814389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcefe31ad4c3%3A0xeab5b706c9b3a32f!2sAtulya%20IT%20Park!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default MapSection
