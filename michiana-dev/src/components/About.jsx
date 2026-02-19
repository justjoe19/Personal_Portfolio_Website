import React from 'react';

export default function About() {
  return (
    <section id="about" className="container">
      <div className="section-header">
        <span className="line"></span>
        <h2>The Engineer Behind Michiana.dev</h2>
      </div>
      
      <div className="about-flex">
        {/* Profile Photo Section */}
        <div className="about-image">
          <div className="photo-frame">
             <img src="/assets/photo.webp" alt="Joe Hollenbach" />
          </div>
        </div>

        {/* Biography Section */}
        <div className="about-text">
          <p>
            "Hi, I’m Joe Hollenbach. With a Bachelor of Science in Software Engineering and a background in high-level technical support, I specialize in building high-performance web solutions for businesses in the Michiana area.
          </p>
          <br />
          <p>
            I bridge the gap between complex engineering and clean, user-friendly design. My goal is to ensure every project—whether a new build or a legacy migration—is not only technically superior but also a powerful tool for your business's growth."
          </p>
        </div>
      </div>
    </section>
  );
}