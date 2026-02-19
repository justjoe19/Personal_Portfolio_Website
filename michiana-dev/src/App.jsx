import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; 
import ServiceCard from './components/ServiceCard';
import ProjectCarousel from './components/ProjectCarousel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  // Service data focused on local business needs
  const services = [
    { 
      id: "01", 
      title: "High-Performance Web Design", 
      description: "I build mobile-first, high-performance websites tailored for Northern Indiana and Southwest Michigan businesses. By focusing on clean code and modern SEO practices, I ensure your business stands out in local search results and provides a seamless experience for every visitor."
    },
    { 
      id: "02", 
      title: "Site Modernization & Migration", 
      description: "I transform outdated web presences into modern, high-performance experiences. Leveraging my background in technical hardware and software engineering, I specialize in migrating legacy site data to modern frameworks, improving load times, and ensuring your older site works perfectly on today’s latest devices."
    },
    /*{ 
      id: "03", 
      title: "Advanced Website Integrations", 
      description: "I specialize in making your website work harder for you. Using secure backend connections, I can integrate your site with the tools you already use—like syncing your live inventory, automating customer contact flows, or building custom data displays that keep your site content fresh and accurate without manual updates."
    },*/
    { 
      id: "03", 
      title: "Technical Strategy & Support", 
      description: "Professional guidance to ensure your digital presence is scalable, secure, and future-proof. From optimizing your hosting environment to implementing secure data handling, I provide the technical expertise needed to keep your business running smoothly as you grow."
    }
  ];

  // Projects derived from your current portfolio and capstone work
  const projects = [
    {
      id: "p1",
      name: "TriStorm Restoration",
      type: "Client Web Development",
      tech: "HTML / CSS / Bootstrap",
      desc: "A professional service site developed to support a local business's digital presence.",
      image: "assets/tristorm.webp", // Placeholder
      link: "https://tristormrestoration.com" // Link to project
    },
    {
      id: "p2",
      name: "HSC-Portal",
      type: "WGU Capstone Project",
      tech: "Java / Spring Boot / React",
      desc: "A full-stack application managing complex system data with a secure backend.",
      image: "https://via.placeholder.com/800x450?text=HSC-Portal", // Placeholder
      link: "#" // Link to project
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
          <ProjectCarousel projects={projects} />
        </section>

        {/* Contact form integrated for Netlify processing */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;