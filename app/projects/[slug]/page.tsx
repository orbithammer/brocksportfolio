import Image from "next/image"
import Link from "next/link"
import { getProjectBySlug } from "@/app/lib/projects"
// import BackIcon from "@/public/back-icon.svg"
import GithubIcon from "@/public/icons/github.svg"
// import LiveSiteIcon from "@/app/components/LiveSiteIcon"

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  
  // Get project data based on slug
  const project = getProjectBySlug(slug);
  
  // Handle case where project doesn't exist
  if (!project) {
    return (
      <main className="max-w-4xl mx-auto p-6">
        <div className="mb-6">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-main-text hover:text-main-color transition-colors"
          >
            {/* <Image src={BackIcon} width={20} height={20} alt="Back" className="mr-2" /> */}
            <span>Back to projects</span>
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-6">Project Not Found</h1>
        <p>The project you're looking for doesn't exist.</p>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-main-text hover:text-main-color transition-colors"
        >
          {/* <Image src={BackIcon} width={20} height={20} alt="Back" className="mr-2" /> */}
          {/* <span>Back to projects</span> */}
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      
      {/* Project images section */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.images.map((image, index) => (
          <div key={index} className="relative h-64 w-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image 
              src={image} 
              fill
              alt={`${project.title} screenshot ${index + 1}`}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      
      <h3 className="text-xl font-bold mb-2">Technologies Used:</h3>
      <div className="flex flex-wrap gap-4 mb-6">
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
            className="opacity-90"
          />
          {tech.name !== "Next.js" && <span className="font-medium">{tech.name}</span>}
        </div>
      ))}
      </div>
      
      <h3 className="text-xl font-bold mb-2">Description:</h3>
      <p className="mb-6 text-lg leading-relaxed">{project.description}</p>
      
      <h3 className="text-xl font-bold mb-2">What I Learned:</h3>
      <div className="mb-6 bg-[#1a1a1a] p-5 rounded-lg shadow-inner">
        <ul className="list-disc pl-5 space-y-3">
          {project.learnings.map((item, index) => (
            <li key={index} className="text-gray-200">{item}</li>
          ))}
        </ul>
      </div>
      
      <h3 className="text-xl font-bold mb-2">Links:</h3>
      <div className="flex gap-4">
        <a 
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-accent-red rounded-full hover:opacity-80 transition-all hover:scale-110 shadow-md"
          title="View GitHub Repository"
        >
          <Image src={GithubIcon} width={28} height={28} alt="GitHub" />
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-accent-red rounded-full hover:opacity-80 transition-all hover:scale-110 shadow-md"
          title="View Live Site"
        >
          {/* <LiveSiteIcon customIcon={project.liveIcon} /> */}
        </a>
      </div>
    </main>
  );
}