"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Insights", path: "/insights" },
    { name: "About", path: "/about" },
    { name: "Academy", path: "/academy" },
    { name: "GenAI Launchpad", path: "/genai-launchpad" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "py-2 bg-dark-blue/90 backdrop-blur-sm" : "py-4 bg-transparent"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5L30 15L20 25L10 15L20 5Z" stroke="white" strokeWidth="2" />
              <path d="M5 20L15 30L25 20L15 10L5 20Z" stroke="white" strokeWidth="2" />
            </svg>
            <span className="ml-2 text-xl font-bold">Trendtial Tech</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-2 py-1 ${location.pathname === link.path ? "text-white" : "text-white/80 hover:text-white"}`}
            >
              <span className="relative z-10">{link.name}</span>
              {location.pathname === link.path && (
                <span className="absolute inset-0 rounded-full border border-white/50"></span>
              )}
            </Link>
          ))}
        </div>

        <Link to="/contact">
          <button className="bg-white text-dark-blue px-6 py-2 rounded-full flex items-center space-x-2 font-medium hover:scale-105 transition-transform">
            <span>Contact</span>
            <ArrowRight size={16} />
          </button>
        </Link>
      </div>
    </nav>
  )
}

// Simple logo component
const Logo = () => (
  <div className="flex items-center">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5L30 15L20 25L10 15L20 5Z" stroke="white" strokeWidth="2" />
      <path d="M5 20L15 30L25 20L15 10L5 20Z" stroke="white" strokeWidth="2" />
    </svg>
    <span className="ml-2 text-xl font-bold">Trendtial Tech</span>
  </div>
)

export default Navbar

