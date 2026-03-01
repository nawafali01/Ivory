import React, { useState, useEffect, useRef } from 'react';

const SmoothSlider = () => {
  const originalImages = [
    "/images/building-project.jpg",
    "/images/building-project1.jpg",
    "/images/building-project2.jpg",
    "/images/building-project3.jpg",
    "/images/building-project4.jpg",
    "/images/building-project-5.jpg",
    "/images/building-project.jpg",
    "/images/building-project7.jpg",
  ];

  const images = [...originalImages, ...originalImages.slice(0, 2)];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const imagesVisible = 2;
  const totalImages = originalImages.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(totalImages);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(totalImages - 1);
      }, 20);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (currentIndex === totalImages) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700); 
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalImages]);

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 py-16">
      <div className="relative flex flex-col items-center group">
        
        <div className="relative flex items-center w-full">
            {/* Left Button */}
            <button onClick={prevSlide} className="absolute -left-6 z-30 p-4 bg-white shadow-2xl rounded-full hover:bg-gray-50 active:scale-90 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            </button>

            {/* Slider Window */}
            <div className="overflow-hidden w-full rounded-[40px]">
            <div 
                className={`flex gap-8 ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : 'transition-none'}`}
                style={{ transform: `translateX(-${currentIndex * (100 / imagesVisible)}%)` }}
            >
                {images.map((img, index) => (
                <div 
                    key={index} 
                    className="min-w-[calc(50%-16px)] h-[600px] overflow-hidden rounded-[40px] shadow-2xl bg-gray-200"
                >
                    <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                </div>
                ))}
            </div>
            </div>

            {/* Right Button */}
            <button onClick={nextSlide} className="absolute -right-6 z-30 p-4 bg-white shadow-2xl rounded-full hover:bg-gray-50 active:scale-90 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
            </button>
        </div>

        
        
      </div>
    </div>
  );
};

export default SmoothSlider;