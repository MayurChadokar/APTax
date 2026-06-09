import React from 'react'

const ServiceCard = ({ title, desc, image }) => {
  return (
    <div className="service-block-frame hover-lift animate-slide-up">
      <div className="service-block-text-col">
        <h2 className="service-block-title">{title}</h2>
        <p className="service-block-desc">{desc}</p>
      </div>
      <div className="service-block-img-col">
        <div className="mockup-frame hover-glow">
          <img src={image} alt={title} className="mockup-img" />
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
