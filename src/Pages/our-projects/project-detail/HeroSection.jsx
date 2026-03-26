import React, { useState } from "react";

export default function HeroSection({ title, desc, cat, images = [], image }) {
  // FIX: Agar images array hai to wo use kare, warna single image ko array bana de
  const slides = images.length > 0 ? images : [image];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const catLabel = cat.charAt(0).toUpperCase() + cat.slice(1);

  return (
    <div className="relative w-full h-[340px] md:h-[440px] overflow-hidden bg-neutral-900">
      {/* Background Image */}
      <img
        key={currentIndex}
        src={slides[currentIndex]} 
        alt={title}
        className="w-full h-full object-cover opacity-60 transition-all duration-700 ease-in-out"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-6 left-6 pl-6 right-6 md:bottom-8 md:left-8 md:right-8 z-10">
        <span className="inline-block bg-black text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 mb-3">
          {catLabel}
        </span>
        <h1 className="font-black text-4xl md:text-5xl text-white leading-[1.15] tracking-tighter mb-2 uppercase">
          {title}
        </h1>
        <p className="text-white/70 text-base md:text-lg font-light max-w-xl leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Navigation Dots - Sirf tab dikhen jab 1 se zyada images hon */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index 
                  ? "w-8 h-2 bg-white" 
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}