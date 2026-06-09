import React from 'react'
import { servicesHome } from '../../data/servicesData'

const ServicesSection = () => {
  return (
    <section className="services-provide-sec">
      <div className="container">
        <h2 className="home-sec-title">Services we provide</h2>
        <div className="services-provide-grid">
          {servicesHome.map((item) => (
            <div key={item.id} className="service-provide-card hover-lift">
              <div className="service-provide-img-wrapper">
                <img src={item.image} alt={item.title} className="service-provide-img" />
              </div>
              <h3 className="service-provide-card-title">{item.title}</h3>
              <p className="service-provide-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
