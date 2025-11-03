import { useState } from 'react';
import projectSavedData from '../../../public/data/ProjectsData';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectsNav from '../ProjectCard/ProjectsNav';
import GlassPlate from './Components/GlassPlate';

const Main = ({ content, setContent }) => {
  const projectData = [...projectSavedData].reverse();
  const [selectedProjectId, setSelectedProjectId] = useState(projectData[0].id);

  const handleProjectSelect = projectId => {
    setSelectedProjectId(projectId);
  };

  const selectedProject = projectData.find(project => project.id === selectedProjectId);

  // const whindoHeight = () => {
  //   console.log(window.innerHeight)
  //   if (window.innerHeight < 860) {

  //   }
  // }

  return (
    <div className='flex flex-col gap-12'>
      {content === 'about' && <GlassPlate setContent={setContent} />}

      {content === 'projects' && (
        <div className='flex flex-col items-center gap-10'>
          <ProjectCard key={selectedProjectId} project={selectedProject} />

          <div className='glass-panel bg-white/10 px-6 py-4 sm:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 w-full max-w-none text-white/80'>
            <div className='space-y-1'>
              <h3 className='text-xl font-semibold text-white'>Select a project</h3>
            </div>
            <ProjectsNav onProjectSelect={handleProjectSelect} projectData={projectData} selectedProjectId={selectedProjectId} />
          </div>
        </div>
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
