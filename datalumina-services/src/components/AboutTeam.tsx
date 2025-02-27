"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const teamMembers = [
  {
    name: "Dave Ebbelaar",
    role: "Founder, AI Engineer",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    linkedin: "#",
  },
  {
    name: "Joris Ebbelaar",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    linkedin: "#",
  },
  {
    name: "Christan Doornhof",
    role: "Strategy Lead",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    linkedin: "#",
  },
]

export default function AboutTeam() {
  const [mousePositions, setMousePositions] = useState(teamMembers.map(() => ({ x: 0, y: 0 })))

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
    <section className="bg-[#020824] text-white py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Our team
          </motion.h2>
          <motion.p
            className="text-gray-300 text-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            With over a decade of experience, our team is dedicated to tackling your toughest data challenges.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#020824] rounded-[24px] overflow-hidden group relative border border-[#2a3a5f]"
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

                {/* Center Glow Effect (moved to bottom) */}
                <div className="absolute bottom-[-20%] -right-1/4 transform -translate-x-1/4">
                  <div className="w-[200px] h-[150px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-100 blur-[120px]" />
                </div>

                <div className="relative h-[400px] overflow-hidden mx-4 mt-4 rounded-2xl">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <motion.div
                  className="p-6 flex justify-between items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 }}
                >
                  <div>
                    <h3 className="text-xl font-light">{member.name}</h3>
                    <p className="text-gray-600 text-base">{member.role}</p>
                  </div>
                  <motion.a
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    LINKEDIN <ArrowUpRight className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}