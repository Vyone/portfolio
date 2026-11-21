import { React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
  AOS.init({ duration: 2000 });
}, []);

return (
  < main className = "bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white min-h-screen transition-colors duration-200" >
      <Hero />
      <Skills />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </main >
  );
}

export default App;
