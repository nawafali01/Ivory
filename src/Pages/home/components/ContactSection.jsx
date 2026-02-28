import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-[#dcdcdc] w-full min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="px-16 py-20 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold text-black leading-snug">
            Ready to define your signature space?
          </h2>

          <p className="mt-4 text-sm text-black">
            Let’s start the discovery.
          </p>

          <form className="mt-12 space-y-6">
            <input
              type="text"
              placeholder="YOUR NAME"
              className="w-full bg-transparent border border-gray-500 px-5 py-4 text-xs tracking-widest placeholder-gray-500 focus:outline-none"
            />

            <input
              type="text"
              placeholder="YOUR PHONE NO"
              className="w-full bg-transparent border border-gray-500 px-5 py-4 text-xs tracking-widest placeholder-gray-500 focus:outline-none"
            />

            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="w-full bg-transparent border border-gray-500 px-5 py-4 text-xs tracking-widest placeholder-gray-500 focus:outline-none"
            />

            <textarea
              rows="5"
              placeholder="YOUR MESSAGE"
              className="w-full bg-transparent border border-gray-500 px-5 py-4 text-xs tracking-widest placeholder-gray-500 resize-none focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="mt-6 bg-black text-white text-xs tracking-widest px-10 py-4 hover:opacity-90 transition"
            >
              SEND MAIL
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="h-full">
          {/* Replace this div with your image */}
          <div className="w-full h-full bg-gray-300">
            {/* Example image placeholder */}
            {/* 
            <img 
              src="/your-image.jpg" 
              alt="Office"
              className="w-full h-full object-cover"
            /> 
            */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;