
import ProjectCard from '../ProjectCard/ProjectCard'
import projectData from '../../data/ProjectsData'
import About from './Components/About';
import Technologies from './Components/Technologies';

const Main = () => {
    const selectedProject = projectData.find((project) => project.id === 3);

  return (
    <div>
        <About />
        <hr className="mx-auto my-10 bg-black dark:bg-white w-1/2"></hr>
        {/* {selectedProject && <ProjectCard key={selectedProject.id} project={selectedProject} />} */}
        <div className='flex flex-row'>

        {projectData.map((project, index) => (
          <div 
          key={project.id}>
        <ProjectCard key={project.id} project={project} index={index}  />
          </div>
      ))}
        </div>

        <hr className="mx-auto my-10 bg-black dark:bg-white w-1/2"></hr>
        <Technologies />
    
        <hr className="mx-auto my-10 bg-black dark:bg-white w-1/2"></hr>
        
    </div>
  )
}

export default Main