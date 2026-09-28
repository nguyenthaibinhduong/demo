import React, { useState } from 'react';
import { 
  Factory, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  ExternalLink 
} from 'lucide-react';
import { solutionsData } from '../../data/solutions';
import { useApp } from '../../context/AppContext';

export const IndustrySolutions: React.FC = () => {
  const { setCurrentPage } = useApp();
  const [activeSolutionId, setActiveSolutionId] = useState<string>(solutionsData[0].id);

  const activeSolution = solutionsData.find(s => s.id === activeSolutionId) || solutionsData[0];

  return (
    <section className="py-12 bg-slate-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1">
              <Factory className="w-3.5 h-3.5 text-industrial-orange" />
              <span>GIẢI PHÁP NGÀNH NGHỀ TRỌNG ĐIỂM</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-corporate-dark">
              Tối Ưu Hiệu Suất Vận Hành Cho Từng Ngành Công Nghiệp
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-2xl">
              Hơn 500 dự án lớn trong các ngành Dầu khí, Xi măng, Thủy điện, Luyện kim và Chế biến thực phẩm đã được Quỳnh Engineering đồng hành thiết kế và cung cấp giải pháp.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('solutions')}
            className="inline-flex items-center space-x-1 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
          >
            <span>Xem tất cả giải pháp ngành</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2-Column Split: Left Active Case Preview, Right Interactive List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: Active Solution Visual Showcase (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3.5">
              {/* Image Preview Box */}
              <div className="relative aspect-[16/9] rounded-xl bg-slate-50 overflow-hidden flex items-center justify-center p-3">
                <img
                  src={activeSolution.image}
                  alt={activeSolution.title}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://www.quynh.vn/images/2025/28year_quynh_engineering.jpeg";
                  }}
                />
                <div className="absolute top-2.5 left-2.5 bg-white/95 text-brand-700 font-semibold text-[10px] px-2.5 py-0.5 rounded-full">
                  {activeSolution.industry}
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-corporate-dark leading-snug">
                  {activeSolution.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {activeSolution.summary}
                </p>
              </div>

              {/* Key Results */}
              <div className="p-3 bg-emerald-50 rounded-xl space-y-1.5">
                <span className="text-[10px] font-semibold text-emerald-900 uppercase tracking-wider block">
                  Hiệu quả kỹ thuật đo lường thực tế:
                </span>
                {activeSolution.keyResults.map((res, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-emerald-800 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1 pt-0.5">
                {activeSolution.technologies.map((t) => (
                  <span key={t} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Case Study CTA */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setCurrentPage('solutions')}
                className="inline-flex items-center space-x-1 text-xs font-semibold text-brand-600 hover:text-brand-700"
              >
                <span>Xem chi tiết sơ đồ kỹ thuật</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setCurrentPage('contact')}
                className="px-3.5 py-1.5 bg-industrial-orange hover:bg-orange-600 text-white font-semibold text-xs rounded-lg transition-colors"
              >
                Tư Vấn Giải Pháp
              </button>
            </div>
          </div>

          {/* RIGHT: Solution Items List (6 cols) */}
          <div className="lg:col-span-6 space-y-2">
            {solutionsData.map((sol, index) => {
              const isActive = sol.id === activeSolutionId;

              return (
                <div
                  key={sol.id}
                  onClick={() => setActiveSolutionId(sol.id)}
                  className={`p-4 rounded-xl transition-colors cursor-pointer relative group ${
                    isActive
                      ? 'bg-brand-50 text-brand-900'
                      : 'bg-white hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold font-mono text-xs shrink-0 transition-colors ${
                      isActive
                        ? 'bg-brand-600 text-white'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-brand-50 group-hover:text-brand-600'
                    }`}>
                      0{index + 1}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                          isActive ? 'text-brand-700' : 'text-slate-400'
                        }`}>
                          {sol.industry}
                        </span>

                        {isActive && (
                          <span className="text-[10px] bg-industrial-orange text-white font-bold px-2 py-0.5 rounded-full">
                            Đang xem
                          </span>
                        )}
                      </div>

                      <h4 className={`text-xs sm:text-sm font-semibold leading-snug transition-colors ${
                        isActive ? 'text-brand-900' : 'text-slate-800 group-hover:text-brand-600'
                      }`}>
                        {sol.title}
                      </h4>

                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {sol.summary}
                      </p>
                    </div>
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
