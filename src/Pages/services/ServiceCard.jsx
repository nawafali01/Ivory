import React from 'react';
import { 
  FaWrench, 
  FaPaintRoller, 
  FaLeaf, 
  FaBolt, 
  FaHammer, 
  FaHome, 
  FaSnowflake, 
  FaSwimmingPool, 
  FaThLarge 
} from 'react-icons/fa';
import { MdOutlineWaterDrop } from 'react-icons/md';

const ServicesCard = () => {
  const services = [
    { title: "Plumbing", desc: "Resolving leaks, pipe repairs, and faucet installations with precision and efficiency.", icon: <MdOutlineWaterDrop className="w-9 h-9" /> },
    { title: "Renovation", desc: "Transforming spaces with expert craftsmanship and innovative design for stunning home makeovers.", icon: <FaWrench className="w-8 h-8" /> },
    { title: "Painting", desc: "Elevating interiors and exteriors with flawless finishes and a spectrum of vibrant colors.", icon: <FaPaintRoller className="w-8 h-8" /> },
    { title: "Landscaping", desc: "Designing and maintaining beautiful, functional gardens and landscapes tailored to your preferences.", icon: <FaLeaf className="w-8 h-8" /> },
    { title: "Electrical Work", desc: "Ensuring safety and functionality through skilled electrical installations and troubleshooting services.", icon: <FaBolt className="w-8 h-8" /> },
    { title: "Carpentry", desc: "Crafting custom solutions and precise installations for functional and aesthetic woodworking projects.", icon: <FaHammer className="w-8 h-8" /> },
    { title: "Roofing", desc: "Protecting homes with professional roofing solutions, repairs, and maintenance for lasting durability.", icon: <FaHome className="w-8 h-8" /> },
    { title: "AC Cleaning", desc: "Expert maintenance, repair, and installation services tailored to meet your specific needs.", icon: <FaSnowflake className="w-8 h-8" /> },
    { title: "Pool Construction", desc: "Designing and building luxury swimming pools with advanced filtration and stunning aesthetics.", icon: <FaSwimmingPool className="w-9 h-9" /> },
    { title: "Tiling & Flooring", desc: "Expert installation of premium tiles and marble for a sophisticated and durable floor finish.", icon: <FaThLarge className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-gray-50 py-20 px-6 text-center">
      <div className="max-w-7xl mx-auto mb-16">
        <div className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-widest text-white uppercase bg-black rounded-full">
          Services
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Complete Maintenance Excellence for Your Home
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-16">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)]"
          >
            {/* Icon */}
            <div className="text-black mb-6 transition-all duration-300 group-hover:scale-110">
              {item.icon}
            </div>

            <h3 className="text-black text-xl font-semibold mb-3 tracking-wide">
              {item.title}
            </h3>

            <p className="text-gray-500 text-base leading-relaxed max-w-[250px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;