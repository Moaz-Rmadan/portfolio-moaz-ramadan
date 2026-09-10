import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  Layers, 
  Code2, 
  Database, 
  Container, 
  Sparkles, 
  Calculator, 
  Boxes, 
  Factory, 
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export const AboutSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language].about;
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);

  const pipelineSteps = [
    {
      id: 'business',
      step: '01',
      title: t.pipeline.business.title,
      icon: Briefcase,
      color: 'text-cyan-600',
      bgGlow: 'from-cyan-50 to-sky-50',
      borderColor: 'border-cyan-400',
      desc: t.pipeline.business.desc,
      takeaway: language === 'ar' ? 'أتحدث لغة المؤسسين، المدراء الماليين، ومدراء العمليات مباشرة.' : 'I speak the language of founders, CFOs, and operations managers.'
    },
    {
      id: 'analysis',
      step: '02',
      title: t.pipeline.analysis.title,
      icon: Search,
      color: 'text-blue-600',
      bgGlow: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-400',
      desc: t.pipeline.analysis.desc,
      takeaway: language === 'ar' ? 'تحويل متطلبات العمل الغامضة إلى مواصفات برمجية دقيقة وصارمة.' : 'Bridging ambiguous requirements into rigorous software specifications.'
    },
    {
      id: 'architecture',
      step: '03',
      title: t.pipeline.architecture.title,
      icon: Layers,
      color: 'text-purple-600',
      bgGlow: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-400',
      desc: t.pipeline.architecture.desc,
      takeaway: language === 'ar' ? 'مصممة للإنتاجية العالية، وسهولة الصيانة، ومنع نقاط الفشل الفردية.' : 'Built for high throughput, maintainability, and zero single-point failures.'
    },
    {
      id: 'backend',
      step: '04',
      title: t.pipeline.backend.title,
      icon: Code2,
      color: 'text-emerald-600',
      bgGlow: 'from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-400',
      desc: t.pipeline.backend.desc,
      takeaway: language === 'ar' ? 'تنفيذ مستقر موثوق مع اختبارات وحدة وتكامل مؤتمتة.' : 'Reliable execution with automated unit and integration tests.'
    },
    {
      id: 'database',
      step: '05',
      title: t.pipeline.database.title,
      icon: Database,
      color: 'text-amber-600',
      bgGlow: 'from-amber-50 to-orange-50',
      borderColor: 'border-amber-400',
      desc: t.pipeline.database.desc,
      takeaway: language === 'ar' ? 'سرعة استعلامات بالمللي ثانية وسلامة قيود بيانات لا تقبل التنازل.' : 'Sub-millisecond query execution plans and bulletproof data integrity.'
    },
    {
      id: 'deployment',
      step: '06',
      title: t.pipeline.deployment.title,
      icon: Container,
      color: 'text-rose-600',
      bgGlow: 'from-rose-50 to-red-50',
      borderColor: 'border-rose-400',
      desc: t.pipeline.deployment.desc,
      takeaway: language === 'ar' ? 'بيئات إنتاج قابلة لإعادة الإنشاء بنسبة توافر 99.99% على Linux.' : 'Reproducible 99.99% uptime production environments on Linux.'
    }
  ];

  const valuePillars = [
    {
      icon: Calculator,
      title: language === 'ar' ? 'المعرفة المالية والمحاسبية' : 'Accounting & Finance Knowledge',
      desc: language === 'ar'
        ? 'فهم متعمق لدفاتر الأستاذ العام، حسابات المدينين والدائنين، قيود الضرائب، وقوائم الدخل وحساب الرواتب المؤتمت.'
        : 'Deep grasp of general ledgers, accounts receivable/payable, tax deductions, balance sheets, and automated payroll computations.'
    },
    {
      icon: Boxes,
      title: language === 'ar' ? 'سلاسل الإمداد والمخازن' : 'Supply Chain & Inventory',
      desc: language === 'ar'
        ? 'خبرة واقعية في إدارة المستودعات المتعددة، حركات الأصناف، مستويات الأمان لإعادة الطلب، والمطابقة الفورية.'
        : 'Hands-on experience with multi-warehouse replenishment, stock movements, reorder safety margins, and real-time reconciliation.'
    },
    {
      icon: Factory,
      title: language === 'ar' ? 'التصنيع وتخطيط الموارد MRP' : 'Manufacturing & MRP',
      desc: language === 'ar'
        ? 'تصميم هياكل المنتجات (BOM)، مسارات مراكز التشغيل، مراحل مراقبة الجودة وخطط التسليم.'
        : 'Designing end-to-end BOM (Bill of Materials), routing work centers, assembly line quality gates, and dispatch logistics.'
    },
    {
      icon: ShieldCheck,
      title: language === 'ar' ? 'هندسة البرمجيات المؤسسية' : 'Enterprise Software Engineering',
      desc: language === 'ar'
        ? 'ترجمة قواعد العمل مباشرة إلى كود بايثون عالي الجودة دون فجوات التواصل الشائعة بين الفرق.'
        : 'Translating business rules directly into clean Python microservices without the miscommunication of traditional teams.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative border-t border-slate-200 overflow-hidden">
      {/* Background Grids & Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      <div className="absolute top-1/4 start-1/3 w-[35rem] h-[35rem] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 end-1/4 w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono tracking-wide shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* The Core Story Box */}
        <div className="mb-16 rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          
          <div className="absolute top-0 end-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-mono text-cyan-700 font-bold uppercase tracking-widest block">
                {language === 'ar' ? '// المسار المهني ورؤية التطوير' : '// Professional Journey & Mindset'}
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                "{t.quote}"
              </h3>

              <blockquote className={`text-slate-700 text-base sm:text-lg leading-relaxed font-normal ${isRTL ? 'border-r-2 pr-4 border-cyan-500' : 'border-l-2 pl-4 border-cyan-500'} space-y-3`}>
                <p>
                  {t.story1}
                </p>
                <p className="text-slate-500 text-sm">
                  {t.story2}
                </p>
              </blockquote>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-cyan-800 text-xs font-mono font-medium shadow-xs">
                  {language === 'ar' ? '✓ فهم حقيقي لمنطق الأعمال والشركات' : '✓ Real Business Domain Acumen'}
                </div>
                <div className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-indigo-800 text-xs font-mono font-medium shadow-xs">
                  {language === 'ar' ? '✓ بيئة وتطبيقات Odoo ERP & Python' : '✓ Odoo ERP & Python Ecosystem'}
                </div>
                <div className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-emerald-800 text-xs font-mono font-medium shadow-xs">
                  {language === 'ar' ? '✓ معمارية برمجية ذات جاهزية عالية' : '✓ Enterprise-Grade Architecture'}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl bg-[#0F172A] border border-slate-800 p-6 font-mono text-xs space-y-4 shadow-md dir-ltr">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-slate-400">
                <span>developer_profile.py</span>
                <span className="text-emerald-400 text-[10px] font-bold">active</span>
              </div>
              <div className="text-slate-300 space-y-2 text-left">
                <p className="text-cyan-400 font-bold">class BackendEngineer:</p>
                <p className="pl-4 text-indigo-300">focus = "Business Problem Solving"</p>
                <p className="pl-4 text-emerald-300">core_domains = [</p>
                <p className="pl-8 text-slate-400">"Accounting", "ERP", "Inventory",</p>
                <p className="pl-8 text-slate-400">"Manufacturing", "Payroll"</p>
                <p className="pl-4 text-emerald-300">]</p>
                <p className="pl-4 text-amber-300">tech_stack = ["FastAPI", "Odoo", "PostgreSQL"]</p>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Delivery Pipeline */}
        <div className="mb-20 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-cyan-700 uppercase tracking-widest font-bold">
              {language === 'ar' ? 'منهجية التنفيذ المتكاملة' : 'Execution Methodology'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {language === 'ar' ? 'خط أنابيب التطوير والإنتاج (6 مراحل)' : 'The 6-Stage Delivery Pipeline'}
            </h3>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              {language === 'ar'
                ? 'كيف يتحول كل مشروع من فكرة وتحدي تجاري إلى نظام هندسي قوي ومستقر في بيئة الإنتاج.'
                : 'How every project moves from a commercial concept into a robust, deployed system.'}
            </p>
          </div>

          {/* Pipeline Interactive Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activePipelineStep === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActivePipelineStep(idx)}
                  className={`p-4 rounded-2xl border transition-all text-start flex flex-col justify-between cursor-pointer relative group ${
                    isSelected
                      ? `bg-gradient-to-b ${step.bgGlow} ${step.borderColor} shadow-sm scale-105 z-20`
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-slate-400 font-bold">{step.step}</span>
                    <Icon className={`w-4 h-4 ${step.color}`} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm mb-1">{step.title}</h4>
                    <span className="text-[10px] font-mono text-slate-500 block group-hover:text-cyan-700 transition-colors font-medium">
                      {isSelected ? (language === 'ar' ? '● نشط' : '● Active') : (language === 'ar' ? 'معاينة ←' : 'Inspect →')}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Inspector */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-3 py-1 rounded bg-cyan-50 text-cyan-800 font-bold border border-cyan-200">
                  {language === 'ar' ? `المرحلة ${pipelineSteps[activePipelineStep].step}` : `STAGE ${pipelineSteps[activePipelineStep].step}`}
                </span>
                <h4 className="text-xl font-bold text-slate-900">
                  {pipelineSteps[activePipelineStep].title}
                </h4>
              </div>
              <span className="text-xs font-mono text-slate-500">
                {language === 'ar' ? 'انقر على أي مرحلة أعلاه لمعاينتها' : 'Click any stage above to inspect'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block font-bold">
                  {language === 'ar' ? 'النطاق والتنفيذ' : 'Scope & Execution'}
                </span>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {pipelineSteps[activePipelineStep].desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-xs font-mono text-emerald-700 uppercase tracking-wider block font-bold">
                  {language === 'ar' ? 'القيمة المضافة الرئيسية' : 'Key Value Add'}
                </span>
                <p className="text-slate-700 text-sm font-mono font-medium">
                  {pipelineSteps[activePipelineStep].takeaway}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-cyan-400 hover:shadow-md transition-all shadow-xs group"
              >
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 w-fit text-cyan-600 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-slate-900 font-bold text-base leading-snug">{pillar.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
