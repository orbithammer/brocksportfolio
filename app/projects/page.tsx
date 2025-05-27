import ProjectCard from "../components/ProjectCard"
import { getAllProjects } from "../lib/projects"

export default function Projects() {
  const projects = getAllProjects()

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <p className="mb-8">
        Here you will find a showcase of my development projects. Each project demonstrates different skills and technologies I&apos;ve worked with.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.image}
            technologies={project.technologies}
            slug={project.slug}
          />
        ))}
      </div>
    </main>
  )
}