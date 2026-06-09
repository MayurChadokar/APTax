import Link from 'next/link'
import Button from '../common/Button'

const CTASection = () => {
  return (
    <section
      className="why-working-sec animate-slide-up"
      style={{
        background: 'linear-gradient(135deg, var(--dark-red) 0%, var(--primary-red) 100%)',
        color: 'var(--white)',
        padding: '80px 24px',
        textAlign: 'center',
        border: 'none'
      }}
    >
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 style={{ color: 'var(--white)', fontSize: '36px', marginBottom: '20px' }}>
          Ready to Grow Your Business Operations?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px', marginBottom: '35px', lineHeight: '1.8' }}>
          Partner with our dedicated team of CPA-level accountants and IT professionals to optimize costs and focus resources where they matter most. We respond to all inquiries within one business day.
        </p>
        <Link href="/contact">
          <Button variant="secondary" style={{ backgroundColor: 'var(--white)', color: 'var(--primary-red)', padding: '14px 40px', fontSize: '15px' }}>
            GET IN TOUCH NOW
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default CTASection
