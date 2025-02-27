import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-12 text-white overflow-hidden bg-[#03002c]">
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* First column */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Programs</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Data Alchemy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Data Freelancer</a></li>
            </ul>
          </div>

          {/* Second column */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">YouTube Channel</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">GenAI Launchpad</a></li>
            </ul>
          </div>

          {/* Third column */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Cases</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Insights</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div className="md:col-span-1">
            <div className="rounded-2xl p-6 border border-white/20 bg-white/5 backdrop-blur-lg">
              <h3 className="font-semibold text-2xl mb-4">Subscribe to our newsletter</h3>
              <p className="text-white/70 mb-6">Get the latest insights on AI, data, and freelancing delivered to your inbox.</p>
              <div className="flex justify-end">
                <button className="bg-[#03002c] hover:bg-[#04003b] rounded-full py-2 px-6 flex items-center gap-2 font-medium transition-all duration-300">
                  Signup <ArrowRight size={18} />
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
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-semibold">Datalumina</span>
            </div>
          </div>
          <div className="flex gap-8 mb-4 md:mb-0">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy policy</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="text-white/80">
            © Datalumina - All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;