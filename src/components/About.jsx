import { GraduationCap, Award, Users, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const cards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600 dark:text-sky-400" />,
      title: "Education",
      desc: "B.Tech Information Technology student at Shri Vishnu Engineering College for Women (2024 - 2027). Current CGPA: 8.24.",
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: "Strong Foundation",
      desc: "Proficient in Java, Python, C, SQL, DBMS, Web Development, and Backend Systems architecture.",
    },
    {
      icon: <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Leadership",
      desc: "Coordinator of The Hindu Future India Club. Spearheaded campus events, managed projects, and fostered team collaboration.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
      title: "Collaboration",
      desc: "Worked within cross-disciplinary teams on assistive technology products in the Assistive Technology Lab (ATL).",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left bio details */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white leading-tight">
              Aspiring Software Developer | Full Stack Developer | Problem Solver
            </h3>
            {/* <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I am pursuing my B.Tech in Information Technology at Shri Vishnu Engineering College for Women. My passion lies in software development, web engineering, and exploring robust database technologies to create impactful solutions.
            </p> */}
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Passionate Information Technology student with interests in Full Stack Development, Software Engineering, and Database Systems. Skilled in Java, Python, React, Flask, and SQL, with experience building real-world web applications and solving technical challenges.</p>
            <div className="p-4 bg-blue-50/50 border-l-4 border-blue-600 rounded-r-xl dark:bg-sky-950/20 dark:border-sky-500">
              {/* <p className="text-sm font-medium text-blue-800 dark:text-sky-300 italic">
                "I focus on writing clean, efficient code and optimizing database structures to construct performant backend services and user interfaces."
              </p> */}
            </div>
          </div>

          {/* Right Highlights Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xs border border-slate-100 dark:border-slate-800 hover:shadow-lg hover:border-slate-200 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div className="mb-4 p-3 bg-slate-50 dark:bg-slate-800/60 w-fit rounded-xl">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-lg font-display font-semibold text-slate-900 dark:text-white mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
