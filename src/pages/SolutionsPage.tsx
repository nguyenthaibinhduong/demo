import React from 'react';
import { 
  Factory, 
  CheckCircle2
} from 'lucide-react';
import { solutionsData } from '../data/solutions';
import { useApp } from '../context/AppContext';

export const SolutionsPage: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <div className="bg-[#F8FAFC] text-[#172033] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-700 shadow-xs">
            <Factory className="w-4 h-4 text-industrial-orange" />
            <span>GIẢI PHÁP KỸ THUẬT THEO NGÀNH CÔNG NGHIỆP</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#172033] leading-tight">
            Giải Pháp Tự Động Hóa & <br />
            <span className="text-brand-600">
              Hệ Thống Truyền Động Chuyên Sâu
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed text-justify sm:text-center">
            Từ các nhà máy sản xuất lốp xe ô tô hiện đại, hệ thống băng tải clinker xi măng bụi bặm đến trạm nguồn cửa van nhà máy thủy điện - Quỳnh Engineering cung cấp giải pháp kỹ thuật tối ưu hóa độ bền, an toàn tuyệt đối và tiết kiệm năng lượng.
          </p>
        </div>

        {/* 4 Case Studies */}
        <div className="space-y-12">
          {solutionsData.map((sol, index) => (
            <div 
              key={sol.id}
              id={sol.id}
              className="bg-white border border-[#E5EAF0] rounded-3xl p-6 sm:p-10 space-y-6 hover:border-brand-400 transition-colors shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5EAF0] pb-4">
                <span className="text-xs font-bold text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full w-fit">
                  {sol.industry}
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">
                  CASE STUDY #{index + 1}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-[#172033]">
                {sol.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {sol.summary}
              </p>

              {/* Challenge vs Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-rose-50/70 p-5 rounded-2xl border border-rose-200 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-rose-700 uppercase tracking-wider">
                    <span>Thách Thức Kỹ Thuật Ban Đầu:</span>
                  </div>
                  <p className="text-xs text-rose-950 leading-relaxed">
                    {sol.challenge}
                  </p>
                </div>

                <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    <span>Giải Pháp Kỹ Thuật Của Quỳnh Engineering:</span>
                  </div>
                  <p className="text-xs text-emerald-950 leading-relaxed">
                    {sol.solution}
                  </p>
                </div>
              </div>

              {/* Technologies & Results */}
              <div className="pt-4 border-t border-[#E5EAF0] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Tech Tags (6 cols) */}
                <div className="md:col-span-6 space-y-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Thiết bị & công nghệ tích hợp:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {sol.technologies.map(tech => (
                      <span key={tech} className="text-xs bg-slate-100 text-slate-800 px-3 py-1 rounded-lg border border-slate-200 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results (6 cols) */}
                <div className="md:col-span-6 space-y-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Kết quả chứng thực:
                  </span>
                  <div className="space-y-1.5">
                    {sol.keyResults.map((res, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-emerald-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="bg-gradient-to-r from-brand-50 via-white to-amber-50/50 p-8 rounded-3xl border border-brand-200 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-sm">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#172033]">
              Doanh Nghiệp Của Bạn Cần Giải Pháp Tương Tự?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Liên hệ với chuyên gia ứng dụng của Quỳnh Engineering để được tư vấn thiết kế hệ thống tương thích 100% với nhà máy của bạn.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('contact')}
            className="px-6 py-3 bg-industrial-orange hover:bg-orange-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all active:scale-95"
          >
            Tư Vấn Giải Pháp Trực Tiếp
          </button>
        </div>
      </div>
    </div>
  );
};
