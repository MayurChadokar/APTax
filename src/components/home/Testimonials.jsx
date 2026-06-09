import React from 'react'
import { testimonials } from '../../data/testimonialsData'
import Carousel from '../ui/Carousel'
import Card from '../ui/Card'

const Testimonials = () => {
  return (
    <section className="testimonials-home-sec">
      <div className="container animate-fade-in">
        <h2 className="testimonials-home-title">Reputation is Everything.</h2>
        
        {/* Testimonials sliding carousel */}
        <Carousel autoPlay={true} interval={6000}>
          {/* Testimonial slides grouping of three */}
          <div className="testimonials-home-grid">
            {testimonials.map((rev) => (
              <Card key={rev.id} className="testimonial-home-card animate-slide-up">
                <div className="testimonial-card-header">
                  <img src={rev.image} alt={rev.author} className="testimonial-author-avatar" />
                  <div className="testimonial-author-info">
                    <h4 className="testimonial-author-name">{rev.author}</h4>
                    <p className="testimonial-author-title">{rev.title}</p>
                  </div>
                </div>
                
                {/* Gold Stars */}
                <div className="testimonial-stars-rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                
                <p className="testimonial-card-text">
                  {rev.text}
                </p>
              </Card>
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials
