import { useState } from "react";
import projectSavedData from "../../../public/data/ProjectsData";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectsNav from "../ProjectCard/ProjectsNav";
import GlassPlate from "./Components/GlassPlate";

const Main = ({ content, setContent }) => {
  const projectData = [...projectSavedData].reverse();
  const [selectedProjectId, setSelectedProjectId] = useState(projectData[0].id);

  const handleProjectSelect = (index) => {
    setSelectedProjectId(projectData[index].id);
  };

  const selectedProject = projectData.find(
    (project) => project.id === selectedProjectId
  );

  // const whindoHeight = () => {
  //   console.log(window.innerHeight)
  //   if (window.innerHeight < 860) {

  //   }
  // }

  return (
    <div>
      {content === "about" && <GlassPlate setContent={setContent} />}

      <div className={`  `}>
        {content === "projects" && (
          <ProjectCard key={selectedProjectId} project={selectedProject} />
        )}

        {content === "projects" ? (
          <div className="flex mb-32 mt-5 justify-center items-center space-x-4">
            <div>
              <h3 className="font-semibold text-xl">Select a project:</h3>
            </div>
            <ProjectsNav
              onProjectSelect={handleProjectSelect}
              projectData={projectData}
              selectedProjectId={selectedProjectId}
            />
          </div>
        ) : null}
      </div>

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
