import React from 'react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { newsArticles } from '../../data/news';
import { useApp } from '../../context/AppContext';

// CSS gradient visuals per news card — no external images
const newsVisuals = [
  {
    gradient: 'from-blue-900 to-slate-900',
    accentColor: '#60a5fa',
    svgContent: `<svg viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%;opacity:0.2">
      <path d="M20 60 L60 30 L100 50 L140 20 L180 45 L220 25 L260 40" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M20 80 L60 50 L100 70 L140 40 L180 65 L220 45 L260 60" stroke="#93c5fd" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.5"/>
      <circle cx="100" cy="50" r="5" fill="#60a5fa"/>
      <circle cx="180" cy="45" r="5" fill="#60a5fa"/>
      <circle cx="260" cy="40" r="5" fill="#60a5fa"/>
    </svg>`,
  },
  {
    gradient: 'from-emerald-900 to-slate-900',
    accentColor: '#34d399',
    svgContent: `<svg viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%;opacity:0.2">
      <rect x="20" y="30" width="50" height="60" rx="6" stroke="#34d399" stroke-width="1.5" fill="#065f46" fill-opacity="0.3"/>
      <rect x="90" y="20" width="50" height="80" rx="6" stroke="#34d399" stroke-width="1.5" fill="#065f46" fill-opacity="0.3"/>
      <rect x="160" y="40" width="50" height="50" rx="6" stroke="#34d399" stroke-width="1.5" fill="#065f46" fill-opacity="0.3"/>
      <rect x="230" y="25" width="40" height="70" rx="6" stroke="#34d399" stroke-width="1.5" fill="#065f46" fill-opacity="0.3"/>
    </svg>`,
  },
  {
    gradient: 'from-purple-900 to-slate-900',
    accentColor: '#a78bfa',
    svgContent: `<svg viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%;opacity:0.2">
      <circle cx="80" cy="60" r="40" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="6 4" fill="none"/>
      <circle cx="80" cy="60" r="20" stroke="#c4b5fd" stroke-width="1" fill="none"/>
      <circle cx="80" cy="60" r="6" fill="#7c3aed"/>
      <path d="M120 60 L200 60 M170 40 L200 60 L170 80" stroke="#a78bfa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <circle cx="230" cy="60" r="25" stroke="#a78bfa" stroke-width="1" stroke-dasharray="4 3" fill="none"/>
    </svg>`,
  },
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
          {newsArticles.slice(0, 3).map((article, i) => {
            const vis = newsVisuals[i] || newsVisuals[0];
            return (
              <div
                key={article.id}
                onClick={() => setCurrentPage('news')}
                className="group bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              >
                {/* Gradient art header */}
                <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${vis.gradient}`}>
                  {/* SVG art */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    dangerouslySetInnerHTML={{ __html: vis.svgContent }}
                  />
                  {/* Subtle bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />

                  {/* Category pill */}
                  <div className="absolute top-3 left-3 bg-industrial-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {article.category}
                  </div>

                  {/* Large accent number */}
                  <div
                    className="absolute right-4 bottom-2 text-6xl font-black leading-none select-none"
                    style={{ color: vis.accentColor, opacity: 0.15 }}
                  >
                    {String(i + 1).padStart(2, '0')}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
