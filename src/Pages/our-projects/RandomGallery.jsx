import React from "react";

const images = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1493244040629-496f6d136cc3",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
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
    <section className="bg-white py-20 px-6">
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