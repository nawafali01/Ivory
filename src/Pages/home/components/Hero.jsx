import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full h-screen sm:h-screen overflow-hidden">
      {/* Background overlay for better text readability on mobile */}
      <div className="absolute inset-0 z-10 bg-black/30 sm:bg-black/20"></div>
      
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <iframe
          className="w-[120%] h-[120%] sm:w-[130%] sm:h-[130%] lg:w-[130%] lg:h-[130%]"
          src="https://www.youtube.com/embed/qvQuQMq7lRo?autoplay=1&mute=1&loop=1&playlist=qvQuQMq7lRo&controls=0&playsinline=1"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{
            pointerEvents: 'none'
          }}
        ></iframe>
      </div>
    </section>
  )
}

export default Hero
