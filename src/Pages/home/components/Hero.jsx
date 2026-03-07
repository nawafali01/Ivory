import React from 'react'
import { CheckBadgeIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import logo from '../../../assets/images/heroimg.jpg'

const Hero = () => {
  return (
    <>
    {/* justify-center aur heavy bottom padding se content uper move hoga */}
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-slate-900 pt-16 pb-40">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={logo}
          alt="Construction Site" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="max-w-3xl"> {/* Container width bhi thori kam ki hai */}
          
          {/* Top Badge: Compact size */}
          <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6">
            <CheckBadgeIcon className="w-4 h-4 text-blue-500" />
            <p className="text-white text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase">
              Certified & Professional Constructors
            </p>
          </div>

          {/* Main Heading: Ab ye kafi balanced size mein hai */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.2] mb-5 tracking-tighter">
            BUILDING YOUR <br className="hidden md:block" /> 
            <span className="text-white">VISION</span> TO REALITY
          </h1>

          {/* Subtext: Normal text size */}
          <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-xl mb-8 leading-relaxed opacity-90">
            Leading the industry with precision engineering and sustainable solutions. 
            We specialize in turning complex blueprints into architectural masterpieces.
          </p>

          {/* Buttons: Sleek and small sizing */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-12">
            <button className="group flex items-center justify-center gap-2 bg-black text-white hover:bg-white hover:text-black font-bold py-2.5 px-6 uppercase rounded-md transition-all shadow-sm shadow-white text-xs md:text-sm">
              <span>Explore Projects</span>
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="bg-black hover:bg-yellow-600 text-white font-bold py-2.5 px-6 uppercase transition-all rounded-md border-2 border-black hover:border-yellow-600 text-xs md:text-sm">
              Get a Quote
            </button>
          </div>

          {/* Stats Section: Minimalist look */}
          <div className="max-w-2xl grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 pt-6">
            <div className="group">
              <p className="text-xl md:text-3xl font-black text-white group-hover:text-yellow-500 transition-colors">5+</p>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[7px] md:text-[9px] mt-1">Years of Experience</p>
            </div>
            
            <div className="group border-l border-white/10 pl-5">
              <p className="text-xl md:text-3xl font-black text-white group-hover:text-yellow-500 transition-colors">500+</p>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[7px] md:text-[9px] mt-1">Projects Completed</p>
            </div>
            
            <div className="group border-l-0 md:border-l border-white/10 md:pl-5 col-span-2 md:col-span-1 mt-3 md:mt-0">
              <p className="text-xl md:text-3xl font-black text-white group-hover:text-yellow-500 transition-colors">100%</p>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[7px] md:text-[9px] mt-1">Satisfaction</p>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}

export default Hero;