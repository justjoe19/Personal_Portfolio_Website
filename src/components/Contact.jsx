import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <section id="contact" className="container">
      <div className="section-header">
        <span className="line"></span>
        <h2>Connect</h2>
      </div>

      <div className="contact-grid">
        {/* LEFT SIDE: Socials & Info */}
        <div className="contact-info">
          <h3>Ready to Modernize Your Business?</h3>
          <p className="contact-desc">
            I am actively seeking new projects in the Michiana area. 
            Reach out via the form or through my professional links.
          </p>

          <div className="link-boxes">
            <div className="link-card">
              <label>Service Area</label>
              <p>Providing professional web development for businesses in <strong>South Bend, Elkhart, Mishawaka, Goshen, Niles, Benton Harbor, St. Joseph</strong>, and across <strong>Northern Indiana and Southwest Michigan</strong>.</p>
            </div>

            <div className="link-card">
              <label>Specialties</label>
              <p>Custom <strong>React</strong> applications, site migrations, and <strong>Local SEO</strong> strategies engineered for performance and growth.</p>
            </div>

            <div className="link-card">
              <label>Professional Links</label>
              <div className="social-links-compact">
                <a href="https://www.linkedin.com/in/joe-hollenbach" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span className="separator">/</span>
                <a href="https://github.com/justjoe19" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: The Form */}
        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I'll review your inquiry and get back to you within 24-48 hours.</p>
              <button onClick={() => setSubmitted(false)} className="btn-primary">Send another message</button>
            </div>
          ) : (
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Your Name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Your Email" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" name="phone" id="phone" placeholder="Your Phone Number" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4" placeholder="Tell me about your current website or the technical challenges you're facing..." required></textarea>
              </div>

              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}