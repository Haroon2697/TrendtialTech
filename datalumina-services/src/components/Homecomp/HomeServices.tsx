"use client"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

const services = [
  {
    id: "01",
    category: "Trendtial Tech",
    title: "Development",
    heading: "Custom AI solutions & data platforms",
    description:
      "Whether it's data warehousing or intelligent systems, we architect and implement scalable solutions that transform complex problems into competitive advantages for our clients.",
  },
  {
    id: "02",
    category: "Trendtial Tech",
    title: "Consulting",
    heading: "Strategic AI implementation & transformation",
    description:
      "We guide organizations and startups through their AI journey, combining deep technical expertise with strong strategic insight.",
  },
  {
    id: "03",
    category: "Trendtial Tech",
    title: "Training",
    heading: "AI education & skill development",
    description:
      "Comprehensive training programs designed to upskill your team with the latest AI technologies and methodologies.",
  },
]

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
}

export default function ServicesSection() {
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection
    if (newPage >= 0 && newPage < services.length) {
      setPage([newPage, newDirection])
    }
  }

  const handleDotClick = (index: number) => {
    const direction = index > page ? 1 : -1
    setPage([index, direction])
  }

  return (
    <section className="relative w-full bg-black py-20 overflow-hidden">
      {/* Top left component glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      <div className="absolute top-0 left-1/2 w-[600px] h-[200px] rounded-full bg-gradient-to-br from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[120px] -translate-x-1/2 -translate-y-1/2" />


      <div className="container mx-auto font-extralight px-6 lg:px-8 relative">
        <motion.h2
          className="text-5xl font-extralight text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.h2>
        <motion.p
        className="text-[13px] text-white/80 font-light max-w-4xl mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          From building enterprise-grade AI platforms to guiding digital transformation and upskilling development
          teams, we help you move beyond any boundaries of what's possible, pointing you to AI and data technologies
          that make sense in helping you grow.
        </motion.p>
        <div className="relative h-[400px] mb-12">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-950/50 to-black/80 border-2 border-blue-700/30 shadow-lg shadow-blue-900/20">
                {/* Top Left Glow Effect - Increased brightness and size */}
                <motion.div
                  className="absolute top-[-45%] left-[-10%] pointer-events-none"
                  animate={{
                    opacity: [0.9, 1, 0.9],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-90 blur-[80px]" />
                </motion.div>
                {/* Bottom Right Glow Effect */}
                <motion.div
                  className="absolute bottom-[-30%] right-[-10%] pointer-events-none"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <div className="w-[400px] h-[300px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[120px]" />
                </motion.div>
                <div className="flex h-full min-h-[400px]">
                  {/* Left side */}
                  <div className="w-[40%] p-10 flex flex-col relative">
                    <div className="relative z-10">
                      <span className="text-blue-400 text-sm font-medium block mb-2">{services[page].category}</span>
                      <h3 className="text-4xl font-bold text-white mt-1">{services[page].title}</h3>
                    </div>
                    <div className="mt-auto relative z-10">
                      <div className="text-[180px] font-bold text-white/10 leading-none">{services[page].id}</div>
                    </div>
                  </div>
                  {/* Vertical divider line */}
                  <div className="w-px bg-blue-800/50 h-full"></div>
                  {/* Right side */}
                  <div className="w-[60%] p-10 flex flex-col">
                    <div>
                      <h4 className="text-2xl font-semibold text-white/90 mb-6">{services[page].heading}</h4>
                      <p className="text-white/70 text-lg leading-relaxed">{services[page].description}</p>
                    </div>
                    <div className="mt-auto pt-6">
                      <motion.button className="flex items-center text-white gap-2 group text-lg" whileHover={{ x: 5 }}>
                        READ MORE
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Navigation Dots */}
        <div className="flex justify-center gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                page === index ? "bg-white w-4" : "bg-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

