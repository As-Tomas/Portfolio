import { useState } from "react";
import projectData from "../../data/ProjectsData";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectsNav from "../ProjectCard/ProjectsNav";
import GlassPlate from "./Components/GlassPlate";

const Main = ({ content }) => {
  const [selectedProjectId, setSelectedProjectId] = useState(projectData[0].id); 
  
  const handleProjectSelect = (index) => {
    setSelectedProjectId(projectData[index].id);
};

  const selectedProject = projectData.find((project) => project.id === selectedProjectId);


  return (
    <div>
      {content === "about" && <GlassPlate />}
      {content === "projects" && (
        <ProjectCard key={selectedProject.id} project={selectedProject} />
      )}
      <div className=" m-8 flex justify-center pb-5">
        {content === "projects" ? <ProjectsNav onProjectSelect={handleProjectSelect} projectData={projectData}  /> : null}
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
