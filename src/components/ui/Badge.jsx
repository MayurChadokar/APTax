import React from 'react'

const Badge = ({ children, variant = 'primary', className = '', style = {} }) => {
  const isPrimary = variant === 'primary'

  return (
    <span 
      className={`animate-fade-in ${className}`}
      style={{
        display: 'inline-block',
        padding: '6px 14px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: '700',
        backgroundColor: isPrimary ? 'var(--primary-red)' : 'var(--bg-light)',
        color: isPrimary ? 'var(--white)' : 'var(--charcoal)',
        border: isPrimary ? 'none' : '1px solid var(--border-grey)',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        ...style
      }}
    >
      {children}
    </span>
  )
}

export default Badge
