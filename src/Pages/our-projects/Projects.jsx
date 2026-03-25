import { useState } from "react";
import { PROJECTS_DATA } from './ProjectList';

import ProjectsHero from "./ProjectsHero";    // ✅ ./ same folder
import FilterNav from "./FilterNav";          // ✅ ./ same folder
import ProjectsGrid from "./ProjectsGrid";    // ✅ ./ same folder

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  function handleFilterChange(filter) {
    setActiveFilter(filter);
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <ProjectsHero />

      <FilterNav
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      <ProjectsGrid
        key={activeFilter}
        projects={PROJECTS_DATA}
        activeFilter={activeFilter}
      />

      
    </div>
  );
}