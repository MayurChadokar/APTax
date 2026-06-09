import React from 'react'

const WhoWeAre = () => {
  return (
    <section className="who-we-are-home-sec">
      <div className="container who-we-are-home-container">
        {/* Left Side: Photo with overlapping badge card */}
        <div className="who-we-are-home-left">
          <div className="experience-card-box hover-lift">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=400&fit=crop"
              alt="Smiling Senior Executive Professional"
              className="executive-photo"
            />
            {/* Experience badge */}
            <div className="badge-experience-years">
              <span className="badge-years-number">08</span>
              <span className="badge-years-text">years of experiences</span>
            </div>
            {/* Lower banner inside card */}
            <div className="executive-banner-card">
              <h4 className="exec-banner-title">Top Business Planning Company</h4>
              <p className="exec-banner-desc">We Serve Startup, SMEs and Millions Consulting Companies Globally.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Informative Text */}
        <div className="who-we-are-home-right animate-slide-up">
          <span className="section-label-top">Who We Are</span>
          <h2 className="who-we-are-main-title">We are dedicated to give you support.</h2>
          <p className="who-we-are-p">
            We deliver a plethora of services like strategy business planning and consultancy, investment banking services, pitch packs, market research and analysis, financial modelling, and bookkeeping and writing. Start-up and SME funding and much more.
          </p>
          <p className="who-we-are-p">
            So, we are the leading business planning and consultancy providers, serving services across the globe with our name senior in India. Be it businesses, industries and sectors worldwide.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
