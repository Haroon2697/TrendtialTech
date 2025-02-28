"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const BlankCaseStudy = () => {
  return (
    <div className="bg-[#050a24] text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#050a24] to-[#0A1145] overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          <Link href="/services" className="inline-flex items-center text-gray-400 hover:text-white mb-12 transition-colors">
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go back
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-medium mb-6">
              Transforming BLANK's customer service with AI
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
              BLANK is a prominent e-commerce brand focused on sunglasses, with over 200k customers around the world. Their 
              customer support team faced challenges in managing high-ticket volumes while maintaining their exceptional service 
              standards.
            </p>

            <div className="flex items-center mt-16 mb-6">
              <div className="flex items-center">
                <img 
                  src="/api/placeholder/80/80" 
                  alt="Christian Doornhof" 
                  className="w-12 h-12 rounded-full mr-4" 
                />
                <div>
                  <p className="font-medium">Christian Doornhof</p>
                  <p className="text-gray-400">Strategy Lead</p>
                </div>
              </div>
              <div className="ml-auto text-gray-400">
                Oct 11, 2024
              </div>
            </div>
          </motion.div>

          <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center p-12">
            <div className="bg-[#0A1145] rounded-full w-64 h-64 flex items-center justify-center">
              <span className="text-3xl font-bold tracking-widest">BLANK.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-10">The challenge</h2>
          <p className="text-lg text-gray-500 max-w-4xl mb-12">
            Drowning in support tickets across multiple channels, seasonal spikes, international shipping complexity, and constant team 
            training our client found themselves in a perfect storm. Despite solid tools like Gorgias, response times kept climbing.
          </p>
        </motion.div>
      </section>

      {/* Our Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-2/3 pr-0 lg:pr-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-10">Our mission</h2>
            <p className="text-lg text-gray-500 mb-12">
              Transform BLANK's support from fully overwhelmed to fully automated. Instead of adding another chatbot, we created an AI 
              system that could scale along with the company's growth and become the blueprint for its entire brand portfolio.
            </p>

            <h2 className="text-4xl md:text-5xl font-medium mb-10">A solid solution</h2>
            <p className="text-lg text-gray-500 mb-6">
              We began by leveraging the GenAI Launchpad as a starting point because its event-driven architecture supports this type of 
              use case well. This allowed us to quickly build an AI agent tailored to handle the client's routine support inquiries.
            </p>
            <p className="text-lg text-gray-500 mb-6">
              The Launchpad enabled quick development of the core business logic, ensuring the AI agent could integrate with existing 
              systems. By using event-driven patterns, we could efficiently manage the flow of support tickets, escalations, and data 
              retrieval. Additionally, the Launchpad set up the basics for an event-driven architecture, handling event queuing and 
              distribution, which saved us around 1-2 weeks of development time. This meant we could focus more on engineering the 
              business logic and fine-tuning the AI agent instead of spending time on deployment and foundational setup.
            </p>
            <p className="text-lg text-gray-500 mb-6">
              We designed the entire solution with high availability and scalability in mind, ensuring that the system could handle 
              increasing volumes of support tickets as the client's business grows. We also integrated Langfuse in such a way that the 
              client can easily review the steps and prompts the AI agent took and provide feedback for continuous improvement.
            </p>
            <p className="text-lg text-gray-500 mb-6">
              To further enhance the AI's effectiveness, we implemented an evaluation framework to validate new and updated models, 
              ensuring the agent continually improves over time while maintaining high accuracy.
            </p>
            <p className="text-lg text-gray-500 mb-12">
              This AI agent doesn't just mimic BLANK's brand voice – it embodies their entire support philosophy. Best of all, the solution is 
              designed to scale, laying the groundwork for transforming support across their entire brand portfolio.
            </p>

            <h2 className="text-4xl md:text-5xl font-medium mb-10">Results</h2>
            <p className="text-lg text-gray-500 mb-6">
              Numbers never lie – our AI agent turned BLANK's support operation from overwhelmed to optimized. Response times 
              plummeted while customer satisfaction soared. By handling the routine, it freed their team to tackle the complex – all while 
              maintaining the brand voice customers love.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/3 mt-12 lg:mt-0"
          >
            <div className="bg-[#0A1145] rounded-lg p-6">
              <h3 className="text-2xl font-medium mb-6">BLANK</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-700 pb-3">
                  <span className="text-gray-400">Location</span>
                  <span>Amsterdam</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-3">
                  <span className="text-gray-400">Website</span>
                  <a href="https://blank-sunglasses.com/" className="text-blue-400 hover:underline">https://blank-sunglasses.com/</a>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-3">
                  <span className="text-gray-400">Industry</span>
                  <span>E-commerce</span>
                </div>
                <div className="flex justify-between pb-3">
                  <span className="text-gray-400">Impact</span>
                  <span className="font-medium">30% of tickets automated</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-lg text-blue-400 mb-4">Ready to talk data?</h3>
          <h2 className="text-4xl md:text-6xl font-medium mb-8">Let's turn complexity<br />into capability</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            Whether you're looking to automate processes, streamline operations, or unlock 
            new opportunities – we'll work alongside your team to implement solutions that 
            scale (with) your business.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
          >
            Get in touch <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030617] py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg width="32" height="32" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M39.4 13.9998L27.4 27.9998L19.7 19.9998L12 27.9998L0 13.9998L12 -0.000213623L19.7 7.99979L27.4 -0.000213623L39.4 13.9998Z"
                  fill="white"
                />
              </svg>
              <span className="ml-2 text-xl font-medium">Trendtial</span>
            </div>
            <p className="text-gray-500">© 2025 Trendtial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BlankCaseStudy