import React, { useState, useEffect } from 'react';
import { BookOpen, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { getProjectsData, ProjectWithSlug } from '../data/projectsData';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface ProjectsSectionProps {
  selectedProjectSlug?: string | null;
  onSelectProjectSlug?: (slug: string | null) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  selectedProjectSlug, 
  onSelectProjectSlug 
}) => {
  const { language, isRTL } = useLanguage();
  const t = translations[language].projects;
  const projectsData = getProjectsData(language);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProjectSlug) {
      const match = projectsData.find(p => p.slug === selectedProjectSlug);
      if (match) {
        setSelectedProject(match);
      }
    }
  }, [selectedProjectSlug, language, projectsData]);

  const handleOpenProject = (project: ProjectWithSlug) => {
    setSelectedProject(project);
    if (onSelectProjectSlug) {
      onSelectProjectSlug(project.slug);
    }
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    if (onSelectProjectSlug) {
      onSelectProjectSlug(null);
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50/50 relative border-t border-slate-200">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b815_1px,transparent_1px),linear-gradient(to_bottom,#94a3b815_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono tracking-wide font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-cyan-600" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            {t.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl bg-white border border-slate-200 hover:border-cyan-500/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group shadow-xs hover:shadow-md relative overflow-hidden"
            >
              {/* Background Number Watermark */}
              <div className="absolute top-4 end-4 text-5xl font-extrabold font-mono text-slate-200 group-hover:text-cyan-100 transition-colors pointer-events-none dir-ltr">
                {project.number}
              </div>

              <div>
                {/* Top Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs font-bold">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 font-bold">
                      {project.metrics}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs font-mono text-indigo-600 font-semibold mb-4 pb-3 border-b border-slate-100">
                  {project.subtitle}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Workflow Pills */}
                {project.workflowSteps && (
                  <div className="mb-6 rounded-xl bg-slate-50 border border-slate-200 p-3.5 space-y-2">
                    <span className="text-[11px] font-mono text-cyan-700 block font-bold">
                      {language === 'ar' ? 'مسار العمل التشغيلي:' : 'Business Workflow:'}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {project.workflowSteps.slice(0, 4).map((w, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-medium">
                          {w} {i < 3 && (isRTL ? '←' : '→')}
                        </span>
                      ))}
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-50 text-cyan-700 border border-cyan-200 font-semibold">
                        {language === 'ar' ? '... المزيد' : '... +more'}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div>
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6 dir-ltr">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-mono font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Case Study Trigger Button */}
                <button
                  onClick={() => handleOpenProject(project)}
                  className="w-full py-3.5 rounded-xl bg-cyan-50 hover:bg-cyan-600 border border-cyan-200 hover:border-cyan-600 text-cyan-700 hover:text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer group/btn shadow-xs hover:shadow-sm"
                >
                  <BookOpen className="w-4 h-4 text-cyan-600 group-hover/btn:text-white" />
                  <span>{t.exploreCaseStudy}</span>
                  {isRTL ? (
                    <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  )}
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal 
        project={selectedProject} 
        onClose={handleCloseProject} 
      />
    </section>
  );
};
