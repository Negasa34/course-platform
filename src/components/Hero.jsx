import React from 'react'
import './Hero.css'
import logoImg from '../assets/web.logo.png' // Logo import gochuu

function Hero({ searchQuery, setSearchQuery, setShowEnrollForm, setShowLoginForm }) {
  return (
    <div className="hero-container">
      {/* NAVBAR */}
      <nav className="hero-navbar">
        <div className="nav-logo-wrapper">
          <img src={logoImg} alt="OUR FUTURE VISION Logo" className="nav-logo-img" />
          <span className="nav-logo-text">OUR FUTURE VISION</span>
        </div>
        
        <ul className="nav-links">
          <li><a href="#courses">Courses</a></li>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#instructors">Instructors</a></li>
          <li><a href="#success-stories">Success Stories</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        <div className="nav-buttons">
          <button className="btn-signin" onClick={() => setShowLoginForm(true)}>Sign In</button>
          <button className="btn-getstarted" onClick={() => setShowEnrollForm(true)}>Get Started</button>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="hero-content">
        <h1>Baga Gammaddan OUR FUTURE VISION</h1>
        <p>Dandeettii keessan guddisaa, fuuldura keessan hojii qabataamaan ijaaraa.</p>
        
        <div className="hero-search">
          <input 
            type="text" 
            placeholder="Barnoota barbaaddan ala fidaa..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn gradient">Barbaadi</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
