"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, X } from "lucide-react"; // Added X for the close icon
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu toggle

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Insights", path: "/insights" },
    { name: "About", path: "/about" },
    { name: "Academy", path: "/academy" },
    { name: "GenAI Launchpad", path: "/genai-launchpad" },
  ];

  // Menu animation variants (changed to slide from top)
  const menuVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        ease: "easeOut",
      },
    },
    closed: {
      y: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        ease: "easeIn",
      },
    },
  };

  // Hamburger button animation variants
  const hamburgerVariants = {
    open: { rotate: 45, y: 2 },
    closed: { rotate: 0, y: 0 },
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-[#0a0a13]/90 backdrop-blur-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5L30 15L20 25L10 15L20 5Z" stroke="white" strokeWidth="2" />
              <path d="M5 20L15 30L25 20L15 10L5 20Z" stroke="white" strokeWidth="2" />
            </svg>
            <span className="ml-3 text-lg font-medium text-white">Trendtial Tech</span>
          </div>
        </Link>

        {/* Hamburger Menu for Mobile/Tablets */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-6 h-0.5 bg-white mb-1"
              variants={hamburgerVariants}
              animate={isMenuOpen ? "open" : "closed"}
            />
            <motion.div
              className="w-6 h-0.5 bg-white mb-1"
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-white"
              variants={hamburgerVariants}
              animate={isMenuOpen ? "open" : "closed"}
              style={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -2 : 0 }}
            />
          </motion.button>
        </div>

        {/* Desktop Navigation (remains unchanged) */}
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

        {/* Contact Button (remains unchanged for desktop, hidden on mobile in menu) */}
        <Link to="/contact" className="hidden md:flex">
          <motion.button
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.85)", scale: 1.02 }}
            className="bg-white text-[#03002c] px-5 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300"
          >
            Contact
            <motion.span
              className="flex"
              initial={{ rotate: -45, x: -2, y: -2 }}
              whileHover={{ x: 0, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.button>
        </Link>

        {/* Mobile Menu (slides from top with close button) */}
        <motion.div
          className="fixed top-0 left-0 h-[80%] w-full bg-[#03002c]/95 backdrop-blur-md p-6 shadow-lg md:hidden"
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          {/* Close Button (Cross) at the top */}
          <motion.button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-white p-2 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="w-6 h-6" />
          </motion.button>

          <div className="flex flex-col items-start space-y-6 pt-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
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
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <motion.button
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.85)", scale: 1.02 }}
                className="bg-white text-[#03002c] px-5 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300"
              >
                Contact
                <motion.span
                  className="flex"
                  initial={{ rotate: -45, x: -2, y: -2 }}
                  whileHover={{ x: 0, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Glowing Border Line Effect when Scrolled */}
        {isScrolled && (
          <motion.div
            className="absolute -bottom-4 left-0 w-full h-[1px] from-[#03002c] via-blue-500 to-[#03002c] bg-gradient-to-r"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              transformOrigin: "center",
              boxShadow: "0px 0px 10px 3px rgba(0, 140, 255, 0.1)",
            }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;