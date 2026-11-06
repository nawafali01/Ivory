import React, { useState, useRef, useCallback } from "react";
import {
  ArrowsRightLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

const TRANSFORMATIONS = [
  {
    id: 1,
    category: "Landscaping",
    title: "Villa Backyard & Fountain Landscaping",
    description:
      "Dry, uneven lawn transformed into lush green turf with a custom stone water fountain and manicured boundary planters.",
    before: "/images/before1.jpeg",
    after: "/images/after1.jpeg",
  },
  {
    id: 2,
    category: "Landscaping",
    title: "Patio & Garden Turf Installation",
    description:
      "Bare villa courtyard upgraded into a vibrant green garden retreat featuring topiary trees and raised planter beds.",
    before: "/images/before2.jpeg",
    after: "/images/after2.jpeg",
  },
  {
    id: 3,
    category: "Landscaping",
    title: "Side Walkway & Stone Pathway",
    description:
      "Overgrown side passage revitalized with premium artificial turf, clean stepping stones, and tropical border greenery.",
    before: "/images/before3.jpeg",
    after: "/images/after3.jpeg",
  },
  {
    id: 4,
    category: "Interior Fit-Out",
    title: "Classic Wainscoting & Chandelier Fit-Out",
    description:
      "Plain white living space elevated with bespoke architectural wall molding panels, warm paint finish, and a luxury crystal chandelier.",
    before: "/images/before4.jpeg",
    after: "/images/after4.jpeg",
  },
  {
    id: 5,
    category: "Interior Fit-Out",
    title: "Staircase Wall Paneling & Molding",
    description:
      "Minimalist stairwell transformed with floor-to-ceiling custom wall trim and warm, refined neutral tones.",
    before: "/images/before5.jpeg",
    after: "/images/after5.jpeg",
  },
  {
    id: 6,
    category: "Joinery & Media Wall",
    title: "Modern Fluted TV Media Wall",
    description:
      "Empty living room wall converted into a bespoke wood-slat media center with a floating console and warm ambient LED backlighting.",
    before: "/images/before6.jpeg",
    after: "/images/after6.jpeg",
  },
  {
    id: 7,
    category: "Exterior Upgrade",
    title: "Exterior Utility Wall & Planter Box",
    description:
      "Bare exterior utility wall enhanced with a custom built-in planter box, ornamental plants, and clean turf edging.",
    before: "/images/before7.jpeg",
    after: "/images/after7.jpeg",
  },
];

const BeforeAfterSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const currentItem = TRANSFORMATIONS[activeIndex];

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  }, []);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? TRANSFORMATIONS.length - 1 : prev - 1
    );
    setSliderPos(50);
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === TRANSFORMATIONS.length - 1 ? 0 : prev + 1
    );
    setSliderPos(50);
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-widest text-white uppercase bg-black rounded-full">
            Before &amp; After
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Real Transformations We&apos;ve Delivered
          </h2>
          <p className="mt-3 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Drag the slider left or right to compare the space before and after
            our expert renovation and landscaping work.
          </p>
        </div>

        {/* Main Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Before / After Viewer */}
          <div className="lg:col-span-7 relative">
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-xl border border-gray-200 bg-neutral-900 touch-none"
            >
              {/* AFTER Image (Full Layer) */}
              <img
                src={currentItem.after}
                alt={`${currentItem.title} - After`}
                draggable={false}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* BEFORE Image (Clipped Layer) */}
              <img
                src={currentItem.before}
                alt={`${currentItem.title} - Before`}
                draggable={false}
                loading="lazy"
                decoding="async"
                style={{
                  clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                }}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Labels */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-black/75 text-white backdrop-blur-md border border-white/20 shadow">
                  Before
                </span>
              </div>
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-500 text-black shadow">
                  After
                </span>
              </div>

              {/* Vertical Divider Line & Handle */}
              <div
                style={{ left: `${sliderPos}%` }}
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)] z-20 pointer-events-none"
              >
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-black shadow-xl border-2 border-black/10 flex items-center justify-center transition-transform duration-150 scale-100">
                  <ArrowsRightLeftIcon className="w-5 h-5 text-black" />
                </div>
              </div>

              {/* Bottom Slide Counter Badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider bg-black/70 text-white backdrop-blur-sm">
                  {activeIndex + 1} / {TRANSFORMATIONS.length}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Project Info + Thumbnails + Controls */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-3">
                {currentItem.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                {currentItem.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                {currentItem.description}
              </p>

              {/* Prev / Next Navigation Buttons */}
              <div className="mt-6 pt-5 border-t border-gray-200 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-300 bg-white text-gray-900 font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition-all cursor-pointer"
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-gray-800 transition-all cursor-pointer"
                >
                  Next
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Thumbnail Selector Strip for all 7 New Pairs */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Select Transformation ({TRANSFORMATIONS.length} Projects)
              </p>
              <div className="grid grid-cols-7 gap-2">
                {TRANSFORMATIONS.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setActiveIndex(idx);
                      setSliderPos(50);
                    }}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activeIndex === idx
                        ? "border-black ring-2 ring-black/20 scale-105"
                        : "border-transparent opacity-65 hover:opacity-100"
                    }`}
                    title={item.title}
                  >
                    <img
                      src={item.after}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;

