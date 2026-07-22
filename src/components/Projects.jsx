import { ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import { motion } from 'framer-motion';

export default function Projects() {
  const projectsData = [
    {
  title: "ShareMeal – Food Donation Platform",
  description: "Developed a full-stack MERN web application that connects restaurants with NGOs to reduce food waste through secure food donation management. Implemented authentication, role-based dashboards, donation tracking, and responsive user interfaces for seamless collaboration.",
  tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
  image: "/sharemeal.png",
  github: "https://github.com/JhansiOruganti-43/ShareMeal",
  demo: ""
},
    {
      title: "Apartment Management System",
      description: "Built a web-based management solution designed to digitize resident operations. Manages unit listings, tracking monthly utility and maintenance expenses, generating bills, and sending automated payment updates.",
      tech: ["Python", "Flask", "MongoDB", "REST APIs"],
      image: "/apartment_mgmt.png",
      github: "https://github.com/JhansiOruganti-43/Apartment_Management",
      // demo: "https://apartment-mgmt-demo.netlify.app"
    },
   
    {
      title: "Octovu – Startup Web Application",
      description: "Developed and coded fluid UI modules, interactive dashboard grids, and responsive components for the Octovu startup software platform, aligning with modern design languages.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs"],
      image: "/octovu_startup.png",
      github: "https://github.com/JhansiOruganti-43/Octovu-up",
      demo: "https://octovu-startup-demo.netlify.app"
    },

     {
  title: "SmartPrice AI - Product Price Comparison Platform",
  description: "Developed an AI-powered price comparison platform that aggregates product information from multiple e-commerce sources, compares prices, ratings, and offers, and provides intelligent product recommendations. Features include web scraping, product matching, search history tracking, and AI-based deal suggestions.",
  tech: ["React", "Flask", "Python", "SQLite", "REST APIs", "Web Scraping", "AI Recommendations"],
  image: "/price_comparison.png",
  github: "https://github.com/JhansiOruganti-43/Price-Comparison-System"
  // demo: "https://your-demo-link.com"
     }
    // {
    //   title: "OCR-Based Text-to-Speech System",
    //   description: "Designed a lightweight assistive software scanner for visually impaired users. Recognizes printed text from custom imagery and translates text segments into synthesised vocal audio.",
    //   tech: ["Python", "OpenCV", "Tesseract OCR", "gTTS"],
    //   image: "/ocr_tts.png",
    //   github: "https://github.com/jhansi-oruganti/ocr-text-to-speech",
    //   demo: "https://ocr-tts-demo.netlify.app"
    // }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto rounded-full mb-6"></div>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A showcase of selected academic applications, web platforms, and database developments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-850 shadow-xs hover:shadow-xl hover:border-slate-200 dark:hover:border-slate-700/80 transition-all duration-300 flex flex-col h-full"
            >
              {/* Cover Image */}
              <div className="relative aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-950 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-justify">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, index) => (
                      <span
                        key={index}
                        className="text-xs font-semibold text-slate-600 dark:text-slate-350 bg-slate-200/50 dark:bg-slate-800 px-3 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions buttons */}
                  <div className="flex items-center pt-4 border-t border-slate-100 dark:border-slate-800/60">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-850 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
