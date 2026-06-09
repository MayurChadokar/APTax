import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert(`Successfully subscribed with email: ${email}`)
    setEmail('')
  }

  return (
    <section className="why-working-sec animate-fade-in" style={{ backgroundColor: 'var(--light-red-bg)', borderTop: 'none', borderBottom: 'none' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 className="why-working-title" style={{ color: 'var(--primary-red)' }}>Stay Informed</h2>
        <p className="why-working-text" style={{ marginBottom: '25px' }}>
          Subscribe to our monthly newsletter to receive accounting updates, industry insights, and compliance tips directly to your inbox.
        </p>
        <form onSubmit={handleSubscribe} className="newsletter-form-custom" style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div className="newsletter-input-wrapper">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                borderRadius: '24px',
                padding: '12px 50px 12px 20px',
                border: '1px solid var(--red-border)',
                backgroundColor: 'var(--white)'
              }}
            />
            <button type="submit" className="newsletter-submit-btn" style={{ right: '12px' }}>
              <i className="fa-solid fa-paper-plane" style={{ color: 'var(--primary-red)' }}></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
