import React, { useState } from 'react';
import { Factory, ArrowRight, CheckCircle2 } from 'lucide-react';
import { solutionsData } from '../../data/solutions';
import { useApp } from '../../context/AppContext';

// AI-themed industrial images per industry
const industryBanners: Record<string, string> = {
  'Sản Xuất Lốp Xe & Ô Tô': 'https://images.unsplash.com/photo-1519642918688-7e43b19245d8?w=700&q=80',
  'Xi Măng & Khoáng Sản': 'https://images.unsplash.com/photo-1581091877018-dac6a371d50f?w=700&q=80',
  'Thủy Điện & Hồ Đập': 'https://images.unsplash.com/photo-1548013146-72479768bada?w=700&q=80',
  'Luyện Kim & Cán Thép': 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
};
const fallback = 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=700&q=80';

export const IndustrySolutions: React.FC = () => {
  const { setCurrentPage } = useApp();
  const [activeSolutionId, setActiveSolutionId] = useState<string>(solutionsData[0].id);
  const activeSolution = solutionsData.find(s => s.id === activeSolutionId) || solutionsData[0];
  const banner = industryBanners[activeSolution.industry] || fallback;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-7 gap-2">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-industrial-orange block mb-1">GIẢI PHÁP NGÀNH</span>
            <h2 className="text-xl font-bold text-corporate-dark">Tối Ưu Vận Hành Cho Từng Ngành Công Nghiệp</h2>
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
            {/* Banner image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
              <img
                key={activeSolutionId}
                src={banner}
                alt={activeSolution.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

              {/* Industry tag */}
              <div className="absolute top-3 left-3 bg-industrial-orange text-white text-xs font-bold px-2.5 py-1 rounded-full">
                {activeSolution.industry}
              </div>

              {/* Title overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-base leading-snug drop-shadow">{activeSolution.title}</h3>
                <p className="text-white/80 text-xs mt-1 line-clamp-2">{activeSolution.summary}</p>
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
              return (
                <div
                  key={sol.id}
                  onClick={() => setActiveSolutionId(sol.id)}
                  className={`p-3.5 rounded-xl cursor-pointer transition-colors flex items-start space-x-3 group ${
                    isActive ? 'bg-brand-50' : 'hover:bg-slate-50'
                  }`}
                >
                  <span className={`text-xs font-bold font-mono shrink-0 mt-0.5 w-5 ${isActive ? 'text-brand-600' : 'text-slate-400'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <span className={`text-[10px] font-semibold uppercase block mb-0.5 ${isActive ? 'text-industrial-orange' : 'text-slate-400'}`}>
                      {sol.industry}
                    </span>
                    <h4 className={`text-xs font-semibold leading-snug ${isActive ? 'text-brand-800' : 'text-slate-700 group-hover:text-brand-600'}`}>
                      {sol.title}
                    </h4>
                    {isActive && (
                      <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{sol.summary}</p>
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
