"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const pathname = usePathname()
    const isActive = (path: string):boolean => {
        return pathname === path
    }

    return (
        <header>
            <nav 
                className="w-full p-4 shadow-md"
                style={{ backgroundColor: "var(--background)", color: "#f4f4f4" }}
                role="navigation"
                aria-label="Main Navigation"
            >
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="font-bold text-xl">
                        <Link href="/">Brock Penner's Portfolio</Link>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <Link 
                            href="/" 
                            className={`hover:text-[#a5ffd9] transition-colors ${isActive('/') ? 'text-[#a5ffd9] underline decoration-[#722626]' : ''}`}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/about" 
                            className={`hover:text-[#a5ffd9] transition-colors ${isActive('/about') ? 'text-[#a5ffd9] underline decoration-[#722626]' : ''}`}
                        >
                            About
                        </Link>
                        <Link 
                            href="/projects" 
                            className={`hover:text-[#a5ffd9] transition-colors ${isActive('/projects') ? 'text-[#a5ffd9] underline decoration-[#722626]' : ''}`}
                        >
                            Projects
                        </Link>
                    </div>
                    <button
                        className="md:hidden text-[#f4f4f4]"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M6 18L18 6M6 6l12 12" 
                            />
                            ) : (
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M4 6h16M4 12h16M4 18h16" 
                            />
                            )}
                        </svg>
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden pt-4 pb-2">
                        <div className="flex flex-col space-y-3 text-center">
                            <Link
                                href="/"
                                className="block py-2 hover:bg-[var(--accent)] hover:text-[var(--primary)] rounded transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="block py-2 hover:bg-[var(--accent)] hover:text-[var(--primary)] rounded transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/projects"
                                className="block py-2 hover:bg-[var(--accent)] hover:text-[var(--primary)] rounded transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projects
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}