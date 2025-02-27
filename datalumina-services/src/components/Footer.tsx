"use client"

import { ArrowRight } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full pt-16 pb-8 text-white overflow-hidden bg-[#03002c] relative">
      {/* Glow effects */}
      <div className="absolute top-[-15%] left-0 transform -translate-x-1/4">
        <div className="w-[800px] h-[450px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-90 blur-[120px]" />
      </div>
      <div className="absolute top-[-15%] right-0 transform translate-x-1/4">
        <div className="w-[600px] h-[350px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-90 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Navigation columns */}
          <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Programs */}
            <div>
              <h3 className="text-xl font-light mb-4">Programs</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-light">
                    Data Alchemy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-light">
                    Data Freelancer
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xl font-light mb-4">Resources</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-light">
                    YouTube Channel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-light">
                    GenAI Launchpad
                  </a>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-xl font-light mb-4">Navigation</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-light">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-light">
                    Cases
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-light">
                    Insights
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-light">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-light">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter subscription */}
          <div className="md:col-span-5">
            <div className="rounded-2xl p-6 border border-white/20 bg-[#03002c]/10 backdrop-blur-lg">
              <h3 className="text-xl font-light mb-2">Subscribe to our newsletter</h3>
              <p className="text-white/70  font-light text-sm">
                Get the latest insights on AI, data, and freelancing delivered to your inbox.
              </p>
              <div className="flex justify-end">
                <button className="group relative rounded-full py-2 px-4 flex items-center gap-2 font-light text-sm overflow-hidden border border-white/20 bg-[#03002c]/20 hover:bg-gradient-to-r from-[#4f49bc] to-[#05209c] transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    Signup <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with logo and links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-lg font-light">Trendtial</span>
            </div>
          </div>
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="text-white/80 hover:text-white transition-colors font-light text-sm">
              Privacy policy
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors font-light text-sm">
              Terms of Service
            </a>
          </div>
          <div className="text-white/80 font-light text-sm">© Trendtial - All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

