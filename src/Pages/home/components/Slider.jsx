import React, { useState, useEffect, useRef } from 'react';

const SmoothSlider = () => {
  const originalImages = [
    "/images/building-project.jpg",
    "/images/building-project1.jpg",
    "/images/building-project2.jpg",
    "/images/building-project3.jpg",
    "/images/building-project4.jpg",
    "/images/building-project-5.jpg",
    "/images/building-project7.jpg",
  ];

  // 1. Images ko clone karna (Infinite effect ke liye)
  const images = [
    ...originalImages.slice(-2), // Last 2 images start mein
    ...originalImages,           // Asli images
    ...originalImages.slice(0, 2) // Pehli 2 images end mein
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // Start from index 2 (real first image)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(2);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2. Seamless Jump Logic
  const handleTransitionEnd = () => {
    // Agar hum end wali clones pe pohanch gaye hain
    if (currentIndex >= images.length - itemsToShow) {
      setIsTransitioning(false); // Animation band karo
      setCurrentIndex(2);        // Wapas real first image pe jump karo
    }
    // Agar hum start wali clones pe pohanch gaye hain
    if (currentIndex <= 1) {
      setIsTransitioning(false);
      setCurrentIndex(images.length - itemsToShow - 2);
    }
  };

  // Transition wapas on karne ke liye jab state change ho
  useEffect(() => {
    if (!isTransitioning) {
      // Small timeout taake browser jump detect karle phir animation on ho
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (isTransitioning) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      <div className="relative group">
        
        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/90 shadow-lg rounded-full hover:bg-white transition-all border border-gray-100 hidden md:block">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <button onClick={nextSlide} className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/90 shadow-lg rounded-full hover:bg-white transition-all border border-gray-100 hidden md:block">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Slider Window */}
        <div className="overflow-hidden rounded-3xl">
          <div 
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {images.map((img, index) => (
              <div 
                key={index}
                className="shrink-0 px-2"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-200 shadow-md">
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots (Linked to Original Index) */}
        <div className="mt-8 flex justify-center gap-2">
          {originalImages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(i + 2);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                (currentIndex - 2 + originalImages.length) % originalImages.length === i 
                ? 'w-8 bg-[#B8860B]' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmoothSlider;