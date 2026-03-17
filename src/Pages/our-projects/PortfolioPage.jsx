import React from "react";
import {PROJECTS_LIST} from './PROJECTS_LIST'
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-neutral-100">
      {/* Page Main Header */}
      <div className="py-20 text-center bg-white border-b">
        <h1 className="text-5xl font-black text-neutral-900 tracking-tighter uppercase">Our Portfolio</h1>
        <p className="text-neutral-500 mt-2 font-medium">Explore our masterpieces through interaction</p>
      </div>

      {/* Loop through projects */}
      {PROJECTS_LIST.map((project, projectIndex) => (
        <section key={project.id} className="relative h-screen w-full border-b border-neutral-300 overflow-hidden bg-neutral-50">
          
          {/* Project Details (Top-Left) */}
          <div className="absolute top-12 left-10 z-30 pointer-events-none">
            <h2 className="text-6xl font-black text-neutral-200 uppercase leading-none opacity-50">
              0{projectIndex + 1}
            </h2>
            <h3 className="text-3xl font-bold text-neutral-800 mt-2">{project.title}</h3>
            <p className="text-orange-600 font-bold tracking-widest uppercase text-sm italic">
              — {project.location}
            </p>
          </div>

          {/* Interaction Area */}
          <DraggableCardContainer className="w-full h-full relative flex items-center justify-center">
            {project.images.map((img, imgIndex) => {
              // Har image ko thora alag jagah phainkne ka logic
              const positions = [
                "top-[15%] left-[20%]", 
                "top-[40%] left-[50%]", 
                "top-[10%] right-[20%]", 
                "bottom-[15%] left-[30%]", 
                "bottom-[20%] right-[25%]"
              ];
              const rotations = ["rotate-[-6deg]", "rotate-[4deg]", "rotate-[-2deg]", "rotate-[8deg]", "rotate-[-10deg]"];

              return (
                <DraggableCardBody 
                  key={imgIndex} 
                  className={`absolute ${positions[imgIndex % positions.length]} ${rotations[imgIndex % rotations.length]} p-3 bg-white shadow-xl border border-neutral-200 rounded-sm hover:z-50 active:scale-95 transition-transform`}
                >
                  <img
                    src={img}
                    alt={`${project.title} - ${imgIndex}`}
                    className="pointer-events-none h-60 w-60 md:h-80 md:w-80 object-cover"
                  />
                  <div className="mt-3">
                    <p className="text-[10px] text-neutral-400 font-mono">IMG_0{imgIndex + 1}</p>
                  </div>
                </DraggableCardBody>
              );
            })}
          </DraggableCardContainer>
        </section>
      ))}

      {/* Footer / Contact Trigger */}
      <footer className="py-20 text-center bg-black text-white">
        <h2 className="text-2xl font-bold">Interested in a similar design?</h2>
        <button className="mt-6 px-8 py-3 bg-orange-600 hover:bg-orange-700 transition-colors font-bold uppercase tracking-widest text-sm">
          Get a Quote
        </button>
      </footer>
    </main>
  );
}