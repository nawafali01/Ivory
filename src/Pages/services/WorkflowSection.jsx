// WorkflowSection.jsx (React + Tailwind)

import React from "react";

const steps = [
  {
    title: "01. Consultation",
    desc: "We discuss your needs, assess the site, and define clear goals.",
    icon: (
      // Document
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 3h8l2 2v16H7V3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 9h6M9 13h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "02. Planning",
    desc: "Detailed blueprints, resource allocation, and timeline development.",
    icon: (
      // Tools / plan
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M14 7 7 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16.5 4.5 19.5 7.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9 5 5 9l4 4 4-4-4-4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M19 13l-6 6 2 2 6-6-2-2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "03. Execution",
    desc: "Precise construction and maintenance work by our specialized crew.",
    icon: (
      // Crossed tools
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M14 7 7 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6.5 6.5 9 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17.5 6.5 7 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15 15 17.5 17.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "04. Delivery",
    desc: "Final inspection, walkthrough, and project handover.",
    icon: (
      // Check circle
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="m8.5 12.2 2.2 2.3 5-5.2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function Step({ icon, title, desc }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-[#158BFF] bg-white text-[#158BFF]">
        {icon}
      </div>

      <h4 className="mt-6 text-[13px] font-extrabold text-[#0B1220]">
        {title}
      </h4>

      <p className="mx-auto mt-3 max-w-[220px] text-[11.5px] leading-5 text-[#6B7280]">
        {desc}
      </p>
    </div>
  );
}

export default function WorkflowSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#158BFF]">
            OUR WORKFLOW
          </p>
          <h2 className="mt-3 text-[36px] font-extrabold leading-tight text-[#0B1220]">
            The Process to Excellence
          </h2>
        </div>

        {/* Steps */}
        <div className="relative mt-14">
          {/* connecting line behind circles (desktop like the image) */}
          <div className="pointer-events-none z-0 absolute left-10 right-10 top-[34px] hidden h-px bg-[#838383] lg:block" />

          <div className="grid grid-cols-1 z-10 gap-12 lg:grid-cols-4 lg:gap-10">
            {steps.map((s) => (
              <Step key={s.title} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}