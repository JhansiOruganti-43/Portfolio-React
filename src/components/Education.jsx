import { Calendar, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech Information Technology",
      school: "Shri Vishnu Engineering College for Women",
      duration: "2024 – 2027",
      grade: "CGPA: 8.24",
      desc: "Specializing in software engineering methodologies, design patterns, computer networks, and advanced data structures. Engaging in assistive technology programs.",
    },
    {
      degree: "Diploma in Communication and Computer Networks",
      school: "Aditya College of Engineering and Technology",
      duration: "2021 – 2024",
      grade: "CGPA: 8.72",
      desc: "Fostered a core understanding of procedural languages, algorithms, operating systems, web programming standards, and communication network principles.",
    },

  ];

  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-slate-900/30 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 dark:text-white mb-4">
            Education Timeline
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto rounded-full"></div>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-32">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Point Node Icon */}
              <div className="absolute -left-[21px] top-1.5 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-sky-500 text-blue-600 dark:text-sky-400 shadow-sm z-10">
                <GraduationCap className="w-5 h-5" />
              </div>

              {/* Education Block Card */}
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-850 shadow-xs hover:shadow-lg hover:border-slate-200 dark:hover:border-slate-700/80 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 dark:text-sky-400 uppercase tracking-wider bg-blue-50 dark:bg-sky-950/45 px-2.5 py-1 rounded-full">
                      {edu.grade}
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white mt-2">
                      {edu.degree}
                    </h3>
                  </div>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-0 font-medium">
                    <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                    {edu.duration}
                  </div>
                </div>

                <h4 className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-350 mb-3">
                  {edu.school}
                </h4>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
