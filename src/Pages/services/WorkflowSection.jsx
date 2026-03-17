import React from "react";
import { 
  DocumentTextIcon, 
  PencilSquareIcon, 
  WrenchScrewdriverIcon, 
  CheckBadgeIcon 
} from "@heroicons/react/24/outline";

const steps = [
  {
    title: "01. Consultation",
    desc: "We discuss your needs, assess the site, and define clear goals.",
    Icon: DocumentTextIcon,
  },
  {
    title: "02. Planning",
    desc: "Detailed blueprints, resource allocation, and timeline development.",
    Icon: PencilSquareIcon,
  },
  {
    title: "03. Execution",
    desc: "Precise construction and maintenance work by our specialized crew.",
    Icon: WrenchScrewdriverIcon,
  },
  {
    title: "04. Delivery",
    desc: "Final inspection, walkthrough, and project handover.",
    Icon: CheckBadgeIcon,
  },
];

function Step({ Icon, title, desc }) {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-[#000000] bg-white text-[#000000] transition-transform duration-300 hover:scale-110 shadow-sm">
        <Icon className="h-7 w-7" />
      </div>

      {/* ✅ H4: text-lg font-extrabold */}
      <h4 className="mt-6 text-lg font-extrabold uppercase tracking-tight text-[#0B1220]">
        {title}
      </h4>

      {/* ✅ Body muted: text-sm */}
      <p className="mt-3 max-w-[200px] text-sm leading-relaxed text-[#6B7280]">
        {desc}
      </p>
    </div>
  );
}

export default function WorkflowSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          {/* ✅ Eyebrow: text-xs */}
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#000000]">
            OUR WORKFLOW
          </p>
          {/* ✅ H2: text-3xl md:text-4xl */}
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold leading-tight text-[#0B1220]">
            The Process to Excellence
          </h2>
        </div>

        <div className="relative mt-20">
          <div className="absolute top-[34px] left-[12%] right-[12%] hidden lg:block">
            <div className="relative h-[2px] w-full bg-gray-200">
              <div className="absolute -left-1 -top-[3px] h-2 w-2 rounded-full bg-[#000000]" />
              <div className="absolute -right-1 -top-[3px] h-2 w-2 rounded-full bg-[#000000]" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <Step key={index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}