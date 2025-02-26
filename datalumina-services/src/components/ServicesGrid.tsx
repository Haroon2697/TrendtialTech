"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const services = [
  {
    title: "Building Systems with LLMs",
    description:
      "Our expertise in LLMs allows us to create and optimize powerful AI-driven systems tailored to your needs.",
  },
  {
    title: "Production-Ready AI Solutions",
    description:
      "We guide you through the entire process, from prototyping to full-scale production, ensuring your AI initiatives are successful and sustainable.",
  },
  {
    title: "Data Platform Engineering",
    description: "We design and build scalable, robust data platforms on Azure to support your AI initiatives.",
  },
  {
    title: "Deploying AI Applications",
    description:
      "We ensure your data-centric and AI applications are deployed seamlessly, with reliability and scalability in mind.",
  },
  {
    title: "Upskilling Your Engineering Team",
    description:
      "We provide hands-on training to elevate your team's AI skills, ensuring they're equipped to handle the latest technologies and best practices.",
  },
  {
    title: "Integrating AI into Your Stack",
    description:
      "We help you incorporate AI into your current systems to enhance their capabilities without disrupting your operations.",
  },
]

const ServicesGrid = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />

            <div className="relative p-8 rounded-2xl bg-[#080B2F] border border-blue-500/10 hover:border-blue-500/20 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-blue-500" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default ServicesGrid

