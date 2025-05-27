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

// Project data
export const projectsData: Project[] = [
  {
    slug: "fringefilmfinder",
    title: "Fringe Film Finder",
    description: "A mobile site that uses ChatGPT and Langchain to recommend movies. It draws upon a database of 10k+ titles.",
    image: "/images/fringefilm1.jpg",
    images: ["/images/fringefilm1.jpg", "/images/fringefilm2.jpg"],
    technologies: [
      { name: "HTML", icon: "/icons/html5.svg" },
      { name: "CSS", icon: "/icons/css3.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "React Router", icon: "/icons/react-router.svg"}
    ],
    learnings: [
      "I found the limitations of prompt engineering. The first iteration of this project gave ChatGPT the user's favorite movie and the type of movie they would like to watch. The results were bland and unimpressive.",
      "For the second iteration, I started to use ChatGPT and other platforms as a coding mentor. This increased my output twofold at least.",
      "I remade the second iteration as a ChatGPT assistant. The output was unreliable at best.",
      "For the third iteration, I converted the movie database to JSON data since I had read it was the most efficient for data retrieval. After rebuilding the app with Langchain, the output became much more reliable."
    ],
    githubUrl: "https://github.com/orbithammer/Fringe-Film-Finder-v2",
    liveUrl: "https://fringefilmfinder.netlify.app/",
    liveIcon: "/icons/clapper.svg"
  },
  {
    slug: "portfolio",
    title: "Portfolio Site",
    description: "My personal portfolio site built with Next.js and TypeScript.",
    image: "/images/portfolio1.jpg",
    images: ["/images/portfolio1.jpg", "/images/portfolio2.jpg"],
    technologies: [
      { name: "HTML", icon: "/icons/html5.svg" },
      { name: "CSS", icon: "/icons/css3.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Next.js", icon: "/icons/next.svg" }
    ],
    learnings: [
      "Initially built the portfolio using React Router to strengthen my routing fundamentals, then migrated to Next.js for improved performance, SEO benefits, and better developer experience with file-based routing",
      "Implemented a dynamic light/dark theme system that respects user's system preferences using CSS custom properties and React context, ensuring smooth transitions and persistent state across sessions",
      "Leveraged Tailwind CSS to implement modern design patterns including responsive grid layouts, fluid typography, and subtle animations while maintaining a consistent design system throughout the application",
      "Developed a component library of reusable UI elements (buttons, cards, navigation) following atomic design principles, which improved development speed and ensured visual consistency across all pages"
    ],
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://brocksportfolio.netlify.app/",
    liveIcon: "/icons/computer.svg"
  },
  {
    slug: "isglitchdotcom",
    title: "isGlitch.com",
    description: "A satirical tech news website.",
    image: "/images/isglitch1.jpg",
    images: ["/images/isglitch1.jpg", "/images/isglitch2.jpg"],
    technologies: [
      { name: "HTML", icon: "/icons/html5.svg" },
      { name: "CSS", icon: "/icons/css3.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Next.js", icon: "/icons/next.svg" }
    ],
    learnings: [
      "The main thing I learned was how to implement TypeScript. It is invaluable for scaling up large projects due to early detection of potential errors.",
      "The original idea for this project was to use a combination LLMs and Stable Diffusion. I was going to simulate how The Onion workshops its ideas with LangChain called to various LLM APIs. Unofortunatley, the only LLM with a sense of humor is Anthropic's Claude. The images were the most diffucult part of the process. I sometimes need to download loras. Even if they are not needed, maybe one out of fifty images created are decent. Suffice to say, I learned the limitations of relying on AI for automation.",
      "I also leared a lot about metatags and how they affect SEO. In addition, about how Google will ignore all that and do it's own thing.",
      "Pagination was another thing I learned. All in all, I think it worked out well. I also implemented a simple search page so the user can find similar stories according to hastags on the site.",
      "Finally, I learned Next.js to benefit from the speed improvements of SSR. I had to also figure out Tailwind to supplant vanilla CSS. "
    ],
    githubUrl: "https://github.com/orbithammer/isglitch-next",
    liveUrl: "https://theglitchnews.netlify.app",
    liveIcon: "/icons/isglitch.svg"
  }
]

// Get all projects
export function getAllProjects(): Project[] {
  return projectsData
}

// Get a specific project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find(project => project.slug === slug)
}