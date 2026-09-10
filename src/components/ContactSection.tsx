import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, CheckCircle2, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/60 relative border-t border-slate-200">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b815_1px,transparent_1px),linear-gradient(to_bottom,#94a3b815_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      <div className="absolute top-1/3 end-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono tracking-wide font-semibold">
              <Mail className="w-3.5 h-3.5 text-cyan-600" />
              <span>{t.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              {t.title}
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-medium">
              {t.subtitle}
            </p>

            <div className="space-y-4 pt-4 font-mono text-sm">
              <div className="flex items-center gap-3 text-slate-800 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="p-2.5 rounded-lg bg-cyan-50 text-cyan-600 border border-cyan-200 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">{t.emailLabel}</span>
                  <a href="mailto:cfo.moaz@gmail.com" className="text-slate-900 hover:text-cyan-600 transition-colors dir-ltr block text-left font-bold">
                    cfo.moaz@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-800 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-200 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">{t.locationLabel}</span>
                  <span className="text-slate-900 font-bold">{t.locationValue}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-300 transition-colors flex items-center gap-2 text-xs font-mono shadow-xs font-medium"
              >
                <Github className="w-4 h-4 text-slate-600" />
                <span>GitHub Profile</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-cyan-700 hover:border-cyan-300 transition-colors flex items-center gap-2 text-xs font-mono shadow-xs font-medium"
              >
                <Linkedin className="w-4 h-4 text-cyan-600" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm relative overflow-hidden">
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{t.successTitle}</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto font-medium">
                    {t.successDesc}
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-cyan-700 text-xs font-mono font-bold hover:bg-cyan-50 cursor-pointer"
                  >
                    {t.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">{t.formTitle}</h3>
                    <p className="text-xs text-slate-500 font-medium">{t.formSubtitle}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-700 font-bold block">{t.nameLabel}</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.namePlaceholder} 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-700 font-bold block">{t.emailInputLabel}</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.emailPlaceholder} 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors dir-ltr text-start"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-700 font-bold block">{t.messageLabel}</label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.submitBtn}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
