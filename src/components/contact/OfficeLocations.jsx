import React from 'react'
import { CONTACT_INFO } from '../../utils/constants'
import Card from '../ui/Card'

const OfficeLocations = () => {
  return (
    <section className="services-provide-sec" style={{ backgroundColor: 'var(--bg-light)', padding: '60px 0' }}>
      <div className="container container-center">
        <h2 className="home-sec-title">Our Global Offices</h2>
        <div className="services-provide-grid-location" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {/* India Head Office */}
          <Card className="hover-lift" style={{ textAlign: 'left', padding: '30px' }}>
            <div className="pillar-icon-circle" style={{ width: '48px', height: '48px', fontSize: '18px' }}>
              <i className="fa-solid fa-building-flag"></i>
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>India Head Office</h3>
            <p style={{ color: 'var(--text-grey)', fontSize: '14px', lineHeight: '1.7', marginBottom: '15px' }}>
              {CONTACT_INFO.indiaAddress}
            </p>
            <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--primary-red)' }}>
              Phone: {CONTACT_INFO.salesPhone}
            </span>
          </Card>

          {/* USA Office */}
          {/* <Card className="hover-lift" style={{ textAlign: 'left', padding: '30px' }}>
            <div className="pillar-icon-circle" style={{ width: '48px', height: '48px', fontSize: '18px' }}>
              <i className="fa-solid fa-flag-usa"></i>
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>USA Office</h3>
            <p style={{ color: 'var(--text-grey)', fontSize: '14px', lineHeight: '1.7', marginBottom: '15px' }}>
              {CONTACT_INFO.usaAddress}
            </p>
            <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--primary-red)' }}>
              Phone: {CONTACT_INFO.salesPhone}
            </span>
          </Card> */}
        </div>
      </div>
    </section>
  )
}

export default OfficeLocations
