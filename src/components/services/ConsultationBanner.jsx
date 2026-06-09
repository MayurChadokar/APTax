import Link from 'next/link'

const ConsultationBanner = () => {
  return (
    <div className="bottom-dual-cards-grid animate-slide-up" style={{ marginTop: '50px' }}>
      {/* Get In Touch Card */}
      <Link href="/contact" className="bottom-promo-card get-in-touch-card hover-lift">
        <img
          src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=500&h=300&fit=crop"
          alt="Get in touch mockup"
          className="promo-bg-img"
        />
        <div className="promo-overlay"></div>
        <div className="promo-content">
          <h3 className="promo-title">GET IN TOUCH</h3>
          <div className="promo-divider-line"></div>
        </div>
      </Link>

      {/* Careers Card */}
      <Link href="#" className="bottom-promo-card careers-card hover-lift">
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&h=300&fit=crop"
          alt="Careers mockup"
          className="promo-bg-img"
        />
        <div className="promo-overlay"></div>
        <div className="promo-content">
          <h3 className="promo-title">CAREERS</h3>
          <div className="promo-divider-line"></div>
        </div>
      </Link>
    </div>
  )
}

export default ConsultationBanner
