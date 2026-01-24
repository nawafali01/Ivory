import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <iframe
          className="w-[130%] h-[130%]"
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
