import hero from '../../assets/images/servicehero.jpg'

export default function Servicehero() {
  return (
    <section className="relative overflow-hidden min-h-[520px] flex items-center justify-center">
      {/* 1. Background Image (img tag for better performance) */}
      <img 
        src={hero} 
        alt="Construction & Maintenance Services" 
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />

      {/* 2. Overlays (Z-index adjust kar diya taake image ke upar aur text ke peeche rahein) */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.30),rgba(0,0,0,0.55))] -z-10" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_35%,rgba(0,0,0,0.25),rgba(0,0,0,0.72))] -z-10" />

      {/* 3. Main Content */}
      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-5 py-24">
        <div className="w-full text-center">
          <h1 className="mx-auto text-balance font-extrabold tracking-[-0.03em] text-white leading-[1.05] text-[clamp(34px,5vw,64px)]">
            Expert Construction & <br />
            <span className="text-[#ffffff]">Maintenance Services</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[720px] text-sm font-semibold leading-relaxed text-white/65">
            Building excellence and maintaining your assets with precision,
            <br className="hidden sm:block" />
            integrity, and industry-leading care since 1998.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#"
 className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/10 px-6 text-[13px] font-bold text-white/90 backdrop-blur-[6px] transition active:translate-y-[1px] hover:bg-white/15"
            >
              Our Projects
            </a>

            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/10 px-6 text-[13px] font-bold text-white/90 backdrop-blur-[6px] transition active:translate-y-[1px] hover:bg-white/15"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}