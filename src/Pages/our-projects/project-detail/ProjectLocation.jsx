import { MapPinIcon } from "@heroicons/react/24/outline";

export default function ProjectLocation({ location, mapLocation }) {
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="mb-10">
      {/* Map Container - Headers yahan se remove kar diye hain */}
      <div className="relative w-full h-[300px] rounded-sm overflow-hidden bg-neutral-100 mb-5 group border border-gray-100">
        <iframe
          title="Project Map"
          className="w-full h-full border-0 grayscale contrast-[1.1] opacity-90 group-hover:opacity-100 transition-all duration-700"
          loading="lazy"
          src={mapEmbedUrl}
        />
        
        {/* Floating Badge with Heroicon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-2.5 rounded-sm flex items-center gap-2.5 text-[10px] font-bold tracking-[0.15em] uppercase shadow-2xl">
          <MapPinIcon className="w-4 h-4 text-white stroke-[2.5]" />
          {location}
        </div>
      </div>

      {/* Description Text */}
      <div className="max-w-2xl border-l border-neutral-200 pl-6">
        <p className="text-neutral-500 text-sm md:text-[15px] font-normal leading-relaxed">
          {mapLocation}
        </p>
      </div>
    </div>
  );
}