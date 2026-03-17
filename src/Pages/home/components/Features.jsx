import React from 'react';
import { FiAward, FiSmartphone, FiShield } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Premium Quality",
      description: "We ensure every project meets the highest industry standards, using superior materials and skilled craftsmanship.",
      Icon: FiAward,
    },
    {
      id: 2,
      title: "Modern Design",
      description: "Integrating the latest trends and smart technologies to create functional and aesthetically pleasing spaces.",
      Icon: FiSmartphone,
    },
    {
      id: 3,
      title: "Safety Standards",
      description: "Compliance with international safety and environmental regulations is at the core of our operations.",
      Icon: FiShield,
    },
    {
      id: 4,
      title: "Trusted Partnership",
      description: "We believe in transparency and long-term relationships, delivering projects on time and within budget.",
      Icon: FaHandshake,
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Journey
          </h2>
          <p className="text-gray-500 max-w-4xl mx-auto text-center leading-relaxed text-base md:text-lg">
            At ICG Technical Services LLC Fit-Out, we deliver more than just interiors. We build trust through
            precision, quality, and a commitment to international standards.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white p-8 rounded-2xl border border-gray-200
                         flex flex-col items-center text-center
                         md:flex-row md:items-start md:text-left
                         space-y-4 md:space-y-0 md:space-x-6 cursor-pointer
                         transition-all duration-300 ease-in-out
                         hover:-translate-y-2 hover:shadow-lg hover:border-blue-200"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 w-24 h-24 border border-gray-100 rounded-xl
                               flex items-center justify-center
                               transition-all duration-500 shadow-inner
                               group-hover:scale-110 group-hover:rotate-6">
                {feature.Icon && (
                  <feature.Icon className="text-4xl text-yellow-500" />
                )}
              </div>

              {/* Text Section */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2
                               transition-colors duration-300 group-hover:text-blue-600">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
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