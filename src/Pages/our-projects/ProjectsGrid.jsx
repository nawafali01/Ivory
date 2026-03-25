import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects, activeFilter }) {
  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.cat === activeFilter);

  return (
    <div className="px-16 mt-10 pb-0">
      <div className="grid grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-600 text-sm tracking-widest uppercase">
          No projects in this category yet.
        </div>
      )}

      <div className="flex flex-col items-center mt-14 mb-0 gap-3">
        <button className="bg-black hover:bg-gray-900 text-white text-[11px] font-bold tracking-[0.2em] uppercase px-12 py-4 border border-black hover:border-gray-700 transition-all duration-300 rounded-full">
          Contact Us
        </button>
        <p className="text-gray-400 text-[10px] tracking-widest uppercase pb-6">
          Let's build something great together →
        </p>
      </div>

    </div>
  );
}