import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

// Category config with Unsplash images
const categories = [
  {
    id: 'hydraulic',
    title: 'Thiết Bị Thủy Lực',
    tag: 'Trọng tâm',
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80',
    items: ['Bơm Settima / Rexroth', 'Van tỉ lệ & servo', 'Bình tích áp Hydac', 'Lọc dầu áp cao'],
    accent: 'bg-brand-600',
  },
  {
    id: 'pneumatic',
    title: 'Khí Nén & Tự Động Hóa',
    tag: 'Emerson Partner',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    items: ['Van điện từ ASCO', 'Xi lanh khí nén ISO', 'Cụm van đế manifold', 'Cảm biến dòng khí'],
    accent: 'bg-slate-700',
  },
  {
    id: 'power-pack',
    title: 'Chế Tạo Trạm Nguồn',
    tag: 'Xưởng 500m²',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
    items: ['Thiết kế 3D HPU', 'Đế van manifold', 'Tủ điều khiển PLC', 'Thử tải theo yêu cầu'],
    accent: 'bg-industrial-orange',
  },
  {
    id: 'services',
    title: 'Dịch Vụ Bảo Trì Kỹ Thuật',
    tag: 'Hỗ trợ 24/7',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    items: ['Súc rửa ống flushing', 'Lọc dầu online', 'Đo bẩn ISO 4406', 'Nạp Nitơ N2'],
    accent: 'bg-emerald-600',
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
            <h2 className="text-xl font-bold text-corporate-dark">4 Trụ Cột Kỹ Thuật Của Công Nghệ Quỳnh</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {categories.map(cat => (
            <div
              key={cat.id}
              onClick={() => handleClick(cat)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[3/4] sm:aspect-[2/3]"
            >
              {/* Background image */}
              <img
                src={cat.img}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

              {/* Tag top */}
              <div className={`absolute top-3 left-3 ${cat.accent} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                {cat.tag}
              </div>

              {/* Content bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-sm leading-tight mb-2">{cat.title}</h3>
                <div className="space-y-1 mb-3">
                  {cat.items.slice(0, 3).map(item => (
                    <div key={item} className="flex items-center space-x-1.5 text-white/80 text-[11px]">
                      <span className="w-1 h-1 rounded-full bg-white/70 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-1 text-white/90 text-xs font-semibold group-hover:text-white transition-colors">
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
