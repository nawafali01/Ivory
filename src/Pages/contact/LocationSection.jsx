import React from "react";

const LocationSection = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-black">
            Visit Our Clinic
          </h2>
          <p className="text-gray-600 mt-3">
            Ivory Aesthetics Clinic
          </p>
        </div>

        {/* Map Container */}
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.741692621164!2d55.192858073679474!3d25.11060383520577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b23bcdcaff5%3A0x3363bf9131aadb97!2sLIV27%20BARBERSHOP%20-%20AL%20BARSHA!5e0!3m2!1sen!2s!4v1773082973102!5m2!1sen!2s"
            
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ivory Aesthetics Clinic Location"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default LocationSection;