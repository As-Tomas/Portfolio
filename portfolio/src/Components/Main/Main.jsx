import { useMemo, useState } from "react";
import projectSavedData from "../../../public/data/ProjectsData";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectsNav from "../ProjectCard/ProjectsNav";
import GlassPlate from "./Components/GlassPlate";

const Main = ({ content, setContent }) => {
  const projectData = useMemo(() => [...projectSavedData].reverse(), []);
  const [selectedProjectId, setSelectedProjectId] = useState(projectData[0].id);

  const handleProjectSelect = (id) => {
    setSelectedProjectId(id);
  };

  const selectedProject = projectData.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
      {content === "about" && <GlassPlate setContent={setContent} />}

      {content === "projects" && selectedProject && (
        <section className="glass-surface-strong relative w-full overflow-hidden rounded-[32px] border border-white/25 px-4 py-8 shadow-[0_28px_65px_rgba(12,16,32,0.55)] sm:px-10">
          <div className="absolute inset-0 -z-10 opacity-60" aria-hidden style={{
            background:
              'radial-gradient(circle at 18% 10%, rgba(255, 255, 255, 0.16), transparent 52%), radial-gradient(circle at 88% 18%, rgba(0, 187, 249, 0.28), transparent 55%), radial-gradient(circle at 65% 85%, rgba(131, 56, 236, 0.32), transparent 60%)',
          }} />

          <ProjectCard key={selectedProjectId} project={selectedProject} />

          <div className="mt-12 flex flex-col items-center justify-between gap-5 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-white">Select a project</h3>
              <p className="muted-text text-sm">Hover or tap the icons to explore featured builds.</p>
            </div>
            <ProjectsNav
              onProjectSelect={handleProjectSelect}
              projectData={projectData}
              selectedProjectId={selectedProjectId}
            />
          </div>
        </section>
      )}

      {/* <About />
        <hr className="mx-auto my-10 bg-black dark:bg-white w-1/2"></hr>
        {selectedProject && <ProjectCard key={selectedProject.id} project={selectedProject} />}

        <hr className="mx-auto my-10 bg-black dark:bg-white w-1/2"></hr>
        <Technologies />
     */}

      {/* {projectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))} */}
    </div>
  );
};

export default Main;
