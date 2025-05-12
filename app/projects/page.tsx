import ProjectCard from "../components/ProjectCard"
import Html5 from "@/public/icons/html5.svg"
import Css3 from "@/public/icons/css3.svg"
import Js from "@/public/icons/js.svg"
import React from "@/public/icons/react.svg"
import TypeScript from "@/public/icons/typescript.svg"
import Next from "@/public/icons/next.svg"
import PortfolioImg from "@/public/images/portfolio1.jpg"
import IsGlitchImg from "@/public/images/isglitch1.jpg"
import FringeFilmImg from "@/public/images/fringefilm1.jpg"

export default function Projects() {
  const projects = [
    {
      title: "isGlitch.com",
      description: "A satirical tech news website built with React and TypeScript.",
      imageSrc: IsGlitchImg,
      slug: "isglitchdotcom",
      technologies: [
        { icon: Css3, name: "CSS3" },
        { icon: React, name: "React" },
        { icon: TypeScript, name: "TypeScript" }
      ]
    },
    {
      title: "Fringe Film Finder",
      description: "A movie recommender application that draws on a database of over 10,000 movies.",
      imageSrc: FringeFilmImg,
      slug: "fringefilmfinder",
      technologies: [
        { icon: Css3, name: "CSS3" },
        { icon: React, name: "React" },
        { icon: Js, name: "JavaScript" }
      ]
    },
    {
      title: "Portfolio Site",
      description: "The Next.js portfolio website you're browsing right now.",
      imageSrc: PortfolioImg,
      slug: "portfolio",
      technologies: [
        { icon: Html5, name: "HTML5" },
        { icon: Css3, name: "CSS3" },
        { icon: TypeScript, name: "TypeScript" },
        { icon: Next, name: "Next.js" }
      ]
    }
  ]

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <p className="mb-8">
        Here you will find a showcase of my development projects. Each project demonstrates
        different skills and technologies I've worked with.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            technologies={project.technologies}
            slug={project.slug}
          />
        ))}
      </div>
    </main>
  )
}