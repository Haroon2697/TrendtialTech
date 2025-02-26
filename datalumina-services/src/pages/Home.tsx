"use client"

import { motion } from "framer-motion"

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
            <a
              href="/services"
              className="bg-white text-dark-blue px-8 py-3 rounded-full inline-block font-medium mr-4 hover:bg-opacity-90 transition-all"
            >
              Our Services
            </a>
            <a
              href="/contact"
              className="border border-white px-8 py-3 rounded-full inline-block font-medium hover:bg-white hover:bg-opacity-10 transition-all"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home

