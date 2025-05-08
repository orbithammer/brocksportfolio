"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
]

export default function Navbar() {
    const pathname = usePathname()
    return (
        <nav className="w-full">

        </nav>
    )
}