import React from 'react'
import Link from 'next/link'
import Button from '../components/common/Button'

export default function NotFound() {
    return (
        <div style={{
            padding: '100px 24px',
            textAlign: 'center',
            backgroundColor: 'var(--bg-light)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh'
        }}>
            <div className="pillar-icon-circle pulse-red-glow" style={{ width: '80px', height: '80px', fontSize: '32px', marginBottom: '24px' }}>
                <i className="fa-solid fa-circle-exclamation"></i>
            </div>
            <h1 style={{ fontSize: '64px', fontWeight: '800', color: 'var(--black)', margin: '0 0 10px' }}>404</h1>
            <h2 style={{ fontSize: '24px', color: 'var(--text-grey)', margin: '0 0 20px' }}>Page Not Found</h2>
            <p style={{ maxWidth: '400px', fontSize: '15px', color: 'var(--text-grey)', lineHeight: '1.6', marginBottom: '30px' }}>
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link href="/">
                <Button variant="secondary">RETURN TO HOME</Button>
            </Link>
        </div>
    )
}
