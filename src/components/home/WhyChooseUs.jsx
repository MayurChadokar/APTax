import React from 'react'
const expertMaleImg = '/assets/generic-team.jpg'
const expertFemaleImg = '/assets/generic-office.jpg'

const WhyChooseUs = () => {
  return (
    <section className="why-choose-sec">
      <div className="container why-choose-container">
        {/* Left Side: Overlapping Images and Avatars Badge */}
        <div className="why-choose-left">
          <div className="team-graphics-wrapper animate-float">
            <div className="badge-experts">
              <span className="badge-text-bold">10k+</span>
              <span className="badge-text-light">Experts</span>
              <div className="mini-avatars">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop" alt="avatar 1" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop" alt="avatar 2" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop" alt="avatar 3" />
              </div>
            </div>

            {/* Main Overlapping Team Photos */}
            <div className="photo-main-box">
              <img
                src={expertMaleImg}
                alt="Expert Professional Team"
                className="img-expert-male"
              />
            </div>
            <div className="photo-secondary-box">
              <img
                src={expertFemaleImg}
                alt="Expert Professional Office"
                className="img-expert-female"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Timeline Content */}
        <div className="why-choose-right">
          <h2 className="why-choose-main-title">Why Choose Us</h2>

          <div className="why-choose-timeline">
            {/* Step 1 */}
            <div className="timeline-item">
              <div className="timeline-number-wrapper">
                <div className="timeline-circle">1</div>
              </div>
              <div className="timeline-content-custom">
                <h3 className="timeline-title">Dedicated Teams, Zero Hassle</h3>
                <p className="timeline-desc">
                  Scale your accounting operations or IT with your own team, without compromising quality.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="timeline-item">
              <div className="timeline-number-wrapper">
                <div className="timeline-circle">2</div>
              </div>
              <div className="timeline-content-custom">
                <h3 className="timeline-title">Guaranteed Accuracy & Performance</h3>
                <p className="timeline-desc">
                  Strict quality controls, redundant review processes, and high-performance guarantees.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="timeline-item">
              <div className="timeline-number-wrapper">
                <div className="timeline-circle">3</div>
              </div>
              <div className="timeline-content-custom">
                <h3 className="timeline-title">Dedicated Teams, Zero Hassle</h3>
                <p className="timeline-desc">
                  We recruit, onboard, train, and manage your offshore accounting teams end-to-end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

