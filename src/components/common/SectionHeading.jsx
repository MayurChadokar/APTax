import React from 'react'

const SectionHeading = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center ${className}`} style={{ marginBottom: '45px' }}>
      {subtitle && <span className="section-label-top animate-fade-in">{subtitle}</span>}
      <h2 className="home-sec-title animate-slide-up" style={{ marginBottom: 0 }}>
        {title}
      </h2>
    </div>
  )
}

export default SectionHeading
