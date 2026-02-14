import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky-header">
      <nav className="container">
        <div className="logo">MICHIANA<span>.DEV</span></div>
        
        {/* Hamburger Button - Only visible on mobile */}
        <button 
          className={`menu-toggle ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Links - Hidden on mobile unless isOpen is true */}
        <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
          <li><a href="#about" onClick={() => setIsOpen(false)}>/about</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>/services</a></li>
          <li><a href="#portfolio" onClick={() => setIsOpen(false)}>/projects</a></li>
          <li><a href="#contact" className="btn-cta" onClick={() => setIsOpen(false)}>Connect</a></li>
        </ul>
      </nav>
    </header>
  );
}