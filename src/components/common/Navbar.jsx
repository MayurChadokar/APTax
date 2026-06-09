"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  const handleMenuClick = () => {
    setIsMobileOpen(false)
  }

  const isActive = (path) => pathname === path

  return (
    <nav className="black-navbar">
      <div className="container nav-menu-container">
        {/* Navigation Links */}
        <ul className={`nav-menu-list ${isMobileOpen ? 'mobile-active' : ''}`}>
          <li>
            <Link
              href="/"
              className={`menu-button ${isActive('/') ? 'active-menu-item' : ''}`}
              onClick={handleMenuClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`menu-button ${isActive('/services') ? 'active-menu-item' : ''}`}
              onClick={handleMenuClick}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`menu-button ${isActive('/about') ? 'active-menu-item' : ''}`}
              onClick={handleMenuClick}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`menu-button ${isActive('/contact') ? 'active-menu-item' : ''}`}
              onClick={handleMenuClick}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger toggle */}
        <div className="nav-hamburger" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          <span className={isMobileOpen ? 'bar bar-1' : 'bar'}></span>
          <span className={isMobileOpen ? 'bar bar-2' : 'bar'}></span>
          <span className={isMobileOpen ? 'bar bar-3' : 'bar'}></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
