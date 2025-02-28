"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface Star {
  id: number
  top: string
  left: string
  size: number
  duration: number
  delay: number
  colorClass: string
}

interface InsightCard {
  id: number
  category: string[]
  title: string
  description: string
  image: string
  pattern: string
  date: string
  author: {
    name: string
    title: string
    avatar: string
  }
}

// Sample data for the cards
const insightCards = [
  {
    id: 1,
    title: "How to build effective AI agents",
    description:
      "Learn the fundamentals of building AI agents that can perform complex tasks efficiently and reliably.",
    image: "/placeholder.svg?height=400&width=600",
    pattern: "/placeholder.svg?height=200&width=200&text=Pattern1",
    date: "Jan 23, 2025",
    category: ["AI & ML"],
    author: {
      name: "Dave Ebbelaar",
      title: "Founder, AI Engineer",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  },
  {
    id: 2,
    title: "How to know if data freelancing is right for you",
    description: "Discover if the freelance data science path aligns with your career goals and lifestyle preferences.",
    image: "/placeholder.svg?height=400&width=600",
    pattern: "/placeholder.svg?height=200&width=200&text=Pattern2",
    date: "Jan 17, 2025",
    category: ["Data Analytics"],
    author: {
      name: "Hwei Geok Ng",
      title: "Customer Success Manager",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  },
  {
    id: 3,
    title: "From concept to scale: Building GenAI teams for success",
    description: "A comprehensive guide to assembling and scaling effective generative AI teams in your organization.",
    image: "/placeholder.svg?height=400&width=600",
    pattern: "/placeholder.svg?height=200&width=200&text=Pattern3",
    date: "Jan 7, 2025",
    category: ["AI & ML"],
    author: {
      name: "Christan Doornhof",
      title: "Strategy Lead",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  },
  {
    id: 4,
    title: "Exploring how small teams build $100M+ AI companies",
    description: "Case studies and insights on how lean teams are creating massive value in the AI space.",
    image: "/placeholder.svg?height=400&width=600",
    pattern: "/placeholder.svg?height=200&width=200&text=Pattern4",
    date: "Feb 24, 2025",
    category: ["AI & ML"],
    author: {
      name: "Christan Doornhof",
      title: "Strategy Lead",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  },
  {
    id: 5,
    title: "How to start freelancing as a data scientist (150+ coaching calls later)",
    description: "Practical advice from hundreds of coaching sessions on transitioning to freelance data science.",
    image: "/placeholder.svg?height=400&width=600",
    pattern: "/placeholder.svg?height=200&width=200&text=Pattern5",
    date: "Feb 15, 2025",
    category: ["Data Analytics"],
    author: {
      name: "Hwei Geok Ng",
      title: "Customer Success Manager",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  },
  {
    id: 6,
    title: "DeepSeek: The open-source challenger and what it means for business",
    description: "Analysis of DeepSeek's impact on the open-source AI landscape and business implications.",
    image: "/placeholder.svg?height=400&width=600",
    pattern: "/placeholder.svg?height=200&width=200&text=Pattern6",
    date: "Jan 29, 2025",
    category: ["Digital Transformation"],
    author: {
      name: "Christan Doornhof",
      title: "Strategy Lead",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  },
]

const filterButtons = ["All Insights", "AI & ML", "Data Analytics", "Digital Transformation"]

export default function InsightFilter() {
  const [stars, setStars] = useState<Star[]>([])
  const [activeFilter, setActiveFilter] = useState("All Insights")
  const [filteredCards, setFilteredCards] = useState<InsightCard[]>(insightCards)
  const [mousePositions, setMousePositions] = useState(insightCards.map(() => ({ x: 0, y: 0 })))

  useEffect(() => {
    const generatedStars = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 2,
      colorClass: Math.random() > 0.7 ? "bg-blue-300" : Math.random() > 0.5 ? "bg-blue-400" : "bg-white",
    }))

    setStars(generatedStars)
  }, [])

  useEffect(() => {
    const filtered =
      activeFilter === "All Insights"
        ? insightCards
        : insightCards.filter((card) => card.category.includes(activeFilter))
    setFilteredCards(filtered)
  }, [activeFilter])

  const handleMouseMove = (index: number) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const newMousePositions = [...mousePositions]
    newMousePositions[index] = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
    setMousePositions(newMousePositions)
  }

  return (
    <section className="relative bg-[#0a0a13] min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className={`absolute ${star.colorClass} rounded-full`}
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Glow Effect */}
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2">
          <div className="w-[800px] h-[450px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[100px]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl my-24 mx-auto mb-12 sm:mb-16">
          <motion.h1
            className="text-4xl sm:text-3xl lg:text-6xl font-light text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Insights
          </motion.h1>
          <motion.p
            className="text-gray-300 mb-36 text-xs sm:text-base leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover insights and expert perspectives on data, AI, and the future of intelligent systems.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-start sm:gap-4 mb-12 sm:mb-16 max-w-screen-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filterButtons.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm transition-all duration-300
                ${
                  activeFilter === filter
                    ? "bg-blue-600/50 text-white border-blue-400 shadow-lg shadow-blue-500/20"
                    : "bg-blue-900/30 text-blue-200 hover:bg-blue-800/40 hover:shadow-md"
                } backdrop-blur-sm border border-blue-700/30`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-24">
          <AnimatePresence mode="wait">
            {filteredCards.map((card, index) => (
              <motion.article
                key={card.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-[#020824] rounded-[24px] overflow-hidden group relative border border-[#2a3a5f] h-[600px]"
                onMouseMove={handleMouseMove(index)}
              >
                {/* Custom cursor glow effect */}
                <motion.div
                  className="w-32 h-32 rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-70 blur-[60px] absolute pointer-events-none hidden group-hover:block z-10"
                  style={{
                    left: mousePositions[index].x - 64,
                    top: mousePositions[index].y - 64,
                  }}
                  transition={{ type: "spring", damping: 25, stiffness: 50 }}
                />
                {/* Dynamic border effect */}
                <motion.div
                  className="absolute inset-0 rounded-[24px] pointer-events-none z-0"
                  style={{
                    background: `radial-gradient(
                      800px circle at ${mousePositions[index].x}px ${mousePositions[index].y}px,
                      rgba(113, 153, 255, 0) 0%,
                      rgba(113, 153, 255, 0.1) 70%,
                      rgba(113, 153, 255, 0.3) 100%
                    )`,
                    border: "1px solid rgba(113, 153, 255, 0.2)",
                    boxShadow: `0 0 20px 2px rgba(113, 153, 255, 0.1)`,
                  }}
                />

                {/* Center Glow Effect */}
                <div className="absolute bottom-[-20%] -right-1/4 transform -translate-x-1/4">
                  <div className="w-[200px] h-[150px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-100 blur-[120px]" />
                </div>

                <div className="relative w-full h-64">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={card.id <= 3}
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020824] to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <Image
                      src={card.pattern || "/placeholder.svg"}
                      alt="Pattern"
                      width={100}
                      height={100}
                      className="opacity-30"
                    />
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between h-[calc(100%-16rem)]">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex flex-wrap gap-2">
                        {card.category.map((cat, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-900/30 text-blue-400 backdrop-blur-sm"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">{card.date}</span>
                    </div>
                    <h3 className="text-2xl font-light text-white mb-4 leading-tight">{card.title}</h3>
                    <p className="text-gray-300 text-base font-light mb-4">{card.description}</p>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={card.author.avatar || "/placeholder.svg"}
                          alt={card.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-light text-sm text-white">{card.author.name}</p>
                        <p className="text-xs text-gray-400">{card.author.title}</p>
                      </div>
                    </div>

                    <motion.button
                      className="inline-flex items-center gap-1 text-sm font-light text-white hover:text-blue-400 transition-colors duration-300 group"
                      aria-label={`Read more about ${card.title}`}
                      whileHover={{ x: 3 }}
                    >
                      READ ARTICLE
                      <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Glow Effect */}
        <div className="absolute bottom-[8%] right-1/2 transform -translate-x-1/2">
          <div className="w-[400px] h-[300px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[100px]" />
        </div>

        {/* Contact Section */}
        <div className="relative my-44">
          <div className="relative max-w-4xl mx-auto bg-[#04070d] backdrop-blur-sm rounded-[32px] overflow-hidden border border-[#234189]">
            {/* Inner Glow Effects */}
            <div className="absolute top-[-40%] right-[-50px] transform -translate-x-1/2">
            <div className="w-[400px] h-[200px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#0d55ff] to-transparent opacity-100 blur-[90px]" />
          </div>

            {/* Content Container */}
            <div className="relative p-8 sm:p-12 flex items-end justify-between">
              {/* Left Side with Icon and Text */}
              <div className="flex flex-col gap-6">
                {/* Star Icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white/90"
                >
                  <path d="M16 0L20 12L32 16L20 20L16 32L12 20L0 16L12 12L16 0Z" fill="currentColor" />
                </svg>

                <h2 className="text-3xl md:text-4xl font-extralight text-white/90 leading-tight max-w-xl">
                  Ready to talk about how data can work for you?
                </h2>
              </div>

              {/* Contact Button */}
<motion.button
  className="flex items-center gap-2 bg-gradient-to-r from-[#212c5b] via-[#0d1229] to-[#0c1436] 
             hover:from-[#314080] hover:via-[#0c1436] hover:to-[#0d1229] 
             text-white/90 font-light px-5 py-2.5 rounded-full border border-blue-700/40 
             transition-all duration-300"
  whileTap={{ scale: 0.97 }}
  aria-label="Contact us"
>
  Contact us <ArrowRight className="w-4 h-4" />
</motion.button>

            </div>

            {/* Right Side Glow */}
            {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0d55ff]/20 to-transparent pointer-events-none" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

