import React, { useState, useEffect } from 'react';

export default function ProjectCarousel({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Optional: Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  if (!projects || projects.length === 0) return null;

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="carousel-card">
              <div className="carousel-image">
                <img src={project.image} alt={`${project.name} - Web Development Project by Michiana.dev`} />
                <div className="carousel-overlay">
                  <a href={project.link} className="btn-primary" target="_blank" rel="noopener noreferrer">
                    View Website
                  </a>
                </div>
              </div>
              <div className="carousel-info">
                <span className="project-tech">{project.tech}</span>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous Slide">
        &#10094;
      </button>
      <button className="carousel-btn next" onClick={nextSlide} aria-label="Next Slide">
        &#10095;
      </button>

      <div className="carousel-dots">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
