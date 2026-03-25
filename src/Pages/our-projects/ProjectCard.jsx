import { MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="block">
      <div className="relative group overflow-hidden bg-white cursor-pointer border border-gray-200 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
        
        {/* Image */}
        <div className="relative overflow-hidden h-56">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-3 left-3 bg-black text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1">
            {project.cat}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-gray-900 text-sm font-extrabold tracking-widest uppercase mb-3">
            {project.title}
          </h3>
          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-6">
            {project.desc}
          </p>

          <hr className="border-gray-200 mb-4" />

          {project.location && (
            <p className="text-[11px] tracking-widest text-gray-500 uppercase flex items-center gap-1.5">
              <MapPinIcon className="w-3.5 h-3.5 text-black flex-shrink-0" />
              {project.location}
            </p>
          )}
        </div>

      </div>
    </Link>
  );
}