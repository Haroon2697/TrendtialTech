"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  colorClass: string;
}

interface InsightCard {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  delay: number;
}

const insightCards = [
  {
    id: 1,
    category: "AI & ML",
    title: "Advanced AI Solutions for Enterprise",
    description: "Explore how Trendtial Tech's cutting-edge AI solutions are transforming enterprise operations and driving innovation across industries.",
    image: "/images/ai-innovation.jpg",
    delay: 0
  },
  {
    id: 2,
    category: "Data Analytics",
    title: "Real-time Analytics Platform",
    description: "Our advanced analytics platform delivers real-time insights, enabling businesses to make data-driven decisions with confidence and precision.",
    image: "/images/data-analytics.jpg",
    delay: 0.1
  },
  {
    id: 3,
    category: "Cloud Solutions",
    title: "Enterprise Cloud Architecture",
    description: "Discover Trendtial's innovative approach to cloud infrastructure, designed for maximum scalability, security, and performance.",
    image: "/images/cloud-solutions.jpg",
    delay: 0.2
  },
  {
    id: 4,
    category: "Digital Transformation",
    title: "Digital Evolution Strategy",
    description: "Learn how our comprehensive digital transformation framework is helping enterprises navigate their technological evolution.",
    image: "/images/digital-transform.jpg",
    delay: 0.3
  },
  {
    id: 5,
    category: "AI & ML",
    title: "Intelligent Automation Solutions",
    description: "Explore our AI-powered automation solutions that streamline operations and enhance productivity across your organization.",
    image: "/images/enterprise-ai.jpg",
    delay: 0.4
  },
  {
    id: 6,
    category: "Data Analytics",
    title: "Data Security & Governance",
    description: "Our enterprise-grade data security solutions ensure compliance while enabling seamless data accessibility and management.",
    image: "/images/data-security.jpg",
    delay: 0.5
  }
];

const filterButtons = [
  "All Insights",
  "AI & ML",
  "Data Analytics",
  "Cloud Solutions",
  "Digital Transformation"
];

export default function InsightFilter() {
  const [stars, setStars] = useState<Star[]>([]);
  const [activeFilter, setActiveFilter] = useState("All Insights");
  const [filteredCards, setFilteredCards] = useState<InsightCard[]>(insightCards);

  useEffect(() => {
    const generatedStars = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 2,
      colorClass: Math.random() > 0.7 ? "bg-blue-300" : Math.random() > 0.5 ? "bg-blue-400" : "bg-white",
    }));

    setStars(generatedStars);
  }, []);

  useEffect(() => {
    const filtered = activeFilter === "All Insights"
      ? insightCards
      : insightCards.filter(card => card.category === activeFilter);
    setFilteredCards(filtered);
  }, [activeFilter]);

  return (
    <section className="relative bg-[#020824] min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className={`absolute ${star.colorClass} rounded-full`}
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <div className="w-[500px] h-[300px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[100px]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl my-24 mx-auto mb-12 sm:mb-16">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Insights
          </motion.h1>
          <motion.p
            className="text-gray-300 mb-36 text-sm sm:text-base leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover insights and expert perspectives on data, AI, and the future of intelligent systems.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-start sm:gap-4 mb-12 sm:mb-16 max-w-screen-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filterButtons.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm transition-all duration-300
                ${activeFilter === filter
                  ? "bg-blue-600/50 text-white border-blue-400 shadow-lg shadow-blue-500/20"
                  : "bg-blue-900/30 text-blue-200 hover:bg-blue-800/40 hover:shadow-md"
                } backdrop-blur-sm border border-blue-700/30`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24">
          <AnimatePresence mode="wait">
            {filteredCards.map((card) => (
              <motion.article 
                key={card.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800/50"
              >
                <div className="relative w-full h-48 sm:h-56">
                  <Image 
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={card.id <= 3}
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"/>
                </div>
                <div className="p-4 sm:p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-900/30 text-blue-400 backdrop-blur-sm border border-blue-800/30">
                    {card.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mt-3 mb-2 line-clamp-2 hover:text-blue-400 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {card.description}
                  </p>
                  <button 
                    className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-300 group"
                    aria-label={`Read more about ${card.title}`}
                  >
                    Read More 
                    <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Glow Effect */}
        <div className="absolute top- right-1/2 transform -translate-x-1/2">
          <div className="w-[500px] h-[300px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[100px]" />
        </div>

        {/* Contact Section */}
        <div className="relative mt-20 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-800/50">
         {/* Glow Effect */}
         <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <div className="w-[500px] h-[300px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[100px]" />
        </div>
          <div className="mb-6">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z" fill="white" fillOpacity="0.1"/>
              <path d="M13 20L19 26L28 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <h2 className="text-2xl md:text-3xl font-semibold max-w-md text-white">
              Ready to talk about how data can work for you?
            </h2>
            
            <motion.button
              className="flex items-center gap-2 bg-[#1a2035] hover:bg-[#252b46] text-white font-medium px-5 py-3 rounded-full transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Contact us"
            >
              Contact us <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}