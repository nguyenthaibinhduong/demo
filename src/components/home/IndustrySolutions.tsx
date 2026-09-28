import React, { useState } from 'react';
import { Factory, ArrowRight, CheckCircle2 } from 'lucide-react';
import { solutionsData } from '../../data/solutions';
import { useApp } from '../../context/AppContext';

// Each industry gets a unique dark gradient + SVG schematic
const industryVisuals: Record<string, { gradient: string; color: string; svgContent: string }> = {
  'Sản Xuất Lốp Xe & Ô Tô': {
    gradient: 'from-blue-950 via-blue-900 to-slate-900',
    color: '#60a5fa',
    svgContent: `<svg viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;position:absolute;inset:0;opacity:0.25">
      <circle cx="120" cy="90" r="60" stroke="#60a5fa" stroke-width="2"/>
      <circle cx="120" cy="90" r="40" stroke="#93c5fd" stroke-width="1" stroke-dasharray="6 4"/>
      <circle cx="120" cy="90" r="10" fill="#1e40af"/>
      <path d="M90 90 L150 90 M120 60 L120 120" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="280" cy="90" r="60" stroke="#60a5fa" stroke-width="2"/>
      <circle cx="280" cy="90" r="40" stroke="#93c5fd" stroke-width="1" stroke-dasharray="6 4"/>
      <circle cx="280" cy="90" r="10" fill="#1e40af"/>
      <path d="M250 90 L310 90 M280 60 L280 120" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M180 70 L220 70 M180 110 L220 110" stroke="#93c5fd" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
  },
  'Xi Măng & Khoáng Sản': {
    gradient: 'from-stone-900 via-amber-950 to-slate-900',
    color: '#fbbf24',
    svgContent: `<svg viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;position:absolute;inset:0;opacity:0.25">
      <rect x="160" y="20" width="80" height="140" rx="4" stroke="#fbbf24" stroke-width="1.5"/>
      <path d="M50 160 L160 160 L160 80 L240 80 L240 160 L350 160" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
      <rect x="170" y="30" width="60" height="30" rx="3" fill="#78350f" fill-opacity="0.5" stroke="#fcd34d" stroke-width="1"/>
      <path d="M190 160 L190 140 Q190 120 210 120 Q230 120 230 140 L230 160" stroke="#fbbf24" stroke-width="1.5" fill="none"/>
      <path d="M80 100 L80 160 M100 90 L100 160 M120 105 L120 160 M310 95 L310 160 M330 108 L330 160" stroke="#fcd34d" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
  },
  'Thủy Điện & Hồ Đập': {
    gradient: 'from-cyan-950 via-teal-900 to-slate-900',
    color: '#34d399',
    svgContent: `<svg viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;position:absolute;inset:0;opacity:0.25">
      <path d="M20 100 Q100 40 200 100 Q300 160 380 100" stroke="#34d399" stroke-width="2" fill="none"/>
      <path d="M20 120 Q100 60 200 120 Q300 180 380 120" stroke="#6ee7b7" stroke-width="1" fill="none" opacity="0.5"/>
      <rect x="175" y="40" width="50" height="120" rx="4" stroke="#34d399" stroke-width="1.5" fill="#065f46" fill-opacity="0.3"/>
      <path d="M185 70 L215 70 M185 90 L215 90 M185 110 L215 110 M185 130 L215 130" stroke="#34d399" stroke-width="1" stroke-linecap="round"/>
      <circle cx="200" cy="155" r="12" stroke="#34d399" stroke-width="1.5" fill="#065f46" fill-opacity="0.5"/>
      <path d="M196 152 L204 158 M196 158 L204 152" stroke="#6ee7b7" stroke-width="1.5"/>
    </svg>`,
  },
  'Luyện Kim & Cán Thép': {
    gradient: 'from-red-950 via-orange-950 to-slate-900',
    color: '#fb923c',
    svgContent: `<svg viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;position:absolute;inset:0;opacity:0.25">
      <rect x="60" y="60" width="80" height="60" rx="6" stroke="#fb923c" stroke-width="1.5" fill="#7c2d12" fill-opacity="0.3"/>
      <rect x="260" y="60" width="80" height="60" rx="6" stroke="#fb923c" stroke-width="1.5" fill="#7c2d12" fill-opacity="0.3"/>
      <path d="M140 90 L260 90" stroke="#fb923c" stroke-width="6" stroke-linecap="round"/>
      <path d="M140 80 L260 80 M140 100 L260 100" stroke="#fbbf24" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
      <path d="M100 120 L100 140 M300 120 L300 140" stroke="#fb923c" stroke-width="1.5" stroke-linecap="round"/>
      <rect x="80" y="30" width="40" height="30" rx="4" stroke="#fbbf24" stroke-width="1" fill="#7c2d12" fill-opacity="0.3"/>
      <rect x="280" y="30" width="40" height="30" rx="4" stroke="#fbbf24" stroke-width="1" fill="#7c2d12" fill-opacity="0.3"/>
    </svg>`,
  },
};

