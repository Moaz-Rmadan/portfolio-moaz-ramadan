/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AnimatedMetrics } from './components/AnimatedMetrics';
import { AboutSection } from './components/AboutSection';
import { WhyMeSection } from './components/WhyMeSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TechStackSection } from './components/TechStackSection';
import { BackendArchitectureSection } from './components/BackendArchitectureSection';
import { ArchitecturePlayground } from './components/ArchitecturePlayground';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { Terminal, Globe, Check } from 'lucide-react';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);

  // Sync route on hashchange / popstate
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      const path = hash || window.location.pathname.replace(/^\//, '');

      if (!path || path === '' || path === '/') {
        setCurrentRoute('/');
        setSelectedProjectSlug(null);
      } else if (path.startsWith('projects/')) {
        const slug = path.replace('projects/', '');
        setCurrentRoute(`/projects/${slug}`);
        setSelectedProjectSlug(slug);
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (path === 'resume' || path === 'cv') {
        setCurrentRoute('/resume');
        setCvModalOpen(true);
      } else {
        setCurrentRoute(`/${path}`);
        setSelectedProjectSlug(null);
        const sectionMap: Record<string, string> = {
          'about': 'about',
          'skills': 'tech-stack',
          'tech-stack': 'tech-stack',
          'projects': 'projects',
          'architecture': 'architecture',
          'why-me': 'why-me',
          'experience': 'about',
          'contact': 'contact',
          'terminal': 'terminal'
        };
        const targetId = sectionMap[path] || path;
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    return () => window.removeEventListener('hashchange', handleLocationChange);
  }, []);

  const handleNavigate = (routeOrSection: string) => {
    let clean = routeOrSection.replace(/^#\/?/, '').replace(/^\//, '');
    
    if (clean === 'resume' || clean === 'cv') {
      window.location.hash = '/resume';
      setCvModalOpen(true);
      setCurrentRoute('/resume');
      return;
    }

    if (clean.startsWith('projects/')) {
      const slug = clean.replace('projects/', '');
      window.location.hash = `/projects/${slug}`;
      setSelectedProjectSlug(slug);
      setCurrentRoute(`/projects/${slug}`);
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const sectionMap: Record<string, string> = {
      '': 'hero',
      'about': 'about',
      'skills': 'tech-stack',
      'tech-stack': 'tech-stack',
      'projects': 'projects',
      'architecture': 'architecture',
      'why-me': 'why-me',
      'experience': 'about',
      'contact': 'contact',
      'terminal': 'terminal'
    };

    const targetSection = sectionMap[clean] || clean;
    window.location.hash = clean ? `/${clean}` : '/';
    setCurrentRoute(clean ? `/${clean}` : '/');

    const el = document.getElementById(targetSection);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectSelect = (slug: string | null) => {
    setSelectedProjectSlug(slug);
    if (slug) {
      window.location.hash = `/projects/${slug}`;
      setCurrentRoute(`/projects/${slug}`);
    } else {
      window.location.hash = '/projects';
      setCurrentRoute('/projects');
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-cyan-600 selection:text-white font-sans antialiased overflow-x-hidden">
      <Navbar 
        onOpenCv={() => handleNavigate('resume')} 
        onNavigate={handleNavigate} 
      />

      {/* Floating Active Route & Telemetry Pill */}
      <div className="fixed bottom-4 right-4 z-40 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-slate-200 text-xs font-mono backdrop-blur-md shadow-lg text-slate-800">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-slate-500">ROUTE:</span>
        <span className="text-cyan-700 font-bold">{currentRoute}</span>
        <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200 font-bold">200 OK</span>
      </div>

      <main>
        <Hero 
          onViewProjects={() => handleNavigate('projects')} 
          onOpenCv={() => handleNavigate('resume')} 
        />
        <AnimatedMetrics />
        <AboutSection />
        <WhyMeSection />
        <ProjectsSection 
          selectedProjectSlug={selectedProjectSlug}
          onSelectProjectSlug={handleProjectSelect}
        />
        <TechStackSection />
        <BackendArchitectureSection />
        <ArchitecturePlayground />
        <InteractiveTerminal 
          onNavigateTo={handleNavigate}
          onOpenCv={() => handleNavigate('resume')}
          onOpenProject={(slug) => handleNavigate(`projects/${slug}`)}
        />
        <ContactSection />
      </main>

      <Footer />

      <CvModal 
        isOpen={cvModalOpen} 
        onClose={() => {
          setCvModalOpen(false);
          if (currentRoute === '/resume') {
            handleNavigate('/');
          }
        }} 
      />
    </div>
  );
}

