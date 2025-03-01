import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Services from "./pages/Services"
import Home from "./pages/Home"
import Insights from "./pages/Insights"
import About from "./pages/About"
import Academy from "./pages/Academy"
import GenAILaunchpad from "./pages/GenAILaunchpad"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import AnimatedBackground from "./components/AnimatedBackground"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"


function App() {
  const [isAppMounted, setIsAppMounted] = useState(false)
  useEffect(() => {
    // Set app as mounted after initial render
    setIsAppMounted(true)
  }, [])
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a13] text-white relative overflow-hidden">
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

