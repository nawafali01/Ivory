import React from "react";

const images = [
  "/images/building-project.jpg",
    "/images/building-project1.jpg",
    "/images/building-project2.jpg",
    "/images/building-project3.jpg",
    "/images/building-project-8.jpg",
    "/images/building-project9.jpg",
    "/images/pool3.jpg",
    "/images/pool2.jpg",
    "/images/pool1.jpg",
     "/images/pool4.jpg",
    "/images/building-project4.jpg",
    "/images/building-project-5.jpg",
    "/images/building-project.jpg",
    "/images/building-project7.jpg",
     "/images/building-project10.jpg",
      "/images/building-project11.jpg",
       "/images/building-project12.jpg",
      "/images/building-project13.jpg",
       "/images/building-project14.jpg", 
       "/images/building-project15.jpg", 
       "/images/building-project16.jpg",
        "/images/building-project17.jpg",

];

// Random span styles
const spanStyles = [
  "col-span-2 row-span-2",
  "col-span-2",
  "row-span-2",
  "col-span-1 row-span-1",
];

const RandomGallery = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-black text-4xl font-semibold mb-12 text-center">
          Our Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((src, index) => {
            const randomSpan =
              spanStyles[Math.floor(Math.random() * spanStyles.length)];

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-xl ${randomSpan}`}
              >
                <img
                  src={`${src}?auto=format&fit=crop&w=800&q=60`}
                  alt="gallery"
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RandomGallery;