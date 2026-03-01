import React from "react";


const ContactSection = () => {
  return (
    <section className="bg-gray-100 w-full min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="px-12 py-18 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-black">
            Ready to define your signature<br/>space?
          </h2>

          <p className="mt-6 text-base font-semibold text-black">
            Let’s start the discovery.
          </p>

          <form className="mt-12 space-y-6">
            <input
              type="text"
              placeholder="YOUR NAME"
              className="w-full  bg-gray-200 border border-gray-500 px-5 py-4 text-xs tracking-widest placeholder-gray-500 focus:outline-none"
            />

            <input
              type="text"
              placeholder="YOUR PHONE NO"
              className="w-full  bg-gray-200 border border-gray-500 px-5 py-4 text-xs tracking-widest placeholder-gray-500 focus:outline-none"
            />

            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="w-full  bg-gray-200 border border-gray-500 px-5 py-4 text-xs tracking-widest placeholder-gray-500 focus:outline-none"
            />

            <textarea
              rows="5"
              placeholder="YOUR MESSAGE"
              className="w-full bg-gray-200 border border-gray-500 px-5 py-4 text-xs tracking-widest placeholder-gray-500 resize-none focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="mt-2 bg-black text-white text-xs tracking-widest px-10 py-4 hover:opacity-90 transition"
            >
              SEND MAIL
            </button>
          </form>
        </div>
{/* RIGHT SIDE - Div aur Image dono choti kar di hain */}
<div className="w-full md:w-[90%] h-auto self-center"> 
  {/* 'h-auto' aur 'self-center' se ye vertically align rahay ga */}
  <div className="w-full h-[770px] overflow-hidden rounded-xl shadow-lg">
    <img 
      src="/images/imageForm.jpg"
      alt="Office"
      className="w-full h-full object-cover" 
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default ContactSection;