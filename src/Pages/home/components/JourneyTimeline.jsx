import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaRegClock } from "react-icons/fa";

const milestones = [
  { title: "ICG Fitout Started", year: "2021" },
  { title: "Team Expansion", year: "2022" },
  { title: "Record Breaking Project", year: "2023" },
  { title: "Joinery Factory Launch", year: "2023" },
  { title: "Major Corporate Contracts", year: "2024" },
  { title: "Sustainable Design Award", year: "2024" },
  { title: "Regional Office Expansion", year: "2025" },
];

const JourneyTimeline = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-[#F9FAFB] py-24 px-4 sm:px-8">
      {/* Header Section */}
      <div className="mb-10 text-center">
        {/* ✅ Eyebrow: text-xs (12px) */}
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black">
          OUR LEGACY
        </p>
        {/* ✅ H2: text-3xl md:text-4xl */}
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight text-[#0B1220] max-w-4xl mx-auto">
          The Glory of I C G Technical Services LLC
        </h2>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute left-0 right-0 top-[405px] z-30 hidden lg:block pointer-events-none">
        <div className="mx-auto max-w-7xl flex justify-between px-2 py-5">
          <button
            onClick={() => scroll("left")}
            className="pointer-events-auto bg-white border border-gray-200 p-4 rounded-full shadow-xl hover:bg-[#B8860B] hover:text-white transition-all transform -translate-y-1/2"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="pointer-events-auto bg-white border border-gray-200 p-4 rounded-full shadow-xl hover:bg-[#B8860B] hover:text-white transition-all transform -translate-y-1/2"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>
      </div>

      {/* Scroll Area */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth scrollbar-hide"
      >
        <div className="relative flex min-w-max items-center py-12 px-10 sm:px-20">
          <div className="absolute left-0 right-0 top-[172px] h-[2px] bg-gray-200"></div>

          {milestones.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center mx-12 sm:mx-20 lg:mx-28 group"
            >
              <div className="h-28 flex flex-col items-center justify-end mb-8">
                {/* ✅ Card title (H3): text-base sm:text-lg */}
                <h3 className="text-base sm:text-lg font-extrabold text-[#0B1220] text-center max-w-[170px] leading-tight group-hover:text-[#B8860B] transition-colors">
                  {item.title}
                </h3>
                {/* ✅ Year label: text-sm sm:text-base */}
                <p className="text-[#B8860B] text-sm sm:text-base font-black mt-2 tracking-widest">
                  {item.year}
                </p>
              </div>

              {/* Circle */}
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0B1220] flex items-center justify-center border-[5px] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-transform group-hover:scale-110">
                  <FaRegClock className="text-[#D4AF37] text-xl sm:text-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Swipe Indicator */}
      <div className="mt-12 flex flex-col items-center lg:hidden">
        <div className="flex gap-1.5 mb-3">
          <div className="h-1 w-10 bg-[#B8860B] rounded-full"></div>
          <div className="h-1 w-2 bg-gray-300 rounded-full"></div>
          <div className="h-1 w-2 bg-gray-300 rounded-full"></div>
        </div>
        {/* ✅ Tiny label: text-xs */}
        <p className="text-black text-xs uppercase font-bold tracking-[0.2em]">
          Scroll for Legacy
        </p>
      </div>
    </div>
  );
};

export default JourneyTimeline;