import React, { useState } from 'react';
import { 
  FileText, 
  Calendar, 
  Clock, 
  ChevronRight, 
  X
} from 'lucide-react';
import { newsArticles, NewsArticle } from '../data/news';

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const categories = [
    { id: 'all', label: 'Tất Cả Tin Tức' },
    { id: 'Hoạt động công ty', label: 'Hoạt Động Công Ty' },
    { id: 'Kỹ thuật chuyên sâu', label: 'Kỹ Thuật Chuyên Sâu' },
    { id: 'Sản phẩm mới', label: 'Sản Phẩm & Thiết Bị Mới' }
  ];

  const filtered = newsArticles.filter(a => {
    if (selectedCategory === 'all') return true;
    return a.category === selectedCategory;
  });

  return (
    <div className="bg-[#F8FAFC] text-[#172033] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-600 uppercase tracking-widest">
            <FileText className="w-4 h-4 text-industrial-orange" />
            <span>TIN TỨC & KỸ THUẬT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-[#172033]">
            Kiến Thức Thủy Lực & Bản Tin Quỳnh Engineering
          </h1>

          <p className="text-xs sm:text-sm text-[#64748B]">
            Tổng hợp các bài viết chuyên môn về bảo trì hệ thống, cẩm nang chọn bơm van và thông tin hàng dự án chính ngạch.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === c.id
                  ? 'bg-brand-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:text-brand-600 border border-[#E5EAF0]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="group bg-white rounded-3xl border border-[#E5EAF0] hover:border-brand-400 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] bg-slate-50 flex items-center justify-center p-4 border-b border-[#E5EAF0]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://www.quynh.vn/images/2025/28year_quynh_engineering.jpeg";
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-brand-700 border border-slate-200 shadow-xs">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-3 text-[11px] text-slate-500">
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

                  <h3 className="text-base font-bold text-[#172033] group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#64748B] line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center space-x-1 text-xs font-bold text-brand-600 group-hover:text-brand-700">
                <span>Xem toàn văn bài viết</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Read Article Modal */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div 
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
              onClick={() => setActiveArticle(null)}
            />

            <div className="min-h-full flex items-center justify-center p-4">
              <div className="relative bg-white border border-[#E5EAF0] rounded-3xl max-w-2xl w-full shadow-2xl p-6 sm:p-8 z-10 space-y-6">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-industrial-orange">
                    <span>{activeArticle.category}</span>
                    <span>•</span>
                    <span className="text-slate-500">{activeArticle.date}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-[#172033] leading-snug">
                    {activeArticle.title}
                  </h2>
                </div>

                <div className="aspect-[16/9] bg-slate-50 rounded-2xl p-4 flex items-center justify-center border border-[#E5EAF0]">
                  <img
                    src={activeArticle.image}
                    alt={activeArticle.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                  <p className="font-semibold text-[#172033]">
                    {activeArticle.summary}
                  </p>
                  <p>
                    {activeArticle.content}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5EAF0] flex justify-end">
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl border border-slate-200 transition-colors"
                  >
                    Đóng bài viết
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
