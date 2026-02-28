import React, { useState, useEffect, useRef } from 'react';

const SmoothSlider = () => {
  const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
    "https://via.placeholder.com/600x400?text=Image+4",
    "https://via.placeholder.com/600x400?text=Image+5",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const imagesVisible = 2;
  const totalImages = images.length;
  const maxIndex = totalImages - imagesVisible;

  const nextSlide = () => {
    if (currentIndex >= maxIndex) {
      // Smoothly 0 par jane ke liye flickering rokne ka tareeqa
      setIsTransitioning(false); // Transition band karo
      setCurrentIndex(0);
      // Foran transition wapas on karo
      setTimeout(() => setIsTransitioning(true), 50);
    } else {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(maxIndex);
      setTimeout(() => setIsTransitioning(true), 50);
    } else {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="relative flex items-center group">
        
        {/* Left Icon */}
        <button 
          onClick={prevSlide}
          className="absolute -left-5 z-20 p-3 bg-white shadow-xl rounded-full border border-gray-100 hover:bg-gray-50 active:scale-90 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slider Window */}
        <div className="overflow-hidden w-full">
          <div 
            className={`flex gap-6 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : 'transition-none'}`}
            style={{ transform: `translateX(-${currentIndex * (100 / imagesVisible)}%)` }}
          >
            {images.map((img, index) => (
              <div 
                key={index} 
                className="min-w-[calc(50%-12px)] overflow-hidden rounded-3xl shadow-lg aspect-video"
              >
                <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Icon */}
        <button 
          onClick={nextSlide}
          className="absolute -right-5 z-20 p-3 bg-white shadow-xl rounded-full border border-gray-100 hover:bg-gray-50 active:scale-90 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </div>
  );
};

export default SmoothSlider;