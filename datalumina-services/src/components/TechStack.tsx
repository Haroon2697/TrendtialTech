"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Calculate positions on an arc
  const calculateArcPosition = (index: number, total: number, radius: number) => {
    const angleStep = Math.PI / (total - 1) // Semi-circle
    const angle = index * angleStep
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius * 0.3, // Flatten the arc vertically
    }
  }

  // Tech stack items
  const techItems = [
    {
      icon: <rect width="16" height="16" x="4" y="4" fill="currentColor" />,
      size: "w-12 h-12",
      color: "bg-blue-900/80",
    },
    {
      icon: <circle cx="12" cy="12" r="6" fill="currentColor" />,
      size: "w-14 h-14",
      color: "bg-blue-800",
    },
    {
      icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" />,
      size: "w-16 h-16",
      color: "bg-blue-700",
    },
    {
      icon: <circle cx="12" cy="12" r="8" fill="currentColor" />,
      size: "w-20 h-20",
      color: "bg-blue-600",
    },
    {
      icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="currentColor" />,
      size: "w-16 h-16",
      color: "bg-blue-700",
    },
    {
      icon: <path d="M12 2L8 12l4 10 4-10z" fill="currentColor" />,
      size: "w-14 h-14",
      color: "bg-blue-800",
    },
    {
      icon: <rect width="16" height="16" x="4" y="4" fill="currentColor" />,
      size: "w-12 h-12",
      color: "bg-blue-900/80",
    },
  ]

  return (
    <section className="relative py-20 overflow-hidden min-h-[600px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-32">
          We tackle data challenges
          <br />
          across the full stack
        </h2>

        <div className="relative h-[400px]">
          {/* Ripple Effects */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/10"
                style={{
                  width: `${i * 200}px`,
                  height: `${i * 200}px`,
                  animation: `ripple 4s linear ${i * 0.5}s infinite`,
                }}
              />
            ))}
          </div>

          {/* Tech Stack Icons */}
          <div className="relative w-full max-w-5xl mx-auto">
            {techItems.map((item, index) => {
              const position = calculateArcPosition(index, techItems.length, 300)
              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    x: position.x,
                    y: position.y,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    y: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      offset: index * 0.1,
                    },
                  }}
                >
                  <div
                    className={`${item.size} ${item.color} rounded-full flex items-center justify-center relative group transition-all duration-300`}
                    style={{
                      boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-300" />
                    <svg viewBox="0 0 24 24" className="text-white relative z-10 w-1/2 h-1/2">
                      {item.icon}
                    </svg>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default TechStack

