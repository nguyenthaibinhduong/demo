import React, { useState } from 'react';
import { Wrench, ArrowRight, PhoneCall, ChevronRight } from 'lucide-react';
import { servicesData } from '../../data/services';
import { useApp } from '../../context/AppContext';
import { companyData } from '../../data/company';

// Each service gets a unique gradient + SVG visual — no external images
const serviceVisuals: Record<string, { gradient: string; svgPath: string; color: string }> = {
  'thiet-ke-tram-nguon': {
    gradient: 'from-blue-950 via-blue-900 to-slate-900',
    color: '#60a5fa',
    svgPath: `<svg viewBox="0 0 320 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="30" width="80" height="80" rx="8" stroke="#60a5fa" stroke-width="1.5" fill="#1e3a5f" fill-opacity="0.5"/>
      <rect x="50" y="50" width="40" height="40" rx="4" stroke="#93c5fd" stroke-width="1" fill="#1e40af" fill-opacity="0.4"/>
      <circle cx="70" cy="70" r="10" stroke="#60a5fa" stroke-width="1.5" fill="#1677D2" fill-opacity="0.6"/>
      <path d="M130 50 L200 50 M130 70 L200 70 M130 90 L180 90" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round"/>
      <rect x="210" y="40" width="60" height="70" rx="6" stroke="#93c5fd" stroke-width="1" fill="#1e3a5f" fill-opacity="0.3"/>
      <path d="M225 65 L255 65 M225 75 L245 75 M225 85 L250 85" stroke="#93c5fd" stroke-width="1" stroke-linecap="round"/>
      <circle cx="280" cy="40" r="18" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="4 3" fill="none"/>
      <path d="M275 40 L280 35 L285 40 M280 35 L280 45" stroke="#93c5fd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  'suc-rua-duong-ong': {
    gradient: 'from-cyan-950 via-teal-900 to-slate-900',
    color: '#34d399',
    svgPath: `<svg viewBox="0 0 320 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 70 Q60 40 100 70 Q140 100 180 70 Q220 40 260 70 Q280 80 300 70" stroke="#34d399" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M20 80 Q60 50 100 80 Q140 110 180 80 Q220 50 260 80 Q280 90 300 80" stroke="#6ee7b7" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.5"/>
      <circle cx="100" cy="70" r="12" stroke="#34d399" stroke-width="1.5" fill="#065f46" fill-opacity="0.5"/>
      <circle cx="200" cy="70" r="8" stroke="#34d399" stroke-width="1.5" fill="#065f46" fill-opacity="0.5"/>
      <path d="M95 55 L95 40 M105 55 L105 40" stroke="#6ee7b7" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M93 40 L107 40" stroke="#34d399" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
  },
  'loc-dau-thuy-luc': {
    gradient: 'from-purple-950 via-indigo-900 to-slate-900',
    color: '#a78bfa',
    svgPath: `<svg viewBox="0 0 320 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="100" y="20" width="40" height="100" rx="8" stroke="#a78bfa" stroke-width="1.5" fill="#4c1d95" fill-opacity="0.4"/>
      <path d="M120 30 L120 110" stroke="#c4b5fd" stroke-width="1" stroke-dasharray="4 3"/>
      <rect x="108" y="45" width="24" height="15" rx="3" fill="#7c3aed" fill-opacity="0.6" stroke="#a78bfa" stroke-width="1"/>
      <rect x="108" y="70" width="24" height="15" rx="3" fill="#7c3aed" fill-opacity="0.6" stroke="#a78bfa" stroke-width="1"/>
      <rect x="108" y="95" width="24" height="8" rx="2" fill="#a78bfa" fill-opacity="0.4" stroke="#c4b5fd" stroke-width="1"/>
      <path d="M60 70 L100 70 M140 70 L180 70" stroke="#a78bfa" stroke-width="2" stroke-linecap="round"/>
      <path d="M50 60 L60 70 L50 80" stroke="#c4b5fd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M190 60 L180 70 L190 80" stroke="#c4b5fd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <circle cx="250" cy="70" r="25" stroke="#a78bfa" stroke-width="1.5" fill="#4c1d95" fill-opacity="0.3" stroke-dasharray="5 3"/>
      <path d="M240 70 L248 78 L262 62" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>`,
  },
  'kiem-tra-do-ban-dau': {
    gradient: 'from-amber-950 via-orange-900 to-slate-900',
    color: '#fbbf24',
    svgPath: `<svg viewBox="0 0 320 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="30" width="100" height="80" rx="8" stroke="#fbbf24" stroke-width="1.5" fill="#78350f" fill-opacity="0.3"/>
      <path d="M35 100 L35 55 L55 70 L75 45 L95 80 L105 60" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <circle cx="55" cy="70" r="3" fill="#fbbf24"/>
      <circle cx="75" cy="45" r="3" fill="#fbbf24"/>
      <circle cx="95" cy="80" r="3" fill="#fbbf24"/>
      <circle cx="165" cy="70" r="40" stroke="#fbbf24" stroke-width="1.5" fill="#78350f" fill-opacity="0.2"/>
      <circle cx="165" cy="70" r="5" fill="#fbbf24"/>
      <path d="M165 30 L165 45 M165 95 L165 110 M125 70 L140 70 M190 70 L205 70" stroke="#fcd34d" stroke-width="1.5" stroke-linecap="round"/>
      <text x="148" y="74" fill="#fbbf24" font-size="10" font-family="monospace">ISO</text>
      <path d="M240 40 L280 40 M240 55 L270 55 M240 70 L280 70 M240 85 L260 85 M240 100 L275 100" stroke="#fbbf24" stroke-width="1" stroke-linecap="round"/>
    </svg>`,
  },
  'sua-chua-binh-tich-ap': {
    gradient: 'from-rose-950 via-red-900 to-slate-900',
    color: '#fb7185',
    svgPath: `<svg viewBox="0 0 320 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="120" y="20" width="50" height="100" rx="25" stroke="#fb7185" stroke-width="2" fill="#881337" fill-opacity="0.3"/>
      <rect x="130" y="50" width="30" height="50" rx="4" fill="#be123c" fill-opacity="0.4"/>
      <path d="M145 20 L145 15 M155 20 L155 15" stroke="#fb7185" stroke-width="2" stroke-linecap="round"/>
      <path d="M143 15 L157 15" stroke="#fda4af" stroke-width="2" stroke-linecap="round"/>
      <path d="M90 70 L120 70 M170 70 L200 70" stroke="#fb7185" stroke-width="2" stroke-linecap="round"/>
      <circle cx="80" cy="70" r="10" stroke="#fb7185" stroke-width="1.5" fill="#881337" fill-opacity="0.4"/>
      <circle cx="210" cy="70" r="10" stroke="#fb7185" stroke-width="1.5" fill="#881337" fill-opacity="0.4"/>
      <path d="M40 50 L40 90 M240 50 L240 90" stroke="#fda4af" stroke-width="1" stroke-dasharray="3 3"/>
      <text x="30" y="110" fill="#fb7185" font-size="9" font-family="monospace">N₂</text>
      <text x="235" y="110" fill="#fb7185" font-size="9" font-family="monospace">350bar</text>
    </svg>`,
  },
};

