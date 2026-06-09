import React from 'react'
const officeImg = '/assets/generic-office.jpg'

const AboutHero = () => {
  return (
    <section className="about-banner-sec animate-fade-in">
      <div className="about-banner-bg">
        <img
          src={officeImg}
          alt="About us background"
          className="about-banner-img"
        />
        <div className="about-banner-overlay"></div>
      </div>
      <div className="container about-banner-content">
        <h1 className="about-banner-title">About US</h1>
        <p className="about-banner-subtitle">
          The greatest, most sustainable happiness comes from making others happy. It is our vision to deliver you happiness every single day.
        </p>
      </div>
    </section>
  )
}

export default AboutHero

