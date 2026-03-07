// MaintenanceServicesSection.jsx (React + Tailwind)

import React from "react";

function IconBox({ children }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EAF3FF]">
      <div className="text-[#158BFF]">{children}</div>
    </div>
  );
}

const services = [
  {
    title: "HVAC Systems",
    desc: `Expert climate control installation, seasonal maintenance, and 24/7 emergency repair services for all units.`,
    icon: (
      // Snowflake
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2v20M4 6l16 12M20 6L4 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7 4.5l2 3.5M17 4.5l-2 3.5M7 19.5l2-3.5M17 19.5l-2-3.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Plumbing",
    desc: `Full-service plumbing solutions for commercial and residential properties, including pipe repair and water heating.`,
    icon: (
      // Faucet
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 10h12M9 10V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 10v6a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M18.5 19.5c.7 0 1.25-.55 1.25-1.25S18.5 16 18.5 16s-1.25 1.55-1.25 2.25.55 1.25 1.25 1.25Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Electrical",
    desc: `Licensed electrical inspections, panel upgrades, wiring, and energy-efficient lighting installations.`,
    icon: (
      // Bolt
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M13 2 5 14h7l-1 8 8-12h-7l1-8Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "General Repairs",
    desc: `Comprehensive handyman services, structural upkeep, and preventative maintenance for long-term durability.`,
    icon: (
      // Wrench
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 7.5a5.5 5.5 0 0 1-7.7 5.1L7.2 18.7a2 2 0 0 1-2.8 0l-.3-.3a2 2 0 0 1 0-2.8l6.1-6.1A5.5 5.5 0 0 1 16.5 3l-2.2 2.2 2.6 2.6L21 7.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-[#E9EEF5] bg-white px-7 py-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
      <IconBox>{icon}</IconBox>

      <h3 className="mt-5 text-[15px] font-bold text-[#0B1220]">{title}</h3>

      <p className="mt-3 text-[12px] leading-5 text-[#6B7280]">{desc}</p>
    </div>
  );
}

export default function MaintenanceServicesSection() {
  return (
    <section className="bg-[#F6F8FC] py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Header (left aligned like image) */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#158BFF]">
            PROFESSIONAL SOLUTIONS
          </p>

          <h2 className="mt-3 text-[34px] font-extrabold leading-none text-[#0B1220]">
            Maintenance Services
          </h2>

          <div className="mt-4 h-[4px] w-14 rounded bg-[#158BFF]" />
        </div>

        {/* Cards row */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}