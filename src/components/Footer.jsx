import { Code, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-slate-900">

          {/* Logo Branding */}
          <div className="flex items-center space-x-2 justify-center md:justify-start">
            <div className="p-2 bg-sky-600 rounded-lg text-white">
              <Code className="w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Jhansi<span className="text-sky-450">.Dev</span>
            </span>
          </div>

          {/* Quick scroll links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
            <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer">Home</button>
            <button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors cursor-pointer">About</button>
            <button onClick={() => handleLinkClick('skills')} className="hover:text-white transition-colors cursor-pointer">Skills</button>
            <button onClick={() => handleLinkClick('education')} className="hover:text-white transition-colors cursor-pointer">Education</button>
            <button onClick={() => handleLinkClick('projects')} className="hover:text-white transition-colors cursor-pointer">Projects</button>
            <button onClick={() => handleLinkClick('contact')} className="hover:text-white transition-colors cursor-pointer">Contact</button>
          </div>

          {/* Social icons */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="https://github.com/JhansiOruganti-43"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-slate-900 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/jhansi-oruganti-800b602b3"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-slate-900 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:jhansioruganti43@gmail.com"
              className="p-2.5 bg-slate-900 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Info node */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {currentYear} Jhansi Oruganti. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Designed & Built with React + Tailwind CSS + Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
