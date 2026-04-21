export default function ServiceCard({ title, description, icon, iconType }) {
  const renderIcon = () => {
    if (icon) return icon;

    // Fallback icons based on iconType string
    if (iconType === 'monitor') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      );
    }
    if (iconType === 'zap') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    }
    if (iconType === 'settings') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    }
    return null;
  };

  return (
    <div className="group relative glass-card p-10 rounded-2xl transition-all duration-500 hover:bg-brand-card/60 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(121,192,255,0.15)] flex flex-col overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-blue/5 rounded-full blur-[60px] transition-all duration-500 group-hover:bg-brand-blue/10"></div>

      {/* Top Detail Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="relative z-10">
        {/* Icon Container */}
        <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-6 border border-brand-blue/20 transition-all duration-500 group-hover:bg-brand-blue group-hover:text-brand-bg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(121,192,255,0.4)] text-brand-blue">
          {renderIcon()}
        </div>

        <h3 className="text-white mb-4 text-[1.5rem] font-black leading-tight tracking-tight group-hover:text-brand-blue transition-colors duration-300">
          {title}
        </h3>

        <p className="text-brand-dim text-[1rem] leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}