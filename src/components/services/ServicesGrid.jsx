import React from 'react'
import { servicesDetailed } from '../../data/servicesData'
import ServiceCard from './ServiceCard'

const ServicesGrid = () => {
  return (
    <div className="services-vertical-list">
      {servicesDetailed.map((srv) => (
        <ServiceCard
          key={srv.id}
          title={srv.title}
          desc={srv.desc}
          image={srv.image}
        />
      ))}
    </div>
  )
}

export default ServicesGrid
