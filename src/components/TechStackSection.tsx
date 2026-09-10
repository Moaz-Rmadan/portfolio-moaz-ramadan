import React, { useState } from 'react';
import { Cpu, Zap, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface TechNode {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  experience: string;
  metrics: string;
}

export const TechStackSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].techStack;
  const [activeNode, setActiveNode] = useState<string>('python');

  const nodes: Record<string, TechNode> = language === 'ar' ? {
    python: {
      id: 'python',
      name: 'PYTHON 3.12+',
      category: 'لغة البرمجة الأساسية',
      icon: '🐍',
      description: 'حجر الأساس لجميع الأنظمة الخلفية. الاستفادة من تحديد الأنواع المتقدم (Type Hinting)، والمعالجة غير المتزامنة (Async Concurrency)، وأنماط التصميم الكائني OOP.',
      experience: 'خبرة عملية تتجاوز 4 سنوات في بناء خوادم غير متزامنة فائقة الأداء، وطوابير المهام الخلفية، وتطوير وحدات Odoo ERP المخصصة.',
      metrics: 'كود مكتوب بأنواع دقيقة 100% · استقرار تام في الذاكرة'
    },
    fastapi: {
      id: 'fastapi',
      name: 'FastAPI',
      category: 'إطار عمل الويب',
      icon: '⚡',
      description: 'واجهات REST و WebSocket غير متزامنة فائقة السرعة مع تحقق تلقائي من صحة البيانات عبر Pydantic وتوثيق Swagger التفاعلي المولد آلياً.',
      experience: 'استُخدم في أنظمة المستودعات والموظفين لضمان زمن استجابة بأجزاء من المللي ثانية وتدقيق البيانات التلقائي.',
      metrics: '+10,000 طلب/ثانية · مدعوم بـ ASGI'
    },
    django: {
      id: 'django',
      name: 'Django & DRF',
      category: 'إطار عمل مؤسسي',
      icon: '🛡️',
      description: 'إطار عمل بايثون الشامل للتطبيقات المؤسسية الضخمة، والأنظمة القابلة للتوسع بأمان واكتمال معماري.',
      experience: 'بناء أنظمة تحقق وتفويض معقدة، وتحسين استعلامات ORM المتقدمة، وربط عمال المعالجة الخلفية Celery.',
      metrics: 'أمان مؤسسي متقدم · ORM علائقي متين'
    },
    postgresql: {
      id: 'postgresql',
      name: 'PostgreSQL',
      category: 'قاعدة البيانات العلائقية',
      icon: '🐘',
      description: 'نظام إدارة قواعد البيانات العلائقية المتقدم مع فهرسة مركبة وقيود المفاتيح الأجنبية وتوافق ACID التام.',
      experience: 'تصميم مخططات معيارية (3NF)، وضبط خطط تنفيذ الاستعلامات EXPLAIN ANALYZE، وإدارة مجمعات الاتصالات للأنظمة عالية الحركة.',
      metrics: 'توافق كامل مع ACID · استعلامات بأقل من 10ms'
    },
    docker: {
      id: 'docker',
      name: 'Docker & Compose',
      category: 'الحاويات والعمليات DevOps',
      icon: '🐳',
      description: 'أداة الحاويات لضمان تطابق بيئة التطوير المحلية بنسبة 100% مع بيئات الإنتاج الحية على خوادم Linux.',
      experience: 'ملفات Dockerfile متعددة المراحل وتنسيق Docker Compose لـ FastAPI و PostgreSQL و Redis و Odoo ERP.',
      metrics: 'تطابق بيئات 100% · نشر فوري'
    },
    restapi: {
      id: 'restapi',
      name: 'REST API & Odoo',
      category: 'المعمارية المؤسسية',
      icon: '🔌',
      description: 'معمارية RESTful متكاملة مع وحدات Odoo ERP لربط كافة عمليات وأقسام المنشأة بانسيابية.',
      experience: 'ربط أوامر المبيعات ومسارات التصنيع وسجلات الأستاذ العام عبر نقاط API مشفرة وموثوقة.',
      metrics: 'عقود برمجية قياسية · OpenAPI 3.0'
    },
    deploy: {
      id: 'deploy',
      name: 'Production Deploy',
      category: 'البنية التحتية والنشر',
      icon: '🚀',
      description: 'نشر سحابي عالي الاعتمادية عبر خوادم Nginx العكسية وخوادم ASGI Uvicorn/Gunicorn وسيرفرات Linux VPS.',
      experience: 'إعداد مسارات نشر آلي CI/CD مع GitHub Actions وإدارة شهادات الأمان SSL التلقائية.',
      metrics: 'جاهزية 99.99% · أتمتة كاملة للـ CI/CD'
    }
  } : {
    python: {
      id: 'python',
      name: 'PYTHON 3.12+',
      category: 'Core Language',
      icon: '🐍',
      description: 'The foundation of all backend systems. Leveraging advanced typing, async/await concurrency, and robust OOP design patterns.',
      experience: '4+ years building high-performance asynchronous servers, background task queues, and custom ERP modules.',
      metrics: '100% Type-Hinted Codebase · Zero Memory Leaks'
    },
    fastapi: {
      id: 'fastapi',
      name: 'FastAPI',
      category: 'Web Framework',
      icon: '⚡',
      description: 'High-performance async REST & WebSocket APIs with automatic Pydantic validation and interactive Swagger docs.',
      experience: 'Used in Inventory & Employee systems for sub-millisecond response times and automated payload validation.',
      metrics: '10k+ Req/Sec · ASGI Powered'
    },
    django: {
      id: 'django',
      name: 'Django & DRF',
      category: 'Web Framework',
      icon: '🛡️',
      description: 'Robust batteries-included Python framework for scalable monoliths and enterprise business applications.',
      experience: 'Building secure authentication systems, complex ORM query optimization, and Celery background workers.',
      metrics: 'Enterprise Security · Robust ORM'
    },
    postgresql: {
      id: 'postgresql',
      name: 'PostgreSQL',
      category: 'Database',
      icon: '🐘',
      description: 'Advanced relational database management system with complex indexing, foreign key constraints, and ACID compliance.',
      experience: 'Designing normalized schemas, query execution plan tuning, and connection pooling for high-concurrency apps.',
      metrics: 'ACID Compliant · Sub-10ms Queries'
    },
    docker: {
      id: 'docker',
      name: 'Docker & Compose',
      category: 'DevOps',
      icon: '🐳',
      description: 'Containerization tool ensuring identical environments from local development to production Linux servers.',
      experience: 'Multi-stage Dockerfiles and Docker Compose orchestrations for FastAPI, PostgreSQL, Redis, and Odoo ERP.',
      metrics: '100% Environment Parity'
    },
    restapi: {
      id: 'restapi',
      name: 'REST API & Odoo',
      category: 'Architecture',
      icon: '🔌',
      description: 'RESTful architectural style combined with Odoo ERP modules for seamless business workflow integration.',
      experience: 'Connecting sales orders, manufacturing lines, and accounting ledgers through robust API endpoints.',
      metrics: 'Standardized Endpoints · OpenAPI 3.0'
    },
    deploy: {
      id: 'deploy',
      name: 'Production Deploy',
      category: 'Infrastructure',
      icon: '🚀',
      description: 'Reliable cloud deployments using Nginx reverse proxy, Gunicorn/Uvicorn ASGI servers, and Linux VPS.',
      experience: 'Setting up automated CI/CD pipelines with GitHub Actions and secure SSL certificate management.',
      metrics: '99.99% Uptime · Automated CI/CD'
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50/60 relative border-t border-slate-200 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] bg-[size:24px_24px] opacity-15 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono font-medium">
            <Cpu className="w-3.5 h-3.5 text-cyan-600" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Interactive Stack Flow Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: The Flow Chart Diagram */}
          <div className="lg:col-span-7 flex flex-col items-center space-y-3 py-4">
            
            {/* PYTHON NODE */}
            <div 
              onClick={() => setActiveNode('python')}
              onMouseEnter={() => setActiveNode('python')}
              className={`w-full max-w-sm p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between shadow-xs ${
                activeNode === 'python' 
                  ? 'bg-cyan-50 border-cyan-500 shadow-sm scale-105' 
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🐍</span>
                <div>
                  <h4 className="text-slate-900 font-bold font-mono text-sm">PYTHON 3.12+</h4>
                  <p className="text-[11px] text-cyan-700 font-mono font-medium">
                    {language === 'ar' ? 'اللغة الأساسية والتشغيل غير المتزامن' : 'Core Language & Async Runtime'}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 font-medium">
                {language === 'ar' ? 'معاينة' : 'Inspect'}
              </span>
            </div>

            {/* Connecting Arrow */}
            <div className="text-cyan-600 animate-bounce">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* BRANCH: FastAPI & Django */}
            <div className="w-full max-w-md grid grid-cols-2 gap-4">
              
              {/* FastAPI Node */}
              <div 
                onClick={() => setActiveNode('fastapi')}
                onMouseEnter={() => setActiveNode('fastapi')}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col items-center text-center shadow-xs ${
                  activeNode === 'fastapi' 
                    ? 'bg-cyan-50 border-cyan-500 shadow-sm scale-105' 
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <span className="text-2xl mb-1">⚡</span>
                <h4 className="text-slate-900 font-bold font-mono text-sm">FastAPI</h4>
                <p className="text-[10px] text-cyan-700 font-mono font-medium">
                  {language === 'ar' ? 'واجهات فائقة السرعة' : 'High-Speed APIs'}
                </p>
              </div>

              {/* Django Node */}
              <div 
                onClick={() => setActiveNode('django')}
                onMouseEnter={() => setActiveNode('django')}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col items-center text-center shadow-xs ${
                  activeNode === 'django' 
                    ? 'bg-cyan-50 border-cyan-500 shadow-sm scale-105' 
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <span className="text-2xl mb-1">🛡️</span>
                <h4 className="text-slate-900 font-bold font-mono text-sm">Django & DRF</h4>
                <p className="text-[10px] text-purple-700 font-mono font-medium">
                  {language === 'ar' ? 'أنظمة مؤسسية متينة' : 'Enterprise Backends'}
                </p>
              </div>

            </div>

            {/* Connecting Arrow */}
            <div className="text-cyan-600 animate-bounce">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* POSTGRESQL NODE */}
            <div 
              onClick={() => setActiveNode('postgresql')}
              onMouseEnter={() => setActiveNode('postgresql')}
              className={`w-full max-w-sm p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between shadow-xs ${
                activeNode === 'postgresql' 
                  ? 'bg-cyan-50 border-cyan-500 shadow-sm scale-105' 
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🐘</span>
                <div>
                  <h4 className="text-slate-900 font-bold font-mono text-sm">PostgreSQL</h4>
                  <p className="text-[11px] text-indigo-700 font-mono font-medium">
                    {language === 'ar' ? 'قاعدة بيانات علائقية ونماذج ORM' : 'Relational Database & ORM'}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 font-medium">
                {language === 'ar' ? 'معاينة' : 'Inspect'}
              </span>
            </div>

            {/* Connecting Arrow */}
            <div className="text-cyan-600 animate-bounce">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* DOCKER NODE */}
            <div 
              onClick={() => setActiveNode('docker')}
              onMouseEnter={() => setActiveNode('docker')}
              className={`w-full max-w-sm p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between shadow-xs ${
                activeNode === 'docker' 
                  ? 'bg-cyan-50 border-cyan-500 shadow-sm scale-105' 
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🐳</span>
                <div>
                  <h4 className="text-slate-900 font-bold font-mono text-sm">Docker & Compose</h4>
                  <p className="text-[11px] text-emerald-700 font-mono font-medium">
                    {language === 'ar' ? 'بيئة تشغيل معزولة بالحاويات' : 'Containerized Environment'}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 font-medium">
                {language === 'ar' ? 'معاينة' : 'Inspect'}
              </span>
            </div>

            {/* Connecting Arrow */}
            <div className="text-cyan-600 animate-bounce">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* REST API & ODOO NODE */}
            <div 
              onClick={() => setActiveNode('restapi')}
              onMouseEnter={() => setActiveNode('restapi')}
              className={`w-full max-w-sm p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between shadow-xs ${
                activeNode === 'restapi' 
                  ? 'bg-cyan-50 border-cyan-500 shadow-sm scale-105' 
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔌</span>
                <div>
                  <h4 className="text-slate-900 font-bold font-mono text-sm">REST API & Odoo ERP</h4>
                  <p className="text-[11px] text-cyan-700 font-mono font-medium">
                    {language === 'ar' ? 'مسارات الأعمال ونقاط الاتصال' : 'Business Workflows & Endpoints'}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 font-medium">
                {language === 'ar' ? 'معاينة' : 'Inspect'}
              </span>
            </div>

            {/* Connecting Arrow */}
            <div className="text-cyan-600 animate-bounce">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* DEPLOY NODE */}
            <div 
              onClick={() => setActiveNode('deploy')}
              onMouseEnter={() => setActiveNode('deploy')}
              className={`w-full max-w-sm p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between shadow-xs ${
                activeNode === 'deploy' 
                  ? 'bg-cyan-50 border-cyan-500 shadow-sm scale-105' 
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <h4 className="text-slate-900 font-bold font-mono text-sm">Production Deploy</h4>
                  <p className="text-[11px] text-amber-700 font-mono font-medium">
                    {language === 'ar' ? 'خوادم Linux VPS و Nginx و CI/CD' : 'Linux VPS, Nginx & CI/CD'}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 font-medium">
                {language === 'ar' ? 'معاينة' : 'Inspect'}
              </span>
            </div>

          </div>

          {/* Right: Active Node Inspection Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm relative overflow-hidden space-y-6"
              >
                <div className="absolute top-0 end-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{nodes[activeNode].icon}</span>
                    <div>
                      <span className="text-xs font-mono text-cyan-700 font-bold uppercase tracking-widest block">{nodes[activeNode].category}</span>
                      <h3 className="text-2xl font-extrabold text-slate-900 font-mono">{nodes[activeNode].name}</h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-xs font-semibold">
                    {language === 'ar' ? 'التقنية المحددة' : 'Active Node'}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-bold">
                      {language === 'ar' ? 'نظرة عامة على المعمارية' : 'Architecture Overview'}
                    </h4>
                    <p className="text-slate-700 text-base leading-relaxed">{nodes[activeNode].description}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-bold">
                      {language === 'ar' ? 'خبرة معاذ وحالات الاستخدام' : "Moaz's Experience & Use Case"}
                    </h4>
                    <p className="text-cyan-950 text-sm leading-relaxed bg-cyan-50 border border-cyan-200 p-4 rounded-xl">
                      {nodes[activeNode].experience}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-bold">
                      {language === 'ar' ? 'مؤشر الأداء' : 'Performance Metric'}
                    </h4>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-emerald-800 font-mono text-xs font-bold">
                      <Zap className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{nodes[activeNode].metrics}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono flex items-center justify-between">
                  <span>Backend Stack Inspector v3.0</span>
                  <span className="text-cyan-700 font-medium">
                    {language === 'ar' ? 'انقر على أي تقنية لمعاينتها' : 'Click any node to inspect'}
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
