import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Code2, Cpu, Mail, Menu, X, Github, Linkedin, Server, Briefcase, Target, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface NavbarProps {
  onOpenCv: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, isRTL } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/90 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.06)]' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <button 
          onClick={() => onNavigate('hero')}
          className={`flex items-center gap-3 text-start group cursor-pointer ${isRTL ? 'flex-row' : ''}`}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/15 via-sky-500/10 to-indigo-600/15 border border-cyan-500/30 flex items-center justify-center text-cyan-600 group-hover:border-cyan-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all shadow-[0_2px_10px_rgba(6,182,212,0.12)] shrink-0">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-slate-900 tracking-wider text-base sm:text-lg block group-hover:text-cyan-600 transition-colors">
              {language === 'ar' ? 'معاذ رمضان' : 'MOAZ RAMADAN'}
            </span>
            <span className="text-xs text-cyan-600 font-mono font-semibold tracking-tight block dir-ltr">
              &lt;Python / Backend /&gt;
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <button 
            onClick={() => onNavigate('about')} 
            className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Briefcase className="w-4 h-4 text-cyan-600" />
            {t.about}
          </button>
          <button 
            onClick={() => onNavigate('why-me')} 
            className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Target className="w-4 h-4 text-amber-500" />
            {t.whyMe}
          </button>
          <button 
            onClick={() => onNavigate('projects')} 
            className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Code2 className="w-4 h-4 text-cyan-600" />
            {t.projects}
          </button>
          <button 
            onClick={() => onNavigate('skills')} 
            className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Cpu className="w-4 h-4 text-indigo-500" />
            {t.skills}
          </button>
          <button 
            onClick={() => onNavigate('architecture')} 
            className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Server className="w-4 h-4 text-emerald-500" />
            {t.architecture}
          </button>
          <button 
            onClick={() => onNavigate('terminal')} 
            className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition-colors cursor-pointer flex items-center gap-1.5 font-mono"
          >
            <Terminal className="w-4 h-4 text-cyan-600" />
            {t.cli}
          </button>
          <button 
            onClick={() => onNavigate('contact')} 
            className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4 text-sky-500" />
            {t.contact}
          </button>
        </nav>

        {/* Action Buttons & Language Switcher */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher Pill */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-800 hover:text-cyan-600 text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all shadow-sm"
            title={language === 'ar' ? 'Switch to English' : 'التحويل إلى اللغة العربية'}
          >
            <Languages className="w-3.5 h-3.5 text-cyan-600" />
            <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-cyan-100 text-cyan-700 border border-cyan-300 uppercase font-mono font-bold">
              {language === 'ar' ? 'AR' : 'EN'}
            </span>
          </button>

          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-600 hover:text-cyan-600 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button 
            onClick={onOpenCv}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:from-cyan-500 hover:via-sky-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-[0_4px_14px_rgba(2,132,199,0.3)] hover:shadow-[0_6px_20px_rgba(2,132,199,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            {t.cv}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-cyan-700 flex items-center gap-1.5"
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl">
          <button 
            onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
            className="text-start text-base font-medium text-slate-700 hover:text-cyan-600 py-2 border-b border-slate-100 flex items-center gap-2"
          >
            <Briefcase className="w-4 h-4 text-cyan-600" />
            {t.about}
          </button>
          <button 
            onClick={() => { onNavigate('why-me'); setMobileMenuOpen(false); }}
            className="text-start text-base font-medium text-slate-700 hover:text-amber-600 py-2 border-b border-slate-100 flex items-center gap-2"
          >
            <Target className="w-4 h-4 text-amber-500" />
            {t.whyMe}
          </button>
          <button 
            onClick={() => { onNavigate('projects'); setMobileMenuOpen(false); }}
            className="text-start text-base font-medium text-slate-700 hover:text-cyan-600 py-2 border-b border-slate-100 flex items-center gap-2"
          >
            <Code2 className="w-4 h-4 text-cyan-600" />
            {t.projects}
          </button>
          <button 
            onClick={() => { onNavigate('skills'); setMobileMenuOpen(false); }}
            className="text-start text-base font-medium text-slate-700 hover:text-indigo-600 py-2 border-b border-slate-100 flex items-center gap-2"
          >
            <Cpu className="w-4 h-4 text-indigo-500" />
            {t.skills}
          </button>
          <button 
            onClick={() => { onNavigate('architecture'); setMobileMenuOpen(false); }}
            className="text-start text-base font-medium text-slate-700 hover:text-emerald-600 py-2 border-b border-slate-100 flex items-center gap-2"
          >
            <Server className="w-4 h-4 text-emerald-500" />
            {t.architecture}
          </button>
          <button 
            onClick={() => { onNavigate('terminal'); setMobileMenuOpen(false); }}
            className="text-start text-base font-medium text-slate-700 hover:text-cyan-600 py-2 border-b border-slate-100 font-mono flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-cyan-600" />
            {t.cli}
          </button>
          <button 
            onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
            className="text-start text-base font-medium text-slate-700 hover:text-sky-600 py-2 border-b border-slate-100 flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-sky-500" />
            {t.contact}
          </button>

          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 rounded-lg text-slate-700 hover:text-slate-900 border border-slate-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 rounded-lg text-slate-700 hover:text-cyan-600 border border-slate-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <button 
              onClick={() => { onOpenCv(); setMobileMenuOpen(false); }}
              className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-sky-600 text-white font-bold text-sm flex items-center gap-2 shadow-md"
            >
              <FileText className="w-4 h-4" />
              {t.cv}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
