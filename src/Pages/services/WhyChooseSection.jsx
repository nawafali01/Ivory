// WhyChooseSection.jsx (React + Tailwind)

import React from "react";

function FeatureItem({ icon, title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
        <span className="text-white">{icon}</span>
      </div>

      <div>
        <h4 className="text-[15px] font-extrabold leading-tight text-white">
          {title}
        </h4>
        <p className="mt-1.5 max-w-[440px] text-[12.5px] leading-5 text-white/85">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function WhyChooseSection({
  image = "/your-image.jpg",
  heading = "Why Property\nOwners Choose\nBuildGuard",
}) {
  return (
    <section className="bg-[#000000] py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14">
        {/* LEFT */}
        <div>
          <h2 className="whitespace-pre-line text-[44px] font-extrabold leading-[1.02] tracking-[-0.02em] text-white">
            {heading}
          </h2>

          <div className="mt-10 space-y-7">
            <FeatureItem
              title="Licensed & Fully Insured"
              desc="Complete peace of mind with full liability coverage and industry certifications."
              icon={
                // Badge/Seal
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l2.1 2.2 3-.4.9 2.8 2.8.9-.4 3L22 12l-2.2 2.1.4 3-2.8.9-.9 2.8-3-.4L12 22l-2.1-2.2-3 .4-.9-2.8-2.8-.9.4-3L2 12l2.2-2.1-.4-3 2.8-.9.9-2.8 3 .4L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.8 12.2l1.5 1.6 3.9-4.1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />

            <FeatureItem
              title="24/7 Emergency Support"
              desc="Our rapid response team is available around the clock for critical repairs."
              icon={
                // Headset
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12a8 8 0 0 1 16 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 12v5a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M20 12v5a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14 20a2 2 0 0 1-2 2h-1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
            />

            <FeatureItem
              title="Experienced Expert Team"
              desc="Over 25 years of combined experience in complex construction and maintenance."
              icon={
                // Users
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M16 11a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M4 20a6 6 0 0 1 16 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.5 9.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M2 20a6.5 6.5 0 0 1 6.2-4.6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative lg:justify-self-end">
          {/* Image frame */}
          <div className="relative rounded-2xl bg-white/10 p-3">
            <img
              src={image}
              alt="Service"
              className="h-[320px] w-[420px] max-w-full rounded-xl object-cover"
            />

            {/* Badge (overlapping, bottom-left) */}
            <div className="absolute -bottom-6 left-8 rounded-xl bg-white px-7 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <div className="flex items-center gap-4">
                <div className="text-[44px] font-extrabold leading-none text-[#1E86E6]">
                  25+
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] font-extrabold tracking-[0.06em] text-[#0B1220]">
                    YEARS OF
                  </div>
                  <div className="text-[11px] font-extrabold tracking-[0.06em] text-[#0B1220]">
                    EXCELLENCE
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Space for the badge overlap on small screens */}
          <div className="h-8" />
        </div>
      </div>
    </section>
  );
}