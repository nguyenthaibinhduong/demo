import React from 'react';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  FileText, 
  ChevronRight
} from 'lucide-react';
import { newsArticles } from '../../data/news';
import { useApp } from '../../context/AppContext';

export const LatestNews: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <section className="py-12 bg-slate-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1">
              <FileText className="w-3.5 h-3.5 text-industrial-orange" />
              <span>TIN TỨC & KỸ THUẬT</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-corporate-dark">
              Cập Nhật Công Nghệ & Hoạt Động Doanh Nghiệp
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-xl">
              Các bài viết chuyên sâu về kỹ thuật thủy lực, tin tức hàng dự án và hoạt động của Công nghệ Quỳnh.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('news')}
            className="inline-flex items-center space-x-1 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
          >
            <span>Xem tất cả bài viết</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* News Grid - Clean, Flat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {newsArticles.slice(0, 3).map((article) => (
            <div
              key={article.id}
              onClick={() => setCurrentPage('news')}
              className="group bg-white rounded-xl border border-slate-100 hover:border-slate-300 overflow-hidden cursor-pointer transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] bg-slate-50/50 overflow-hidden flex items-center justify-center p-3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                    onError={(e) => {
                      e.currentTarget.src = "https://www.quynh.vn/images/2025/28year_quynh_engineering.jpeg";
                    }}
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white text-slate-800 px-2 py-0.5 rounded text-[10px] font-semibold">
                    {article.category}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-4 space-y-2">
                  <div className="flex items-center space-x-2 text-[10px] text-slate-400">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{article.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Read more */}
              <div className="p-4 pt-0 flex items-center space-x-1 text-xs font-semibold text-brand-600 group-hover:text-brand-700">
                <span>Đọc tiếp</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
