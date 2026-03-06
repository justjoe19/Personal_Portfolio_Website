export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="group relative glass-card p-10 rounded-2xl transition-all duration-500 hover:bg-brand-card/60 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(121,192,255,0.15)] flex flex-col overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-blue/5 rounded-full blur-[60px] transition-all duration-500 group-hover:bg-brand-blue/10"></div>

      {/* Top Detail Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="relative z-10">
        {/* Icon Container */}
        <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-6 border border-brand-blue/20 transition-all duration-500 group-hover:bg-brand-blue group-hover:text-brand-bg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(121,192,255,0.4)] text-brand-blue">
          {icon}
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