"use client"

import Image from "next/image"
import Envelope from "@/public/icons/envelope-solid.svg"

export default function EmailLink() {
    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault()
        window.location.href = "mailto:brockpenner@protonmail.com"
      }
    
    return (
        <a
            href="mailto:brockpenner@protonmail.com"
            className="flex flex-row justify-center items-center w-28 p-2.5 rounded-2xl mx-2 my-0 font-inherit font-bold text-[#f4f4f4] border border-solid border-[#a5ffd9] shadow-[0_0_7px_#a5ffd9] bg-[#722626]"
            onClick={handleEmailClick}
            >
            <Image
                src={Envelope}
                alt="Envelope icon"
                width={24}
                height={24}
            />
            Email
        </a>
    )
}
