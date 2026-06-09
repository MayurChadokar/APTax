import React from 'react'
import { industries } from '../../data/industriesData'

const IndustriesSection = () => {
  return (
    <section className="industries-serve-sec">
      <div className="container">
        <h2 className="home-sec-title">Industries We Serve</h2>
        <div className="industries-serve-grid">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className={`industry-card ${ind.type === 'solid' ? 'solid-card animate-pulse-glow' : 'photo-card'} hover-lift`}
              style={ind.type === 'photo' ? { backgroundImage: `url(${ind.image})` } : {}}
            >
              {ind.type === 'photo' && <div className="card-photo-overlay"></div>}
              
              <div className="card-body-content">
                <h3 className="industry-card-title">{ind.title}</h3>
                <p className="industry-card-desc">{ind.description}</p>
                {/* <div className="industry-card-action">
                  <i className={ind.actionIcon}></i>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
