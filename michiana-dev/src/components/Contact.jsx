import React from 'react';

export default function Contact() {
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
              <label>LinkedIn</label>
              <a href="https://www.linkedin.com/in/joe-hollenbach" target="_blank" rel="noreferrer">
                linkedin.com/in/joe-hollenbach
              </a>
            </div>
            <div className="link-card">
              <label>GitHub</label>
              <a href="https://github.com/justjoe19" target="_blank" rel="noreferrer">
                github.com/justjoe19
              </a>
            </div>           
            <div className="link-card">
              <label>Location</label>
              <p>Northern Indiana / Southwest Michigan</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: The Form */}
        <div className="contact-form-wrapper">
          <form name="contact" method="POST" data-netlify="true">
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
        </div>
      </div>
    </section>
  );
}