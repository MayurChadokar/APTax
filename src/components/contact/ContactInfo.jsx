import React from 'react'
import { CONTACT_INFO } from '../../utils/constants'

const ContactInfo = () => {
  return (
    <div className="form-left-info-sidebar animate-slide-up">
      <div className="info-sidebar-inner-border">
        <div className="sidebar-top-box">
          <h3 className="sidebar-goals-title">Let’s discuss your Business goals</h3>
          <p className="sidebar-goals-desc">
            Discuss your business goals with us. Start a conversation with our experts and explore tailored solutions.
          </p>
        </div>

        <div className="sidebar-middle-box">
          <h4 className="sidebar-sla-highlight">Receive a comprehensive proposal within 24 hours.</h4>
        </div>

        <div className="sidebar-footer-contact">
          <div className="sidebar-email-cell">
            <i className="fa-solid fa-envelope" style={{ color: '#fbbf24' }}></i>
            <span className="sidebar-email-text">{CONTACT_INFO.email}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
