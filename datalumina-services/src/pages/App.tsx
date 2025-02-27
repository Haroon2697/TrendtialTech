import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Services from "./Services"
import Home from "./Home"
import Insights from "./Insights"
import About from "./About"
import Academy from "./Academy"
import GenAILaunchpad from "./GenAILaunchpad"
import Contact from "./Contact"
import Navbar from "../components/Navbar"
import AnimatedBackground from "../components/AnimatedBackground"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"


function App() {
  const [isAppMounted, setIsAppMounted] = useState(false)
  useEffect(() => {
    // Set app as mounted after initial render
    setIsAppMounted(true)
  }, [])
  return (
    <Router>
      <div className="min-h-screen bg-dark-blue text-white relative overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10">
        <Navbar />
          <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/about" element={<About />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/genai-launchpad" element={<GenAILaunchpad />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App

