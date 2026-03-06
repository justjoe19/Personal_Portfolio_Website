import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <section id="contact" className="py-16 max-w-[1200px] mx-auto px-6">
      <div className="flex items-center gap-3 mb-16">
        <span className="h-[1px] w-[35px] bg-brand-blue"></span>
        <h2 className="text-2xl font-bold text-white">Connect</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-[60px] items-stretch">
        {/* LEFT SIDE: Socials & Info */}
        <div className="flex-1">
          <h3 className="text-[2rem] text-white mb-[15px] font-bold tracking-tight">Ready to modernize your business?</h3>
          <p className="text-brand-dim mb-[35px] max-w-[400px]">
            I am actively seeking new projects in the Michiana area. 
            For a quote or consultation, please use the form or call <a href="tel:5742138502" className="text-white font-bold hover:text-brand-blue"><strong>(574) 213-8502</strong></a>.
          </p>

          <div className="flex flex-col gap-[25px]">
            <div className="glass-card p-[27px] rounded-lg h-full transition-all duration-300 hover:border-brand-blue/30 hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
              <label className="block font-main text-[0.75rem] text-brand-blue mb-2 uppercase tracking-[0.2em] font-bold">Service area</label>
              <p>Providing professional web development for businesses in <strong>South Bend, Elkhart, Mishawaka, Goshen, Niles, Benton Harbor, St. Joseph</strong>, and across <strong>Northern Indiana and Southwest Michigan</strong>.</p>
            </div>

            <div className="glass-card p-[27px] rounded-lg h-full transition-all duration-300 hover:border-brand-blue/30 hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
              <label className="block font-main text-[0.75rem] text-brand-blue mb-2 uppercase tracking-[0.2em] font-bold">Specialties</label>
              <p>Custom <strong>React</strong> applications, site migrations, and <strong>Local SEO</strong> strategies engineered for performance and growth.</p>
            </div>

            <div className="glass-card p-[27px] rounded-lg h-full transition-all duration-300 hover:border-brand-blue/30 hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
              <label className="block font-main text-[0.75rem] text-brand-blue mb-2 uppercase tracking-[0.2em] font-bold">Professional links</label>
              <div className="flex items-center gap-6 mt-2">
                <a href="https://www.linkedin.com/in/joe-hollenbach" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-main text-[0.9rem] font-semibold text-white hover:text-brand-blue transition-colors group/link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:scale-110 transition-transform">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
                <a href="https://github.com/justjoe19" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-main text-[0.9rem] font-semibold text-white hover:text-brand-blue transition-colors group/link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:scale-110 transition-transform">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: The Form */}
        <div className="flex-[1.2] glass-card p-[30px] rounded-xl flex flex-col w-full lg:w-auto">
          {submitted ? (
            <div className="text-center py-12 px-4 flex flex-col items-center justify-center h-full">
              <div className="w-[60px] h-[60px] bg-brand-green text-brand-bg rounded-full flex items-center justify-center text-[2rem] font-bold mb-6 shadow-[0_0_20px_rgba(126,231,135,0.3)]">✓</div>
              <h3 className="text-white mb-4 text-[1.75rem] font-bold tracking-tight">Message sent!</h3>
              <p className="text-brand-dim mb-[30px] max-w-[300px]">Thank you for reaching out. I'll review your inquiry and get back to you within 24-48 hours.</p>
              <div className="flex justify-center w-full">
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="group relative w-full max-w-[260px] sm:w-[260px] flex items-center justify-center bg-brand-blue text-brand-bg py-4 rounded-lg font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(121,192,255,0.3)] hover:shadow-[0_0_30px_rgba(121,192,255,0.5)] overflow-hidden"
                >
                  <span className="relative z-10">Send another message</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0"></div>
                </button>
              </div>
            </div>
          ) : (
            <form name="contact" method="POST" onSubmit={handleSubmit} className="flex flex-col h-full">
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="mb-[0.8rem]">
                <label htmlFor="name" className="block font-main text-[0.75rem] text-brand-blue mb-[0.4rem] uppercase tracking-[0.2em] font-bold">Name</label>
                <input type="text" name="name" id="name" placeholder="Your Name" required className="w-full p-4 bg-brand-bg border border-white/20 text-white rounded-lg text-[0.95rem] focus:outline-none focus:border-brand-blue focus:shadow-[0_0_15px_rgba(121,192,255,0.2)]" />
              </div>

              <div className="mb-[0.8rem]">
                <label htmlFor="email" className="block font-main text-[0.75rem] text-brand-blue mb-[0.4rem] uppercase tracking-[0.2em] font-bold">Email</label>
                <input type="email" name="email" id="email" placeholder="Your Email" required className="w-full p-4 bg-brand-bg border border-white/20 text-white rounded-lg text-[0.95rem] focus:outline-none focus:border-brand-blue focus:shadow-[0_0_15px_rgba(121,192,255,0.2)]" />
              </div>

              <div className="mb-[0.8rem]">
                <label htmlFor="phone" className="block font-main text-[0.75rem] text-brand-blue mb-[0.4rem] uppercase tracking-[0.2em] font-bold">Phone number</label>
                <input type="tel" name="phone" id="phone" placeholder="Your Phone Number" className="w-full p-4 bg-brand-bg border border-white/20 text-white rounded-lg text-[0.95rem] focus:outline-none focus:border-brand-blue focus:shadow-[0_0_15px_rgba(121,192,255,0.2)]" />
              </div>

              <div className="flex flex-col flex-grow mb-8">
                <label htmlFor="message" className="block font-main text-[0.75rem] text-brand-blue mb-[0.4rem] uppercase tracking-[0.2em] font-bold">Message</label>
                <textarea name="message" id="message" rows="4" placeholder="Project Details" required className="w-full p-4 bg-brand-bg border border-brand-border text-white rounded-lg text-[0.95rem] flex-grow min-h-[120px] focus:outline-none focus:border-brand-blue focus:shadow-[0_0_15px_rgba(121,192,255,0.2)]"></textarea>
              </div>

              <div className="flex justify-center w-full">
                <button 
                  type="submit" 
                  className="group relative w-full max-w-[260px] sm:w-[260px] flex items-center justify-center bg-brand-blue text-brand-bg py-4 rounded-lg font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(121,192,255,0.3)] hover:shadow-[0_0_30px_rgba(121,192,255,0.5)] overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0"></div>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
