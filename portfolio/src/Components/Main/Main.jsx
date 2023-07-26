
import ProjectCard from '../ProjectCard/ProjectCard'
import projectData from '../../data/ProjectsData'
import About from './Components/About';
import Technologies from './Components/Technologies';
import GlassPlate from './Components/GlassPlate';

const Main = () => {
    const selectedProject = projectData.find((project) => project.id === 3);

  return (
    <div>
      <GlassPlate />
        {/* <About />
        <hr className="mx-auto my-10 bg-black dark:bg-white w-1/2"></hr>
        {selectedProject && <ProjectCard key={selectedProject.id} project={selectedProject} />}

        <hr className="mx-auto my-10 bg-black dark:bg-white w-1/2"></hr>
        <Technologies />
     */}
        <hr className="mx-auto my-10 bg-black dark:bg-white w-1/2"></hr>
        {/* {projectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))} */}
      
        
    </div>
  )
}

export default Main