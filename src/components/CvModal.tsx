import React, { useState } from 'react';
import { X, FileText, Download, CheckCircle2, Terminal, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    const cvContent = language === 'ar' ? `# معاذ رمضان - مهندس ومطور أنظمة بايثون الخلفية (Python Backend Developer)
البريد الإلكتروني: cfo.moaz@gmail.com
الموقع: القاهرة، مصر (متاح للعمل عن بُعد وحضورياً)
التخصص: Python, FastAPI, Django, Odoo ERP, PostgreSQL, Docker

الملخص المهني:
مطور ومصمم أنظمة خلفية بلغة بايثون يمتلك خبرة عملية واسعة في ربط العمليات التشغيلية (المحاسبة، المستودعات، التصنيع) بهندسة برمجية عالية الأداء والاستقرار.

الخبرات العملية:
- كبير مهندسي الأنظمة الخلفية (2022 - الآن)
  - تصميم ونشر خدمات FastAPI مصغرة تعالج +10,000 طلب بالثانية.
  - تحسين استعلامات PostgreSQL وضبط الفهارس مما خفض زمن الاستجابة بنسبة 65%.
- مطور أنظمة Odoo ERP و Django (2020 - 2022)
  - تطوير وحدات مخصصة في Odoo لأتمتة المخازن المتعددة والمحاسبة.
  - بناء واجهات RESTful محمية بمصادقة JWT عبر Django REST Framework.

المصفوفة التقنية:
- اللغات: Python 3.12+, SQL
- أطر العمل: FastAPI, Django, DRF, Odoo ERP
- قواعد البيانات: PostgreSQL, Redis, MongoDB
- البنية والعمليات: Docker, Docker Compose, Linux, Nginx, CI/CD
` : `# MOAZ RAMADAN - Python Backend Developer
Email: cfo.moaz@gmail.com
Specialization: Python, FastAPI, Django, Odoo ERP, PostgreSQL, Docker

SUMMARY:
Results-driven Python Backend Developer with extensive experience building scalable APIs, high-throughput microservices, and robust enterprise solutions.

EXPERIENCE:
- Senior Backend Engineer (2022 - Present)
  - Designed and deployed FastAPI microservices handling 10k+ requests/sec.
  - Optimized PostgreSQL queries and database partitioning, reducing latency by 65%.
- Odoo ERP & Django Developer (2020 - 2022)
  - Developed bespoke Odoo modules for multi-warehouse inventory and financial automation.
  - Implemented Django REST Framework backends with JWT authentication.

TECH STACK:
- Languages: Python 3.12+, SQL
- Frameworks: FastAPI, Django, DRF, Odoo ERP
- Databases: PostgreSQL, Redis, MongoDB
- DevOps: Docker, Docker Compose, GitHub Actions, Linux, Nginx
`;
    const blob = new Blob([cvContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = language === 'ar' ? 'Moaz_Ramadan_Python_Backend_CV_AR.md' : 'Moaz_Ramadan_Python_Backend_CV.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-slate-900 font-extrabold text-lg">
                {language === 'ar' ? 'معاذ رمضان - السيرة الذاتية المهنية' : 'Moaz Ramadan - Curriculum Vitae'}
              </h3>
              <p className="text-xs font-mono text-cyan-700 font-medium">Python Backend Developer</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer shadow-xs"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: CV Preview */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm font-sans">
          
          {/* Header Info */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                {language === 'ar' ? 'معاذ رمضان' : 'MOAZ RAMADAN'}
              </h2>
              <p className="text-cyan-700 font-mono text-sm font-semibold">
                {language === 'ar' ? 'مطور أنظمة خلفية بايثون | حلول أعمال ومؤسسات' : 'Python Backend Developer'}
              </p>
            </div>
            <div className="text-xs font-mono space-y-1 text-slate-600">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-600" />
                <span className="dir-ltr font-semibold">cfo.moaz@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-600" />
                <span>{language === 'ar' ? 'القاهرة، مصر (عن بُعد وحضورياً)' : 'Remote & Worldwide'}</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h4 className="text-slate-900 font-bold text-base font-mono flex items-center gap-2 border-b border-slate-200 pb-2">
              <Terminal className="w-4 h-4 text-cyan-600" />
              {language === 'ar' ? 'الملخص المهني' : 'Professional Summary'}
            </h4>
            <p className="text-slate-600 leading-relaxed font-medium">
              {language === 'ar'
                ? 'مطور نظم خلفية بايثون متمرس يمتلك خبرة تتجاوز 5 سنوات في هندسة وبناء واجهات برمجة التطبيقات فائقة الأداء، وحلول Odoo ERP المؤسسية، والخدمات المصغرة السحابية القابلة للتوسع باستخدام FastAPI و Django و PostgreSQL و Docker.'
                : 'Results-driven Python Backend Developer with 5+ years of experience architecting and building high-performance APIs, enterprise Odoo ERP solutions, and scalable cloud microservices using FastAPI, Django, PostgreSQL, and Docker.'}
            </p>
          </div>

          {/* Core Expertise */}
          <div className="space-y-2">
            <h4 className="text-slate-900 font-bold text-base font-mono flex items-center gap-2 border-b border-slate-200 pb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              {language === 'ar' ? 'المهارات الأساسية والتقنيات' : 'Core Competencies & Tech Stack'}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono text-xs dir-ltr">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-cyan-800 font-semibold text-left">Python 3.12 / OOP</div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-cyan-800 font-semibold text-left">FastAPI & Pydantic</div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-cyan-800 font-semibold text-left">Django & DRF</div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-cyan-800 font-semibold text-left">Odoo ERP Modules</div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-cyan-800 font-semibold text-left">PostgreSQL / Redis</div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-cyan-800 font-semibold text-left">Docker & CI/CD</div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h4 className="text-slate-900 font-bold text-base font-mono flex items-center gap-2 border-b border-slate-200 pb-2">
              <FileText className="w-4 h-4 text-purple-600" />
              {language === 'ar' ? 'الخبرة المهنية' : 'Professional Experience'}
            </h4>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex justify-between items-center">
                  <h5 className="font-bold text-slate-900">
                    {language === 'ar' ? 'كبير مهندسي النظم الخلفية بايثون' : 'Senior Python Backend Engineer'}
                  </h5>
                  <span className="text-xs font-mono text-cyan-700 font-bold dir-ltr">2022 — Present</span>
                </div>
                <p className="text-xs text-slate-600 font-mono font-medium">
                  {language === 'ar' ? 'الخدمات المصغرة المؤسسية والمعمارية السحابية' : 'Enterprise Microservices & Cloud Architecture'}
                </p>
                <p className="text-xs text-slate-600 pt-1 font-medium">
                  {language === 'ar'
                    ? 'هندسة وبناء خدمات غير متزامنة عبر FastAPI تخدم +10,000 طلب/ثانية. تحسين استعلامات وفهارس PostgreSQL مما قلل زمن الاستجابة بنسبة 65%.'
                    : 'Architected asynchronous FastAPI microservices serving 10,000+ req/sec. Optimized PostgreSQL queries and indexing, reducing response latency by 65%.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex justify-between items-center">
                  <h5 className="font-bold text-slate-900">
                    {language === 'ar' ? 'مطور أنظمة Odoo ERP والنظم الخلفية' : 'Backend & Odoo Developer'}
                  </h5>
                  <span className="text-xs font-mono text-cyan-700 font-bold dir-ltr">2020 — 2022</span>
                </div>
                <p className="text-xs text-slate-600 font-mono font-medium">
                  {language === 'ar' ? 'حلول الأعمال وتطبيقات الويب' : 'ERP & Web Solutions'}
                </p>
                <p className="text-xs text-slate-600 pt-1 font-medium">
                  {language === 'ar'
                    ? 'تطوير وحدات Odoo ERP مخصصة لأتمتة المخازن المتعددة وسير العمل، وبناء واجهات Django RESTful خلفية آمنة بتوثيق JWT.'
                    : 'Developed customized Odoo ERP modules for multi-warehouse inventory automation and built secure Django REST backends with JWT authentication.'}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-200 bg-slate-50/80 flex items-center justify-between">
          <div className="text-xs text-slate-600 font-mono font-medium">
            {downloaded ? (
              <span className="text-emerald-700 flex items-center gap-1 font-bold">
                <CheckCircle2 className="w-4 h-4" /> 
                {language === 'ar' ? 'تم تنزيل السيرة الذاتية بنجاح!' : 'CV downloaded successfully!'}
              </span>
            ) : (
              <span>{language === 'ar' ? 'جاهز للتنزيل' : 'Ready for download'}</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-medium cursor-pointer shadow-xs"
            >
              {language === 'ar' ? 'إغلاق' : 'Close'}
            </button>
            <button
              onClick={handleDownload}
              className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{language === 'ar' ? 'تحميل السيرة الذاتية (Markdown)' : 'Download CV (Markdown)'}</span>
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
