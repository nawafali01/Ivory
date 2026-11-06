import React from "react";
import { 
  CloudIcon, 
  WrenchScrewdriverIcon, 
  BoltIcon, 
  WrenchIcon 
} from "@heroicons/react/24/outline";

function IconBox({ Icon }) {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#000000] transition-all duration-300 group-hover:bg-[#158BFF] group-hover:text-white group-hover:rotate-6">
      <Icon className="h-7 w-7" strokeWidth={2} />
    </div>
  );
}

const services = [
  {
    title: "HVAC Systems",
    desc: "Expert climate control installation, seasonal maintenance, and 24/7 emergency repair services for all units.",
    icon: CloudIcon,
  },
  {
    title: "Plumbing",
    desc: "Full-service plumbing solutions for commercial and residential properties, including pipe repair and water heating.",
    icon: WrenchIcon, 
  },
  {
    title: "Electrical",
    desc: "Licensed electrical inspections, panel upgrades, wiring, and energy-efficient lighting installations.",
    icon: BoltIcon,
  },
  {
    title: "General Repairs",
    desc: "Comprehensive handyman services, structural upkeep, and preventative maintenance for long-term durability.",
    icon: WrenchScrewdriverIcon,
  },
];

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group flex flex-col items-center text-center relative rounded-3xl border border-slate-100 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
      
      <IconBox Icon={Icon} />

      {/* ✅ H3: text-xl md:text-2xl */}
      <h3 className="mt-8 text-xl md:text-2xl font-bold text-black tracking-tight">
        {title}
      </h3>

      {/* ✅ Body: text-sm (card desc — muted/small) */}
      <p className="mt-4 text-sm leading-relaxed text-slate-500">
        {desc}
      </p>
      
      <div className="mt-6 h-1 w-12 rounded-full bg-slate-100 transition-all duration-300 group-hover:w-20 group-hover:bg-[#158BFF]" />
    </div>
  );
}

export default function MaintenanceServicesSection() {
  return (
    <section className="bg-slate-50/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* ✅ Eyebrow: text-xs */}
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#000000]">
            Professional Solutions
          </span>

          {/* ✅ H2: text-3xl md:text-4xl */}
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-black leading-tight">
            Maintenance Services
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}