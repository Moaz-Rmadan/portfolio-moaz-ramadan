import React, { useState } from 'react';
import { Terminal, Play, Server, ShieldCheck, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ArchitecturePlayground: React.FC = () => {
  const { language } = useLanguage();
  const [selectedEndpoint, setSelectedEndpoint] = useState<string>('health');
  const [loading, setLoading] = useState<boolean>(false);
  const [responseLog, setResponseLog] = useState<{
    status: number;
    latency_ms: number;
    timestamp: string;
    data: Record<string, unknown>;
  }>({
    status: 200,
    latency_ms: 12,
    timestamp: new Date().toISOString(),
    data: {
      status: "healthy",
      service: "Moaz Backend Gateway",
      version: "v2.4.1",
      database: "connected",
      redis_cache: "active"
    }
  });

  const endpoints = language === 'ar' ? [
    {
      id: 'health',
      method: 'GET',
      path: '/api/v1/health',
      desc: 'فحص جاهزية الخوادم والخدمات السحابية',
      data: { status: "healthy", service: "Moaz Backend Gateway", version: "v2.4.1", database: "connected", redis_cache: "active" }
    },
    {
      id: 'users',
      method: 'GET',
      path: '/api/v1/users?limit=5',
      desc: 'جلب حسابات المستخدمين المصرح لهم (محمي بتوكن JWT)',
      data: {
        total: 1420,
        page: 1,
        users: [
          { id: 1, username: "moaz_dev", role: "SuperAdmin", status: "active" },
          { id: 2, username: "ahmed_backend", role: "Developer", status: "active" },
          { id: 3, username: "sara_erp", role: "OdooAdmin", status: "active" }
        ]
      }
    },
    {
      id: 'orders',
      method: 'POST',
      path: '/api/v1/orders/dispatch',
      desc: 'إطلاق مهمة غير متزامنة لطابور معالجة Celery',
      data: {
        task_id: "celery-task-9f8e7d6c-5b4a",
        status: "QUEUED",
        estimated_execution_ms: 145,
        worker_node: "celery-worker-worker-2"
      }
    },
    {
      id: 'erp',
      method: 'GET',
      path: '/api/v1/erp/inventory/sync',
      desc: 'مزامنة مخزون Odoo ERP عبر عدة مستودعات في الوقت الفعلي',
      data: {
        sync_status: "SUCCESS",
        warehouses_checked: 4,
        records_updated: 1820,
        duration_sec: 0.84
      }
    }
  ] : [
    {
      id: 'health',
      method: 'GET',
      path: '/api/v1/health',
      desc: 'Cluster health check & service telemetry',
      data: { status: "healthy", service: "Moaz Backend Gateway", version: "v2.4.1", database: "connected", redis_cache: "active" }
    },
    {
      id: 'users',
      method: 'GET',
      path: '/api/v1/users?limit=5',
      desc: 'Fetch authorized user accounts (JWT Protected)',
      data: {
        total: 1420,
        page: 1,
        users: [
          { id: 1, username: "moaz_dev", role: "SuperAdmin", status: "active" },
          { id: 2, username: "ahmed_backend", role: "Developer", status: "active" },
          { id: 3, username: "sara_erp", role: "OdooAdmin", status: "active" }
        ]
      }
    },
    {
      id: 'orders',
      method: 'POST',
      path: '/api/v1/orders/dispatch',
      desc: 'Trigger asynchronous Celery order task queue',
      data: {
        task_id: "celery-task-9f8e7d6c-5b4a",
        status: "QUEUED",
        estimated_execution_ms: 145,
        worker_node: "celery-worker-worker-2"
      }
    },
    {
      id: 'erp',
      method: 'GET',
      path: '/api/v1/erp/inventory/sync',
      desc: 'Odoo ERP multi-warehouse stock synchronization',
      data: {
        sync_status: "SUCCESS",
        warehouses_checked: 4,
        records_updated: 1820,
        duration_sec: 0.84
      }
    }
  ];

  const handleTestEndpoint = (ep: typeof endpoints[0]) => {
    setSelectedEndpoint(ep.id);
    setLoading(true);
    setTimeout(() => {
      setResponseLog({
        status: 200,
        latency_ms: Math.floor(Math.random() * 25) + 8,
        timestamp: new Date().toISOString(),
        data: ep.data
      });
      setLoading(false);
    }, 400);
  };

  return (
    <section id="sandbox" className="py-24 bg-slate-50/70 relative border-t border-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] bg-[size:32px_32px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-semibold">
            <Server className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === 'ar' ? 'بيئة تجربة واجهات API التفاعلية' : 'INTERACTIVE API SANDBOX'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {language === 'ar' ? 'اختبر نقاط اتصال الخوادم الخلفية' : "Test Moaz's Backend Endpoints"}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            {language === 'ar'
              ? 'قم بمحاكاة طلبات REST وفحص استجابات JSON الحية من خدمات FastAPI و Django المصغرة.'
              : "Simulate REST requests and inspect real-time JSON responses from simulated FastAPI & Django microservices."}
          </p>
        </div>

        {/* Playground Container */}
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Endpoint selector */}
          <div className="lg:col-span-5 p-6 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/60 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-mono text-slate-700 font-bold flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-600" />
                  {language === 'ar' ? 'المسارات المتاحة للاختبار' : 'AVAILABLE ROUTES'}
                </span>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                  Uvicorn ASGI
                </span>
              </div>

              <div className="space-y-3">
                {endpoints.map((ep) => {
                  const isSelected = selectedEndpoint === ep.id;
                  return (
                    <button
                      key={ep.id}
                      onClick={() => handleTestEndpoint(ep)}
                      className={`w-full text-start p-4 rounded-xl border transition-all cursor-pointer flex flex-col gap-2 ${
                        isSelected 
                          ? 'bg-cyan-50/90 border-cyan-500 shadow-xs' 
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 dir-ltr">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                            ep.method === 'GET' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-purple-50 text-purple-700 border border-purple-200'
                          }`}>
                            {ep.method}
                          </span>
                          <span className="font-mono text-xs text-slate-900 font-bold">{ep.path}</span>
                        </div>
                        <Play className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-600' : 'text-slate-400'}`} />
                      </div>
                      <p className="text-xs text-slate-600 font-medium">{ep.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-600 font-medium flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
                {language === 'ar' ? 'مصادقة JWT مفعلة' : 'JWT Auth Enforced'}
              </span>
              <span className="font-mono font-semibold">Python 3.12</span>
            </div>
          </div>

          {/* Right: Live Response Terminal */}
          <div className="lg:col-span-7 p-6 bg-slate-900 flex flex-col justify-between font-mono text-slate-200">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{language === 'ar' ? 'مخرجات الاستجابة (JSON RESPONSE)' : 'RESPONSE OUTPUT (JSON)'}</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] dir-ltr">
                  <span className="text-emerald-400 font-bold">Status: {responseLog.status} OK</span>
                  <span className="text-slate-400 font-semibold">{responseLog.latency_ms}ms</span>
                </div>
              </div>

              {/* JSON Viewer Box */}
              <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 relative overflow-hidden text-xs text-cyan-300 min-h-[260px] max-h-[320px] overflow-y-auto dir-ltr text-left">
                {loading ? (
                  <div className="flex flex-col items-center justify-center h-48 gap-3 text-slate-400">
                    <RefreshCw className="w-6 h-6 animate-spin text-cyan-400" />
                    <span>{language === 'ar' ? 'جاري تنفيذ الطلب بشكل غير متزامن...' : 'Executing endpoint asynchronously...'}</span>
                  </div>
                ) : (
                  <pre className="whitespace-pre-wrap">
                    {JSON.stringify(responseLog, null, 2)}
                  </pre>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="dir-ltr">Timestamp: {responseLog.timestamp}</span>
              <span className="text-cyan-400 font-semibold">FastAPI ASGI Server</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
