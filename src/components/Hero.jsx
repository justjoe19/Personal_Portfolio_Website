export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>

      <div className="container hero-container-centered">
        {/* Business Messaging - Centered over Background */}
        <div className="hero-content-centered">
          <div className="status-badge">
            <span className="status-dot"></span> Available for Michiana Projects
          </div>
          <h1>Precision-Engineered <br /><span>Websites</span></h1>
          <p>
            Modern web solutions for Michiana businesses that need more than just a template.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Get a Free Quote</a>   
            <a href="#services" className="btn-secondary">Explore Services</a>
          </div>
        </div>
      </div>
    </section>
  );
}