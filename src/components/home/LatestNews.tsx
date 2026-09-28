import React from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { newsArticles } from '../../data/news';
import { useApp } from '../../context/AppContext';

// Real AI industrial images for news articles
const newsAiImages = [
  '/hero1.jpg', // Settima Continuum pump
  '/hero3.jpg', // Emerson Aventics pneumatic automation
  '/hero2.jpg', // Quỳnh engineering 500m² workshop
];

export const LatestNews: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="text-[11px] uppercase tracking-widest font-bold text-brand-600 block mb-1">
              TIN TỨC & KỸ THUẬT
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-corporate-dark">
              Cập Nhật Công Nghệ & Hoạt Động Doanh Nghiệp
            </h2>
          </div>
          <button
            onClick={() => setCurrentPage('news')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-800 flex items-center space-x-1"
          >
            <span>Tất cả bài viết</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {newsArticles.slice(0, 3).map((article, i) => (
            <div
              key={article.id}
              onClick={() => setCurrentPage('news')}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-brand-500 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* AI image thumbnail */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  <img
                    src={newsAiImages[i] || newsAiImages[0]}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                  {/* Category pill */}
                  <div className="absolute top-3 left-3 bg-brand-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center space-x-2 text-[11px] text-slate-400 mb-2">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug mb-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Read more footer */}
              <div className="p-4 sm:p-5 pt-0 flex items-center space-x-1 text-xs font-semibold text-brand-600 group-hover:text-brand-800">
                <span>Đọc bài viết</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
