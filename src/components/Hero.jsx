export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-flex">
        
        {/* Left Side: Business Messaging */}
        <div className="hero-content">
          <div className="status-badge">
            <span className="status-dot"></span> Available for Michiana Projects
          </div>
          <h1>Custom <br /><span>Software Solutions</span></h1>
          <p>
            I build modern websites and custom business tools that help local companies 
            streamline operations and grow their digital presence.
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
                <span className="p-gray">~#</span> fetch engineer_profile
              </p>
              <p className="p-yellow">
                &gt; B.S. Software Engineering <br />
                &gt; Certified Hardware Specialist <br />
                &gt; Full-Stack Specialist
              </p>
              <p>
                <span className="p-blue">joe@michiana.dev:</span>
                <span className="p-gray">~#</span> list tech_stack --verified
              </p>
              <p className="p-green">
                ["Java", "Spring Boot", "Python", "Django", "React", "SQL"]
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