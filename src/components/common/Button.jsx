import React from 'react'

const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '', ...props }) => {
  const baseStyle = 'speak-solutions-btn'
  let customStyle = ''
  
  if (variant === 'secondary') {
    customStyle = 'form-submit-btn-red'
  } else if (variant === 'dark') {
    customStyle = 'form-submit-btn-red'
  }
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${baseStyle} ${customStyle} ${className} hover-lift`} 
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
