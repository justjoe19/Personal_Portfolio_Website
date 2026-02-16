import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">MICHIANA<span>.DEV</span></div>
          <p>Modern software solutions with a local touch.</p>
        </div>
        
        <div className="footer-cta">
          <p>Ready to start?</p>
          <a href="mailto:hello@michiana.dev" className="footer-email">hello@michiana.dev</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Michiana.dev | Engineered with precision.</p>
        </div>
      </div>
    </footer>
  );
}