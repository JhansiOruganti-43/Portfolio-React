import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-blue-600 dark:text-sky-400" />,
      label: "Email",
      value: "jhansioruganti43@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=jhansioruganti43@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      label: "Phone Number",
      value: "+91 96185 19939",
      href: "tel:+919618519939"
    },
    {
      icon: <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
      label: "Location",
      value: "Andhra Pradesh, India",
      href: null
    }
  ];

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Generate IST timestamp
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000; // IST = UTC+5:30
    const istTime = new Date(now.getTime() + istOffset);
    const istString = istTime.toISOString().replace('T', ' ').slice(0, 19) + ' IST';

    try {
      const response = await fetch("https://formsubmit.co/ajax/jhansioruganti43@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            submitted_at_IST: istString,
            _replyto: formData.email,
            _captcha: "false"
        })
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("Message could not be sent. Please email directly at jhansioruganti43@gmail.com");
      }
    } catch (error) {
      alert("Network error. Please email directly at jhansioruganti43@gmail.com");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 dark:text-white mb-4">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto rounded-full mb-6"></div>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            If you want to collaborate on a coding project, discuss database concepts, or talk about internship roles, drop me a line!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Panels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                Get in Touch
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I am looking for software development and database engineering opportunities. Let's build something useful together.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 rounded-2xl shadow-xs">
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl mr-4 shadow-xs">
                      {info.icon}
                    </div>
                    <div>
                      <span className="text-xs text-slate-450 dark:text-slate-550 font-semibold uppercase tracking-wider block mb-0.5">
                        {info.label}
                      </span>
                      {info.href ? (
                        <a href={info.href} className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-semibold text-slate-450 dark:text-slate-500 uppercase tracking-widest mb-4">
                Social Profiles
              </h4>
              <div className="flex space-x-3 text-slate-500 dark:text-slate-400">
                <a
                  href="https://github.com/JhansiOruganti-43"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-white dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-sky-400 transition-all shadow-xs cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jhansi-oruganti-800b602b3/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-white dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-sky-400 transition-all shadow-xs cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=jhansioruganti43@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-white dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-sky-400 transition-all shadow-xs cursor-pointer"
                  aria-label="Email Me"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Web Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 rounded-3xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
            
            {/* Animated Success Overlay */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 flex flex-col items-center justify-center p-6 text-center z-20"
                >
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-full text-emerald-600 dark:text-emerald-400 mb-4 animate-bounce">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-950 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-sm">
                    Thank you, Jhansi has received your message and will reach out to you shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-450 dark:text-slate-400 mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`px-4 py-3 bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-slate-100 border rounded-xl transition-all text-sm outline-hidden ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-950/45' 
                        : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-800 dark:focus:border-sky-500 dark:focus:ring-sky-950/40'
                    }`}
                    placeholder="Jhansi Oruganti"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-455 dark:text-slate-400 mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`px-4 py-3 bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-slate-100 border rounded-xl transition-all text-sm outline-hidden ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-950/45' 
                        : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-800 dark:focus:border-sky-500 dark:focus:ring-sky-950/40'
                    }`}
                    placeholder="jhansi@example.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label htmlFor="subject" className="text-xs font-semibold text-slate-455 dark:text-slate-400 mb-2 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`px-4 py-3 bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-slate-100 border rounded-xl transition-all text-sm outline-hidden ${
                    errors.subject 
                      ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-950/45' 
                      : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:focus:border-sky-500 dark:focus:ring-sky-950/40'
                  }`}
                  placeholder="Internship Application / Project Inquiry"
                />
                {errors.subject && <span className="text-red-500 text-xs mt-1.5 font-medium">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs font-semibold text-slate-455 dark:text-slate-400 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`px-4 py-3 bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-slate-100 border rounded-xl transition-all text-sm outline-hidden ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-950/45' 
                      : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-800 dark:focus:border-sky-500 dark:focus:ring-sky-950/40'
                  }`}
                  placeholder="Hey, I read your portfolio and..."
                ></textarea>
                {errors.message && <span className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors cursor-pointer dark:bg-sky-600 dark:hover:bg-sky-500 disabled:bg-blue-400 dark:disabled:bg-sky-850 shadow-md shadow-blue-500/10"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
