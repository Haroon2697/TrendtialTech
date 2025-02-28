"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"


const TimescaleCaseStudy = () => {
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
            Partnering with Timescale to simplify embeddings for AI developers
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
            This case highlights the collaboration with Timescale to showcase their innovative PostgreSQL extensions, 
            pgvectorscale and pgAI. Through a series of tutorials, we reached over 25,000 developers,
            demonstrating how these tools simplify AI workflows and enable seamless integration of relational and vector data.
            </p>

            <div className="flex items-center mt-16 mb-6">
              <div className="flex items-center">
                <img 
                  src="/api/placeholder/80/80" 
                  alt="Dave Ebbelaar" 
                  className="w-12 h-12 rounded-full mr-4" 
                />
                <div>
                  <p className="font-medium">Dave Ebbelaar</p>
                  <p className="text-gray-400">Founder, AI Engineer</p>
                </div>
              </div>
              <div className="ml-auto text-gray-400">
                Jan 04, 2025
              </div>
            </div>
          </motion.div>

          <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center p-12">
            <div className="bg-[#0A1145] rounded-full w-64 h-64 flex items-center justify-center">
              <span className="text-3xl font-bold tracking-widest">Timescale.</span>
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
          The rise of AI and machine learning has made vector search and RAG (retrieval-augmented generation) critical tools for developers building intelligent applications. Yet, these capabilities are often fragmented across specialized tools, forcing developers to juggle multiple databases for embeddings, metadata, and relational data. This complexity slows development and complicates scaling for AI-powered solutions.

Timescale aimed to address this by integrating vector capabilities directly into PostgreSQL through pgvectorscale and Pgai. The challenge was to showcase these innovations in an engaging, developer-focused way that highlighted their unique potential. 
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
            <h2 className="text-4xl md:text-5xl font-medium mb-10">The Collaboration</h2>
            <p className="text-lg text-gray-500 mb-12">
            Collaborating with Timescale, we sought to demystify their tools and empower developers to build high-performance AI systems using PostgreSQL. The goal was to create actionable, hands-on content that would resonate with developers eager to streamline their AI workflows. Through tutorials, we wanted to demonstrate how Timescale’s extensions simplify AI development and reduce the need for multiple systems. 
            </p>
            <p className="text-lg text-gray-500 mb-12">
            We delivered three video tutorials showcasing pgvectorscale and pgAI in action. Each video combined technical clarity with practical applications helping developers understand the “why” behind these tools and the “how” of implementing them.
            </p>

            <h3 className="text-l md:text-4xl mb-10">1. Building High-Performance RAG Systems with pgvectorscale</h3>
            <p className="text-lg text-gray-500 mb-6">
            Developers often rely on specialized vector databases like Pinecone or Weaviate, but pgvectorscale makes it possible to build a robust, scalable RAG system entirely within PostgreSQL. In this tutorial, we walked through setting up vector storage and retrieval using pgvectorscale and Python. This hands-on project showed developers how to create open-source RAG systems without sacrificing speed or simplicity, empowering them to reduce reliance on external tools while keeping everything under one database umbrella.
            </p>

            <h3 className="text-l md:text-4xl mb-10">2. Streamlining Hybrid Search with Timescale</h3>
            <p className="text-lg text-gray-500 mb-6">
            Beyond basic vector search, AI applications require advanced capabilities like metadata filtering, predicates, and time-based queries. Using Timescale’s features, developers can create smarter, more context-aware systems that go beyond traditional RAG. This tutorial showcased how to integrate advanced search techniques into AI workflows, enabling developers to unlock new levels of precision and performance while keeping their infrastructure manageable.
            </p>

            <h3 className="text-l md:text-4xl mb-10">3. Simplifying vector embeddings with Pgai</h3>
            <p className="text-lg text-gray-500 mb-6">
            Managing embeddings across systems can be a nightmare, but Pgai changes the game. By automating embedding generation and synchronization directly within PostgreSQL, this extension eliminates the need for external workflows and ensures all data remains perfectly in sync. In our third video, we explored how developers can leverage Pgai to build smarter, more efficient AI systems without the hassle of managing embeddings separately.
            </p>

            <h2 className="text-4xl md:text-5xl font-medium mb-10">Results</h2>
            <p className="text-lg text-gray-500 mb-6">
            By introducing pgvectorscale and Pgai, the tutorials significantly increased awareness, demonstrating how these tools simplify traditionally complex AI development processes.
            </p>
            <p className="text-lg text-gray-500 mb-6">
            Perhaps most importantly, the tutorials inspired a shift in how developers think about their systems. By showing how PostgreSQL can seamlessly manage both relational and vector data, the content empowered developers to embrace integrated, scalable designs. This paradigm shift is helping shape the future of AI development, as evidenced by the strong engagement and enthusiastic feedback from viewers.
            </p>
            <h2 className="text-4xl md:text-5xl font-medium mb-10">How Timescale powers our AI projects
            </h2>
            <p className="text-lg text-gray-500 mb-6">
            At Datalumina, we’ve tested a variety of solutions for managing vector embeddings, and Timescale’s extensions have become our preferred tools for AI projects. Their seamless integration with PostgreSQL allows us to simplify workflows, reduce infrastructure complexity, and deliver scalable, high-performance AI systems for our clients.
            </p>
            <p className="text-lg text-gray-500 mb-6">
            These tools are also a core component of our GenAI Launchpad, which is designed to help developers accelerate the development and deployment of AI-powered applications. With Pgvectorscale as the foundation for managing vector embeddings, we enable developers and our clients to unlock the full potential of PostgreSQL as a powerful vector database.
            </p>
        
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/3 mt-12 lg:mt-0"
          >
            <div className="bg-[#0A1145] rounded-lg p-6">
              <h3 className="text-2xl font-medium mb-6">Timescale</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-700 pb-3">
                  <span className="text-gray-400">Website</span>
                  <a href="https://www.timescale.com/" className="text-blue-400 hover:underline">https://www.timescale.com/</a>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-3">
                  <span className="text-gray-400">Impact</span>
                  <span>25,000+ views</span>
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
     
    </div>
  )
}

export default TimescaleCaseStudy