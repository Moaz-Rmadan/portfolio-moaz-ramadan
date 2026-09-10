import React, { useState } from 'react';
import { X, Database, Github, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('overview');

  if (!project) return null;

  const tabs = language === 'ar' ? [
    { id: 'overview', label: 'نظرة عامة والمشكلة' },
    { id: 'architecture', label: 'المعمارية وسير العمل' },
    { id: 'database', label: 'مخطط قاعدة البيانات' },
    { id: 'api', label: 'واجهات برمجة التطبيقات API' },
    { id: 'auth', label: 'الأمان والتحقق' },
    { id: 'testing', label: 'الاختبارات الآلية' },
    { id: 'deployment', label: 'النشر والحاويات CI/CD' }
  ] : [
    { id: 'overview', label: 'Overview & Problem' },
    { id: 'architecture', label: 'Architecture & Workflow' },
    { id: 'database', label: 'Database Schema' },
    { id: 'api', label: 'API & Endpoints' },
    { id: 'auth', label: 'Authentication' },
    { id: 'testing', label: 'Testing' },
    { id: 'deployment', label: 'Deployment & CI/CD' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-700 font-mono text-sm font-bold dir-ltr">
              {project.number}
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">{project.title}</h2>
              <p className="text-xs sm:text-sm font-mono text-cyan-700 font-medium">{project.subtitle}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer shadow-xs"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs for Case Study */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 overflow-x-auto flex gap-2 py-2.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-cyan-600 text-white font-bold shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 text-slate-700">
          
          {/* TAB 1: OVERVIEW & PROBLEM */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 space-y-3">
                <span className="text-xs font-mono text-cyan-700 uppercase tracking-wider block font-bold">
                  {language === 'ar' ? 'الملخص التنفيذي' : 'Executive Summary'}
                </span>
                <p className="text-slate-900 text-base sm:text-lg leading-relaxed font-medium">{project.description}</p>
              </div>

              <div className="rounded-xl bg-rose-50 border border-rose-200 p-6 space-y-3">
                <span className="text-xs font-mono text-rose-700 uppercase tracking-wider block font-bold">
                  {language === 'ar' ? 'المشكلة التجارية الأساسية' : 'The Core Business Problem'}
                </span>
                <p className="text-rose-950 text-sm leading-relaxed font-medium">{project.problem}</p>
              </div>

              {project.workflowSteps && (
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 space-y-4">
                  <span className="text-xs font-mono text-indigo-700 uppercase tracking-wider block font-bold">
                    {language === 'ar' ? 'سير العمل المتكامل (من البداية حتى النهاية)' : 'End-to-End Business Workflow'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {project.workflowSteps.map((step, i) => (
                      <div key={i} className="p-3.5 rounded-lg bg-white border border-slate-200 flex flex-col justify-between text-xs font-mono shadow-xs">
                        <span className="text-cyan-700 font-bold mb-1">0{i + 1}</span>
                        <span className="text-slate-900 font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 space-y-4">
                <span className="text-xs font-mono text-slate-700 uppercase tracking-wider block font-bold">
                  {language === 'ar' ? 'التقنيات المستخدمة' : 'Technology Stack'}
                </span>
                <div className="flex flex-wrap gap-2 dir-ltr">
                  {project.techStack.map(t => (
                    <span key={t} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-cyan-800 font-mono text-xs font-semibold shadow-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 space-y-3">
                <span className="text-xs font-mono text-cyan-700 uppercase tracking-wider block font-bold">
                  {language === 'ar' ? 'معمارية النظام' : 'System Architecture'}
                </span>
                <p className="text-slate-900 text-sm font-medium">{project.architecture}</p>
              </div>

              <div className="space-y-4">
                <span className="text-xs font-mono text-slate-700 uppercase tracking-wider block font-bold">
                  {language === 'ar' ? 'خطوات تنفيذ المعمارية' : 'Architecture Execution Steps'}
                </span>
                <div className="space-y-4">
                  {project.architectureSteps.map((step, idx) => (
                    <div key={idx} className="rounded-xl bg-slate-50 border border-slate-200 p-5 space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-300 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                          {idx + 1}
                        </span>
                        <h4 className="text-slate-900 font-bold text-base">{step.title}</h4>
                      </div>
                      <p className="text-slate-700 text-sm ps-9 font-medium">{step.description}</p>
                      {step.codeSnippet && (
                        <div className="ms-9 mt-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto dir-ltr text-left">
                          <pre>{step.codeSnippet}</pre>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DATABASE SCHEMA */}
          {activeTab === 'database' && (
            <div className="space-y-6">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 space-y-3">
                <span className="text-xs font-mono text-indigo-700 uppercase tracking-wider block font-bold">
                  {language === 'ar' ? 'تصميم قاعدة البيانات العلائقية ونماذج ORM' : 'Relational Database & ORM Design'}
                </span>
                <p className="text-slate-900 text-sm font-medium">{project.databaseSchema.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.databaseSchema.tables.map((table) => (
                  <div key={table.name} className="rounded-xl bg-slate-50 border border-slate-200 p-5 space-y-3">
                    <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                      <Database className="w-4 h-4 text-indigo-600" />
                      <span className="font-mono font-bold text-slate-900 text-sm dir-ltr">{table.name}</span>
                    </div>
                    <ul className="space-y-1.5 font-mono text-xs text-slate-700 dir-ltr text-left">
                      {table.columns.map((col, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-cyan-600 font-bold">▪</span>
                          <span className="font-medium">{col}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: API & ENDPOINTS */}
          {activeTab === 'api' && (
            <div className="space-y-6">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 space-y-3">
                <span className="text-xs font-mono text-cyan-700 uppercase tracking-wider block font-bold">
                  {language === 'ar' ? 'واجهات برمجة التطبيقات RESTful والتوجيه غير المتزامن' : 'RESTful API Endpoints & ASGI Routing'}
                </span>
                <p className="text-slate-900 text-sm font-medium">
                  {language === 'ar'
                    ? 'تم التطوير باستخدام FastAPI / Django مع التحقق الصارم عبر Pydantic وتوثيق OpenAPI التلقائي.'
                    : 'Engineered with FastAPI / Django REST Framework with Pydantic validation and auto-generated OpenAPI documentation.'}
                </p>
              </div>

              <div className="space-y-3">
                {project.apiEndpoints.map((ep, idx) => (
                  <div key={idx} className="rounded-xl bg-slate-50 border border-slate-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
                    <div className="flex items-center gap-3 dir-ltr">
                      <span className={`px-2.5 py-1 rounded font-bold ${
                        ep.method === 'GET' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                        ep.method === 'POST' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        'bg-indigo-50 text-indigo-700 border border-indigo-200'
                      }`}>
                        {ep.method}
                      </span>
                      <span className="text-slate-900 font-bold">{ep.path}</span>
                    </div>
                    <span className="text-slate-600 text-xs font-sans font-medium">{ep.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: AUTHENTICATION */}
          {activeTab === 'auth' && (
            <div className="space-y-6">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 space-y-3">
                <span className="text-xs font-mono text-emerald-700 uppercase tracking-wider block font-bold">
                  {language === 'ar' ? 'الأمان ومعمارية التحقق من الهوية' : 'Security & Authentication Architecture'}
                </span>
                <p className="text-slate-900 text-base leading-relaxed font-medium">{project.authDetails}</p>
              </div>
            </div>
          )}

          {/* TAB 6: TESTING */}
          {activeTab === 'testing' && (
            <div className="space-y-6">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 space-y-3">
                <span className="text-xs font-mono text-amber-700 uppercase tracking-wider block font-bold">
                  {language === 'ar' ? 'الاختبارات المؤتمتة وضمان الجودة' : 'Automated Testing & Quality Assurance'}
                </span>
                <p className="text-slate-900 text-base leading-relaxed font-medium">{project.testingDetails}</p>
              </div>
            </div>
          )}

          {/* TAB 7: DEPLOYMENT */}
          {activeTab === 'deployment' && (
            <div className="space-y-6">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 space-y-3">
                <span className="text-xs font-mono text-cyan-700 uppercase tracking-wider block font-bold">
                  {language === 'ar' ? 'حاويات Docker ومسار النشر التلقائي CI/CD' : 'Docker Containerization & CI/CD Deployment'}
                </span>
                <p className="text-slate-900 text-base leading-relaxed font-medium">{project.deploymentDetails}</p>
              </div>

              <div className="flex items-center gap-4 pt-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-mono text-xs hover:border-slate-300 transition-all flex items-center gap-2 shadow-xs font-semibold"
                  >
                    <Github className="w-4 h-4 text-slate-600" />
                    <span>{language === 'ar' ? 'معاينة كود المشروع على GitHub' : 'View GitHub Repository'}</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-cyan-600 text-white font-bold font-mono text-xs hover:bg-cyan-700 transition-all flex items-center gap-2 shadow-sm"
                  >
                    <span>{language === 'ar' ? 'التوثيق الحي / Swagger' : 'Live API / Documentation'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-200 bg-slate-50/80 flex items-center justify-between">
          <div className="text-xs text-slate-500 font-mono font-medium">
            {language === 'ar' ? 'وضع دراسة الحالة الهندسية · معاذ رمضان' : 'Case Study Mode · Moaz Ramadan Backend Systems'}
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-mono font-medium cursor-pointer shadow-xs"
          >
            {language === 'ar' ? 'إغلاق دراسة الحالة' : 'Close Case Study'}
          </button>
        </div>

      </motion.div>
    </div>
  );
};
