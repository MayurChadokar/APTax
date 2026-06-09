import React from 'react'

const MissionVision = () => {
  const cards = [
    {
      id: 1,
      title: 'Our mission',
      desc: 'Simplifying accounting and business operations for modern growing companies.',
      icon: 'fa-solid fa-bullseye'
    },
    {
      id: 2,
      title: 'Our vision',
      desc: 'Empowering businesses with smarter financial management and global operational support.',
      icon: 'fa-solid fa-eye'
    },
    {
      id: 3,
      title: 'Our value',
      desc: 'Trust, compliance, efficiency, accountability, and customer success.',
      icon: 'fa-solid fa-hand-holding-heart'
    },
    {
      id: 4,
      title: 'Our culture',
      desc: 'Delivering happiness to our clients, our team members, and the community.',
      icon: 'fa-solid fa-face-smile'
    }
  ]

  return (
    <section className="about-pillars-sec animate-slide-up">
      <div className="container pillars-container">
        <div className="pillars-grid">
          {cards.map((card) => (
            <div key={card.id} className="pillar-card hover-lift">
              <div className="pillar-icon-circle pulse-red-glow">
                <i className={card.icon}></i>
              </div>
              <div className="pillar-card-content">
                <h3 className="pillar-title">{card.title}</h3>
                <p className="pillar-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionVision
