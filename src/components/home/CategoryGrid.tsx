import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

// Visually distinctive gradient backgrounds per category
const categories = [
  {
    id: 'hydraulic',
    title: 'Thiết Bị Thủy Lực',
    sub: 'Bơm · Van · Xi lanh · Bình tích áp',
    tag: 'Trọng tâm',
    tagColor: 'bg-brand-600',
    gradient: 'from-slate-900 via-blue-950 to-slate-800',
    accentColor: 'text-blue-400',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full opacity-20">
        <circle cx="40" cy="40" r="30" stroke="#60a5fa" strokeWidth="2"/>
        <circle cx="40" cy="40" r="18" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 3"/>
        <path d="M40 10 L40 30 M40 50 L40 70 M10 40 L30 40 M50 40 L70 40" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round"/>
        <rect x="30" y="30" width="20" height="20" rx="4" fill="#1e40af" stroke="#60a5fa" strokeWidth="1.5"/>
        <circle cx="40" cy="40" r="4" fill="#60a5fa"/>
      </svg>
    ),
    items: ['Bơm Settima / Rexroth', 'Van tỉ lệ & servo', 'Bình tích áp Hydac', 'Lọc dầu áp cao'],
  },
  {
    id: 'pneumatic',
    title: 'Khí Nén & Tự Động Hóa',
    sub: 'Van · Xi lanh · FRL · Cảm biến',
    tag: 'Emerson Partner',
    tagColor: 'bg-emerald-600',
    gradient: 'from-slate-900 via-emerald-950 to-slate-900',
    accentColor: 'text-emerald-400',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full opacity-20">
        <rect x="12" y="28" width="56" height="24" rx="4" stroke="#34d399" strokeWidth="1.5"/>
        <rect x="20" y="34" width="8" height="12" rx="2" fill="#065f46" stroke="#34d399" strokeWidth="1"/>
        <rect x="36" y="34" width="8" height="12" rx="2" fill="#065f46" stroke="#34d399" strokeWidth="1"/>
        <rect x="52" y="34" width="8" height="12" rx="2" fill="#065f46" stroke="#34d399" strokeWidth="1"/>
        <path d="M24 16 L24 28 M40 16 L40 28 M56 16 L56 28 M24 52 L24 64 M40 52 L40 64 M56 52 L56 64" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="14" r="3" fill="#34d399"/>
        <circle cx="40" cy="14" r="3" fill="#34d399"/>
        <circle cx="56" cy="14" r="3" fill="#34d399"/>
      </svg>
    ),
    items: ['Van điện từ ASCO', 'Xi lanh khí nén ISO', 'Bộ lọc FRL', 'Cảm biến dòng khí'],
  },
  {
    id: 'power-pack',
    title: 'Chế Tạo Trạm Nguồn',
    sub: 'Thiết kế 3D · Lắp ráp · Thử tải',
    tag: 'Xưởng 500m²',
    tagColor: 'bg-orange-500',
    gradient: 'from-slate-900 via-orange-950 to-slate-900',
    accentColor: 'text-orange-400',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full opacity-20">
        <rect x="16" y="24" width="48" height="36" rx="4" stroke="#fb923c" strokeWidth="1.5"/>
        <rect x="22" y="30" width="14" height="24" rx="2" fill="#7c2d12" stroke="#fb923c" strokeWidth="1"/>
        <rect x="44" y="30" width="14" height="24" rx="2" fill="#7c2d12" stroke="#fb923c" strokeWidth="1"/>
        <path d="M36 30 L44 30" stroke="#fdba74" strokeWidth="2"/>
        <path d="M16 44 L8 44 M64 44 L72 44" stroke="#fb923c" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="40" cy="18" r="5" stroke="#fb923c" strokeWidth="1.5"/>
        <path d="M40 13 L40 8" stroke="#fb923c" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    items: ['Thiết kế 3D HPU', 'Đế van manifold', 'Tủ điều khiển PLC', 'Thử tải theo yêu cầu'],
  },
  {
    id: 'services',
    title: 'Dịch Vụ Bảo Trì',
    sub: 'Súc rửa · Lọc dầu · Đo bẩn · N₂',
    tag: 'Hỗ trợ 24/7',
    tagColor: 'bg-purple-600',
    gradient: 'from-slate-900 via-purple-950 to-slate-900',
    accentColor: 'text-purple-400',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full opacity-20">
        <path d="M40 12 L46 22 L58 22 L49 30 L53 42 L40 35 L27 42 L31 30 L22 22 L34 22 Z" stroke="#c084fc" strokeWidth="1.5" fill="#4c1d95"/>
        <circle cx="40" cy="55" r="14" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="4 2"/>
        <path d="M34 55 L38 59 L46 51" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    items: ['Súc rửa ống flushing', 'Lọc dầu online', 'Đo bẩn ISO 4406', 'Nạp Nitơ N₂'],
  },
];

export const CategoryGrid: React.FC = () => {
  const { setCurrentPage, setSelectedCategory } = useApp();

  const handleClick = (cat: typeof categories[0]) => {
    if (cat.id === 'services') {
      setCurrentPage('services');
    } else {
      setSelectedCategory(cat.id);
      setCurrentPage('products');
    }
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-600 block mb-1">NĂNG LỰC CỐT LÕI</span>
            <h2 className="text-xl font-bold text-corporate-dark">4 Trụ Cột Kỹ Thuật</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {categories.map(cat => (
            <div
              key={cat.id}
              onClick={() => handleClick(cat)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br ${cat.gradient} p-5 flex flex-col justify-between min-h-[220px] sm:min-h-[260px] hover:scale-[1.02] transition-transform duration-300`}
            >
              {/* Background SVG art */}
              <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                <div className="w-36 h-36 sm:w-44 sm:h-44">
                  {cat.icon}
                </div>
              </div>

              {/* Tag */}
              <div className={`relative z-10 self-start ${cat.tagColor} text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-auto`}>
                {cat.tag}
              </div>

              {/* Content */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-white font-bold text-sm leading-tight mb-0.5">{cat.title}</h3>
                <p className={`text-xs mb-3 ${cat.accentColor} font-medium`}>{cat.sub}</p>
                <div className="space-y-0.5 mb-3">
                  {cat.items.slice(0, 3).map(item => (
                    <div key={item} className="flex items-center space-x-1.5 text-white/70 text-[11px]">
                      <span className="w-1 h-1 rounded-full bg-white/50 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-1 text-white/90 text-xs font-semibold group-hover:text-white">
                  <span>Xem chi tiết</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
