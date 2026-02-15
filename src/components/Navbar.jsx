import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Intersection Observer to track which section is in view
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const options = {
      root: null,
      // Margin adjustment so the active state triggers when 
      // the section is near the top of the viewport
      rootMargin: '-15% 0px -75% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Helper function to handle link clicks (close mobile menu)
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky-header">
      <nav className="container">
        <div className="logo">
          MICHIANA<span>.DEV</span>
        </div>

        {/* Hamburger Menu Toggle */}
        <button 
          className={`menu-toggle ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
          <li>
            <a 
              href="#hero" 
              className={activeSection === 'hero' ? 'active' : ''} 
              onClick={handleNavLinkClick}
            >
              /home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''} 
              onClick={handleNavLinkClick}
            >
              /about
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className={activeSection === 'services' ? 'active' : ''} 
              onClick={handleNavLinkClick}
            >
              /services
            </a>
          </li>
          <li>
            <a 
              href="#portfolio" 
              className={activeSection === 'portfolio' ? 'active' : ''} 
              onClick={handleNavLinkClick}
            >
              /projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`btn-cta ${activeSection === 'contact' ? 'active' : ''}`} 
              onClick={handleNavLinkClick}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}