import React, { useRef } from "react";
import formimg from '../../../assets/images/portrait-engineer-job-site-work-hours.jpg'
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ry2omcs",    // EmailJS Service ID
        "template_5fsy7sm",   // EmailJS Template ID
        form.current,
        "EVpMxe_gL89i1ppzg"     // EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset(); // Form reset after success
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact-form" className="bg-gray-50 w-full min-h-screen flex items-center py-10 md:py-16">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-6">

        {/* LEFT SIDE - Form */}
        <div className="w-full">
          <div className="bg-white p-6 md:p-9 rounded-2xl shadow-xl border border-gray-200">
            
            <h2 className="text-2xl md:text-3xl font-black text-black leading-tight">
              Ready to define your signature space?
            </h2>

            <p className="mt-2 text-sm font-bold text-gray-600">
              Let’s start the discovery.
            </p>

            <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-4">

              <input
                type="text"
                name="name"
                placeholder="YOUR NAME"
                className="w-full bg-gray-50 border-2 border-gray-300 px-4 py-3 text-xs font-bold tracking-widest text-black placeholder-gray-500 focus:border-black focus:bg-white focus:outline-none transition-all rounded-lg"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="YOUR PHONE NO"
                className="w-full bg-gray-50 border-2 border-gray-300 px-4 py-3 text-xs font-bold tracking-widest text-black placeholder-gray-500 focus:border-black focus:bg-white focus:outline-none transition-all rounded-lg"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                className="w-full bg-gray-50 border-2 border-gray-300 px-4 py-3 text-xs font-bold tracking-widest text-black placeholder-gray-500 focus:border-black focus:bg-white focus:outline-none transition-all rounded-lg"
                required
              />

              <textarea
                name="message"
                rows="4"
                placeholder="YOUR MESSAGE"
                className="w-full bg-gray-50 border-2 border-gray-300 px-4 py-3 text-xs font-bold tracking-widest text-black placeholder-gray-500 resize-none focus:border-black focus:bg-white focus:outline-none transition-all rounded-lg"
                required
              ></textarea>

              {/* Hidden field for current time */}
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              <button
                type="submit"
                className="w-full md:w-max mt-2 bg-black text-white text-[10px] font-black tracking-widest px-10 py-3.5 hover:bg-gray-800 transition-all rounded-md shadow-lg uppercase"
              >
                Send Mail
              </button>

            </form>
          </div>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="w-full h-full">
          <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden rounded-2xl shadow-lg">
            <img 
              src={formimg}
              alt="Office"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;