"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const navLinks = [
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" }
]

const Home = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-20 max-w-6xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Welcome to Trendtial Tech
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transforming data into actionable insights for your business
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  index === 0
                    ? "bg-white text-dark-blue hover:bg-opacity-90 mr-4"
                    : "border border-white hover:bg-white hover:bg-opacity-10"
                } px-8 py-3 rounded-full inline-block font-medium transition-all`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home

