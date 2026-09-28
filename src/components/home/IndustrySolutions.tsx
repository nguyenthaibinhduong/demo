import React, { useState } from 'react';
import { Factory, ArrowRight, CheckCircle2 } from 'lucide-react';
import { solutionsData } from '../../data/solutions';
import { useApp } from '../../context/AppContext';

// Real AI industrial images for solutions
const industryAiImages: Record<string, { image: string; tag: string }> = {
  'Sản Xuất Lốp Xe & Ô Tô': {
    image: '/hero3.jpg',
    tag: 'TỰ ĐỘNG HÓA KHÍ NÉN',
  },
  'Xi Măng & Khoáng Sản': {
    image: '/hero1.jpg',
    tag: 'AN TOÀN BĂNG TẢI NẶNG',
  },
  'Thủy Điện & Hồ Đập': {
    image: '/bgmain.jpg',
    tag: 'CỬA VAN & TRẠM NGUỒN HPU',
  },
  'Luyện Kim & Cán Thép': {
    image: '/hero2.jpg',
    tag: 'MÔI TRƯỜNG CỰC ĐOAN',
  },
};

export const IndustrySolutions: React.FC = () => {
  const { setCurrentPage } = useApp();
  const [activeSolutionId, setActiveSolutionId] = useState<string>(solutionsData[0].id);
  const activeSolution = solutionsData.find(s => s.id === activeSolutionId) || solutionsData[0];
  const visual = industryAiImages[activeSolution.industry] || {
    image: '/hero1.jpg',
    tag: 'GIẢI PHÁP NGÀNH',
  };

  return (
    <section className="py-12 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - concise */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
          <div>
            <span className="text-[11px] uppercase tracking-widest font-bold text-brand-600 block mb-1">
              GIẢI PHÁP NGÀNH TRỌNG ĐIỂM
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-corporate-dark">
              Tối Ưu Vận Hành Cho Từng Ngành Công Nghiệp
            </h2>
          </div>
          <button
            onClick={() => setCurrentPage('solutions')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-800 flex items-center space-x-1 whitespace-nowrap self-start md:self-end"
          >
            <span>Tất cả giải pháp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: Visual showcase with real AI images */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-4 sm:p-5 shadow-sm">
            {/* AI Image banner */}
            <div className="relative rounded-xl overflow-hidden aspect-[16/8] sm:aspect-[16/7] mb-4 bg-slate-900">
              <img
                key={activeSolutionId}
                src={visual.image}
                alt={activeSolution.title}
                className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute top-3 left-3 bg-industrial-orange text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                {visual.tag}
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-semibold text-blue-300 block mb-0.5">
                  {activeSolution.industry}
                </span>
                <h3 className="text-white font-bold text-base sm:text-lg leading-tight drop-shadow">
                  {activeSolution.title}
                </h3>
              </div>
            </div>

            {/* Concise summary */}
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              {activeSolution.summary}
            </p>

            {/* Key results pills */}
            <div className="flex flex-wrap gap-2 mb-3">
              {activeSolution.keyResults.map((res, i) => (
                <div key={i} className="flex items-center space-x-1.5 bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-lg text-[11px] font-medium">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>{res}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <button
                onClick={() => setCurrentPage('solutions')}
                className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs rounded-lg flex items-center space-x-1.5 transition-colors"
              >
                <span>Xem giải pháp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setCurrentPage('contact')}
                className="text-xs font-semibold text-slate-700 hover:text-brand-600 transition-colors"
              >
                Tư vấn dự án →
              </button>
            </div>
          </div>

          {/* RIGHT: Selectable solutions list */}
          <div className="lg:col-span-5 space-y-2">
            {solutionsData.map((sol, index) => {
              const isActive = sol.id === activeSolutionId;
              return (
                <div
                  key={sol.id}
                  onClick={() => setActiveSolutionId(sol.id)}
                  className={`p-3.5 rounded-xl cursor-pointer transition-all duration-200 flex items-start space-x-3 group ${
                    isActive
                      ? 'bg-white shadow-sm border border-brand-200'
                      : 'bg-white/60 hover:bg-white text-slate-700'
                  }`}
                >
                  <span className={`text-xs font-bold font-mono shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                    isActive ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    0{index + 1}
                  </span>
                  <div className="min-w-0">
                    <span className={`text-[10px] font-bold uppercase tracking-wider block mb-0.5 ${
                      isActive ? 'text-industrial-orange' : 'text-slate-400'
                    }`}>
                      {sol.industry}
                    </span>
                    <h4 className={`text-xs sm:text-sm font-semibold leading-snug transition-colors ${
                      isActive ? 'text-brand-800' : 'text-slate-800 group-hover:text-brand-600'
                    }`}>
                      {sol.title}
                    </h4>
                    {isActive && (
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                        {sol.summary}
                      </p>
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
