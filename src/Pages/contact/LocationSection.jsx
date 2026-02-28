import React from "react";

const LocationSection = () => {
  return (
    <section className="w-full py-20 bg-gray-100">
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115563.89604583099!2d55.142095275399875!3d25.1569224392403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d18c918485%3A0xe6ebdbe0371191ea!2sIvory%20Aesthetics%20Clinic!5e0!3m2!1sen!2s!4v1772276987246!5m2!1sen!2s"
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