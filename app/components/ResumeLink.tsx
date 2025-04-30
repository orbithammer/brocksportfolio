"use client"

import Image from "next/image"
import Download from "@/public/icons/download-solid.svg"

interface ResumeLinkProps {
    pdfPath?: string
    buttonText?: string
    className?: string
}

export default function ResumeLink({
    pdfPath = "/files/resumeBrockPenner.pdf",
    buttonText = "Résumé",
    className =  "flex flex-row justify-center items-center w-28 p-2.5 rounded-2xl mx-2 my-0 font-inherit font-bold text-[#f4f4f4] border border-solid border-[#a5ffd9] shadow-[0_0_7px_#a5ffd9] bg-[#722626]"
}: ResumeLinkProps = {}) {
    const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        window.open(pdfPath, "_blank")
    }
    
    return (
        <a
            href={pdfPath}
            className={className}
            onClick={handleResumeClick}
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                src={Download}
                alt="Download icon"
                width={24}
                height={24}
                className="mr-1"
            />
            {buttonText}
        </a>
    )
}
