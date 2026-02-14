import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="container">
      <div className="section-header">
        <span className="line"></span>
        <h2>Initialize Connection</h2>
      </div>
      
      <div className="contact-wrapper">
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
        >
          {/* This hidden input is required for Netlify + React forms */}
          <input type="hidden" name="form-name" value="contact" />
          
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" placeholder="John Doe" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" placeholder="john@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Project Brief</label>
            <textarea name="message" id="message" rows="5" placeholder="Tell me about your software needs..." required></textarea>
          </div>

          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}