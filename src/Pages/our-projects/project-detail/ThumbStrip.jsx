import { useState } from "react";

export default function ThumbStrip({ images, imageLabels }) {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-gray-100 border-b border-neutral-200">
      <div className="flex gap-3 px-4 md:px-6 py-4 overflow-x-auto scrollbar-hide">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="flex-shrink-0 text-left focus:outline-none"
          >
            <div
              className={`w-[110px] md:w-[130px] h-[68px] md:h-[80px] overflow-hidden rounded-sm border-2 transition-all duration-200 ${
                active === i ? "border-black" : "border-transparent"
              }`}
            >
              <img
                src={img}
                alt={imageLabels?.[i] || `View ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-neutral-500 mt-1.5">
              {imageLabels?.[i] || `View ${i + 1}`}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}