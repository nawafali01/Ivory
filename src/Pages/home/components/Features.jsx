import React from 'react';
// icons from react-icons to replace emojis
import { FiAward, FiSmartphone, FiShield } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Premium Quality",
      description: "We ensure every project meets the highest industry standards, using superior materials and skilled craftsmanship.",
      Icon: FiAward,
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      title: "Modern Design",
      description: "Integrating the latest trends and smart technologies to create functional and aesthetically pleasing spaces.",
      Icon: FiSmartphone,
      bgColor: "bg-amber-50",
    },
    {
      id: 3,
      title: "Safety Standards",
      description: "Compliance with international safety and environmental regulations is at the core of our operations.",
      Icon: FiShield,
      bgColor: "bg-green-50",
    },
    {
      id: 4,
      title: "Trusted Partnership",
      description: "We believe in transparency and long-term relationships, delivering projects on time and within budget.",
      Icon: FaHandshake,
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50  py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading Section */}
        <div className="text-center mb-16">
        
          
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
           Journey

          </h1>


          <p className="text-black max-w-4xl mx-auto text-center leading-relaxed text-lg ">
            At I C G Technical Services LLC Fit-Out, we deliver more than just interiors. We build trust through 
            precision, quality, and a commitment to international standards.
          </p>
        </div>

        {/* Cards Grid with Strong Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white p-8 rounded-2xl border border-gray-200
                         flex items-start space-x-6 cursor-pointer
                         transition-all duration-300 ease-in-out
                         hover:-translate-y-2 hover:shadow-lg hover:border-blue-200"
            >
              {/* Icon Container */}
              <div className={`flex-shrink-0 w-24 h-24 border border-gray-100 rounded-xl 
                               flex items-center justify-center text-4xl 
                               transition-all duration-500 shadow-inner
                               group-hover:scale-110 group-hover:rotate-6`}>
                {/* render the React icon component */}
                {feature.Icon && <feature.Icon />}
              </div>

              {/* Text Section */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold  text-black mb-3 
                               transition-colors duration-300 group-hover:text-blue-600">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-base  leading-relaxed opacity-90">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;