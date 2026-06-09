"use client"
import React, { useState, useEffect } from 'react'

const Carousel = ({ children, autoPlay = true, interval = 5000, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const count = React.Children.count(children)

  useEffect(() => {
    if (!autoPlay || count <= 1) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count)
    }, interval)
    return () => clearInterval(timer)
  }, [autoPlay, count, interval])

  if (count === 0) return null

  const handleDotClick = (index) => {
    setActiveIndex(index)
  }

  const activeChild = React.Children.toArray(children)[activeIndex]

  return (
    <div className={`carousel-wrapper ${className}`} style={{ width: '100%' }}>
      {/* Active Slide Display */}
      <div className="carousel-inner-content animate-fade-in" style={{ width: '100%' }}>
        {activeChild}
      </div>

      {/* Pagination Dots */}
      {count > 1 && (
        <div className="testimonials-pagination-dots" style={{ cursor: 'pointer' }}>
          {React.Children.toArray(children).map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? 'active-dot' : ''}`}
              onClick={() => handleDotClick(index)}
              style={{ transition: 'all 0.3s ease' }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
