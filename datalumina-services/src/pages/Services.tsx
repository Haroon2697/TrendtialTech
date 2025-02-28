"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import TechStack from "../components/TechStack"
import ServicesGrid from "../components/ServicesGrid"
import CaseStudies from "../components/CaseStudies"

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
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
                      Trendtial Tech<sup className="text-2xl md:text-3xl">®</sup> Solutions
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
             These days, staying ahead often means turning data and AI into business value. But with countless solutions and
        approaches available, how do you identify and implement what truly matters for your organization? What does it
        take to become an AI-first type of company? We're here to help you make the right decisions.
     
          </motion.p>
        </div>
      </div>
    </motion.div>
     <TechStack />

     <ServicesGrid />

     <CaseStudies />


     </>
  )
}

export default Services

