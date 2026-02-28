import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaRegClock } from "react-icons/fa";

const milestones = [
  { title: "K4 Fitout started", year: "2020" },
  { title: "Team Expansion", year: "2022" },
  { title: "Record Breaking Project", year: "2023" },
  { title: "Joinery Factory", year: "2023" },
];

const JourneyTimeline = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-gray-100 py-24 px-8">
      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-60 -translate-y-1/2 z-20 bg-white border border-gray-300 p-3 rounded shadow-sm"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-60 -translate-y-1/2 z-20 bg-white border border-gray-300 p-3 rounded shadow-sm"
      >
        <FaChevronRight />
      </button>

      {/* Scroll Area */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth scrollbar-hide"
      >
        <div className="relative flex min-w-max px-20">

          {/* ✅ Perfect Center Line */}
          <div className="absolute left-0 right-0 top-[144px] h-[2px] bg-black"></div>

          {milestones.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center mx-28"
            >
              <h3 className="text-xl font-medium text-gray-800 text-center">
                {item.title}
              </h3>

              <p className="text-yellow-600 text-lg font-semibold mt-2">
                {item.year}
              </p>

              {/* Icon wrapper with fixed spacing */}
              <div className="relative z-10 mt-12">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center border-4 border-gray-200">
                  <FaRegClock className="text-white text-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;