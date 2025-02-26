"use client"

import { motion } from "framer-motion"

const GenAILaunchpad = () => {
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
        GenAI Launchpad
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed mb-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Accelerate your journey into Generative AI with our comprehensive launchpad program.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-6">Fast-track Your GenAI Implementation</h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Our GenAI Launchpad is designed to help organizations quickly and effectively implement generative AI
            solutions that deliver real business value.
          </p>
          <ul className="space-y-4">
            {[
              "Assessment of GenAI opportunities",
              "Custom solution design",
              "Rapid prototyping and implementation",
              "Team training and knowledge transfer",
              "Ongoing support and optimization",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              >
                <div className="bg-white/10 p-1 rounded-full mr-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-8 flex items-center justify-center"
        >
          <div className="w-full max-w-md">
            <h3 className="text-2xl font-bold mb-6 text-center">Schedule a Consultation</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your GenAI goals"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 outline-none resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-dark-blue p-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
              >
                Request Consultation
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default GenAILaunchpad

