import React from 'react'
import { CONTACT_INFO, SOCIAL_LINKS, BRAND_NAME, BRAND_TAGLINE } from '../../utils/constants'

const Topbar = () => {
  const primary = 'ApTax'
  const secondary = BRAND_NAME.replace(new RegExp(`^${primary}\\s*`), '')
  return (
    <header className="main-header animate-slide-down">
      {/* Black Topmost Bar */}
      {/* <div className="top-banner">
        <div className="container banner-container">
          <span className="banner-tagline">Assisting Startups and SMEs globally Since 2019</span>
          <div className="banner-socials">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="social-box instagram" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="social-box linkedin" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" className="social-box youtube" title="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div> */}

      {/* Middle White Logo & Contact Info Bar */}
      <div className="header-middle">
        <div className="container middle-container">
          {/* Logo in Bordered Box */}
          <div className="brand-logo-box">
            <h1 className="brand-title"><span className="brand-primary">{primary}</span><span className="brand-secondary">{secondary}</span></h1>
            {/* <p className="brand-subtitle">{BRAND_TAGLINE}</p> */}
            {/* <img src={LOGO} alt={"logo"} className="service-provide-img" /> */}
          </div>

          {/* Contact Details Grid */}
          <div className="contact-details-grid">
            {/* Request Call Cell */}
            <div className="contact-cell">
              <div className="cell-icon-wrapper">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div className="cell-text">
                <span className="cell-label">Request a Call</span>
                <span className="cell-value">{CONTACT_INFO.supportPhone}</span>
              </div>
            </div>

            {/* Email Cell */}
            <div className="contact-cell">
              <div className="cell-icon-wrapper">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="cell-text">
                <span className="cell-label">Mail us</span>
                <span className="cell-value">{CONTACT_INFO.email}</span>
              </div>
            </div>

            {/* Location Cell */}
            <div className="contact-cell location-cell">
              <div className="cell-icon-wrapper">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="cell-text">
                <span className="cell-value">Indore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar
