import React from 'react'

const Loader = ({ size = 'medium' }) => {
  const sizeMap = {
    small: '30px',
    medium: '50px',
    large: '80px'
  }

  const spinnerSize = sizeMap[size] || sizeMap.medium

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 0',
      width: '100%'
    }}>
      <div 
        className="pulse-red-glow" 
        style={{
          width: spinnerSize,
          height: spinnerSize,
          borderRadius: '50%',
          border: '3px solid var(--primary-red)',
          borderTopColor: 'transparent',
          animation: 'spin 1s linear infinite, pulseRed 2s infinite'
        }}
      />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default Loader
