// HeroSection.jsx (React + Tailwind)
// Make sure Tailwind is set up in your project.

import React from "react";

export default function Servicehero({
  backgroundImage = "/your-image.jpg",
}) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay (dark + vignette like the screenshot) */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.30),rgba(0,0,0,0.55))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_35%,rgba(0,0,0,0.25),rgba(0,0,0,0.72))]" />

      <div className="relative mx-auto flex min-h-[520px] max-w-6xl items-center justify-center px-5 py-24">
        <div className="w-full text-center">
          <h1 className="mx-auto text-balance font-extrabold tracking-[-0.03em] text-white leading-[1.05] text-[clamp(34px,5vw,64px)]">
            Expert Construction & <br />
            <span className="text-[#158BFF]">Maintenance Services</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[720px] text-sm font-semibold leading-relaxed text-white/85">
            Building excellence and maintaining your assets with precision,
            <br className="hidden sm:block" />
            integrity, and industry-leading care since 1998.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-[#158BFF] px-6 text-[13px] font-bold text-white shadow-[0_10px_24px_rgba(21,139,255,0.25)] transition active:translate-y-[1px] hover:bg-[#0f7fe9]"
            >
              Our Service Portfolio
            </a>

            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/10 px-6 text-[13px] font-bold text-white/90 backdrop-blur-[6px] transition active:translate-y-[1px] hover:bg-white/15"
            >
              Contact Specialist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}