import React from 'react';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <span className="font-extrabold text-slate-900 tracking-wider block text-sm">
              {language === 'ar' ? 'معاذ رمضان' : 'MOAZ RAMADAN'}
            </span>
            <span className="text-xs text-cyan-700 font-mono font-medium">
              {language === 'ar' ? 'مطور ومصمم أنظمة بايثون الخلفية' : 'Python Backend Developer'}
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500 font-mono text-center md:text-start font-medium">
          {language === 'ar' ? (
            <>© {new Date().getFullYear()} معاذ رمضان. جميع الحقوق محفوظة. مُصمم وفق أحدث معايير هندسة البرمجيات وبايثون.</>
          ) : (
            <>© {new Date().getFullYear()} Moaz Ramadan. All rights reserved. Built with Python & FastAPI standards.</>
          )}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-950 hover:border-slate-300 transition-colors shadow-xs"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-cyan-700 hover:border-cyan-300 transition-colors shadow-xs"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href="mailto:cfo.moaz@gmail.com"
            className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-cyan-700 hover:border-cyan-300 transition-colors shadow-xs"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};
