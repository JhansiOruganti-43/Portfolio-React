import { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { motion } from 'framer-motion';

export default function Hero() {
  const titles = ["Aspiring Software Developer", "Full Stack Developer", "Problem Solver"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullTitle = titles[currentTitleIndex];
      if (!isDeleting) {
        setDisplayedText(fullTitle.substring(0, displayedText.length + 1));
        if (displayedText.length === fullTitle.length) {
          // Pause at the end of typing
          setTypingSpeed(2000);
          setIsDeleting(true);
        } else {
          setTypingSpeed(100);
        }
      } else {
        setDisplayedText(fullTitle.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(500);
        } else {
          setTypingSpeed(50);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden ambient-gradient-1">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-blue-400/10 dark:bg-sky-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content block */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* <h2 className="text-blue-600 dark:text-sky-400 font-display font-semibold text-sm sm:text-base tracking-widest uppercase mb-3">
                Welcome to my portfolio
              </h2> */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-950 dark:text-white mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400 bg-clip-text text-transparent">Jhansi Oruganti</span>
              </h1>
            </motion.div>

            {/* Typewriter subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-12 sm:h-16 mb-4 sm:mb-6"
            >
              <span className="text-lg sm:text-xl md:text-2xl font-display font-medium text-slate-700 dark:text-slate-300">
                 <span className="border-r-2 border-blue-600 dark:border-sky-400 pr-1 animate-pulse text-blue-600 dark:text-sky-400">{displayedText}</span>
              </span>
            </motion.div>

            {/* Bio paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Information Technology student passionate about Full Stack Development, Software Engineering, and building scalable web applications using Java, Python, React, and SQL.
              </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all font-medium cursor-pointer dark:bg-sky-600 dark:hover:bg-sky-500"
              >
                View Projects
              </button>
              <a
                href="/resume.pdf"
                download="Jhansi_Oruganti_Resume.pdf"
                className="px-6 py-3 border border-slate-300 hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all font-medium flex items-center justify-center"
              >
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 text-blue-600 dark:text-sky-400 hover:bg-blue-50/50 dark:hover:bg-sky-950/20 rounded-xl transition-colors font-medium cursor-pointer"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social Handles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start space-x-4 text-slate-500 dark:text-slate-400"
            >
              <a
                href="https://github.com/JhansiOruganti-43"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-sky-400 p-2.5 border border-slate-200 dark:border-slate-800 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jhansi-oruganti-800b602b3/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-sky-400 p-2.5 border border-slate-200 dark:border-slate-800 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jhansioruganti43@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-sky-400 p-2.5 border border-slate-200 dark:border-slate-800 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Profile Photo Graphic */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80"
            >
              {/* Outer glow aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 blur-xl opacity-30 animate-pulse-slow"></div>
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full opacity-60 blur-xs"></div>

              {/* Graphic Border */}
              <div className="absolute inset-1 rounded-full overflow-hidden border-4 border-white dark:border-slate-950 bg-slate-100 dark:bg-slate-800 flex items-center justify-center shadow-2xl">
                <img
                  src="/profile.png"
                  alt="Jhansi Oruganti"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
}
