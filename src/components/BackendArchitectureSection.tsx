import React, { useState, useEffect } from 'react';
import { 
  Laptop, 
  Globe, 
  Lock, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Server, 
  Container, 
  Play, 
  ArrowDown, 
  Zap, 
  Activity,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface RequestType {
  id: string;
  label: string;
  method: 'GET' | 'POST' | 'PUT';
  endpoint: string;
  payload: string;
  userRole: string;
}

export const BackendArchitectureSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].architecture;

  const requestTypes: RequestType[] = language === 'ar' ? [
    {
      id: 'order',
      label: 'إنشاء أمر تصنيع ذكي',
      method: 'POST',
      endpoint: '/api/v1/mrp/orders',
      payload: '{ "product_id": 402, "qty": 50, "bom_id": "BOM-SOFA-09" }',
      userRole: 'Factory_Manager'
    },
    {
      id: 'inventory',
      label: 'فحص وحجز مخزون حي',
      method: 'GET',
      endpoint: '/api/v1/stock/realtime?sku=OAK-WOOD-01',
      payload: 'Query params: sku=OAK-WOOD-01',
      userRole: 'Warehouse_Operator'
    },
    {
      id: 'payroll',
      label: 'معالجة الرواتب الشهرية',
      method: 'POST',
      endpoint: '/api/v1/hr/payroll/run',
      payload: '{ "month": 9, "year": 2026, "department": "ALL" }',
      userRole: 'SuperAdmin'
    }
  ] : [
    {
      id: 'order',
      label: 'Create Manufacturing Order',
      method: 'POST',
      endpoint: '/api/v1/mrp/orders',
      payload: '{ "product_id": 402, "qty": 50, "bom_id": "BOM-SOFA-09" }',
      userRole: 'Factory_Manager'
    },
    {
      id: 'inventory',
      label: 'Stock Check & Reservation',
      method: 'GET',
      endpoint: '/api/v1/stock/realtime?sku=OAK-WOOD-01',
      payload: 'Query params: sku=OAK-WOOD-01',
      userRole: 'Warehouse_Operator'
    },
    {
      id: 'payroll',
      label: 'Compute Monthly Payroll',
      method: 'POST',
      endpoint: '/api/v1/hr/payroll/run',
      payload: '{ "month": 9, "year": 2026, "department": "ALL" }',
      userRole: 'SuperAdmin'
    }
  ];

  const [selectedRequest, setSelectedRequest] = useState<RequestType>(requestTypes[0]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  const [speed, setSpeed] = useState<'normal' | 'fast'>('normal');

  const stepDuration = speed === 'normal' ? 1400 : 700;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulating) {
      timer = setTimeout(() => {
        setCurrentStep((prev) => {
          if (prev >= 7) return 1;
          return prev + 1;
        });
      }, stepDuration);
    }
    return () => clearTimeout(timer);
  }, [currentStep, isSimulating, stepDuration]);

  const handleManualTrigger = (req: RequestType) => {
    setSelectedRequest(req);
    setCurrentStep(1);
    setIsSimulating(true);
  };

  const getStepInfo = (step: number) => {
    if (language === 'ar') {
      switch (step) {
        case 1:
          return {
            title: '01. إرسال طلب العميل (Client Request)',
            actor: 'العميل (تطبيق الويب / الهاتف / واجهة Odoo)',
            desc: `يبدأ العميل طلب HTTP ${selectedRequest.method} إلى ${selectedRequest.endpoint} مصحوباً برمز التفويض المشفر Bearer Token.`,
            status: 'اتصال HTTP/2 مشفر ونشط',
            latency: '2ms'
          };
        case 2:
          return {
            title: '02. بوابة REST API والتوجيه',
            actor: 'خادم ASGI FastAPI / Uvicorn',
            desc: 'إنهاء تشفير SSL وتوجيه المسارات وتطبيق قواعد CORS وفحص مخطط البيانات عبر Pydantic v2.',
            status: 'تم اجتياز تدقيق Pydantic بنجاح',
            latency: '5ms'
          };
        case 3:
          return {
            title: '03. طبقة الأمان والتحقق من الصلاحيات RBAC',
            actor: 'محرك أمان JWT وسياسات الأدوار',
            desc: `فك تشفير توقيع JWT، واستخراج بيانات المستخدم، والتحقق من صلاحية الدور "${selectedRequest.userRole}".`,
            status: 'تم تأكيد التوقيع والمستخدم مصرح له',
            latency: '9ms'
          };
        case 4:
          return {
            title: '04. منطق الأعمال الأساسي (Business Logic)',
            actor: 'خدمات بايثون المستقلة ونماذج النطاق Domain',
            desc: 'تنفيذ القواعد التشغيلية، ومعادلات الحساب، وحدود المعاملات المالية، والتحقق من صحة الانتقال بين الحالات.',
            status: 'تم تنفيذ منطق الأعمال بنجاح',
            latency: '16ms'
          };
        case 5:
          return {
            title: '05. قاعدة بيانات PostgreSQL والخدمات الموزعة',
            actor: 'PostgreSQL + ذاكرة كاش Redis + عمال Celery',
            desc: 'تنفيذ معاملات ACID المتزامنة مع تحسين الفهارس، ودفع المهام الثقيلة لعمال المعالجة في الخلفية.',
            status: 'تم تثبيت المعاملة في قاعدة البيانات بنجاح',
            latency: '22ms'
          };
        case 6:
          return {
            title: '06. بيئة الحاويات Docker المنعزلة',
            actor: 'حاويات لينكس المعزولة وشبكة Bridge الافتراضية',
            desc: 'تعمل الخدمات داخل حاويات آمنة ومعزولة تتواصل بسرعات فائقة عبر شبكة برمجية افتراضية داخلية.',
            status: 'الحاويات تعمل بأمان واستقرار تام',
            latency: '26ms'
          };
        case 7:
          return {
            title: '07. إرجاع الاستجابة بنجاح (200 OK)',
            actor: 'مسار تجهيز وضغط الاستجابة للعميل',
            desc: 'تنسيق استجابة JSON معيارية، وضغطها عبر خوارزميات gzip/brotli، وإعادتها فوراً للعميل.',
            status: '200 OK · تم تسليم البيانات بنجاح',
            latency: '28ms إجمالي'
          };
        default:
          return {
            title: 'النظام جاهز للاستقبال',
            actor: 'معمارية الخوادم الخلفية الشاملة',
            desc: 'اختر سيناريو طلب لاختباره أو تابع المحاكاة الحية لدورة حياة الطلب.',
            status: 'في وضع الاستعداد',
            latency: '0ms'
          };
      }
    }

    // English Fallback
    switch (step) {
      case 1:
        return {
          title: '01. Client Request Dispatch',
          actor: 'Client (Web / Mobile / Odoo Client)',
          desc: `Client initiates HTTP ${selectedRequest.method} ${selectedRequest.endpoint} with Bearer Token and encrypted payload.`,
          status: 'HTTP/2 TCP Handshake Active',
          latency: '2ms'
        };
      case 2:
        return {
          title: '02. REST API Gateway & Routing',
          actor: 'FastAPI / Uvicorn ASGI Server',
          desc: 'Reverse proxy terminates SSL, routes request path, applies CORS headers, and executes Pydantic schema validation.',
          status: 'Pydantic v2 Validation Passed',
          latency: '5ms'
        };
      case 3:
        return {
          title: '03. Authentication & RBAC Layer',
          actor: 'JWT Security & Role Policy Engine',
          desc: `Decodes JWT signature, extracts claims. Validates permissions for role "${selectedRequest.userRole}".`,
          status: 'JWT Signature Validated (Role: Authorized)',
          latency: '9ms'
        };
      case 4:
        return {
          title: '04. Core Business Logic',
          actor: 'Python Domain Services & Odoo Logic',
          desc: 'Executes domain rules, calculation formulas, transaction boundaries, and state transition validation.',
          status: 'Domain Rules Executed Successfully',
          latency: '16ms'
        };
      case 5:
        return {
          title: '05. PostgreSQL & Distributed Services',
          actor: 'PostgreSQL Database + Redis Cache + Celery',
          desc: 'Executes async ACID transactions, query optimization with indexes, and dispatches background worker tasks.',
          status: 'SQLAlchemy Async Query Committed',
          latency: '22ms'
        };
      case 6:
        return {
          title: '06. Docker Containerization Runtime',
          actor: 'Docker Isolated Containers & Networks',
          desc: 'Services run inside sandboxed Linux containers communicating over high-speed virtual bridge networks.',
          status: 'Container Healthy · Resource Within Limits',
          latency: '26ms'
        };
      case 7:
        return {
          title: '07. Response Returned (200 OK)',
          actor: 'Client Response Pipeline',
          desc: 'Structured JSON response formatted, compressed with gzip/brotli, and transmitted back to the client.',
          status: '200 OK · Payload Delivered',
          latency: '28ms Total'
        };
      default:
        return {
          title: 'System Ready',
          actor: 'Backend Architecture Cluster',
          desc: 'Select a request scenario or watch the real-time request lifecycle simulation.',
          status: 'Standing by',
          latency: '0ms'
        };
    }
  };

  const activeInfo = getStepInfo(currentStep);

  return (
    <section id="architecture" className="py-24 bg-white relative border-t border-slate-200 overflow-hidden">
      {/* Background Grids & Accent Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b815_1px,transparent_1px),linear-gradient(to_bottom,#94a3b815_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[45rem] h-[45rem] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono tracking-wide font-medium">
            <Cpu className="w-3.5 h-3.5 text-cyan-600 animate-pulse" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Interactive Scenario Controls */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-600 me-2 flex items-center gap-1.5 font-medium">
              <Zap className="w-3.5 h-3.5 text-cyan-600" />
              {language === 'ar' ? 'محاكاة نوع الطلب:' : 'Simulate Request:'}
            </span>
            {requestTypes.map((req) => (
              <button
                key={req.id}
                onClick={() => handleManualTrigger(req)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                  selectedRequest.id === req.id
                    ? 'bg-cyan-600 text-white font-bold shadow-md scale-102'
                    : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  req.method === 'POST' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-sky-100 text-sky-800 border border-sky-300'
                }`}>
                  {req.method}
                </span>
                <span>{req.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSpeed(speed === 'normal' ? 'fast' : 'normal')}
              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-mono cursor-pointer transition-colors font-medium shadow-xs"
            >
              {language === 'ar' ? 'السرعة: ' : 'Speed: '}
              <span className="text-cyan-700 font-bold">{speed === 'normal' ? (language === 'ar' ? 'عادية' : 'NORMAL') : (language === 'ar' ? 'سريعة' : 'FAST')}</span>
            </button>

            <button
              onClick={() => {
                setIsSimulating(!isSimulating);
                if (!isSimulating && currentStep === 0) setCurrentStep(1);
              }}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                isSimulating 
                  ? 'bg-amber-50 border border-amber-200 text-amber-800' 
                  : 'bg-cyan-50 border border-cyan-200 text-cyan-800'
              }`}
            >
              <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-pulse' : ''}`} />
              <span>
                {isSimulating 
                  ? (language === 'ar' ? 'إيقاف مؤقت' : 'Pause Stream') 
                  : (language === 'ar' ? 'استئناف البث' : 'Resume Stream')}
              </span>
            </button>
          </div>

        </div>

        {/* Main Grid: Architecture Diagram & Telemetry Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ARCHITECTURE FLOW DIAGRAM */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-50/80 border border-slate-200 p-6 sm:p-8 shadow-sm relative">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono text-slate-500 ms-2 font-medium">architecture-pipeline.diag</span>
              </div>
              <span className="text-xs font-mono text-cyan-700 font-bold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-600" />
                <span>{language === 'ar' ? `المرحلة ${currentStep}/7` : `STEP ${currentStep}/7`}</span>
              </span>
            </div>

            {/* Visual Node Tree */}
            <div className="flex flex-col items-center space-y-4">
              
              {/* NODE 1: CLIENT */}
              <div className="relative w-full max-w-md">
                <div 
                  className={`p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                    currentStep === 1 || currentStep === 7
                      ? 'bg-cyan-50 border-cyan-500 shadow-sm scale-102'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg ${currentStep === 1 || currentStep === 7 ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Laptop className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-mono font-bold text-sm">CLIENT</h4>
                      <p className="text-[11px] text-slate-500 font-mono">
                        {language === 'ar' ? 'تطبيق الويب / الهاتف / واجهة ERP' : 'Web Application / Mobile / ERP Client'}
                      </p>
                    </div>
                  </div>
                  {currentStep === 1 && (
                    <span className="px-2.5 py-1 rounded bg-cyan-100 text-cyan-800 text-[10px] font-mono font-bold animate-pulse">
                      {language === 'ar' ? 'جاري الإرسال...' : 'DISPATCHING...'}
                    </span>
                  )}
                  {currentStep === 7 && (
                    <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                      200 OK RECEIVED
                    </span>
                  )}
                </div>

                <div className="flex justify-center py-1">
                  <div className="flex flex-col items-center">
                    <div className={`w-0.5 h-4 ${currentStep >= 1 ? 'bg-cyan-500' : 'bg-slate-300'} transition-colors`} />
                    <ArrowDown className={`w-4 h-4 ${currentStep >= 2 ? 'text-cyan-600 animate-bounce' : 'text-slate-400'}`} />
                  </div>
                </div>
              </div>

              {/* NODE 2: REST API GATEWAY */}
              <div className="relative w-full max-w-md">
                <div 
                  className={`p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                    currentStep === 2
                      ? 'bg-cyan-50 border-cyan-500 shadow-sm scale-102'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg ${currentStep === 2 ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-mono font-bold text-sm">REST API GATEWAY</h4>
                      <p className="text-[11px] text-cyan-700 font-mono font-medium">FastAPI ASGI · Uvicorn · Reverse Proxy</p>
                    </div>
                  </div>
                  {currentStep === 2 && (
                    <span className="px-2.5 py-1 rounded bg-cyan-100 text-cyan-800 text-[10px] font-mono font-bold animate-pulse">
                      {language === 'ar' ? 'فحص البيانات...' : 'PARSING PAYLOAD'}
                    </span>
                  )}
                </div>

                <div className="flex flex-col items-center py-1">
                  <div className={`w-0.5 h-3 ${currentStep >= 2 ? 'bg-cyan-500' : 'bg-slate-300'}`} />
                  <div className={`w-48 h-0.5 ${currentStep >= 3 ? 'bg-cyan-500' : 'bg-slate-300'}`} />
                  <div className="w-48 flex justify-between">
                    <div className={`w-0.5 h-3 ${currentStep >= 3 ? 'bg-cyan-500' : 'bg-slate-300'}`} />
                    <div className={`w-0.5 h-3 ${currentStep >= 3 ? 'bg-cyan-500' : 'bg-slate-300'}`} />
                  </div>
                </div>
              </div>

              {/* NODE 3: AUTHENTICATION & RBAC */}
              <div className="w-full max-w-lg grid grid-cols-2 gap-4">
                <div 
                  className={`p-3.5 rounded-xl border transition-all duration-300 flex flex-col items-center text-center ${
                    currentStep === 3
                      ? 'bg-indigo-50 border-indigo-500 shadow-sm scale-102'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className={`p-2 rounded-lg mb-1.5 ${currentStep === 3 ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    <Lock className="w-4 h-4" />
                  </div>
                  <h5 className="text-slate-900 font-mono font-bold text-xs">Authentication</h5>
                  <p className="text-[10px] text-indigo-700 font-mono font-medium">JWT Bearer & Tokens</p>
                </div>

                <div 
                  className={`p-3.5 rounded-xl border transition-all duration-300 flex flex-col items-center text-center ${
                    currentStep === 3
                      ? 'bg-indigo-50 border-indigo-500 shadow-sm scale-102'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className={`p-2 rounded-lg mb-1.5 ${currentStep === 3 ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h5 className="text-slate-900 font-mono font-bold text-xs">RBAC</h5>
                  <p className="text-[10px] text-indigo-700 font-mono font-medium">Roles & Permissions</p>
                </div>
              </div>

              <div className="flex flex-col items-center py-1">
                <div className="w-48 flex justify-between">
                  <div className={`w-0.5 h-3 ${currentStep >= 3 ? 'bg-indigo-500' : 'bg-slate-300'}`} />
                  <div className={`w-0.5 h-3 ${currentStep >= 3 ? 'bg-indigo-500' : 'bg-slate-300'}`} />
                </div>
                <div className={`w-48 h-0.5 ${currentStep >= 4 ? 'bg-cyan-500' : 'bg-slate-300'}`} />
                <div className={`w-0.5 h-3 ${currentStep >= 4 ? 'bg-cyan-500' : 'bg-slate-300'}`} />
                <ArrowDown className={`w-4 h-4 ${currentStep >= 4 ? 'text-cyan-600 animate-bounce' : 'text-slate-400'}`} />
              </div>

              {/* NODE 4: BUSINESS LOGIC */}
              <div className="relative w-full max-w-md">
                <div 
                  className={`p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                    currentStep === 4
                      ? 'bg-cyan-50 border-cyan-500 shadow-sm scale-102'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg ${currentStep === 4 ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-mono font-bold text-sm">BUSINESS LOGIC</h4>
                      <p className="text-[11px] text-cyan-700 font-mono font-medium">Python Services · Domain Models · Validation</p>
                    </div>
                  </div>
                  {currentStep === 4 && (
                    <span className="px-2.5 py-1 rounded bg-cyan-100 text-cyan-800 text-[10px] font-mono font-bold animate-pulse">
                      {language === 'ar' ? 'معالجة النطاق...' : 'PROCESSING'}
                    </span>
                  )}
                </div>

                <div className="flex flex-col items-center py-1">
                  <div className={`w-0.5 h-3 ${currentStep >= 4 ? 'bg-cyan-500' : 'bg-slate-300'}`} />
                  <div className={`w-48 h-0.5 ${currentStep >= 5 ? 'bg-cyan-500' : 'bg-slate-300'}`} />
                  <div className="w-48 flex justify-between">
                    <div className={`w-0.5 h-3 ${currentStep >= 5 ? 'bg-cyan-500' : 'bg-slate-300'}`} />
                    <div className={`w-0.5 h-3 ${currentStep >= 5 ? 'bg-cyan-500' : 'bg-slate-300'}`} />
                  </div>
                </div>
              </div>

              {/* NODE 5: POSTGRESQL & SERVICES */}
              <div className="w-full max-w-lg grid grid-cols-2 gap-4">
                <div 
                  className={`p-3.5 rounded-xl border transition-all duration-300 flex flex-col items-center text-center ${
                    currentStep === 5
                      ? 'bg-sky-50 border-sky-500 shadow-sm scale-102'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className={`p-2 rounded-lg mb-1.5 ${currentStep === 5 ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    <Database className="w-4 h-4" />
                  </div>
                  <h5 className="text-slate-900 font-mono font-bold text-xs">PostgreSQL</h5>
                  <p className="text-[10px] text-sky-700 font-mono font-medium">ACID Transactions & ORM</p>
                </div>

                <div 
                  className={`p-3.5 rounded-xl border transition-all duration-300 flex flex-col items-center text-center ${
                    currentStep === 5
                      ? 'bg-emerald-50 border-emerald-500 shadow-sm scale-102'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className={`p-2 rounded-lg mb-1.5 ${currentStep === 5 ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    <Server className="w-4 h-4" />
                  </div>
                  <h5 className="text-slate-900 font-mono font-bold text-xs">Services</h5>
                  <p className="text-[10px] text-emerald-700 font-mono font-medium">Redis Cache & Celery Tasks</p>
                </div>
              </div>

              <div className="flex flex-col items-center py-1">
                <div className="w-48 flex justify-between">
                  <div className={`w-0.5 h-3 ${currentStep >= 5 ? 'bg-sky-500' : 'bg-slate-300'}`} />
                  <div className={`w-0.5 h-3 ${currentStep >= 5 ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                </div>
                <div className={`w-48 h-0.5 ${currentStep >= 6 ? 'bg-cyan-500' : 'bg-slate-300'}`} />
                <div className={`w-0.5 h-3 ${currentStep >= 6 ? 'bg-cyan-500' : 'bg-slate-300'}`} />
                <ArrowDown className={`w-4 h-4 ${currentStep >= 6 ? 'text-cyan-600 animate-bounce' : 'text-slate-400'}`} />
              </div>

              {/* NODE 6: DOCKER CONTAINER CLUSTER */}
              <div className="relative w-full max-w-md">
                <div 
                  className={`p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                    currentStep === 6
                      ? 'bg-cyan-50 border-cyan-500 shadow-sm scale-102'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg ${currentStep === 6 ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Container className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-mono font-bold text-sm">DOCKER</h4>
                      <p className="text-[11px] text-cyan-700 font-mono font-medium">Isolated Container Cluster & Linux Host</p>
                    </div>
                  </div>
                  {currentStep === 6 && (
                    <span className="px-2.5 py-1 rounded bg-cyan-100 text-cyan-800 text-[10px] font-mono font-bold animate-pulse">
                      {language === 'ar' ? 'بيئة معزولة' : 'CONTAINERIZED'}
                    </span>
                  )}
                </div>
              </div>

            </div>

          </div>

          {/* TELEMETRY & LIVE REQUEST INSPECTOR */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Active Step Details Card */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-mono text-cyan-700 font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {language === 'ar' ? 'بيانات التتبع المباشرة' : 'Live Stage Telemetry'}
                </span>
                <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-bold">
                  {activeInfo.latency}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 font-mono">{activeInfo.title}</h3>
                <p className="text-xs font-mono text-indigo-600 font-semibold mt-0.5">{activeInfo.actor}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm leading-relaxed font-sans">
                {activeInfo.desc}
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="font-semibold">{language === 'ar' ? 'حالة المسار:' : 'Pipeline State:'}</span>
                  <span className="text-cyan-700 font-bold">{activeInfo.status}</span>
                </div>
                <div className="flex items-center justify-between text-slate-500">
                  <span className="font-semibold">{language === 'ar' ? 'المسار الهدف:' : 'Target Endpoint:'}</span>
                  <span className="text-slate-900 font-bold dir-ltr">{selectedRequest.method} {selectedRequest.endpoint}</span>
                </div>
                <div className="flex items-center justify-between text-slate-500">
                  <span className="font-semibold">{language === 'ar' ? 'الدور المعتمد:' : 'Authenticated Role:'}</span>
                  <span className="text-indigo-700 font-bold dir-ltr">{selectedRequest.userRole}</span>
                </div>
              </div>
            </div>

            {/* Request Payload Box */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 font-mono text-xs space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-600 font-semibold flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-cyan-600" />
                  payload.json
                </span>
                <span className="text-emerald-700 font-semibold text-[10px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">application/json</span>
              </div>

              <div className="space-y-2">
                <span className="text-slate-500 block font-semibold">
                  {language === 'ar' ? '// حمولة الطلب الواردة (Request Payload):' : '// Incoming Request Payload:'}
                </span>
                <div className="p-3 rounded-lg bg-slate-900 text-cyan-300 overflow-x-auto dir-ltr text-left border border-slate-800">
                  <pre>{selectedRequest.payload}</pre>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-medium">{language === 'ar' ? 'المعيار المعماري:' : 'Architecture Standard:'}</span>
                <span className="text-cyan-700 font-semibold">RESTful · Async ASGI · Microservices</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