const defaultVisual = {
  gradient: 'from-slate-900 via-blue-900 to-slate-800',
  color: '#60a5fa',
  svgPath: '',
};

export const EngineeringServices: React.FC = () => {
  const { setCurrentPage } = useApp();
  const [selectedServiceId, setSelectedServiceId] = useState<string>(servicesData[0].id);
  const activeService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];
  const visual = serviceVisuals[activeService.id] || defaultVisual;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-7 gap-2">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-600 block mb-1">DỊCH VỤ KỸ THUẬT</span>
            <h2 className="text-xl font-bold text-corporate-dark">Chế Tạo & Bảo Trì Thủy Lực</h2>
          </div>
          <button
            onClick={() => setCurrentPage('services')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center space-x-1 whitespace-nowrap"
          >
            <span>Xem tất cả dịch vụ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: service list */}
          <div className="lg:col-span-4 space-y-1">
            {servicesData.map((service, index) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`px-3 py-2.5 rounded-xl cursor-pointer transition-colors flex items-center justify-between group ${
                    isSelected ? 'bg-brand-50 text-brand-900' : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <span className={`text-xs font-bold font-mono shrink-0 w-5 ${isSelected ? 'text-brand-600' : 'text-slate-400'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <h4 className={`text-xs font-semibold truncate ${isSelected ? 'text-brand-800' : 'text-slate-800'}`}>{service.title}</h4>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">{service.tagline}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-brand-500' : 'text-slate-300'}`} />
                </div>
              );
            })}

            {/* Hotline */}
            <div className="mt-3 px-3 py-3 bg-orange-50 rounded-xl">
              <p className="text-xs text-slate-600 mb-1.5">Cần khảo sát hiện trường?</p>
              <a
                href={`tel:${companyData.contact.hotline247Raw}`}
                className="font-bold text-sm text-industrial-orange flex items-center space-x-1.5"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{companyData.contact.hotline247}</span>
              </a>
            </div>
          </div>

          {/* RIGHT: detail */}
          <div className="lg:col-span-8">
            {/* AI-style gradient banner */}
            <div className={`relative rounded-2xl overflow-hidden mb-4 bg-gradient-to-br ${visual.gradient} p-6`} style={{ minHeight: '160px' }}>
              {/* Inline SVG art */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                dangerouslySetInnerHTML={{ __html: visual.svgPath }}
              />
              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10">
                <span className="text-[10px] font-mono uppercase tracking-wider block mb-1" style={{ color: visual.color }}>
                  QUY TRÌNH TIÊU CHUẨN CHÂU ÂU
                </span>
                <h3 className="text-white font-bold text-lg leading-snug drop-shadow max-w-xs">{activeService.title}</h3>
                <p className="text-white/70 text-xs mt-1 max-w-sm line-clamp-2">{activeService.tagline}</p>
              </div>
            </div>

            {/* Workflow steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeService.workflow.slice(0, 4).map((step) => (
                <div key={step.step} className="flex items-start space-x-2.5 p-3 bg-slate-50 rounded-xl">
                  <span className="text-sm font-bold text-industrial-orange font-mono shrink-0">{step.step}.</span>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">{step.title}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Specs */}
            <div className="flex flex-wrap gap-2 mt-3">
              {activeService.specifications.map(spec => (
                <div key={spec.label} className="px-3 py-1.5 bg-white rounded-lg text-center">
                  <span className="block text-[10px] text-slate-400">{spec.label}</span>
                  <span className="text-xs font-bold text-brand-600">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setCurrentPage('services')}
                className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs rounded-lg flex items-center space-x-1.5 transition-colors"
              >
                <span>Chi tiết quy trình</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="px-4 py-2 text-slate-700 hover:text-brand-600 font-semibold text-xs rounded-lg transition-colors"
              >
                Yêu cầu báo giá →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
