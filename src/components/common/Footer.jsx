"use client"
import React, { useState } from 'react'
import { CONTACT_INFO, BRAND_NAME, BRAND_TAGLINE } from '../../utils/constants'

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert(`Thank you for subscribing with: ${newsletterEmail}`)
    setNewsletterEmail('')
  }

  return (
    <footer className="site-footer">
      {/* Top Red Divider Bar */}
      <div className="footer-top-line"></div>

      {/* Main Footer Container */}
      <div className="container footer-main-container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo-box">
              <img src="/assets/logo.png" alt={"logo"} className="service-provide-img" />
            </div>
          </div>

          {/* Column 2: Official Info */}
          <div className="footer-col info-col">
            <h4 className="footer-title">Official info</h4>
            <ul className="footer-info-list">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>{CONTACT_INFO.indiaAddress}</span>
              </li>
              <li className="sales-phone">
                <span className="phone-number-highlight">{CONTACT_INFO.salesPhone} (For Sales)</span>
              </li>
              <li className="open-hours">
                <strong>Open Hours:</strong>
                <span>{CONTACT_INFO.officeHours}</span>
              </li>
            </ul>
          </div>

          {/* Column 3: USA Office */}
          <div className="footer-col office-col">
            <h4 className="footer-title">USA OFFICE</h4>
            <p className="usa-address">
              {CONTACT_INFO.usaAddress}
            </p>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-title">Subscribe to our Newsletter</h4>
            <form onSubmit={handleSubscribe} className="newsletter-form-custom">
              <label htmlFor="footer-email" className="newsletter-label">Email</label>
              <div className="newsletter-input-wrapper">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="mail@admin.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-submit-btn">
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="footer-bottom-strip">
        <div className="container">
          <p>© 2025 Ask Expert. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
