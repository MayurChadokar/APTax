import { HERO_CONTENT } from '../../utils/constants'

const teamImg = '/assets/generic-team.jpg'

const HeroSection = () => {
  return (
    <section className="home-hero animate-fade-in">
      <div className="home-hero-image-wrapper">
        <img
          src={teamImg}
          alt="ApTaxLedger Solution Professional Team Collaboration"
          className="home-hero-img"
        />
        <div className="home-hero-overlay"></div>

        <div className="home-hero-content">
          <div className="home-hero-content-inner">
            <h2 className="home-hero-title">
              <span className="title-line title-gray">{HERO_CONTENT.titleLine1}</span>
              <span className="title-line title-red">{HERO_CONTENT.titleLine2}</span>
              <span className="title-line title-red-line"></span>
            </h2>
            <p className="home-hero-desc">{HERO_CONTENT.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

