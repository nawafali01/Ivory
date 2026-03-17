import React, { useState, useEffect } from 'react';

const SmoothSlider = () => {
  const originalImages = [
    { src: "/images/apart.jpeg",    title: "Lake Terrace Tower Cluster (D) JLT" },
    { src: "/images/apart1.jpeg",   title: "Lake Terrace Tower Cluster (D) JLT" },
    { src: "/images/apart2.jpeg",   title: "Lake Terrace Tower Cluster (D) JLT" },
    { src: "/images/apart3.jpeg",   title: "Lake Terrace Tower Cluster (D) JLT" },
    { src: "/images/apart4.jpeg",   title: "Media wall work Location; Liv Residence Marina" },
    { src: "/images/apart2nd.jpeg", title: "Lake Terrace Tower Cluster (D) JLT" },
    { src: "/images/barber.jpeg",   title: "Liv 27 Barber shop Media City" },
    { src: "/images/barber1.jpeg",  title: "Liv 27 Barber shop Media City" },
    { src: "/images/barber2.jpeg",  title: "Liv 27 Barber shop Media City" },
    { src: "/images/barber3.jpeg",  title: "Liv 27 Barber shop Media City" },
    { src: "/images/barber4.jpeg",  title: "Liv 27 Barber shop Media City" },
    { src: "/images/barber5.jpeg",  title: "Liv 27 Barber shop Media City" },
    { src: "/images/barber6.jpeg",  title: "Liv 27 Barber shop Media City" },
  ];

  const images = [
    ...originalImages.slice(-2),
    ...originalImages,
    ...originalImages.slice(0, 2),
  ];

  const [currentIndex, setCurrentIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= images.length - itemsToShow) {
      setIsTransitioning(false);
      setCurrentIndex(2);
    }
    if (currentIndex <= 1) {
      setIsTransitioning(false);
      setCurrentIndex(images.length - itemsToShow - 2);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className="bg-gray-50">
      <div className="w-full max-w-5xl mx-auto py-12 px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We've Built</h2>
          <p className="mt-3 text-gray-500 text-base md:text-lg">A glimpse into our completed work across Dubai</p>
        </div>

        {/* Slider */}
        <div className="relative group">

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/90 shadow-lg rounded-full hover:bg-white transition-all border border-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/90 shadow-lg rounded-full hover:bg-white transition-all border border-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Track */}
          <div className="overflow-hidden">
            <div
              className={`flex items-stretch ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {images.map((item, index) => (
                <div
                  key={index}
                  className="shrink-0 px-2"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 flex flex-col">

                    {/* Image */}
                    <div className="aspect-[4/3] w-full overflow-hidden bg-gray-200">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Title */}
                    <div className="px-4 py-4 text-center flex-1 flex items-center justify-center">
                      <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                        {item.title}
                      </h3>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
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
                    ? 'w-8 bg-[#060606]'
                    : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SmoothSlider;