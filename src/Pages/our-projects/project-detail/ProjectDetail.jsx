import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS_DETAIL_DATA } from "./detailData";
import HeroSection      from "./HeroSection";
import ThumbStrip       from "./ThumbStrip";
import ProjectBrief     from "./ProjectBrief";
import ObjectivesCard   from "./ObjectivesCard";
import StatsCard        from "./StatsCard";
import TestimonialCard  from "./TestimonialCard";
import ProjectLocation  from "./ProjectLocation";
import ProjectSidebar   from "./ProjectSidebar";

export default function ProjectDetail() {
  const { id }   = useParams();
  const navigate = useNavigate();
  const project  = PROJECTS_DETAIL_DATA.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="font-black text-4xl tracking-widest text-neutral-300 uppercase">
          Project Not Found
        </p>
        <button
          onClick={() => navigate("/projects")}
          className="px-6 py-2.5 bg-black text-white text-[11px] font-bold tracking-[0.1em] uppercase rounded-sm hover:bg-neutral-800 transition-colors"
        >
          ← Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* ── Top Navigation Bar ── */}
      <div className="bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 md:px-8 h-16 flex items-center justify-between sticky top-0 z-50">
        <button
          onClick={() => navigate("/projects")}
          className="flex items-center gap-2 text-neutral-500 hover:text-black transition-colors text-[10px] font-bold tracking-[0.12em] uppercase group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Projects
        </button>

        <div className="hidden md:block text-[10px] text-neutral-400 tracking-[0.1em] uppercase font-medium">
          Projects <span className="text-neutral-200 mx-2">/</span> <span className="text-black">{project.title}</span>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-sm text-[10px] font-bold uppercase tracking-wider hover:bg-gray-50 transition-all">
            Share
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-sm text-[10px] font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all">
            Download Specs
          </button>
        </div>
      </div>

      {/* ── Hero & Visuals ── */}
      <HeroSection
        title={project.title}
        desc={project.desc}
        cat={project.cat}
        image={project.image}
      />

      <ThumbStrip
        images={project.images}
        imageLabels={project.imageLabels}
      />

      {/* ── Main Layout ── */}
      <main className="max-w-[1200px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">

          {/* Left Column: Yahan sab kuch aligned hai */}
          <div className="flex flex-col gap-16 max-w-[800px]">
            
            {/* 1. Brief Section */}
            <section>
               <ProjectBrief body={project.body} />
            </section>

            {/* Objectives & Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ObjectivesCard objectives={project.objectives} />
              <StatsCard stats={project.stats} />
            </div>

            {/* 2. Testimonial Section */}
            <section className="border-l-4 border-black pl-10 py-4 bg-neutral-50/50">
              <TestimonialCard testimonial={project.testimonial} />
            </section>

            {/* 3. Location Section (Clean Headings Here) */}
            <section>
              {/* <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400 mb-2">
                Project Location
              </p> */}
              <h3 className="font-black text-3xl md:text-4xl tracking-tighter uppercase mb-8">
                Location and Context
              </h3>
              
              <ProjectLocation
                location={project.location}
                mapLocation={project.mapLocation}
              />
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <aside>
            <div className="lg:sticky lg:top-24">
              <ProjectSidebar
                status={project.status}
                highlights={project.highlights}
              />
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}