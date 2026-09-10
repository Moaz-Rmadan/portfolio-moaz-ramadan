import React, { useState } from 'react';
import { 
  Search, 
  Layers, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  CheckCircle2, 
  Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface StepDetail {
  step: string;
  title: string;
  subtitle: string;
  icon: any;
  color: string;
  borderActive: string;
  bgActive: string;
  badge: string;
  description: string;
  deliverables: string[];
  mindset: string;
}

export const WhyMeSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language].whyMe;
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const steps: StepDetail[] = [
    {
      step: '01',
      title: t.steps.s1.title,
      subtitle: t.steps.s1.subtitle,
      icon: Search,
      color: 'text-cyan-700',
      borderActive: 'border-cyan-500',
      bgActive: 'bg-cyan-50',
      badge: language === 'ar' ? 'الاستكشاف ومطابقة منطق العمل' : 'Discovery & Domain Mapping',
      description: t.steps.s1.desc,
      deliverables: language === 'ar' ? [
        'خريطة مسارات العمل التشغيلية وأصحاب المصلحة',
        'مخططات انتقال الحالات (مسودة ← مؤكد ← قيد التصنيع ← تم الشحن)',
        'تحديد حالات الحافة (Edge-cases) وقواعد أخطاء المعاملات',
        'وثيقة مواصفات برمجية واضحة ودقيقة'
      ] : [
        'Stakeholder & Operational Workflow Mapping',
        'State Transition Diagrams (e.g., Draft → Confirmed → In Production → Dispatched)',
        'Edge-case & Business Error Rule Definitions',
        'Clear Functional Software Specification'
      ],
      mindset: language === 'ar' 
        ? '"اكتشاف الخطأ في مرحلة الفهم يوفر 100 ضعف تكلفة إصلاحه بعد وصوله لبيئة الإنتاج."'
        : '"A bug caught during the understand phase costs 100x less than a bug found in production."'
    },
    {
      step: '02',
      title: t.steps.s2.title,
      subtitle: t.steps.s2.subtitle,
      icon: Layers,
      color: 'text-indigo-700',
      borderActive: 'border-indigo-500',
      bgActive: 'bg-indigo-50',
      badge: language === 'ar' ? 'مخطط المعمارية وقواعد البيانات' : 'System & Schema Blueprint',
      description: t.steps.s2.desc,
      deliverables: language === 'ar' ? [
        'مخطط الكيانات والعلاقات (ERD) لقواعد بيانات PostgreSQL وفق 3NF',
        'عقود واجهات برمجة التطبيقات (OpenAPI / Swagger Contracts)',
        'مصفوفة الصلاحيات وأدوار المستخدمين (RBAC) وسياسات التحقق',
        'معمارية المهام الخلفية غير المتزامنة والتخزين المؤقت Redis'
      ] : [
        'PostgreSQL Normalized Entity Relationship Diagrams (ERD)',
        'OpenAPI 3.0 / Swagger Request-Response Contracts',
        'RBAC Permission Matrix & Authentication Policies',
        'Asynchronous Task & Redis Caching Topologies'
      ],
      mindset: language === 'ar'
        ? '"المعمارية المتينة تمنع إعادة كتابة الكود وتسمح بالتوسع الأفقي دون تعقيد."'
        : '"Great architecture prevents rewrites and enables effortless horizontal scaling."'
    },
    {
      step: '03',
      title: t.steps.s3.title,
      subtitle: t.steps.s3.subtitle,
      icon: Code2,
      color: 'text-emerald-700',
      borderActive: 'border-emerald-500',
      bgActive: 'bg-emerald-50',
      badge: language === 'ar' ? 'تطوير بايثون النظيف' : 'Clean Python Engineering',
      description: t.steps.s3.desc,
      deliverables: language === 'ar' ? [
        'واجهات RESTful و ASGI غير متزامنة مع FastAPI و Django',
        'فحص نوعي صارم وتحقق لحظي من البيانات عبر Pydantic v2',
        'بناء منطق أعمال مؤسسي مخصص في Odoo ORM Models',
        'تطبيق نمط طبقة الخدمات (Service Layer Pattern) لفصل المسؤوليات'
      ] : [
        'RESTful & Async ASGI Endpoints with FastAPI & Django',
        'Pydantic v2 Strong Typing & Input Validation',
        'Custom Odoo Business Logic & ORM Modules',
        'Service Layer Pattern with Clean Separation of Concerns'
      ],
      mindset: language === 'ar'
        ? '"الكود النظيف مقروء، يوثق نفسه بنفسه، ويسهل على أي مطور صيانته وتطويره."'
        : '"Clean code is readable, self-documenting, and maintainable by any developer."'
    },
    {
      step: '04',
      title: t.steps.s4.title,
      subtitle: t.steps.s4.subtitle,
      icon: ShieldCheck,
      color: 'text-amber-700',
      borderActive: 'border-amber-500',
      bgActive: 'bg-amber-50',
      badge: language === 'ar' ? 'تدقيق الجودة والأمان' : 'Quality & Vulnerability Audit',
      description: t.steps.s4.desc,
      deliverables: language === 'ar' ? [
        'تحليل خطط الاستعلامات EXPLAIN ANALYZE وضمان استجابة بأقل من 10ms',
        'حماية ضد هجمات SQL Injection و CSRF وتوقيعات JWT المشفرة',
        'حزم اختبارات مؤتمتة شاملة للاختبارات الفردية والتكاملية بـ Pytest',
        'اختبارات التحمل والضغط العالي لمحاكاة ذروة الاستخدام'
      ] : [
        'Query Performance Profiling (Sub-10ms DB Queries)',
        'JWT Token Expiry, CSRF, and SQL Injection Hardening',
        'Pytest Unit & Integration Automated Test Suites',
        'High-concurrency Load & Stress Benchmarking'
      ],
      mindset: language === 'ar'
        ? '"الأمان والسرعة ميزات جوهرية في صلب النظام وليست أفكاراً لاحقة."'
        : '"Security and speed are core features, not afterthoughts."'
    },
    {
      step: '05',
      title: t.steps.s5.title,
      subtitle: t.steps.s5.subtitle,
      icon: Rocket,
      color: 'text-rose-700',
      borderActive: 'border-rose-500',
      bgActive: 'bg-rose-50',
      badge: language === 'ar' ? 'نشر الإنتاج والأتمتة' : 'Production-Ready CI/CD',
      description: t.steps.s5.desc,
      deliverables: language === 'ar' ? [
        'حاويات Docker و Docker Compose متعددة المراحل خفيفة وسريعة',
        'إعداد خادم Nginx العكسي وشهادات SSL الآلية وتوجيه الحزم',
        'مسارات نشر مؤتمتة عبر GitHub Actions على خوادم Linux',
        'سجلات تتبع أخطاء مهيكلة، ونقاط فحص صحة النظام (Health Checks)'
      ] : [
        'Optimized Multi-Stage Docker & Docker Compose Files',
        'Nginx Reverse Proxy & Automated SSL Certificate Lifecycle',
        'Automated CI/CD Workflows with GitHub Actions',
        'Structured Logging, Health Checks, and System Monitoring'
      ],
      mindset: language === 'ar'
        ? '"لا يكتمل المشروع إلا عندما يعمل باستقرار وأمان تام في بيئة الإنتاج الحقيقية."'
        : '"A project is only complete when it runs reliably and securely in production."'
    }
  ];

  const activeStep = steps[activeStepIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <section id="why-me" className="py-24 bg-slate-50/60 relative border-t border-slate-200 overflow-hidden">
      {/* Subtle Grid & Gradient Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b815_1px,transparent_1px),linear-gradient(to_bottom,#94a3b815_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      <div className="absolute top-1/3 end-1/4 w-[36rem] h-[36rem] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 start-10 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono tracking-wide font-semibold">
            <Target className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          
          {/* Main Punchy Statement */}
          <div className="pt-2">
            <p className="text-xl sm:text-2xl font-extrabold text-cyan-800">
              "{t.mainQuote}"
            </p>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto font-medium">
              {t.subQuote}
            </p>
          </div>
        </div>

        {/* 5-Step Methodology Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border transition-all text-start flex flex-col justify-between cursor-pointer relative group ${
                  isSelected
                    ? `${s.bgActive} ${s.borderActive} shadow-sm scale-102 z-10`
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${isSelected ? s.color : 'text-slate-500'}`}>
                    {language === 'ar' ? `المرحلة ${s.step}` : `STEP ${s.step}`}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? s.color : 'text-slate-400 group-hover:text-slate-600'}`} />
                </div>
                
                <div>
                  <h4 className="text-slate-900 font-bold text-base leading-tight mb-0.5">
                    {s.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {s.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Inspector */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 end-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-50 border border-slate-200 ${activeStep.color}`}>
                    {language === 'ar' ? `المرحلة ${activeStep.step} — ${activeStep.badge}` : `STEP ${activeStep.step} — ${activeStep.badge}`}
                  </span>
                  <span className="text-slate-500 text-xs font-mono font-medium">
                    {language === 'ar' ? `المرحلة ${activeStepIndex + 1} من 5` : `Phase ${activeStepIndex + 1} of 5`}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                    <ActiveIcon className={`w-7 h-7 ${activeStep.color} shrink-0`} />
                    <span>{activeStep.title}: {activeStep.subtitle}</span>
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed mt-3">
                    {activeStep.description}
                  </p>
                </div>

                {/* Mindset Quote */}
                <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-950 font-mono text-xs italic font-medium">
                  {activeStep.mindset}
                </div>

              </div>

              {/* Right Deliverables Box */}
              <div className="lg:col-span-5 rounded-2xl bg-slate-50 border border-slate-200 p-6 space-y-4 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="text-xs font-mono text-slate-700 font-bold uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    {t.keyDeliverables}
                  </span>
                  <span className="text-[10px] font-mono text-cyan-700 font-bold">{language === 'ar' ? 'عمليات موثقة' : 'Verified Process'}</span>
                </div>

                <ul className="space-y-3">
                  {activeStep.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-sans font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Methodology v3.0</span>
                  <span className="text-slate-600 font-medium">
                    {language === 'ar' 
                      ? `التالي: ${steps[(activeStepIndex + 1) % steps.length].title} ←` 
                      : `Next: ${steps[(activeStepIndex + 1) % steps.length].title} →`}
                  </span>
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

        {/* Recruiter Bottom Summary Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-start space-y-1">
            <h4 className="text-slate-900 font-bold text-sm sm:text-base">
              {language === 'ar' 
                ? 'هل تبحث عن مطور خوادم يفهم متطلبات العمل بدقة دون إهدار للوقت؟' 
                : 'Looking for a backend developer who needs zero hand-holding on business logic?'}
            </h4>
            <p className="text-slate-600 text-xs">
              {language === 'ar'
                ? 'دعنا نتحدث حول كيفية مساهمتي في بناء مشاريعك البرمجية أو الانضمام لفريقك الهندسي.'
                : "Let's discuss how I can contribute to your engineering team or product pipeline."}
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold font-mono text-xs transition-all shadow-sm shrink-0"
          >
            {language === 'ar' ? 'تواصل معي مباشرة ←' : 'Get In Touch →'}
          </a>
        </div>

      </div>
    </section>
  );
};
