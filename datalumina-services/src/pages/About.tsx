"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-20 max-w-6xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-center mb-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        About Trendtial Tech
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed mb-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        We're on a mission to help organizations harness the power of data and AI to transform their businesses.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Founded in 2020, Trendtial Tech emerged from a simple observation: despite the exponential growth in data and AI
            capabilities, many organizations struggle to translate these technologies into tangible business value.
          </p>
          <p className="text-white/80 leading-relaxed">
            Our team of experts combines deep technical knowledge with business acumen to bridge this gap, helping
            companies become truly data-driven and AI-first.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-white/10 p-2 rounded-full mr-4 mt-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Innovation</h3>
                <p className="text-white/70">We constantly push the boundaries of what's possible with data and AI.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-white/10 p-2 rounded-full mr-4 mt-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Integrity</h3>
                <p className="text-white/70">We believe in ethical AI and transparent data practices.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-white/10 p-2 rounded-full mr-4 mt-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Impact</h3>
                <p className="text-white/70">We measure our success by the tangible value we create for our clients.</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About

