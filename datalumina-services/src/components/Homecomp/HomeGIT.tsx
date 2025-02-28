import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

const HomeGIT = () => {
  const [stars, setStars] = useState<Star[]>([]);



  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-neutral-900 text-white">
   
      

      {/* About Trendtial Tech Section */}
      <div className="h-[80vh] w-full bg-[#0a0a13] flex flex-col items-center justify-center px-4 md:px-8 py-10 overflow-hidden relative">
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
          <div className="w-[700px] h-[300px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[100px]" />
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center z-10 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-blue-300 mb-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Ready to talk data?
          </motion.p>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Let's turn complexity<br />into capability
          </motion.h1>

          <motion.p
            className="text-gray-300 mx-auto max-w-2xl text-sm md:text-base leading-relaxed font-light mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Whether you're looking to automate processes, streamline operations, or unlock
            new opportunities – we'll work alongside your team to implement solutions that
            scale (with) your business.
          </motion.p>
        </motion.div>

        {/* Button positioned below the content */}
        <motion.button
          whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.85)", scale: 1.02 }}
          className="bg-white text-[#03002c] px-5 py-2 rounded-full flex items-center gap-2 text-sm font-light transition-all duration-300 z-10"
        >
          Get in touch
          <motion.span
            className="flex"
            initial={{ rotate: -45, x: -2, y: -2 }}
            whileHover={{ x: 0, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </motion.button>
      </div>
      
    </div>
  );
};

export default HomeGIT;