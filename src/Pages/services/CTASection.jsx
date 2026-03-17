import React from "react";
import { Link } from "react-router-dom";

export default function CTASection({
  title = "Ready to Build Better?",
  subtitle = "Contact our team today for a comprehensive consultation and a detailed quote\nfor your next project.",
  buttonText = "Contact Us",
  onButtonClick,
  href = "/contact#contact-form",
}) {
  const ButtonTag = onButtonClick ? "button" : Link;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto rounded-[22px] bg-[#000000] px-6 py-14 shadow-[0_28px_70px_rgba(11,31,59,0.25)] sm:px-10">
          <div className="relative">
            <div className="relative text-center">

              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-[-0.02em] text-white">
                {title}
              </h2>

              <p className="mx-auto mt-3 max-w-[680px] whitespace-pre-line text-sm font-medium leading-6 text-white/80">
                {subtitle}
              </p>

              <div className="mt-9 flex justify-center">
                <ButtonTag
                  {...(onButtonClick
                    ? { type: "button", onClick: onButtonClick }
                    : { to: href })}
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/10 px-12 text-sm font-bold text-white/90 backdrop-blur-[6px] transition active:translate-y-[1px] hover:bg-white/15"
                >
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