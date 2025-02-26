"use client"

import { motion } from "framer-motion"

const Academy = () => {
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
        Trendtial Tech Academy
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed mb-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Empowering your team with the knowledge and skills needed to thrive in the data-driven economy.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {["Data Fundamentals", "AI & Machine Learning", "Business Transformation"].map((course, index) => (
          <motion.div
            key={course}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">{index + 1}</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">{course}</h3>
            <p className="text-white/70 mb-6">
              Comprehensive training designed to build expertise in {course.toLowerCase()}.
            </p>
            <a
              href="#"
              className="inline-block border border-white px-6 py-2 rounded-full hover:bg-white hover:text-dark-blue transition-all"
            >
              Learn More
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center max-w-3xl mx-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Ready to upskill your team?</h2>
        <p className="text-white/80 mb-6">
          Contact us to discuss custom training programs tailored to your organization's needs.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-dark-blue px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
        >
          Get in Touch
        </a>
      </motion.div>
    </motion.div>
  )
}

export default Academy

