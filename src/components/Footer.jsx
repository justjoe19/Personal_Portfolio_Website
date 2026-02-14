export default function Footer() {
  return (
    <footer>
      <div className="container footer-flex">
        <div className="footer-info">
          <div className="logo">MICHIANA<span>.DEV</span></div>
          <p>Modern software solutions with a local touch.</p>
        </div>
        <div className="footer-contact" id="contact">
          <p>Ready to start? <a href="mailto:hello@michiana.dev">hello@michiana.dev</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Michiana.dev | Engineered with precision.</p>
      </div>
    </footer>
  );
}