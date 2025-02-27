"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-[#03002c]/90 backdrop-blur-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5L30 15L20 25L10 15L20 5Z" stroke="white" strokeWidth="2" />
              <path d="M5 20L15 30L25 20L15 10L5 20Z" stroke="white" strokeWidth="2" />
            </svg>
            <span className="ml-3 text-lg font-medium text-white">Trendtial Tech</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-4 py-2 text-sm font-light transition-all duration-300
                ${
                  location.pathname === link.path
                    ? "text-white bg-white/10 rounded-full"
                    : "text-white/90 hover:text-white hover:bg-white/10 rounded-full"
                }
              `}
            >
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </div>

        <Link to="/contact">
          <motion.button
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.85)", scale: 1.02 }} // Button hover effect
            className="bg-white text-[#03002c] px-5 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300"
          >
            Contact
            <motion.span
              className="flex"
              initial={{ rotate: -45, x: -2, y: -2 }} // Arrow starts slightly offset
              whileHover={{ x: 0, y: -2 }} // Arrow animation on button hover
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar