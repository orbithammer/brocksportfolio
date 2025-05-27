"use client"

import Image from "next/image"
import Envelope from "@/public/icons/envelope-solid.svg"

interface EmailLinkProps {
    email?: string
    buttonText?: string
    className?: string
}

export default function EmailLink({
    email = "brockpenner@protonmail.com",
    buttonText = "Email",
    className = "flex flex-row justify-center items-center w-28 p-2.5 rounded-2xl mx-2 my-0 font-inherit font-bold text-[var(--foreground)] border border-solid border-[var(--primary)] shadow-[0_0_7px_var(--primary)] bg-[var(--accent)]"
}: EmailLinkProps = {}) {
    const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        window.location.href = `mailto:${email}`
    }
    
    return (
        <a
            href={`mailto:${email}`}
            className={className}
            onClick={handleEmailClick}
            >
            <Image
                src={Envelope}
                alt="Envelope icon"
                width={24}
                height={24}
                className="mr-1 icon"
            />
            {buttonText}
        </a>
    )
}
