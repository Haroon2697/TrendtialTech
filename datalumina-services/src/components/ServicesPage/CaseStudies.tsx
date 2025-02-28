// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';

// interface CaseStudyCardProps {
//   category: string;
//   title: string;
//   description: string;
//   logo: string;
//   backgroundImage: string;
//   link: string;
// }

// const CaseStudyCard = ({ category, title, description, logo, backgroundImage, link }: CaseStudyCardProps) => {
//   return (
//     <motion.div
//       className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#080B2F] to-[#0A1145]"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="flex flex-col md:flex-row h-full">
//         {/* Content Section */}
//         <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between z-10">
//           <div>
//             <span className="inline-block text-blue-400 mb-6">{category}</span>
//             <h3 className="text-3xl md:text-4xl font-medium mb-6 leading-tight">
//               {title}
//             </h3>
//             <p className="text-gray-400 text-lg mb-8">
//               {description}
//             </p>
//           </div>
          
//           <motion.a
//             href={link}
//             className="inline-flex items-center text-white group"
//             whileHover={{ x: 5 }}
//             transition={{ duration: 0.2 }}
//           >
//             <span className="mr-2">READ MORE</span>
//             <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
//           </motion.a>
//         </div>

//         {/* Image Section */}
//         <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-0">
//           {/* Background Pattern */}
//           <div 
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${backgroundImage})` }}
//           />
          
//           {/* Logo Overlay */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <img 
//               src={logo || "/placeholder.svg"} 
//               alt="Company Logo" 
//               className="w-48 h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const CaseStudies = () => {
//   return (
//     <section className="container mx-auto px-4 py-20">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-4xl md:text-5xl font-medium mb-6">
//           Cases
//         </h2>
//         <p className="text-xl text-gray-400 max-w-3xl mb-12">
//           Our track record spans from initial strategy development to full implementation, always 
//           focusing on practical outcomes that drive solid business value. Here are some of our most 
//           recent projects:
//         </p>

//         {/* Case Studies Grid */}
//         <div className="space-y-8">
//           <CaseStudyCard
//             category="Software Development"
//             title="Delivering real-time coin data to millions of Crypto..."
//             description="Crypto Insiders, the largest cryptocurrency news platform in the Netherlands, attracts over 2 million..."
//             logo="/placeholder.svg?height=80&width=240"
//             backgroundImage="/placeholder.svg?height=600&width=800"
//             link="#"
//           />
//           {/* Add more case studies here */}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default CaseStudies;
"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface CaseStudyCardProps {
  category?: string
  title: string
  description?: string
  logo?: string
  backgroundImage?: string
  isContactCard?: boolean
  link: string
}

const CaseStudyCard = ({
  category,
  title,
  description,
  logo,
  backgroundImage,
  isContactCard,
  link,
}: CaseStudyCardProps) => {
  if (isContactCard) {
    return (
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#080B2F] to-[#0A1145] p-12 flex flex-col h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M39.4 13.9998L27.4 27.9998L19.7 19.9998L12 27.9998L0 13.9998L12 -0.000213623L19.7 7.99979L27.4 -0.000213623L39.4 13.9998Z"
              fill="white"
            />
          </svg>
        </div>

        <h3 className="text-3xl md:text-4xl font-medium mb-auto leading-tight">{title}</h3>

        <motion.a
          href={link}
          className="inline-flex items-center justify-center px-6 py-3 mt-8 text-white bg-[#1a1a1a] rounded-full hover:bg-[#2a2a2a] transition-colors group w-fit"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className="mr-2">Contact us</span>
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </motion.a>

        {/* Blue gradient overlay */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-500/20 to-transparent" />
      </motion.div>
    )
  }

  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#080B2F] to-[#0A1145]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative p-12 h-full">
        {/* Background Image */}
        {backgroundImage && (
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10">
          <span className="inline-block text-blue-400 mb-6">{category}</span>

          {logo && (
            <div className="mb-6">
              <img src={logo || "/placeholder.svg"} alt="Company Logo" className="h-8" />
            </div>
          )}

          <h3 className="text-3xl md:text-4xl font-medium mb-6 leading-tight">{title}</h3>

          {description && <p className="text-gray-400 text-lg mb-8">{description}</p>}

          <motion.a
            href={link}
            className="inline-flex items-center text-white group"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <span className="mr-2">READ MORE</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

const CaseStudies = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-4xl md:text-5xl font-medium mb-6">Cases</h2>
        <p className="text-xl text-gray-400 max-w-3xl mb-12">
          Our track record spans from initial strategy development to full implementation, always focusing on practical
          outcomes that drive solid business value. Here are some of our most recent projects:
        </p>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CaseStudyCard
            category="AI Engineering"
            title="Transforming BLANK's customer service with AI"
            description="BLANK is a prominent e-commerce brand focused on sunglasses, with over 200k customers around the world. Their customer support team faced challenge... in managing high- ticket volumes while maintaining"
            backgroundImage="/placeholder.svg?height=600&width=800"
            link="#"
          />

          <CaseStudyCard
            category="YouTube Collaboration"
            title="Partnering with Timescale to simplify embeddings for AI developers"
            description="This case highlights the collaboration with Timescale to showcase their innovative PostgreSQL extensions, pgvectorscale and pgAI. Through a series of tutorials..."
            logo="/placeholder.svg?height=40&width=120"
            link="#"
          />

          <CaseStudyCard
            isContactCard
            title="Let's talk about how we can help you get from complexity to capability"
            link="/contact"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default CaseStudies

