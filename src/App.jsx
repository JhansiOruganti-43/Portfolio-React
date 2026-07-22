import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    // Default to dark mode for modern aesthetics
    return saved ? saved : 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen transition-colors duration-350 bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      {/* Navigation Sticky Bar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {/* Sections Shell */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      {/* Scroll Helper */}
      <ScrollToTop />
    </div>
  );
}