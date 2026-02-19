export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-flex">
        
        {/* Left Side: Business Messaging */}
        <div className="hero-content">
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

        {/* Right Side: The Large Terminal Visual */}
        <div className="hero-visual">
          <div className="terminal">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">joe — zsh — 80x24</span>
            </div>
            <div className="terminal-body">
              <p>
                <span className="p-blue">joe@michiana.dev:</span>
                <span className="p-gray">~#</span> check --site performance
              </p>
              <p className="p-yellow">
                &gt; Speed Score: 99/100 <br />
                &gt; SEO Health: Optimized <br />
                &gt; Mobile Ready: Yes
              </p>
              <p>
                <span className="p-blue">joe@michiana.dev:</span>
                <span className="p-gray">~#</span> list capabilities
              </p>
              <p className="p-green">
                ["Modern Web Design", "Legacy Migrations", "Data Integration"]
              </p>
              <p>
                <span className="p-blue">joe@michiana.dev:</span>
                <span className="p-gray">~#</span> <span className="cursor"></span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}