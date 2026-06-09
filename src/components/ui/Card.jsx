import React from 'react'

const Card = ({ children, className = '', hoverEffect = true, bordered = true, ...props }) => {
  const cardStyle = `
    testimonial-home-card 
    ${hoverEffect ? 'hover-lift' : ''} 
    ${className}
  `

  return (
    <div 
      className={cardStyle} 
      style={{
        backgroundColor: 'var(--white)',
        border: bordered ? '1px solid var(--border-grey)' : 'none',
        borderRadius: '16px',
        padding: '30px',
        ...props.style
      }} 
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
