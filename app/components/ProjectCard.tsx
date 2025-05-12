"use client"

import Image from "next/image"
import Link from "next/link"

interface Technology {
    icon: string
    name: string
}

interface ProjectCardProps {
    title: string
    description: string
    imageSrc: string
    technologies: Technology[]
    link?: string
    slug?:string
}

export default function ProjectCard({
    title,
    description,
    imageSrc,
    technologies,
    link,
    slug
}: ProjectCardProps) {
    const projectContent = (
        <div className="flex flex-col h-full border border-[#722626] rounded-lg overflow-hidden hover:shadow-md hover:shadow-[#a5ffd9] transition-shadow duration-300">
            <div className="relative h-48 w-full">
                <Image
                    src={imageSrc}
                    alt={`Screenshot of ${title} project`}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-[#a5ffd9]">{title}</h3>
                <div className="mb-3">
                    <div className="flex flex-wrap gap-2 mb-2">
                        {technologies.map((tech, index)=>(
                            <div key={index} className="flex items-center" title={tech.name}>
                                <Image
                                    src={tech.icon}
                                    alt={`${tech.name} icon`}
                                    width={20}
                                    height={20}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-sm flex-grow">{description}</p>
            </div>
        </div>
    )
    if (slug) {
        return (
            <Link href={`/projects/${slug}`} className="block h-full">
                {projectContent}
            </Link>
        )
    } else if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
                {projectContent}
            </a>
        )
    } else {
        return <div className="block h-full">{projectContent}</div>
    }
}