const defaultVisual = { gradient: 'from-slate-900 to-blue-950', color: '#60a5fa', svgContent: '' };

export const IndustrySolutions: React.FC = () => {
  const { setCurrentPage } = useApp();
  const [activeSolutionId, setActiveSolutionId] = useState<string>(solutionsData[0].id);
  const activeSolution = solutionsData.find(s => s.id === activeSolutionId) || solutionsData[0];
  const visual = industryVisuals[activeSolution.industry] || defaultVisual;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-7 gap-2">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-industrial-orange block mb-1">GIẢI PHÁP NGÀNH</span>
            <h2 className="text-xl font-bold text-corporate-dark">Tối Ưu Vận Hành Công Nghiệp</h2>
          </div>
          <button
            onClick={() => setCurrentPage('solutions')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center space-x-1"
          >
            <span>Tất cả giải pháp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT: Visual */}
          <div className="lg:col-span-7">
            {/* Gradient art banner */}
            <div
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${visual.gradient} p-6`}
              style={{ minHeight: '220px' }}
            >
              {/* SVG schematic background */}
              <div
                className="absolute inset-0 pointer-events-none"
                dangerouslySetInnerHTML={{ __html: visual.svgContent }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent pointer-events-none" />

              {/* Industry tag */}
              <div className="relative z-10 mb-auto">
                <span
                  className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3"
                  style={{ backgroundColor: visual.color + '30', color: visual.color, border: `1px solid ${visual.color}50` }}
                >
                  {activeSolution.industry}
                </span>
              </div>

              {/* Title bottom */}
              <div className="absolute bottom-5 left-6 right-6 z-10">
                <h3 className="text-white font-bold text-base leading-snug drop-shadow">{activeSolution.title}</h3>
                <p className="text-white/70 text-xs mt-1 line-clamp-2">{activeSolution.summary}</p>
              </div>
            </div>

            {/* Key results */}
            <div className="mt-3 flex flex-wrap gap-2">
              {activeSolution.keyResults.map((res, i) => (
                <div key={i} className="flex items-center space-x-1.5 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-full text-xs font-medium">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                  <span>{res}</span>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div className="mt-2 flex flex-wrap gap-1.5">
              {activeSolution.technologies.map(t => (
                <span key={t} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">{t}</span>
              ))}
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setCurrentPage('solutions')}
                className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs rounded-lg flex items-center space-x-1.5 transition-colors"
              >
                <span>Xem chi tiết</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="px-4 py-2 text-slate-700 hover:text-brand-600 font-semibold text-xs rounded-lg transition-colors"
              >
                Tư vấn giải pháp →
              </button>
            </div>
          </div>

          {/* RIGHT: list */}
          <div className="lg:col-span-5 space-y-2">
            {solutionsData.map((sol, index) => {
              const isActive = sol.id === activeSolutionId;
              const v = industryVisuals[sol.industry] || defaultVisual;
              return (
                <div
                  key={sol.id}
                  onClick={() => setActiveSolutionId(sol.id)}
                  className={`p-3.5 rounded-xl cursor-pointer transition-colors flex items-start space-x-3 group ${
                    isActive ? 'bg-slate-900' : 'hover:bg-slate-50'
                  }`}
                >
                  <span
                    className={`text-xs font-bold font-mono shrink-0 mt-0.5 w-5 transition-colors`}
                    style={{ color: isActive ? v.color : '#94a3b8' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <span
                      className="text-[10px] font-semibold uppercase block mb-0.5"
                      style={{ color: isActive ? v.color : '#94a3b8' }}
                    >
                      {sol.industry}
                    </span>
                    <h4 className={`text-xs font-semibold leading-snug transition-colors ${
                      isActive ? 'text-white' : 'text-slate-700 group-hover:text-brand-600'
                    }`}>
                      {sol.title}
                    </h4>
                    {isActive && (
                      <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{sol.summary}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
