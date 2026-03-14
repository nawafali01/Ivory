import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckBadgeIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
// import logo from '../../../assets/images/heroimg.jpg' // Keep if needed
import logo1 from '../../../assets/images/luxury-architecture-exterior-design.jpg'

const useTypewriter = (words, { typeSpeed = 100, deleteSpeed = 50, delay = 1200 } = {}) => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[index % words.length]
    const updateText = () => {
      setText((prev) => {
        const fullText = currentWord
        const updated = isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
        return updated
      })

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delay)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setIndex((prev) => prev + 1)
      }
    }

    const timeout = setTimeout(
      updateText,
      isDeleting ? deleteSpeed : typeSpeed,
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, index, words, typeSpeed, deleteSpeed, delay])

  return text
}

const Hero = () => {
  const serviceText = useTypewriter(
    [
      "Plumbing Services",
      "Electrical Services",
      "Renovation Services",
      "Painting Services",
      "Carpentry Services",
      "AC Cleaning Services",
      "Roofing Services",
      "Landscaping Services",
      "Pool Construction",
      "Tiling & Flooring",
    ],
    {
      typeSpeed: 80,
      deleteSpeed: 40,
      delay: 1500,
    },
  )

  return (
    <>
    {/* justify-center aur heavy bottom padding se content uper move hoga */}
    <section className="relative h-[100vh] w-full flex flex-col justify-center overflow-hidden bg-slate-900   ">
      
      <div className="absolute inset-0 z-0">
        {/* <img 
          src={logo}
          alt="Construction Site" 
          className="w-full h-full object-cover opacity-50"
        /> */}
        <img 
          src={logo1}
          alt="Construction Site" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* CHANGES HERE: Content Shifted Left by reducing container padding & max-width */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 xl:px-16">
        <div className="max-w-4xl"> {/* Thora wider container content ko left align rakhne ke liye */}
          
          {/* Top Badge: Compact size */}
          <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6">
            <CheckBadgeIcon className="w-4 h-4 text-blue-500" />
            <p className="text-white text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase">
              Certified & Professional Constructors
            </p>
          </div>

          {/* Main Heading: Ab ye kafi balanced size mein hai */}
          <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.2] mb-5 tracking-tighter">
            ICG Technical Services LLC
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-black text-white leading-[1.2] mb-5 tracking-tighter">
            We Provide <span className="text-orange-400">{serviceText}</span>
          </h2>

          {/* Subtext: Normal text size */}
          <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-xl mb-8 leading-relaxed opacity-90">
            We provide reliable property maintenance solutions with a skilled team ensuring quality workmanship and dependable service for every project.
          </p>

          {/* Buttons: Sleek and small sizing + Blur Effect */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12 items-center sm:items-start">
            
            {/* CHANGES HERE: 'Explore Projects' Button (link to projects page) */}
            <Link
              to="/our-project"
              className="group flex items-center justify-center gap-2 backdrop-blur-sm bg-white/10 text-white hover:bg-white hover:text-black font-bold py-2.5 px-6 uppercase rounded-md transition-all border border-white/20 hover:border-white text-xs md:text-sm shadow-md shadow-black/30"
            >
              <span>Explore Projects</span>
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            {/* CHANGES HERE: 'Get a Quote' Button (link to Contact page) */}
            <Link
              to="/contact"
              className="backdrop-blur-md bg-white/10 text-white hover:bg-yellow-500 hover:text-black font-bold py-2.5 px-6 uppercase transition-all rounded-md border border-white/20 hover:border-yellow-500 text-xs md:text-sm shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

         

        </div>
      </div>
    </section>
    </>
  );
}

export default Hero;