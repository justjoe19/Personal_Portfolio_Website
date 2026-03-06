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
      description: "I build mobile-first, high-performance websites tailored for Northern Indiana and Southwest Michigan businesses. By focusing on clean code and modern SEO practices, I ensure your business stands out in local search results and provides a seamless experience for every visitor.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      )
    },
    { 
      id: "02", 
      title: "Site Modernization & Migration", 
      description: "I transform outdated web presences into modern, high-performance experiences. Leveraging my background in technical hardware and software engineering, I specialize in migrating legacy site data to modern frameworks, improving load times, and ensuring your older site works perfectly on today’s latest devices.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    { 
      id: "03", 
      title: "Technical Strategy & Support", 
      description: "Professional guidance to ensure your digital presence is scalable, secure, and future-proof. From optimizing your hosting environment to implementing secure data handling, I provide the technical expertise needed to keep your business running smoothly as you grow.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    }
  ];

  // Projects derived from your current portfolio and capstone work
  const projects = [
    {
      id: "p1",
      name: "TriStorm Restoration",
      tech: "Semantic HTML / CSS / Javascript / Responsive Architecture",
      desc: "A specialized service platform optimized for local restoration traffic. Features a streamlined conversion path for emergency inquiries and high-resolution asset management to showcase professional project outcomes.",
      image: "assets/tristorm.webp", 
      link: "https://tristormrestoration.com" 
    },
    {
      id: "p2",
      name: "Ironpipe Plumbing",
      tech: "High-Performance HTML / CSS / Javascript",
      desc: "A conversion-optimized service platform for a local plumbing enterprise. Built with a mobile-first UI designed for rapid emergency service inquiries and a custom lead-capture flow to streamline customer intake and dispatch.",
      image: "assets/ironpipe.webp", 
      link: "https://justjoe19.github.io/IronPipe/" 
    },
    {
      id: "p3",
      name: "Haven",
      tech: "Modern Javascript / Optimized Asset Delivery",
      desc: "A high-performance portfolio site optimized for high-resolution architectural assets. Built with a focus on core web vitals and seamless image delivery to ensure a luxury experience on any device.",
      image: "assets/haven.webp",
      link: "https://justjoe19.github.io/haven/" 
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text relative">
      {/* Global Background Depth */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none z-0"></div>
      
      <a href="#main-content" className="absolute -top-[100px] left-0 bg-brand-blue text-brand-bg p-4 z-[10000] font-bold transition-[top] duration-300 focus:top-0">Skip to main content</a>
      <Navbar />
      
      <main id="main-content" className="pt-5 relative z-10">
        {/* Hero introduces the Michiana.dev brand and engineer focus */}
        <Hero />

        {/* Projects Section: Highlighting your specific engineering builds */}
        <section id="portfolio" className="py-16 max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-16">
            <span className="h-[1px] w-[35px] bg-brand-blue"></span>
            <h2 className="text-2xl font-bold text-white">Recent Projects</h2>
          </div>
          <ProjectCarousel projects={projects} />
        </section>

        {/* Services Section: Dynamically rendered using the ServiceCard component */}
        <section id="services" className="py-16 max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-16">
            <span className="h-[1px] w-[35px] bg-brand-blue"></span>
            <h2 className="text-2xl font-bold text-white">Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map(service => (
              <ServiceCard 
                key={service.id} 
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <a 
              href="#contact" 
              className="group relative w-full max-w-[260px] sm:w-[260px] flex items-center justify-center bg-brand-blue text-brand-bg py-4 rounded-lg font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(121,192,255,0.2)] hover:shadow-[0_0_25px_rgba(121,192,255,0.4)] overflow-hidden"
            >
              <span className="relative z-10">Schedule a Call</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0"></div>
            </a>
          </div>
        </section>

        {/* The About section establishes your credibility as an engineer with a hardware/inventory background */}
        <About />

        {/* Contact form integrated for Netlify processing */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;