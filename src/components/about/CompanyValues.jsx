import React from 'react'
import { teamMembers } from '../../data/teamData'

const CompanyValues = () => {
  return (
    <section className="about-main-info-sec">
      <div className="container about-info-container">
        <h2 className="about-sec-label animate-fade-in">About US</h2>
        <div className="about-info-grid">
          {/* Left Column: Portrait Frames with glowing lightbulb overlays */}
          <div className="about-info-left-portraits animate-slide-up">
            <div className="portraits-flex">
              {teamMembers.map((member) => (
                <div key={member.id} className="portrait-frame-card hover-lift">
                  <img src={member.img} alt={member.name} className="portrait-img" />
                  <div className="portrait-lightbulb-overlay pulse-red-glow">
                    <i className="fa-solid fa-lightbulb"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Paragraph narrative */}
          <div className="about-info-right-text animate-slide-up">
            <p className="about-narrative-p">
              We specialize in providing reliable U.S. accounting and outsourcing services for startups and growing businesses. From bookkeeping and payroll to finance operations and offshore support, we deliver reliable companies simplify processes and improve operational efficiency.
            </p>
            <p className="about-narrative-p">
              With a dedicated team and client-focused approach, we deliver reliable financial support tailored to the unique needs of growing businesses across global markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyValues
