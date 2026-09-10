import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Layers, Cpu, Briefcase, Infinity as InfinityIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface MetricItem {
  id: string;
  target: number | string;
  prefix?: string;
  suffix: string;
  label: string;
  sublabel: string;
  icon: any;
  color: string;
  borderGlow: string;
  bgGlow: string;
  tagList: string[];
}

export const AnimatedMetrics: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].metrics;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Animate Count 1 (0 -> 5)
    let start1 = 0;
    const end1 = 5;
    const duration1 = 1200;
    const stepTime1 = Math.abs(Math.floor(duration1 / end1));
    const timer1 = setInterval(() => {
      start1 += 1;
      setCount1(start1);
      if (start1 >= end1) clearInterval(timer1);
    }, stepTime1);

    // Animate Count 2 (0 -> 7)
    let start2 = 0;
    const end2 = 7;
    const duration2 = 1400;
    const stepTime2 = Math.abs(Math.floor(duration2 / end2));
    const timer2 = setInterval(() => {
      start2 += 1;
      setCount2(start2);
      if (start2 >= end2) clearInterval(timer2);
    }, stepTime2);

    // Animate Count 3 (0 -> 4)
    let start3 = 0;
    const end3 = 4;
    const duration3 = 1000;
    const stepTime3 = Math.abs(Math.floor(duration3 / end3));
    const timer3 = setInterval(() => {
      start3 += 1;
      setCount3(start3);
      if (start3 >= end3) clearInterval(timer3);
    }, stepTime3);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, [isInView]);

  const metrics: MetricItem[] = [
    {
      id: 'projects',
      target: isInView ? (count1 < 10 ? `0${count1}` : `${count1}`) : '00',
      suffix: '+',
      label: t.items.projects.label,
      sublabel: t.items.projects.desc,
      icon: Layers,
      color: 'text-cyan-600',
      borderGlow: 'border-slate-200 hover:border-cyan-400',
      bgGlow: 'bg-white',
      tagList: language === 'ar' 
        ? ['نظام المخازن', 'تصنيع Odoo', 'الأجور والرواتب', 'بوابة الـ API']
        : ['Inventory System', 'Furniture MRP', 'Payroll & HR', 'API Gateway']
    },
    {
      id: 'tech',
      target: isInView ? (count2 < 10 ? `0${count2}` : `${count2}`) : '00',
      suffix: '+',
      label: t.items.tech.label,
      sublabel: t.items.tech.desc,
      icon: Cpu,
      color: 'text-indigo-600',
      borderGlow: 'border-slate-200 hover:border-indigo-400',
      bgGlow: 'bg-white',
      tagList: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'Docker', 'Odoo', 'Redis']
    },
    {
      id: 'domains',
      target: isInView ? (count3 < 10 ? `0${count3}` : `${count3}`) : '00',
      suffix: '+',
      label: t.items.domains.label,
      sublabel: t.items.domains.desc,
      icon: Briefcase,
      color: 'text-emerald-600',
      borderGlow: 'border-slate-200 hover:border-emerald-400',
      bgGlow: 'bg-white',
      tagList: language === 'ar'
        ? ['محاسبة الأستاذ العام', 'المستودعات والجرد', 'شجرة المواد BOM', 'الضرائب والأجور']
        : ['Accounting & GL', 'Warehouse Inventory', 'Manufacturing BOM', 'Payroll & Tax']
    },
    {
      id: 'problems',
      target: '∞',
      suffix: '',
      label: t.items.problems.label,
      sublabel: t.items.problems.desc,
      icon: InfinityIcon,
      color: 'text-amber-600',
      borderGlow: 'border-slate-200 hover:border-amber-400',
      bgGlow: 'bg-white',
      tagList: language === 'ar'
        ? ['معالجة غير متزامنة', 'تحسين الاستعلامات', 'أتمتة الأعمال', 'استقرار تشغيلي']
        : ['Async Pipelines', 'DB Optimization', 'Process Automation', 'Zero Downtime']
    }
  ];

  return (
    <section ref={ref} className="py-12 bg-slate-50/80 border-y border-slate-200 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] bg-[size:32px_32px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-2xl ${m.bgGlow} border ${m.borderGlow} p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Background watermarked icon */}
                <Icon className={`absolute -right-2 -bottom-2 w-24 h-24 ${m.color} opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl bg-slate-50 border border-slate-200 ${m.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                      {language === 'ar' ? 'بيانات موثقة' : 'VERIFIED STAT'}
                    </span>
                  </div>

                  {/* Animated Counter Display */}
                  <div className="flex items-baseline gap-1 my-2 dir-ltr">
                    <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-slate-900 group-hover:text-cyan-600 transition-colors">
                      {m.target}
                    </span>
                    {m.suffix && (
                      <span className={`text-2xl sm:text-3xl font-bold font-mono ${m.color}`}>
                        {m.suffix}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-800 mt-1">
                    {m.label}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {m.sublabel}
                  </p>
                </div>

                {/* Tech & Domain Chips */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {m.tagList.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-mono font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {m.tagList.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-mono font-medium">
                      +{m.tagList.length - 3}
                    </span>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
