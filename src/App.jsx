import {React, useEffect} from 'react';
// import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
  <main className="bg-gray-900 min-h-screen">
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Project />
    <Contact />
    <Footer />
  </main>
  )
}

export default App
