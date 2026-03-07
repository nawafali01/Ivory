import React from 'react';
import { 
  WrenchScrewdriverIcon, 
  PaintBrushIcon, 
  HomeModernIcon, 
  BoltIcon, 
  CubeIcon, 
  HomeIcon, 
  SunIcon
} from '@heroicons/react/24/solid';

// Custom Drop Icon
const DropIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 18a6 6 0 110-12 6 6 0 010 12z" />
  </svg>
);

const ServicesCard = () => {
  const services = [
    {
      title: "Plumbing",
      desc: "Resolving leaks, pipe repairs, and faucet installations with precision and efficiency.",
      icon: <DropIcon />
    },
    {
      title: "Renovation",
      desc: "Transforming spaces with expert craftsmanship and innovative design for stunning home makeovers.",
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />
    },
    {
      title: "Painting",
      desc: "Elevating interiors and exteriors with flawless finishes and a spectrum of vibrant colors.",
      icon: <PaintBrushIcon className="w-8 h-8" />
    },
    {
      title: "Landscaping",
      desc: "We specialize in designing and maintaining beautiful, functional gardens and landscapes tailored to your preferences.",
      icon: <HomeModernIcon className="w-8 h-8" />
    },
    {
      title: "Electrical Work",
      desc: "Ensuring safety and functionality through skilled electrical installations and troubleshooting services.",
      icon: <BoltIcon className="w-8 h-8" />
    },
    {
      title: "Carpentry",
      desc: "Crafting custom solutions and precise installations for functional and aesthetic woodworking projects.",
      icon: <CubeIcon className="w-8 h-8" />
    },
    {
      title: "Roofing",
      desc: "Protecting homes with professional roofing solutions, repairs, and maintenance for lasting durability.",
      icon: <HomeIcon className="w-8 h-8" />
    },
    {
      title: "AC Cleaning",
      desc: "We offer expert maintenance, repair, and installation services tailored to meet your specific needs.",
      icon: <SunIcon className="w-8 h-8" />
    }
  ];

  return (
    <div className="bg-[#0a1120] py-20 px-6 text-center">
      {/* Container for Heading and Tag */}
      <div className="max-w-7xl mx-auto mb-16">
        {/* Top small div (Services Tag) */}
        <div className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full">
          Services
        </div>

        {/* Main Section Heading */}
        <h6 className="text-2xl md:text-2xl font-bold text-white">
          Complete Maintenance Excellence for Your Home
        </h6>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {services.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center group">
            {/* Icon Container */}
            <div className="text-white mb-6 transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>
            
            {/* Heading */}
            <h3 className="text-white text-xl font-semibold mb-4 tracking-wide">
              {item.title}
            </h3>
            
            {/* Paragraph */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;