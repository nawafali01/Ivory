export default function HeroSection({ title, desc, cat, image }) {
  const catLabel = cat.charAt(0).toUpperCase() + cat.slice(1);

  return (
    <div className="relative w-full h-[340px] md:h-[440px] overflow-hidden bg-neutral-900">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      <div className="absolute bottom-6 left-6 pl-6 right-6 md:bottom-8 md:left-8 md:right-8">
        <span className="inline-block bg-black text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 mb-3">
          {catLabel}
        </span>
        <h1 className="font-black text-4xl md:text-5xl text-white leading-[1.15] tracking-tighter mb-2">
          {title}
        </h1>
        <p className="text-white/70 text-base md:text-lg font-light max-w-xl leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Decorative dots */}
      <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-2">
        <span className="w-6 h-2 bg-white rounded-full" />
        <span className="w-2 h-2 bg-white/30 rounded-full" />
        <span className="w-2 h-2 bg-white/30 rounded-full" />
        <span className="w-2 h-2 bg-white/30 rounded-full" />
      </div>
    </div>
  );
}