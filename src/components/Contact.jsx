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
    <section id="contact" className="max-w-[1200px] mx-auto px-6">
      <div className="flex items-center gap-3 my-16">
        <span className="h-[1px] w-[35px] bg-brand-blue"></span>
        <h2 className="text-2xl font-bold text-white">Connect</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-[60px] mt-[30px] items-stretch">
        {/* LEFT SIDE: Socials & Info */}
        <div className="flex-1">
          <h3 className="text-[2rem] text-white mb-[15px] font-bold tracking-tight">Ready to modernize your business?</h3>
          <p className="text-brand-dim mb-[35px] max-w-[400px]">
            I am actively seeking new projects in the Michiana area. 
            Reach out via the form or through my professional links.
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
              <div className="flex items-center gap-3 mt-1">
                <a href="https://www.linkedin.com/in/joe-hollenbach" target="_blank" rel="noopener noreferrer" className="font-main text-[0.9rem] font-semibold text-white hover:text-brand-blue">LinkedIn</a>
                <span className="text-white/10 font-main text-[0.8rem]">/</span>
                <a href="https://github.com/justjoe19" target="_blank" rel="noopener noreferrer" className="font-main text-[0.9rem] font-semibold text-white hover:text-brand-blue">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: The Form */}
        <div className="flex-[1.2] glass-card p-[30px] rounded-xl flex flex-col">
          {submitted ? (
            <div className="text-center py-12 px-4 flex flex-col items-center justify-center h-full">
              <div className="w-[60px] h-[60px] bg-brand-green text-brand-bg rounded-full flex items-center justify-center text-[2rem] font-bold mb-6 shadow-[0_0_20px_rgba(126,231,135,0.3)]">✓</div>
              <h3 className="text-white mb-4 text-[1.75rem] font-bold tracking-tight">Message sent!</h3>
              <p className="text-brand-dim mb-8 max-w-[300px]">Thank you for reaching out. I'll review your inquiry and get back to you within 24-48 hours.</p>
              <button onClick={() => setSubmitted(false)} className="bg-brand-blue text-[#000] py-4 px-8 rounded font-bold text-base transition-all duration-300 hover:bg-white hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(121,192,255,0.2)] w-full">Send another message</button>
            </div>
          ) : (
            <form name="contact" method="POST" onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="mb-[0.8rem]">
                <label htmlFor="name" className="block font-main text-[0.75rem] text-brand-blue mb-[0.4rem] uppercase tracking-[0.2em] font-bold">Name</label>
                <input type="text" name="name" id="name" placeholder="Your Name" required className="w-full p-4 bg-brand-bg border border-brand-border text-white rounded-lg text-[0.95rem] focus:outline-none focus:border-brand-blue focus:shadow-[0_0_15px_rgba(121,192,255,0.2)]" />
              </div>

              <div className="mb-[0.8rem]">
                <label htmlFor="email" className="block font-main text-[0.75rem] text-brand-blue mb-[0.4rem] uppercase tracking-[0.2em] font-bold">Email</label>
                <input type="email" name="email" id="email" placeholder="Your Email" required className="w-full p-4 bg-brand-bg border border-brand-border text-white rounded-lg text-[0.95rem] focus:outline-none focus:border-brand-blue focus:shadow-[0_0_15px_rgba(121,192,255,0.2)]" />
              </div>

              <div className="mb-[0.8rem]">
                <label htmlFor="phone" className="block font-main text-[0.75rem] text-brand-blue mb-[0.4rem] uppercase tracking-[0.2em] font-bold">Phone number</label>
                <input type="tel" name="phone" id="phone" placeholder="Your Phone Number" className="w-full p-4 bg-brand-bg border border-brand-border text-white rounded-lg text-[0.95rem] focus:outline-none focus:border-brand-blue focus:shadow-[0_0_15px_rgba(121,192,255,0.2)]" />
              </div>

              <div className="mb-[0.8rem]">
                <label htmlFor="message" className="block font-main text-[0.75rem] text-brand-blue mb-[0.4rem] uppercase tracking-[0.2em] font-bold">Message</label>
                <textarea name="message" id="message" rows="4" placeholder="Tell me about your current website or the technical challenges you're facing..." required className="w-full p-4 bg-brand-bg border border-brand-border text-white rounded-lg text-[0.95rem] min-h-[120px] focus:outline-none focus:border-brand-blue focus:shadow-[0_0_15px_rgba(121,192,255,0.2)]"></textarea>
              </div>

              <button type="submit" className="bg-brand-blue text-[#000] py-4 px-8 rounded font-bold text-base transition-all duration-300 hover:bg-white hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(121,192,255,0.2)] w-full">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}