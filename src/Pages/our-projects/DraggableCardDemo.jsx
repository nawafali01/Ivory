import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    { title: "Lake Terrace Tower Cluster (D) JLT", image: "/images/gag 6.jpeg", className: "absolute top-10 left-[10%] rotate-[-5deg]" },
    { title: "Location: Gold Crest View 2 Cluster (J) JLT", image: "/images/gag7.jpeg", className: "absolute top-12 left-[25%] rotate-[3deg]" },
    { title: "Location: Gold Crest View 2 Cluster (J) JLT", image: "/images/gag8.jpeg", className: "absolute top-20 left-[40%] rotate-[-8deg]" },
    { title: "Location: Gold Crest View 2 Cluster (J) JLT", image: "/images/gag9.jpeg", className: "absolute top-15 right-[15%] rotate-[6deg]" },
    { title: "Location: Gold Crest View 2 Cluster (J) JLT", image: "/images/gag10.jpeg", className: "absolute bottom-20 left-[15%] rotate-[-4deg]" },
    { title: "Liv Residence Marina", image: "/images/gag5.jpeg", className: "absolute top-40 left-[30%] rotate-[-7deg]" },
    { title: "Gold Crest View 2 Cluster (J) JLT", image: "/images/gag11.jpeg", className: "absolute bottom-10 right-[20%] rotate-[5deg]" },
    { title: "Liv 27 Barbar shop Al Barsha 1", image: "/images/gag12.jpeg", className: "absolute top-5 right-[30%] rotate-[-2deg]" },
    { title: "Liv 27 Barbar shop Media City", image: "/images/gag13.jpeg", className: "absolute bottom-32 left-[45%] rotate-[8deg]" },
    { title: "Lake Terrace Tower Cluster (D) JLT", image: "/images/gag4.jpeg", className: "absolute top-5 left-[50%] rotate-[8deg]" },
    { title: "Lake Terrace Tower Cluster (D) JLT", image: "/images/gag3.jpeg", className: "absolute top-32 left-[65%] rotate-[10deg]" },
    { title: "Lake Terrace Tower Cluster (D) JLT", image: "/images/gag.jpeg", className: "absolute top-20 right-[40%] rotate-[2deg]" },
    { title: "Lake Terrace Tower Cluster (D) JLT", image: "/images/gag1.jpeg", className: "absolute top-24 left-[55%] rotate-[-7deg]" },
    { title: "Lake Terrace Tower Cluster (D) JLT", image: "/images/gag2.jpeg", className: "absolute top-8 left-[35%] rotate-[4deg]" },
  ];

  return (
    <DraggableCardContainer className="relative flex min-h-screen bg-neutral-50 w-full items-center justify-center overflow-hidden">
      
      {/* --- PROFESSIONAL TEXT SECTION --- */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-neutral-200/60 dark:text-neutral-900/40">
          Architecture
        </h2>
        <p className="mt-[-10px] max-w-lg text-lg md:text-2xl font-semibold text-neutral-600 dark:text-neutral-400">
          We don't just build homes, <span className="text-orange-600">we engineer dreams</span> that stand the test of time.
        </p>
      </div>

      {/* --- DRAGGABLE CARDS WITH POLAROID BORDER --- */}
      {items.map((item, i) => (
        <DraggableCardBody 
          key={i} 
          className={`${item.className} p-4 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-neutral-100 rounded-sm hover:z-50 transition-shadow duration-300`}
        >
          {/* Image Container */}
          <div className="relative overflow-hidden bg-neutral-100">
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none h-64 w-64 md:h-72 md:w-72 object-cover"
            />
            {/* Subtle Overlay on Image */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </div>

          {/* Title/Project Info */}
          <div className="mt-4 max-w-[250px]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-orange-600">
              Featured Project
            </p>
            <h3 className="mt-1 truncate text-sm font-bold text-neutral-800 dark:text-neutral-200">
              {item.title}
            </h3>
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}