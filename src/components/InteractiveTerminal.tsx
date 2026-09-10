import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  CornerDownLeft, 
  Maximize2, 
  Minimize2, 
  Trash2, 
  CheckCircle2, 
  Copy, 
  Check
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface TerminalHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
  status: 'success' | 'info' | 'error';
}

interface InteractiveTerminalProps {
  onNavigateTo: (path: string) => void;
  onOpenCv: () => void;
  onOpenProject?: (projectSlug: string) => void;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ 
  onNavigateTo, 
  onOpenCv,
  onOpenProject 
}) => {
  const { language } = useLanguage();
  const t = translations[language].terminal;

  const [inputVal, setInputVal] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getInitialHistory = (lang: 'ar' | 'en'): TerminalHistoryItem[] => {
    if (lang === 'ar') {
      return [
        {
          id: 'init-1',
          command: 'whoami',
          timestamp: '13:00:01',
          status: 'success',
          output: (
            <div className="space-y-1 text-slate-300">
              <p className="text-cyan-300 font-bold">معاذ رمضان (Moaz Ramadan)</p>
              <p className="text-slate-400">مطور بايثون للأنظمة الخلفية (Python Backend Developer) | مهندس برمجيات موجه لبيئة الأعمال</p>
              <p className="text-xs text-slate-500">متخصص في FastAPI و Django و Odoo ERP وقواعد بيانات PostgreSQL والبنية السحابية.</p>
            </div>
          )
        },
        {
          id: 'init-2',
          command: 'skills',
          timestamp: '13:00:02',
          status: 'success',
          output: (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-1">
              {['Python (3.12+)', 'FastAPI', 'Django & DRF', 'Odoo ERP', 'PostgreSQL', 'Docker', 'Redis & Celery', 'Git & CI/CD'].map((s) => (
                <div key={s} className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-cyan-300 font-mono text-left dir-ltr">
                  • {s}
                </div>
              ))}
            </div>
          )
        },
        {
          id: 'init-3',
          command: 'projects',
          timestamp: '13:00:03',
          status: 'info',
          output: (
            <div className="space-y-1.5 text-xs text-slate-300">
              <p className="text-slate-400">دراسات الحالة للأنظمة الحية المكتملة (انقر لفتح التفاصيل):</p>
              <div className="space-y-1 ps-2 border-s border-slate-800">
                <button 
                  onClick={() => onOpenProject ? onOpenProject('inventory-system') : onNavigateTo('projects')}
                  className="text-start text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1.5 cursor-pointer block"
                >
                  <span className="text-emerald-400 font-bold">&gt;</span> 01 — نظام إدارة المستودعات والمخزون الذكي <span className="text-slate-500 font-mono dir-ltr">[FastAPI / PostgreSQL / Docker]</span>
                </button>
                <button 
                  onClick={() => onOpenProject ? onOpenProject('manufacturing-system') : onNavigateTo('projects')}
                  className="text-start text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1.5 cursor-pointer block"
                >
                  <span className="text-emerald-400 font-bold">&gt;</span> 02 — نظام إدارة مصانع الأثاث المتكامل <span className="text-slate-500 font-mono dir-ltr">[Odoo ERP / MRP / Accounting]</span>
                </button>
                <button 
                  onClick={() => onOpenProject ? onOpenProject('payroll-system') : onNavigateTo('projects')}
                  className="text-start text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1.5 cursor-pointer block"
                >
                  <span className="text-emerald-400 font-bold">&gt;</span> 03 — نظام الموظفين ومسيرات الرواتب المؤتمت <span className="text-slate-500 font-mono dir-ltr">[FastAPI / Celery / Biometrics]</span>
                </button>
              </div>
            </div>
          )
        }
      ];
    }

    return [
      {
        id: 'init-1',
        command: 'whoami',
        timestamp: '13:00:01',
        status: 'success',
        output: (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-300 font-bold">Moaz Ramadan</p>
            <p className="text-slate-400">Python Backend Developer | Business-Driven Software Engineer</p>
            <p className="text-xs text-slate-500">Specialized in FastAPI, Django, Odoo ERP, PostgreSQL & Cloud Infrastructure.</p>
          </div>
        )
      },
      {
        id: 'init-2',
        command: 'skills',
        timestamp: '13:00:02',
        status: 'success',
        output: (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-1">
            {['Python (3.12+)', 'FastAPI', 'Django & DRF', 'Odoo ERP', 'PostgreSQL', 'Docker', 'Redis & Celery', 'Git & CI/CD'].map((s) => (
              <div key={s} className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-cyan-300 font-mono">
                • {s}
              </div>
            ))}
          </div>
        )
      },
      {
        id: 'init-3',
        command: 'projects',
        timestamp: '13:00:03',
        status: 'info',
        output: (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-slate-400">Available Production Case Studies (Click to inspect):</p>
            <div className="space-y-1 pl-2 border-l border-slate-800">
              <button 
                onClick={() => onOpenProject ? onOpenProject('inventory-system') : onNavigateTo('projects')}
                className="text-left text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1.5 cursor-pointer block"
              >
                <span className="text-emerald-400 font-bold">&gt;</span> 01 — Inventory Management System <span className="text-slate-500 font-mono">[FastAPI / PostgreSQL / Docker]</span>
              </button>
              <button 
                onClick={() => onOpenProject ? onOpenProject('manufacturing-system') : onNavigateTo('projects')}
                className="text-left text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1.5 cursor-pointer block"
              >
                <span className="text-emerald-400 font-bold">&gt;</span> 02 — Furniture Manufacturing System <span className="text-slate-500 font-mono">[Odoo ERP / MRP / Accounting]</span>
              </button>
              <button 
                onClick={() => onOpenProject ? onOpenProject('payroll-system') : onNavigateTo('projects')}
                className="text-left text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1.5 cursor-pointer block"
              >
                <span className="text-emerald-400 font-bold">&gt;</span> 03 — Employee & Payroll System <span className="text-slate-500 font-mono">[FastAPI / Celery / Biometrics]</span>
              </button>
            </div>
          </div>
        )
      }
    ];
  };

  const [history, setHistory] = useState<TerminalHistoryItem[]>(() => getInitialHistory(language));

  useEffect(() => {
    setHistory(getInitialHistory(language));
  }, [language]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const now = new Date().toTimeString().split(' ')[0];

    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    let output: React.ReactNode = null;
    let status: 'success' | 'info' | 'error' = 'success';

    switch (lower) {
      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      case 'help':
        output = language === 'ar' ? (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-400 font-bold">موجه أوامر معاذ التفاعلي v3.0 (x86_64-linux-gnu)</p>
            <p className="text-slate-400">الأوامر المتاحة:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 font-mono text-slate-300">
              <div><span className="text-cyan-300 font-bold">whoami</span> - نبذة تعريفية عن المطور</div>
              <div><span className="text-cyan-300 font-bold">skills</span> - المهارات ومصفوفة التقنيات</div>
              <div><span className="text-cyan-300 font-bold">projects</span> - دراسات الحالة للمشاريع الحقيقية</div>
              <div><span className="text-cyan-300 font-bold">experience</span> - الخبرة المهنية وسياق الأعمال</div>
              <div><span className="text-cyan-300 font-bold">resume / cv</span> - فتح السيرة الذاتية الرسمية</div>
              <div><span className="text-cyan-300 font-bold">architecture</span> - مسار معمارية النظام الخلفي</div>
              <div><span className="text-cyan-300 font-bold">contact</span> - وسائل التواصل والبريد</div>
              <div><span className="text-cyan-300 font-bold">curl health</span> - فحص جاهزية الخادم الحي</div>
              <div><span className="text-cyan-300 font-bold">goto [section]</span> - التمرير المباشر لقسم معين</div>
              <div><span className="text-cyan-300 font-bold">clear</span> - مسح شاشة الطرفية</div>
            </div>
          </div>
        ) : (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-400 font-bold">Moaz Interactive Shell v3.0 (x86_64-linux-gnu)</p>
            <p className="text-slate-400">Available commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 font-mono text-slate-300">
              <div><span className="text-cyan-300 font-bold">whoami</span> - Developer profile & summary</div>
              <div><span className="text-cyan-300 font-bold">skills</span> - Core technology matrix</div>
              <div><span className="text-cyan-300 font-bold">projects</span> - Production case studies</div>
              <div><span className="text-cyan-300 font-bold">experience</span> - Business & domain expertise</div>
              <div><span className="text-cyan-300 font-bold">resume / cv</span> - Open Moaz's official resume</div>
              <div><span className="text-cyan-300 font-bold">architecture</span> - View backend request pipeline</div>
              <div><span className="text-cyan-300 font-bold">contact</span> - Email and social endpoints</div>
              <div><span className="text-cyan-300 font-bold">curl health</span> - Check live server telemetry</div>
              <div><span className="text-cyan-300 font-bold">goto [section]</span> - Navigate directly to section</div>
              <div><span className="text-cyan-300 font-bold">clear</span> - Clear terminal buffer</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        output = language === 'ar' ? (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-300 font-bold text-sm">معاذ رمضان (Moaz Ramadan)</p>
            <p className="text-emerald-400">مطور بايثون للأنظمة الخلفية (Python Backend Developer)</p>
            <p className="text-slate-400 mt-1">
              أدمج الخبرة العملية الواقعية في المحاسبة وإدارة المخزون والتصنيع مع هندسة البرمجيات القوية بلغة بايثون.
            </p>
            <p className="text-slate-500 font-mono">الموقع: القاهرة، مصر | متاح للعمل عن بُعد أو حضورياً محلياً ودولياً</p>
          </div>
        ) : (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-300 font-bold text-sm">Moaz Ramadan</p>
            <p className="text-emerald-400">Python Backend Developer</p>
            <p className="text-slate-400 mt-1">
              I combine practical business experience in accounting, inventory management, and operations with rigorous Python backend engineering.
            </p>
            <p className="text-slate-500 font-mono">Location: Cairo, Egypt | Available for Remote & Onsite Worldwide</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-slate-400">{language === 'ar' ? 'التقنيات الأساسية للبنية الخلفية:' : 'Primary Backend Stack:'}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { name: 'Python 3.12+', category: language === 'ar' ? 'اللغة الأساسية' : 'Core Language' },
                { name: 'FastAPI', category: language === 'ar' ? 'إطار عمل غير متزامن' : 'Async ASGI Framework' },
                { name: 'Django & DRF', category: language === 'ar' ? 'إطار شامل للمؤسسات' : 'Batteries-Included' },
                { name: 'Odoo ERP', category: language === 'ar' ? 'تطبيقات الأعمال' : 'Enterprise Business' },
                { name: 'PostgreSQL', category: language === 'ar' ? 'قاعدة بيانات علائقية' : 'Relational DB' },
                { name: 'Docker', category: language === 'ar' ? 'حاويات وبيئات تشغيل' : 'Containerization' },
                { name: 'Redis', category: language === 'ar' ? 'ذاكرة مؤقتة ونشر' : 'Cache & Pub/Sub' },
                { name: 'Celery', category: language === 'ar' ? 'مهام غير متزامنة' : 'Background Tasks' },
              ].map(s => (
                <div key={s.name} className="p-2 rounded bg-slate-900 border border-slate-800">
                  <div className="text-cyan-300 font-bold dir-ltr">{s.name}</div>
                  <div className="text-[10px] text-slate-500">{s.category}</div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'projects':
      case 'ls projects':
        output = language === 'ar' ? (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="text-slate-400">دراسات الحالة للمشاريع الحقيقية:</p>
            <div className="space-y-1.5">
              <button 
                onClick={() => { onOpenProject ? onOpenProject('inventory-system') : onNavigateTo('projects'); }}
                className="w-full text-start p-2 rounded bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between group"
              >
                <div>
                  <span className="text-cyan-400 font-bold">01. نظام إدارة المستودعات والمخزون الذكي</span>
                  <p className="text-[11px] text-slate-400">مزامنة حية للمخزون ودعم الفروع المتعددة وتتبع الحركات</p>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 group-hover:underline">فتح التفاصيل ←</span>
              </button>

              <button 
                onClick={() => { onOpenProject ? onOpenProject('manufacturing-system') : onNavigateTo('projects'); }}
                className="w-full text-start p-2 rounded bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between group"
              >
                <div>
                  <span className="text-purple-400 font-bold">02. نظام إدارة مصانع الأثاث المتكامل</span>
                  <p className="text-[11px] text-slate-400">نظام Odoo ERP كامل: مبيعات ← تصنيع ← خامات ← جودة ← محاسبة</p>
                </div>
                <span className="text-[10px] font-mono text-purple-400 group-hover:underline">فتح التفاصيل ←</span>
              </button>

              <button 
                onClick={() => { onOpenProject ? onOpenProject('payroll-system') : onNavigateTo('projects'); }}
                className="w-full text-start p-2 rounded bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between group"
              >
                <div>
                  <span className="text-emerald-400 font-bold">03. نظام الموظفين ومسيرات الرواتب المؤتمت</span>
                  <p className="text-[11px] text-slate-400">سجلات البصمة، وتوزيع الورديات، واحتساب الضرائب، وملفات البنوك</p>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 group-hover:underline">فتح التفاصيل ←</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="text-slate-400">Production Case Studies:</p>
            <div className="space-y-1.5">
              <button 
                onClick={() => { onOpenProject ? onOpenProject('inventory-system') : onNavigateTo('projects'); }}
                className="w-full text-left p-2 rounded bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between group"
              >
                <div>
                  <span className="text-cyan-400 font-bold">01. Inventory Management System</span>
                  <p className="text-[11px] text-slate-400">Real-time stock sync & multi-warehouse fulfillment</p>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 group-hover:underline">Open Details →</span>
              </button>

              <button 
                onClick={() => { onOpenProject ? onOpenProject('manufacturing-system') : onNavigateTo('projects'); }}
                className="w-full text-left p-2 rounded bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between group"
              >
                <div>
                  <span className="text-purple-400 font-bold">02. Furniture Manufacturing System</span>
                  <p className="text-[11px] text-slate-400">Full Odoo ERP: Sales → MRP → Materials → QC → Accounting</p>
                </div>
                <span className="text-[10px] font-mono text-purple-400 group-hover:underline">Open Details →</span>
              </button>

              <button 
                onClick={() => { onOpenProject ? onOpenProject('payroll-system') : onNavigateTo('projects'); }}
                className="w-full text-left p-2 rounded bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between group"
              >
                <div>
                  <span className="text-emerald-400 font-bold">03. Employee & Payroll System</span>
                  <p className="text-[11px] text-slate-400">Biometric logs, shift rosters, tax & bank salary file generation</p>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 group-hover:underline">Open Details →</span>
              </button>
            </div>
          </div>
        );
        break;

      case 'experience':
        output = language === 'ar' ? (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyan-300 font-bold">رحلة هندسية من قلب بيئة الأعمال الفعلية:</p>
            <p className="text-slate-400">
              بخلاف المطورين النظريين، قضيت سنوات داخل مكاتب المحاسبة الحقيقية والمستودعات وخطوط إنتاج المصانع.
            </p>
            <div className="space-y-1 ps-2 border-s border-cyan-500/30 text-[11px]">
              <div><span className="text-white font-bold">• المحاسبة ودفتر الأستاذ:</span> إتقان القيد المزدوج، وشجرة الحسابات، والتسويات المالية والضريبية.</div>
              <div><span className="text-white font-bold">• المخزون والمستودعات:</span> تتبع المواقع المتعددة، ونقاط إعادة الطلب، وتقييم المخزون الدوري والمستمر.</div>
              <div><span className="text-white font-bold">• التصنيع MRP:</span> شجرة المواد (BOM)، وتوجيه مراكز العمل، والتحكم بنسب الهدر.</div>
            </div>
          </div>
        ) : (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyan-300 font-bold">Business-First Engineering Journey:</p>
            <p className="text-slate-400">
              Unlike developers who only know syntax, I spent years working inside actual accounting offices, warehouses, and factory production floors.
            </p>
            <div className="space-y-1 pl-2 border-l border-cyan-500/30 text-[11px]">
              <div><span className="text-white font-bold">• Accounting & Ledger:</span> Understanding double-entry bookkeeping, chart of accounts, and financial reconciliation.</div>
              <div><span className="text-white font-bold">• Inventory & Warehousing:</span> Multi-location tracking, reorder levels, stock movements, and batch valuation.</div>
              <div><span className="text-white font-bold">• Manufacturing (MRP):</span> Bill of Materials (BOM), work center routings, and scrap rate controls.</div>
            </div>
          </div>
        );
        break;

      case 'resume':
      case 'cv':
      case 'cat resume':
      case 'cat cv':
        onOpenCv();
        output = (
          <div className="text-xs text-emerald-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{language === 'ar' ? 'تم فتح نافذة السيرة الذاتية الرسمية لمعاذ رمضان.' : "Opened official CV modal for Moaz Ramadan."}</span>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">{language === 'ar' ? 'معلومات التواصل مع معاذ:' : 'Get In Touch With Moaz:'}</p>
            <p>📧 {language === 'ar' ? 'البريد الإلكتروني:' : 'Email:'} <a href="mailto:cfo.moaz@gmail.com" className="text-cyan-300 hover:underline dir-ltr">cfo.moaz@gmail.com</a></p>
            <p>💼 LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline dir-ltr">linkedin.com/in/moaz-ramadan</a></p>
            <p>🐙 GitHub: <a href="https://github.com" target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline dir-ltr">github.com/moaz-ramadan</a></p>
          </div>
        );
        break;

      case 'architecture':
        onNavigateTo('architecture');
        output = (
          <div className="text-xs text-slate-300 space-y-1">
            <p className="text-cyan-400 font-bold">{language === 'ar' ? 'تم الانتقال لقسم المعمارية الخلفية:' : 'Navigated to Backend Architecture section:'}</p>
            <p className="font-mono text-slate-400 dir-ltr">Client → API Gateway → JWT Auth → RBAC → Business Logic → PostgreSQL/Redis → Docker Deploy</p>
          </div>
        );
        break;

      case 'curl health':
      case 'curl /api/health':
      case 'health':
        output = (
          <div className="font-mono text-xs text-emerald-400 bg-slate-950 p-2 rounded border border-slate-800 space-y-0.5 dir-ltr text-left">
            <div>HTTP/1.1 200 OK</div>
            <div>Content-Type: application/json</div>
            <div>Date: {new Date().toUTCString()}</div>
            <div className="text-cyan-300 pt-1">
              &#123;<br />
              &nbsp;&nbsp;"status": "HEALTHY",<br />
              &nbsp;&nbsp;"engineer": "Moaz Ramadan",<br />
              &nbsp;&nbsp;"uptime": "99.99%",<br />
              &nbsp;&nbsp;"database": "PostgreSQL 16 (Connected)",<br />
              &nbsp;&nbsp;"cache": "Redis 7.2 (Ready)",<br />
              &nbsp;&nbsp;"latency_ms": 7.4<br />
              &#125;
            </div>
          </div>
        );
        break;

      case 'sudo rm -rf /':
      case 'sudo rm -rf *':
        status = 'error';
        output = (
          <div className="text-xs text-rose-400 font-mono">
            {language === 'ar'
              ? '🛡️ تم رفض الوصول: أنظمة معاذ تطبق نظام ملفات للقراءة فقط، وحاويات Docker غير قابلة للتعديل، وأرشفة دورية لقواعد البيانات!'
              : "🛡️ Access Denied: Moaz's systems enforce strict read-only filesystems, immutable Docker layers, and hourly PostgreSQL WAL archiving!"}
          </div>
        );
        break;

      default:
        if (lower.startsWith('goto ')) {
          const target = lower.replace('goto ', '').trim();
          onNavigateTo(target);
          output = <p className="text-xs text-cyan-300">{language === 'ar' ? `جاري التمرير للقسم #${target}...` : `Scrolling to section #${target}...`}</p>;
        } else {
          status = 'error';
          output = (
            <p className="text-xs text-rose-400 font-mono">
              {language === 'ar' ? (
                <>الأمر غير معروف: "{trimmed}". اكتب <span className="text-cyan-400 underline font-bold cursor-pointer" onClick={() => executeCommand('help')}>help</span> لعرض جميع الأوامر المتاحة.</>
              ) : (
                <>Command not found: "{trimmed}". Type <span className="text-cyan-400 underline font-bold cursor-pointer" onClick={() => executeCommand('help')}>help</span> to view available commands.</>
              )}
            </p>
          );
        }
        break;
    }

    setHistory(prev => [
      ...prev,
      {
        id: Math.random().toString(),
        command: trimmed,
        output,
        timestamp: now,
        status
      }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInputVal(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInputVal('');
        } else {
          setHistoryIndex(newIndex);
          setInputVal(commandHistory[newIndex]);
        }
      }
    }
  };

  const copyTerminalOutput = () => {
    const text = history.map(h => `moaz@backend:~$ ${h.command}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-20 bg-white relative border-t border-slate-200">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Terminal Header Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono tracking-wide font-semibold">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-600" />
              <span>{t.badge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
              {t.title}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">
              {t.subtitle}
            </p>
          </div>

          {/* Quick Clickable Suggestions */}
          <div className="flex flex-wrap items-center gap-1.5 dir-ltr">
            {['whoami', 'skills', 'projects', 'experience', 'curl health', 'cv', 'help', 'clear'].map(cmd => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-400 text-slate-700 hover:text-cyan-800 text-xs font-mono transition-all cursor-pointer shadow-xs font-medium"
              >
                ${cmd}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Window Frame */}
        <div className={`rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 shadow-xl overflow-hidden transition-all duration-300 font-mono ${
          isExpanded ? 'h-[600px]' : 'h-[440px]'
        } flex flex-col`}>
          
          {/* Top Window Bar */}
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between shrink-0 dir-ltr">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/90" />
              <div className="w-3 h-3 rounded-full bg-amber-500/90" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
              <span className="text-xs text-slate-400 ml-2 font-mono hidden sm:inline">
                moaz@backend-production-node-01: ~
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyTerminalOutput}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                title="Copy Terminal Text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setHistory([])}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
                title="Clear Output"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                title={isExpanded ? "Collapse" : "Expand"}
              >
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Console Output Area */}
          <div 
            onClick={() => inputRef.current?.focus()}
            className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 cursor-text bg-slate-950"
          >
            {/* Greeting welcome badge */}
            <div className="text-xs text-slate-400 border-b border-slate-800/80 pb-3">
              <p className="text-cyan-300 font-bold">Moaz Ramadan Backend Shell (v3.0 LTS)</p>
              <p className="text-slate-400 mt-0.5">
                {language === 'ar'
                  ? 'اكتب help لعرض جميع الأوامر أو انقر فوق الأزرار السريعة بالأعلى.'
                  : 'Type help to view all commands or click the shortcut chips above.'}
              </p>
            </div>

            {history.map((item) => (
              <div key={item.id} className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs dir-ltr">
                  <span className="text-emerald-400 font-bold">moaz@backend:~$</span>
                  <span className="text-white font-bold">{item.command}</span>
                  <span className="text-[10px] text-slate-500 ml-auto">{item.timestamp}</span>
                </div>
                <div className="ps-4 py-1">
                  {item.output}
                </div>
              </div>
            ))}

            <div ref={terminalEndRef} />
          </div>

          {/* Live Prompt Input Bar */}
          <div className="bg-slate-900 border-t border-slate-800 px-4 py-3 flex items-center gap-2 shrink-0 dir-ltr">
            <span className="text-emerald-400 font-bold text-xs sm:text-sm font-mono shrink-0">
              moaz@backend:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.placeholder}
              className="flex-1 bg-transparent border-none outline-none text-white text-xs sm:text-sm font-mono placeholder:text-slate-500"
              autoFocus
            />
            <button
              onClick={() => executeCommand(inputVal)}
              className="p-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 transition-colors cursor-pointer"
              title="Run command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
