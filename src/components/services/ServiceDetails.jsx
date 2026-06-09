"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { servicesTabs, servicesDetailed } from '../../data/servicesData'

const ServiceDetails = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isTabsSticky, setIsTabsSticky] = useState(false)
  const [navbarHeight, setNavbarHeight] = useState(0)
  const sectionRefs = useRef([])
  const tabsBarRef = useRef(null)
  const tabsBarSentinelRef = useRef(null)
  const containerRef = useRef(null)
  const isClickScrolling = useRef(false)

  // Detect the main navbar height for proper sticky offset
  useEffect(() => {
    const navbar = document.querySelector('.black-navbar')
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight)
    }
  }, [])

  // Scroll to section when tab is clicked
  const handleTabClick = useCallback((index) => {
    setActiveTab(index)
    isClickScrolling.current = true

    const section = sectionRefs.current[index]
    if (section) {
      const tabsBarHeight = tabsBarRef.current?.offsetHeight || 60
      const totalOffset = tabsBarHeight + navbarHeight + 20
      const y = section.getBoundingClientRect().top + window.scrollY - totalOffset
      window.scrollTo({ top: y, behavior: 'smooth' })

      // Re-enable scroll-based detection after smooth scroll completes
      setTimeout(() => {
        isClickScrolling.current = false
      }, 800)
    }

    // Auto-scroll the active tab into view (for mobile horizontal scroll)
    const activeBtn = tabsBarRef.current?.querySelector(`.tab-item-btn:nth-child(${index + 1})`)
    if (activeBtn && tabsBarRef.current) {
      activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [navbarHeight])

  // IntersectionObserver for tabs sticky detection
  useEffect(() => {
    const sentinel = tabsBarSentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTabsSticky(!entry.isIntersecting)
      },
      { threshold: 0, rootMargin: `-${navbarHeight}px 0px 0px 0px` }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [navbarHeight])

  // IntersectionObserver for active tab based on scroll position
  useEffect(() => {
    const observers = []
    const tabsBarHeight = tabsBarRef.current?.offsetHeight || 60
    const totalOffset = tabsBarHeight + navbarHeight

    sectionRefs.current.forEach((section, index) => {
      if (!section) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isClickScrolling.current) {
            setActiveTab(index)
          }
        },
        {
          threshold: 0.3,
          rootMargin: `-${totalOffset + 20}px 0px -50% 0px`
        }
      )
      observer.observe(section)
      observers.push(observer)
    })

    return () => observers.forEach(obs => obs.disconnect())
  }, [navbarHeight])

  return (
    <div ref={containerRef}>
      {/* Sentinel element to detect when tabs should become sticky */}
      <div ref={tabsBarSentinelRef} style={{ height: '1px' }} />

      {/* Tabs Menu Strip - Sticky on scroll, positioned below main navbar */}
      <div
        ref={tabsBarRef}
        className={`services-tabs-bar ${isTabsSticky ? 'tabs-sticky' : ''}`}
        style={isTabsSticky ? { top: `${navbarHeight}px` } : {}}
      >
        <div className="container tabs-flex">
          {servicesTabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-item-btn ${index === activeTab ? 'active-tab-item' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Placeholder to prevent content jump when tabs become fixed */}
      {isTabsSticky && (
        <div style={{ height: tabsBarRef.current?.offsetHeight || 55 }} />
      )}

      {/* Service Sections - each observed for scroll-based tab activation */}
      <div className="services-sticky-stack">
        {servicesDetailed.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="service-sticky-section"
            style={{
              '--stack-index': index,
              zIndex: index + 1
            }}
          >
            <div className="container">
              <div
                className={`service-block-frame service-block-stacked ${index === activeTab ? 'service-block-active' : ''}`}
              >
                <div className="service-block-text-col">
                  {/* <span className="section-label-top">{servicesTabs[index]}</span> */}
                  <h2 className="service-block-title">{service.title}</h2>
                  <p className="service-block-desc">{service.desc}</p>
                  {service.tags && (
                    <div className="service-tags-row">
                      {service.tags.map((tag, i) => (
                        <span key={i} className="service-tag-chip">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="service-block-img-col">
                  <div className="mockup-frame hover-glow">
                    <img src={service.image} alt={service.title} className="mockup-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceDetails
