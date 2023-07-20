
import ProjectCard from '../ProjectCard/ProjectCard'
import projectData from '../../data/ProjectsData'

const Main = () => {
    const selectedProject = projectData.find((project) => project.id === 3);

  return (
    <div>
        <div>
            Here is main section
        </div>
        {selectedProject && <ProjectCard key={selectedProject.id} project={selectedProject} />}
    
        {/* {projectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))} */}
        
    </div>
  )
}

export default Main