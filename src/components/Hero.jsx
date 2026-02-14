export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-flex">
        <div className="hero-content">
          <div className="status-badge">
            <span className="status-dot"></span> Available for Local Projects
          </div>
          <h1>Custom <br /><span>Software Solutions</span></h1>
          <p>I build modern websites and business software tools that help local companies streamline operations and grow their digital presence.</p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Get a Free Quote</a>   
            <a href="#services" className="btn-secondary">Explore Services</a>
          </div>
        </div>

        {/* The Terminal Visual */}
        <div className="hero-visual">
          <div className="terminal">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">bash — 80x24</span>
            </div>
            <div className="terminal-body">
              <p><span className="p-blue">joe@michiana.dev:</span><span className="p-gray">~#</span> fetch skills.json</p>
              <p className="p-yellow">[ "Java", "Python", "Django", "React" ]</p>
              <p><span class="p-blue">joe@michiana.dev:</span><span class="p-gray">~#</span> compile business_value</p>
              <p><span className="p-green">✓</span> Website performance optimized</p>
              <p><span className="p-green">✓</span> Backend systems integrated</p>
              <p><span className="p-blue">joe@michiana.dev:</span><span className="p-gray">~#</span> <span className="cursor"></span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}