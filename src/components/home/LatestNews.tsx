import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { newsArticles } from '../../data/news';
import { useApp } from '../../context/AppContext';

// Unsplash images for news
const newsBanners = [
  'https://images.unsplash.com/photo-1581093583449-8255a7d46e66?w=600&q=80',
  'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
];

export const LatestNews: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <section className="py-10 bg-slate-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-600 block mb-1">TIN TỨC & KỸ THUẬT</span>
            <h2 className="text-xl font-bold text-corporate-dark">Cập Nhật Công Nghệ & Dự Án</h2>
          </div>
          <button
            onClick={() => setCurrentPage('news')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center space-x-1"
          >
            <span>Tất cả bài viết</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {newsArticles.slice(0, 3).map((article, i) => (
            <div
              key={article.id}
              onClick={() => setCurrentPage('news')}
              className="group bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={newsBanners[i] || newsBanners[0]}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-industrial-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center space-x-1.5 text-[11px] text-slate-400 mb-2">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-800 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug mb-1.5">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{article.summary}</p>
                <div className="mt-3 flex items-center space-x-1 text-xs font-semibold text-brand-600 group-hover:text-brand-700">
                  <span>Đọc tiếp</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
