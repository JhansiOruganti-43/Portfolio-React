import { Shield, Lightbulb, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Leadership() {
  const activities = [
    {
      role: "Coordinator",
      organization: "The Hindu Future India Club",
      desc: "Managed club activities, planned professional workshops, facilitated campus networking projects, and strengthened core administrative and coordination skills.",
      icon: <Users className="w-6 h-6 text-blue-600 dark:text-sky-400" />,
      tag: "Leadership"
    },
    {
      role: "Member",
      organization: "Assistive Technology Lab",
      desc: "Partnered with cross-disciplinary student developers on assistive engineering projects, building physical and digital prototypes to support accessibility.",
      icon: <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      tag: "Collaboration"
    },
    {
      role: "Participant",
      organization: "Hackathons & Challenges",
      desc: "Participated in design sprints, coding hackathons, and collaborative competitions to implement rapid prototypes and solve structured tasks.",
      icon: <Lightbulb className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      tag: "Innovation"
    }
  ];

  return (
    <section id="leadership" className="py-24 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 dark:text-white mb-4">
            Leadership & Activities
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto rounded-full mb-6"></div>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            My active engagement in student organizations, engineering labs, and technical hackathons.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-850 shadow-xs hover:shadow-xl hover:border-slate-200 dark:hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 bg-white dark:bg-slate-800 rounded-2xl shadow-xs">
                    {act.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest bg-slate-200/50 dark:bg-slate-800 px-3 py-1 rounded-lg">
                    {act.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-slate-950 dark:text-white mb-1">
                  {act.role}
                </h3>
                <h4 className="text-sm font-semibold text-blue-600 dark:text-sky-400 mb-4">
                  {act.organization}
                </h4>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {act.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
