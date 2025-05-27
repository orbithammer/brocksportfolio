import Image from "next/image"
import Link from "next/link"
import { getProjectBySlug } from "@/app/lib/projects"
import GithubIcon from "@/public/icons/github.svg"

type ProjectPageProps = {
  params: {
    slug: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  // Handle case when project is not found
  if (!project) {
    return (
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Project Not Found</h1>
        <p>The project you're looking for doesn't exist.</p>
      </main>
    )
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Project title */}
      <header>
        <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      </header>
      
      {/* Project images gallery */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((image, index) => (
            <figure 
              key={index} 
              className="relative h-64 w-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image 
                src={image} 
                fill
                alt={`${project.title} screenshot ${index + 1}`}
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </section>
      
      {/* Technologies used */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Technologies Used:</h2>
        <div className="flex flex-wrap gap-4">
          {project.technologies.map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 px-3 py-2 bg-accent-red text-main-text rounded-md transition-transform hover:scale-105"
            >
              <Image 
                src={tech.icon} 
                width={tech.name === "Next.js" ? 120 : 24} 
                height={tech.name === "Next.js" ? 120 : 24} 
                alt={tech.name} 
                className="opacity-90 icon"
              />
              {/* Only show text for non-Next.js technologies */}
              {tech.name !== "Next.js" && (
                <span className="font-medium">{tech.name}</span>
              )}
            </div>
          ))}
        </div>
      </section>
      
      {/* Project description */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Description:</h2>
        <p className="text-lg leading-relaxed">{project.description}</p>
      </section>
      
      {/* Learning outcomes */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">What I Learned:</h2>
        <div className="bg-[#1a1a1a] p-5 rounded-lg shadow-inner">
          <ul className="list-disc pl-5 space-y-3">
            {project.learnings.map((item, index) => (
              <li key={index} className="text-gray-200">{item}</li>
            ))}
          </ul>
        </div>
      </section>
      
      {/* External links */}
      <section>
        <h2 className="text-xl font-bold mb-2">Links:</h2>
        <div className="flex gap-4">
          {/* GitHub repository link */}
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-accent-red rounded-full hover:opacity-80 transition-all hover:scale-110 shadow-md icon"
            title="View GitHub Repository"
          >
            <Image src={GithubIcon} width={28} height={28} alt="GitHub" />
          </a>
          
          {/* Live site link - only render if liveIcon exists */}
          {project.liveIcon && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-accent-red rounded-full hover:opacity-80 transition-all hover:scale-110 shadow-md icon"
              title="View Live Site"
            >
              <Image src={project.liveIcon} width={28} height={28} alt="Live site" />
            </a>
          )}
        </div>
      </section>
    </main>
  )
}