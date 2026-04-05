import React from "react";
import team from '../../assets/images/inspectors-interacting.jpg'
import { 
  CheckBadgeIcon, 
  PhoneIcon, 
  UserGroupIcon 
} from "@heroicons/react/24/outline";

function FeatureItem({ Icon, title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
        <Icon className="h-5 w-5 text-white" />
      </div>

      <div>
        <h4 className="text-lg md:text-xl font-extrabold leading-tight text-white">
          {title}
        </h4>
        <p className="mt-1.5 max-w-[440px] text-sm leading-5 text-white/85">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function WhyChooseSection({
  heading = "Why Property\nOwners Choose\nBuildGuard",
}) {
  return (
    <section className="bg-[#000000] py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="whitespace-pre-line text-3xl md:text-4xl font-extrabold leading-[1.02] tracking-[-0.02em] text-white">
            {heading}
          </h2>

          <div className="mt-10 space-y-7">
            <FeatureItem
              title="Licensed & Fully Insured"
              desc="Complete peace of mind with full liability coverage and industry certifications."
              Icon={CheckBadgeIcon}
            />
            <FeatureItem
              title="24/7 Emergency Support"
              desc="Our rapid response team is available around the clock for critical repairs and support."
              Icon={PhoneIcon}
            />
            <FeatureItem
              title="Experienced Expert Team"
              desc="Over 25 years of combined experience in complex construction and maintenance."
              Icon={UserGroupIcon}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative lg:justify-self-end">
          <div className="relative rounded-2xl bg-white/10 p-3">
            <img
              src={team}
              alt="BuildGuard Team"
              className="h-[320px] w-[420px] max-w-full rounded-xl object-cover"
            />

            {/* Badge */}
            <div className="absolute -bottom-6 left-8 rounded-xl bg-white px-7 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-extrabold leading-none text-[#000000]">
                  5+
                </div>
                <div className="leading-tight">
                  <div className="text-xs font-extrabold tracking-[0.06em] text-[#0B1220]">
                    YEARS OF
                  </div>
                  <div className="text-xs font-extrabold tracking-[0.06em] text-[#0B1220]">
                    EXCELLENCE
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-8" />
        </div>
      </div>
    </section>
  );
}