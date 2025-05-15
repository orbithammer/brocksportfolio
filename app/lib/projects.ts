// app/lib/projects.ts

// Define project data types
export interface Technology {
  name: string
  icon: string
}

export interface Project {
  slug: string
  title: string
  description: string
  image: string
  images: string[]
  technologies: Technology[]
  learnings: string[]
  githubUrl: string
  liveUrl: string
  liveIcon?: string
}

// Sample project data
export const projectsData: Project[] = [
  {
    slug: "fringefilmfinder",
    title: "Fringe Film Finder",
    description: "A mobile site that uses ChatGPT and Langchain to recommend movies. It draws upon a database of 10k+ titles.",
    image: "/images/fringefilm1.jpg", // Replace with actual thumbnail image
    images: ["/images/fringefilm1.jpg", "/images/fringefilm2.jpg"], // Replace with actual detail images
    technologies: [
      { name: "HTML", icon: "/icons/html5.svg" },
      { name: "CSS", icon: "/icons/css3.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/next.svg" }
    ],
    learnings: [
      "I found the limitations of prompt engineering. The first iteration of this project gave ChatGPT the user's favorite movie and the type of movie they would like to watch. The results were bland and unimpressive.",
      "For the second iteration, I started to use ChatGPT and other platforms as a coding mentor. This increased my output twofold at least.",
      "I remade the second iteration as a ChatGPT assistant. The output was unreliable at best.",
      "For the third iteration, I converted the movie database to JSON data since I had read it was the most efficient for data retrieval. After rebuilding the app with Langchain, the output became much more reliable."
    ],
    githubUrl: "https://github.com/orbithammer/Fringe-Film-Finder-v2",
    liveUrl: "https://fringe-film-finder.example.com",
    liveIcon: "/icons/globe.svg"
  },
  {
    slug: "portfolio",
    title: "Portfolio Site",
    description: "My personal portfolio site built with Next.js and TypeScript.",
    image: "/images/project2.jpg", // Replace with actual thumbnail image
    images: ["/images/portfolio1.jpg", "/images/portfolio2.jpg"], // Replace with actual detail images
    technologies: [
      { name: "HTML", icon: "/icons/html5.svg" },
      { name: "CSS", icon: "/icons/css3.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Next.js", icon: "/icons/next.svg" }
    ],
    learnings: [
      "Improved my skills with TypeScript and Next.js",
      "Learned about responsive design principles",
      "Implemented modern CSS techniques",
      "Created reusable components to maintain consistency throughout the site"
    ],
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://portfolio.example.com",
    liveIcon: "/icons/globe.svg"
  },
  {
    slug: "isglitchdotcom",
    title: "isGlitch.com",
    description: "A satirical tech news website.",
    image: "/images/project3.jpg", // Replace with actual thumbnail image
    images: ["/images/project3-full.jpg", "/images/project3-detail.jpg"], // Replace with actual detail images
    technologies: [
      { name: "HTML", icon: "/icons/html5.svg" },
      { name: "CSS", icon: "/icons/css3.svg" },
      { name: "JavaScript", icon: "/icons/js.svg" }
    ],
    learnings: [
      "Worked with third-party APIs to fetch weather data",
      "Implemented responsive design for all device sizes",
      "Created a location-based search feature",
      "Added dynamic theme changes based on current weather conditions"
    ],
    githubUrl: "https://github.com/username/weather-app",
    liveUrl: "https://weather-app.example.com",
    liveIcon: "/icons/globe.svg"
  }
]

/**
 * Get all projects
 */
export function getAllProjects(): Project[] {
  return projectsData
}

/**
 * Get a specific project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find(project => project.slug === slug)
}