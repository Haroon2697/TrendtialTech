"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin } from "lucide-react"

export default function AboutEmpower() {
  return (
    <div className="w-full bg-[#020824] text-white">
      {/* First Section */}
      <motion.div
        className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-27%20151504-sqFO1nYUGIvya5GJeRMtYXoh9MpmLA.png"
            alt="Water tower architectural view"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="space-y-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Empowering businesses and developers with practical value
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            We believe breakthrough innovation comes from something other than chasing every new development. We
            identify what creates actual value, not just buzz. Our solutions are built for production, not just
            presentations. Whether a Fortune 500 or a solo developer, we help you master the tools of tomorrow.
          </motion.p>

          <motion.div
            className="flex items-center text-gray-400 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <MapPin className="w-5 h-5 mr-2" />
            <span>Communicatieweg Oost 12, 1566 PK Assendelft</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Second Section */}
      <motion.div
        className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-6">
          <motion.h2
            className="text-5xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Not your typical tech consultancy
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            We are systematic innovators, developers, and strategic guides, transforming how businesses and developers
            harness the forces of data and AI. Our name reflects our mission: 'Data' grounds us in the technical
            foundation of everything we do, while 'lumina' represents the clarity and guidance we provide. Together,
            they embody our commitment to illuminating the path from complexity to capability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            className="relative h-[300px] rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-27%20151450-Rg9mAryS6CuTSFfV4E4RMvSo7BLElI.png"
              alt="Developer working with laptop"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="relative h-[300px] rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-27%20151504-sqFO1nYUGIvya5GJeRMtYXoh9MpmLA.png"
              alt="Water tower architectural view"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
