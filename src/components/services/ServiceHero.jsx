import React from 'react'
const bgImg = '/assets/mumbai-cityscape.jpg'

const ServiceHero = () => {
  return (
    <section className="services-banner-sec animate-fade-in">
      <div className="services-banner-img-bg">
        <img
          src={bgImg}
          alt="Outsourcing banner background"
          className="services-banner-img"
        />
        <div className="services-banner-overlay"></div>
      </div>
      <div className="container services-banner-content">
        <h1 className="services-banner-title">Our Services</h1>
        <p className="services-banner-desc">
          Delivering trusted accounting, bookkeeping, and business support services to help firms operate efficiently.
        </p>
        <button className="speak-solutions-btn pulse-red-glow">SPEAK TO A SOLUTIONS LEAD</button>
      </div>
    </section>
  )
}

export default ServiceHero

