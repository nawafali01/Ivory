// CTASection.jsx (React + Tailwind) — matches the image, with ONLY ONE button

import React from "react";

export default function CTASection({
  title = "Ready to Build Better?",
  subtitle = "Contact our team today for a comprehensive consultation and a detailed quote\nfor your next project.",
  buttonText = "Contact Us",
  onButtonClick,
  href = "#",
}) {
  const ButtonTag = onButtonClick ? "button" : "a";

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto rounded-[22px] bg-[#000000] px-6 py-14 shadow-[0_28px_70px_rgba(11,31,59,0.25)] sm:px-10">
          {/* subtle vignette/gradient like screenshot */}
          <div className="relative">
           
            <div className="relative text-center">
              <h2 className="text-[38px] font-extrabold leading-tight tracking-[-0.02em] text-white">
                {title}
              </h2>

              <p className="mx-auto mt-3 max-w-[680px] whitespace-pre-line text-[13px] font-semibold leading-6 text-white/80">
                {subtitle}
              </p>

              <div className="mt-9 flex justify-center">
                <ButtonTag
                  {...(onButtonClick
                    ? { type: "button", onClick: onButtonClick }
                    : { href })}
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/10 px-12 text-[13px] font-bold text-white/90 backdrop-blur-[6px] transition active:translate-y-[1px] hover:bg-white/15"
                >
                  {/* small document icon like the image */}
                  {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 3h7l3 3v15H7V3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12h6M9 16h6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg> */}
                  {buttonText}
                </ButtonTag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}