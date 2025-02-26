"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

const Contact = () => {
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
        Contact Us
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed mb-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Ready to transform your business with data and AI? Get in touch with our team.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white text-dark-blue px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col"
        >
          <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Our Location</h3>
                  <p className="text-white/70">
                    123 Innovation Drive
                    <br />
                    Tech District
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Email Us</h3>
                  <p className="text-white/70">
                    info@trendtialtech.com
                    <br />
                    support@trendtialtech.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Call Us</h3>
                  <p className="text-white/70">
                    +1 (555) 123-4567
                    <br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 flex-grow">
            <h3 className="font-semibold text-xl mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact

