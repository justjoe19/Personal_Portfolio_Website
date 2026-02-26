import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">MICHIANA<span>.DEV</span></div>
          <p>Precision-engineered web solutions for local businesses.</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Joe Hollenbach | Software Engineer</p>
        </div>
      </div>
    </footer>
  );
}