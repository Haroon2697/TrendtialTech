"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import AnimatedBackground from "./AnimatedBackground" // Ensure the correct path

export default function AboutHero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen w-full bg-[#020824] flex items-center justify-center px-4 md:px-8 py-16 overflow-hidden relative">
      {/* Animated background component */}
      <AnimatedBackground />

      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.span
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            About Trendtial Tech
          </motion.span>
          <motion.span
            className="inline-block"
            animate={isHovered ? { rotate: 10, scale: 1.2 } : { rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          >
            ®
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-white text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          whileHover={{ scale: 1.02 }}
        >
          AI and data reshape our world at a relentless speed, but still, most companies find themselves caught between
          possibility and complexity. We believe that breakthrough innovation doesn't come from chasing every new
          development that comes along; it comes from cutting through the noise to identify what creates value and what
          truly gives that competitive advantage.
        </motion.p>
      </motion.div>
    </div>
  )
}
