import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, ArrowRight, ArrowLeft, FileText, CheckCircle2, Server, Database, ShieldCheck, Activity, Cpu, Sparkles, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface HeroProps {
  onViewProjects: () => void;
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects, onOpenCv }) => {
  const { language, isRTL } = useLanguage();
  const t = translations[language].hero;
  
  const [typedName, setTypedName] = useState('');
  const fullName = language === 'ar' ? 'معاذ رمضان' : 'MOAZ RAMADAN';
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [terminalStep, setTerminalStep] = useState(0);
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  // Typewriter effect
  useEffect(() => {
    setTypedName('');
    setShowSubtitle(false);
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullName.length) {
        setTypedName(fullName.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowSubtitle(true), 250);
      }
    }, 90);
    return () => clearInterval(timer);
  }, [fullName, language]);

  // Terminal sequence runner after subtitle
  useEffect(() => {
    if (showSubtitle) {
      const t1 = setTimeout(() => setTerminalStep(1), 400);
      const t2 = setTimeout(() => setTerminalStep(2), 1000);
      const t3 = setTimeout(() => setTerminalStep(3), 1600);
      const t4 = setTimeout(() => setTerminalStep(4), 2200);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    }
  }, [showSubtitle]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 overflow-hidden bg-white flex items-center">
      {/* Background Grids & Ambient Server Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-[130px] pointer-events-none animate-glow" />
      <div className="absolute bottom-1/4 end-1/4 w-[32rem] h-[32rem] bg-indigo-500/8 rounded-full blur-[150px] pointer-events-none animate-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Primary Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col items-center sm:items-start text-center sm:text-start space-y-6">
            
            {/* Mobile-Only Avatar Highlight Bar */}
            <div className="lg:hidden flex flex-col items-center gap-3 pt-2">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-lg bg-gradient-to-tr from-slate-100 via-sky-50 to-indigo-50">
                <img 
                  src="/moaz_avatar.jpg" 
                  alt={language === 'ar' ? 'معاذ رمضان' : 'Moaz Ramadan'} 
                  className="w-full h-full object-cover filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-cyan-500/10 pointer-events-none" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 text-[11px] font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>{language === 'ar' ? 'متاح للعمل في وظائف Backend' : 'Available for Backend Roles'}</span>
              </div>
            </div>

            {/* Greeting Pill */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-semibold tracking-wide shadow-sm"
            >
              <span>{t.greeting}</span>
              <span className="animate-bounce">👋</span>
            </motion.div>

            {/* Main Title with Typewriter */}
            <div className="space-y-2 w-full">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 font-mono">
                <span>{typedName}</span>
                <span className="animate-pulse text-cyan-600">_</span>
              </h1>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={showSubtitle ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent"
              >
                {t.role}
              </motion.div>
            </div>

            {/* Subtitle / Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={showSubtitle ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed font-normal"
            >
              {t.description}
            </motion.p>

            {/* Tech Stack Chips */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={showSubtitle ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 dir-ltr"
            >
              {['Python 3.12', 'FastAPI', 'Django', 'Odoo ERP', 'PostgreSQL', 'Docker', 'Redis'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-mono font-medium shadow-sm hover:border-cyan-400 hover:text-cyan-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Buttons: Projects and CV */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={showSubtitle ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4 w-full sm:w-auto"
            >
              <button
                onClick={onViewProjects}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:from-cyan-500 hover:via-sky-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-[0_4px_18px_rgba(2,132,199,0.35)] hover:shadow-[0_6px_24px_rgba(2,132,199,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span>{t.projectsBtn}</span>
                {isRTL ? (
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                )}
              </button>

              <button
                onClick={onOpenCv}
                className="px-7 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-cyan-500/50 text-slate-700 hover:text-slate-900 font-semibold text-sm transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-sm hover:shadow-md hover:bg-slate-50"
              >
                <FileText className="w-4 h-4 text-cyan-600" />
                <span>{t.cvBtn}</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual — Server/Terminal environment */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              
              {/* Glowing Aura Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-indigo-500/10 to-sky-500/10 rounded-3xl blur-2xl transform -rotate-1 pointer-events-none" />

              {/* Server Environment Card */}
              <div className="relative rounded-2xl bg-white border border-slate-200 shadow-xl p-6 overflow-hidden">
                
                {/* Header bar of Terminal window */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-slate-500 ms-2 dir-ltr">moaz@backend-cluster: ~</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setShowPhotoModal(true)}
                      className="px-2.5 py-1 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-700 text-[10px] font-mono flex items-center gap-1 hover:bg-cyan-100 transition-colors cursor-pointer font-medium"
                    >
                      <Eye className="w-3 h-3 text-cyan-600" />
                      <span>{t.studioSetup}</span>
                    </button>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-mono bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-600" />
                      <span>{t.statusOnline}</span>
                    </div>
                  </div>
                </div>

                {/* Professional Avatar & Presentation */}
                <div className="relative mb-6 rounded-xl bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-200 p-4 flex flex-col items-center overflow-hidden group">
                  
                  {/* Abstract Backend Code / Grid background behind avatar */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0284c7_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                  
                  {/* Floating Network Nodes Animation */}
                  <div className="absolute top-3 start-3 flex items-center gap-1.5 text-[10px] font-mono text-cyan-700 bg-white shadow-xs px-2 py-0.5 rounded border border-cyan-200 dir-ltr">
                    <Server className="w-3 h-3 text-cyan-600 animate-pulse" />
                    <span>API_GW_01</span>
                  </div>
                  <div className="absolute top-3 end-3 flex items-center gap-1.5 text-[10px] font-mono text-indigo-700 bg-white shadow-xs px-2 py-0.5 rounded border border-indigo-200 dir-ltr">
                    <Database className="w-3 h-3 text-indigo-600 animate-pulse" />
                    <span>POSTGRES_MASTER</span>
                  </div>

                  {/* Avatar Container */}
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-md my-2 group-hover:scale-105 transition-transform duration-500 bg-slate-200 flex items-center justify-center">
                    <img 
                      src="/moaz_avatar.jpg" 
                      alt={language === 'ar' ? 'معاذ رمضان - مطور خوادم وبايثون' : 'Moaz Ramadan - Python Backend Developer'} 
                      className="w-full h-full object-cover filter contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-cyan-500/10 pointer-events-none" />
                  </div>

                  <div className="text-center mt-2">
                    <h3 className="text-slate-900 font-bold text-base tracking-wide flex items-center justify-center gap-1.5">
                      <span>{language === 'ar' ? 'معاذ رمضان' : 'Moaz Ramadan'}</span>
                      <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    </h3>
                    <p className="text-cyan-700 text-xs font-mono font-semibold dir-ltr">&lt;Python Backend Architect /&gt;</p>
                  </div>
                </div>

                {/* Terminal Snippet Box (High contrast developer terminal) */}
                <div className="rounded-xl bg-[#0F172A] border border-slate-800 p-4 font-mono text-xs shadow-md space-y-2 dir-ltr">
                  <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-1.5 mb-2">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                      terminal.sh
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold">bash</span>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <div className="text-cyan-300 flex items-center gap-2">
                      <span className="text-slate-500">$</span>
                      <span>python manage.py runserver</span>
                    </div>

                    {terminalStep >= 1 && (
                      <motion.div 
                        initial={{ opacity: 0, x: -5 }} 
                        animate={{ opacity: 1, x: 0 }}
                        className="text-emerald-400 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>Database connected (PostgreSQL / Odoo ORM)</span>
                      </motion.div>
                    )}

                    {terminalStep >= 2 && (
                      <motion.div 
                        initial={{ opacity: 0, x: -5 }} 
                        animate={{ opacity: 1, x: 0 }}
                        className="text-emerald-400 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>API running (FastAPI & Django ASGI)</span>
                      </motion.div>
                    )}

                    {terminalStep >= 3 && (
                      <motion.div 
                        initial={{ opacity: 0, x: -5 }} 
                        animate={{ opacity: 1, x: 0 }}
                        className="text-emerald-400 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>Authentication enabled (JWT / OAuth2)</span>
                      </motion.div>
                    )}

                    {terminalStep >= 4 && (
                      <motion.div 
                        initial={{ opacity: 0, x: -5 }} 
                        animate={{ opacity: 1, x: 0 }}
                        className="text-cyan-300 font-bold flex items-center gap-2 pt-1"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 animate-pulse shrink-0" />
                        <span>System ready. Listening on port 8000...</span>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Animated connecting flow indicator to projects */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <Cpu className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
                    <span>{language === 'ar' ? 'شبكة الخوادم نشطة' : 'Microservice Mesh Active'}</span>
                  </span>
                  <button 
                    onClick={onViewProjects}
                    className="text-cyan-600 hover:text-cyan-700 font-mono font-medium flex items-center gap-1 cursor-pointer group"
                  >
                    <span>{t.viewProjects}</span>
                    {isRTL ? (
                      <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Studio Photo Modal */}
      {showPhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-4xl w-full bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-slate-900 font-bold text-lg flex items-center gap-2">
                  <span>{language === 'ar' ? 'معاذ رمضان — بيئة واستوديو العمل الهندسي' : 'Moaz Ramadan — Studio & Developer Setup'}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 font-mono font-semibold">Python Backend</span>
                </h3>
                <p className="text-xs text-slate-500">
                  {language === 'ar' 
                    ? 'بيئة العمل الهندسية المتكاملة مع تقنيات بايثون وFastAPI وPostgreSQL وOdoo وDocker.'
                    : 'Professional workstation featuring Python, FastAPI, PostgreSQL, Odoo, and Docker ecosystem.'}
                </p>
              </div>
              <button 
                onClick={() => setShowPhotoModal(false)}
                className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-mono cursor-pointer"
              >
                {language === 'ar' ? 'إغلاق [Esc]' : 'Close [Esc]'}
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col items-center justify-center p-4">
              <div className="w-full max-h-[60vh] overflow-hidden rounded-xl border border-slate-200 mb-4 flex items-center justify-center bg-slate-900">
                <img 
                  src="/moaz_avatar.jpg" 
                  alt="Moaz Ramadan Studio Setup" 
                  className="max-h-[50vh] w-auto object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center space-y-2 max-w-xl mx-auto">
                <h4 className="text-slate-900 font-bold text-lg">
                  {language === 'ar' ? 'محطة عمل هندسية متخصصة في الأنظمة المؤسسية' : 'High-Performance Backend Workstation'}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {language === 'ar'
                    ? 'مزودة بأحدث بيئات التطوير المعزولة بالحاويات ومراجع هندسة البرمجيات ومخططات المعمارية لتنفيذ النظم الخلفية عالية الاعتمادية.'
                    : 'Equipped with professional lighting, Python & FastAPI tech stack books, chalkboard architecture notes, and Dockerized development environments.'}
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-1 dir-ltr">
                  {['Python 3.12', 'FastAPI', 'PostgreSQL', 'Odoo ERP', 'Docker', 'Git'].map((item) => (
                    <span key={item} className="px-2.5 py-0.5 rounded bg-white border border-slate-200 text-cyan-700 text-[11px] font-mono font-medium shadow-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
