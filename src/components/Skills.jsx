import { useState } from 'react';
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: null },
    { id: 'languages', label: 'Programming', icon: <Code2 className="w-4 h-4" /> },
    { id: 'frontend', label: 'Frontend', icon: <Layout className="w-4 h-4" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-4 h-4" /> },
    { id: 'databases', label: 'Databases', icon: <Database className="w-4 h-4" /> },
    { id: 'tools', label: 'Tools', icon: <Wrench className="w-4 h-4" /> },
  ];

  const skillsData = [
  { name: 'Java', category: 'languages' },
  { name: 'Python', category: 'languages' },
  { name: 'C', category: 'languages' },

  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'React.js', category: 'frontend' },

  
  
  { name: 'Bootstrap', category: 'frontend' },

  { name: 'Flask', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },

  { name: 'MySQL', category: 'databases' },
  { name: 'MongoDB', category: 'databases' },

  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'Postman', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  
  { name: 'Eclipse', category: 'tools' },

];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto rounded-full mb-6"></div>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
  Technologies, frameworks, databases, and tools I use to build modern web applications and software solutions.
</p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 dark:bg-sky-600 dark:shadow-sky-500/10'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <motion.div
  variants={containerVariants}
  initial="hidden"
  animate="show"
  key={activeCategory}
  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
>
  {filteredSkills.map((skill) => (
    <motion.div
      key={skill.name}
      variants={itemVariants}
      whileHover={{
        y: -4,
        scale: 1.03,
      }}
      className="
        bg-white dark:bg-slate-900
        border border-slate-200 dark:border-slate-700
        rounded-xl
        px-4 py-4
        text-center
        shadow-sm
        hover:shadow-lg
        transition-all duration-300
      "
    >
      <span className="font-medium text-slate-800 dark:text-slate-200">
        {skill.name}
      </span>
    </motion.div>
  ))}
</motion.div>
      </div>
    </section>
  );
}
