import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

// 4 Core pillars with AI industrial images
const categories = [
  {
    id: 'hydraulic',
    title: 'Thiết Bị Thủy Lực',
    sub: 'Bơm · Van · Xi lanh · Bình tích áp',
    tag: 'Trọng tâm',
    tagColor: 'bg-brand-600',
    image: '/hero1.jpg',
    items: ['Bơm Settima / Rexroth', 'Van tỉ lệ & servo', 'Bình tích áp Hydac', 'Lọc dầu áp cao'],
  },
  {
    id: 'pneumatic',
    title: 'Khí Nén & Tự Động Hóa',
    sub: 'Van · Xi lanh · FRL · Cảm biến',
    tag: 'Emerson Partner',
    tagColor: 'bg-emerald-600',
    image: '/hero3.jpg',
    items: ['Van điện từ ASCO', 'Xi lanh khí nén ISO', 'Bộ lọc FRL', 'Cảm biến dòng khí'],
  },
  {
    id: 'power-pack',
    title: 'Chế Tạo Trạm Nguồn',
    sub: 'Thiết kế 3D · Lắp ráp · Thử tải',
    tag: 'Xưởng 500m²',
    tagColor: 'bg-industrial-orange',
    image: '/hero2.jpg',
    items: ['Thiết kế 3D HPU', 'Đế van manifold', 'Tủ điều khiển PLC', 'Thử tải theo yêu cầu'],
  },
  {
    id: 'services',
    title: 'Dịch Vụ Bảo Trì',
    sub: 'Súc rửa · Lọc dầu · Đo bẩn · N₂',
    tag: 'Hỗ trợ 24/7',
    tagColor: 'bg-indigo-600',
    image: '/bgmain.jpg',
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
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="text-[11px] uppercase tracking-widest font-bold text-brand-600 block mb-1">
              NĂNG LỰC CỐT LÕI
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-corporate-dark">
              4 Trụ Cột Kỹ Thuật Quỳnh Engineering
            </h2>
          </div>
          <button
            onClick={() => setCurrentPage('products')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-800 transition-colors hidden sm:inline-flex items-center space-x-1"
          >
            <span>Tất cả sản phẩm</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleClick(cat)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[3/4] flex flex-col justify-between p-5 bg-slate-900 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* AI background image with smooth zoom */}
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-90"
              />

              {/* Multi-stage gradient overlay for high contrast & readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/30 pointer-events-none" />

              {/* Tag top */}
              <div className="relative z-10 self-start">
                <span className={`${cat.tagColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm`}>
                  {cat.tag}
                </span>
              </div>

              {/* Content bottom */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-white font-bold text-base leading-tight mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-blue-200/90 font-medium mb-3">
                  {cat.sub}
                </p>

                {/* Bullets */}
                <div className="space-y-1 mb-3">
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-center space-x-1.5 text-white/80 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-industrial-orange shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-1 text-white text-xs font-semibold group-hover:text-industrial-orange transition-colors">
                  <span>Khám phá ngay</span>
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
