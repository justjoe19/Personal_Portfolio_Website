import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; 
import ServiceCard from './components/ServiceCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  // Service data focused on local business needs
  const services = [
    { 
      id: "01", 
      title: "Local Web Design", 
      description: "Mobile-first, high-performance websites tailored for Northern Indiana businesses to help you stand out in local search results." 
    },
    { 
      id: "02", 
      title: "Business Automation", 
      description: "Custom Java and Python tools to automate inventory, scheduling, and data management, eliminating manual errors in your daily workflow." 
    },
    { 
      id: "03", 
      title: "Technical Consulting", 
      description: "Professional advice on software architecture and system upgrades to ensure your business tech is scalable and secure." 
    }
  ];

  // Projects derived from your current portfolio and capstone work
  const projects = [
    {
      id: "p1",
      name: "TriStorm Restoration",
      type: "Client Web Development",
      tech: "React / CSS",
      desc: "A professional service site developed to support a local business's digital presence."
    },
    {
      id: "p2",
      name: "HSC-Portal",
      type: "WGU Capstone Project",
      tech: "Java / Spring Boot / React",
      desc: "A full-stack application managing complex system data with a secure backend."
    }
  ];

  return (
    <div className="app-wrapper">
      <Navbar />
      
      <main>
        {/* Hero introduces the Michiana.dev brand and engineer focus */}
        <Hero />

        {/* The About section establishes your credibility as an engineer with a hardware/inventory background */}
        <About />

        {/* Services Section: Dynamically rendered using the ServiceCard component */}
        <section id="services" className="container">
          <div className="section-header">
            <span className="line"></span>
            <h2>Services</h2>
          </div>
          <div className="grid">
            {services.map(service => (
              <ServiceCard 
                key={service.id} 
                id={service.id}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>

        {/* Projects Section: Highlighting your specific engineering builds */}
        <section id="portfolio" className="container">
          <div className="section-header">
            <span className="line"></span>
            <h2>Recent Builds</h2>
          </div>
          <div className="portfolio-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-content">
                  <span className="project-tech">{project.tech}</span>
                  <h3>{project.name}</h3>
                  <p>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact form integrated for Netlify processing */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;