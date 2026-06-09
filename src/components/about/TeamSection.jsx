import React from 'react'
import { teamMembers } from '../../data/teamData'
import Card from '../ui/Card'

const TeamSection = () => {
  return (
    <section className="services-provide-sec" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <h2 className="home-sec-title">Our Leadership Team</h2>
        <div className="services-provide-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {teamMembers.map((member) => (
            <Card key={member.id} className="service-provide-card hover-lift" style={{ padding: '0', overflow: 'hidden' }}>
              <div className="service-provide-img-wrapper" style={{ height: '320px', borderRadius: '0', marginBottom: '0' }}>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="service-provide-img" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px', backgroundColor: 'var(--white)' }}>
                <h3 className="service-provide-card-title" style={{ fontSize: '20px', marginBottom: '4px' }}>{member.name}</h3>
                <p className="service-provide-card-desc" style={{ color: 'var(--primary-red)', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {member.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
