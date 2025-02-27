"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Dave Ebbelaar",
    role: "Founder, AI Engineer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-27%20151527-jtHwcmdxpkP8Y9WMdTSIO5KAwOuRLH.png",
    linkedin: "#",
  },
  {
    name: "Joris Ebbelaar",
    role: "Software Engineer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-27%20151527-jtHwcmdxpkP8Y9WMdTSIO5KAwOuRLH.png",
    linkedin: "#",
  },
  {
    name: "Christan Doornhof",
    role: "Strategy Lead",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-27%20151527-jtHwcmdxpkP8Y9WMdTSIO5KAwOuRLH.png",
    linkedin: "#",
  },
]

export default function AboutTeam() {
  return (
    <section className="bg-[#020824] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Our team
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            With over a decade of experience, our team is dedicated to tackling your toughest data challenges.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-[#0a1a3f] rounded-2xl overflow-hidden"
            >
              <div className="relative h-80">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <motion.a
                  href={member.linkedin}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  LINKEDIN <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

