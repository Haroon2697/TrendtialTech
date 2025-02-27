"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export default function AboutHero() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5, // Size range: 0.5px to 2.5px
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 2,
      color: Math.random() > 0.7 ? "blue-300" : Math.random() > 0.5 ? "blue-400" : "white",
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="h-[80vh] w-full bg-[#020824] flex items-center justify-center px-4 md:px-8 py-10 overflow-hidden relative">
      {/* Render Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`absolute bg-${star.color} rounded-full`}
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

      {/* Center Glow Effect */}
      <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2">
        <div className="w-[500px] h-[300px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[100px]" />
      </div>

      <motion.div
        className="max-w-3xl mx-auto text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          About Trendtial Tech
          <sup className="text-xs md:text-sm align-super">®</sup>
        </motion.h1>

        <motion.p
          className="text-white text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          AI and data reshape our world at a relentless speed, but still, most companies find themselves caught between
          possibility and complexity. We believe that breakthrough innovation doesn't come from chasing every new
          development that comes along; it comes from cutting through the noise to identify what creates value and what
          truly gives that competitive advantage.
        </motion.p>
      </motion.div>
    </div>
  );
}
