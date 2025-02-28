// "use client"

// import { motion } from "framer-motion"

// const Insights = () => {
//   return (
//     <motion.div
//       className="container mx-auto px-4 py-20 max-w-6xl"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <motion.h1
//         className="text-5xl md:text-7xl font-bold text-center mb-10"
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.8 }}
//       >
//         Insights
//       </motion.h1>

//       <motion.p
//         className="text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed mb-16"
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.4, duration: 0.8 }}
//       >
//         Explore our latest thoughts, research, and insights on AI, data science, and digital transformation.
//       </motion.p>

//       {/* Placeholder for insights content */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {[1, 2, 3, 4, 5, 6].map((item) => (
//           <motion.div
//             key={item}
//             className="bg-white/5 backdrop-blur-sm p-6 rounded-xl"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 + item * 0.1, duration: 0.5 }}
//             whileHover={{ y: -5, transition: { duration: 0.2 } }}
//           >
//             <div className="h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg mb-4"></div>
//             <h3 className="text-xl font-semibold mb-2">Insight Title {item}</h3>
//             <p className="text-white/70 mb-4">
//               A brief description of this insight and why it matters for your business.
//             </p>
//             <a href="#" className="text-white underline underline-offset-4">
//               Read more
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   )
// }

// export default Insights

import InsightFilter from '../components/InsightFilter'
function Insights() {
  return (
    <div>

    <InsightFilter />
</div>
)
}

export default Insights