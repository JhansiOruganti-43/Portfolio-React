import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Certifications() {
  const certificationsData = [
    {
      title: "Software Project Management",
      issuer: "NPTEL",
      date: "Academic Coursework",
      color: "border-l-4 border-purple-500",
      link: "",
    },
    {
      title: "IT Specialist – HTML & CSS",
      issuer: "Certiport",
      date: "Industry Standard Certification",
      color: "border-l-4 border-teal-500",
      link: "",
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto rounded-full mb-6"></div>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Professional certifications and verified badges validating my software development and database engineering skills.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className={`p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xs border border-slate-100 dark:border-slate-850 hover:shadow-md hover:border-slate-200 dark:hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between ${cert.color}`}
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-2.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl">
                    <Award className="w-5 h-5 text-blue-600 dark:text-sky-400" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-display font-bold text-slate-950 dark:text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">
                  {cert.issuer}
                </h4>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                  {cert.date}
                </span>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-sky-400 hover:underline mt-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
