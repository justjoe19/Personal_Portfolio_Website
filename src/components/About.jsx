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
            Hi, I’m <strong>Joe Hollenbach</strong>, a software engineer with an Associate of Applied Science degree in Software Development and a Bachelor of Science degree in Software Engineering. I am located in the Michiana area and really enjoy turning ideas into strong, user-friendly applications. I’m excited to work on new projects with you!
          </p>
          <br />
          <p>
            I like to blend technical skills with careful design, so every project is not only working perfectly but also giving users a great experience.
          </p>
        </div>
      </div>
    </section>
  );
}