import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { companyData } from '../../data/company';

// Unsplash free industrial images (no auth needed)
const heroSlides = [
  {
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80',
    tag: 'Hệ Thống Thủy Lực Công Nghiệp',
    caption: 'Trạm nguồn HPU theo yêu cầu • 30 bar – 350 bar',
  },
  {
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=900&q=80',
    tag: 'Thiết Bị Truyền Động Chính Xác',
    caption: 'Bosch Rexroth • Hydac • Settima Continuum®',
  },
  {
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80',
    tag: 'Kỹ Thuật Khí Nén & Điều Khiển',
    caption: 'Emerson ASCO • Aventics • van khí nén công nghiệp',
  },
];

const stats = [
  { value: '30+', label: 'Năm kinh nghiệm', sub: 'Từ 1993' },
  { value: '500+', label: 'Dự án lớn', sub: 'Toàn quốc' },
  { value: '25+', label: 'Thương hiệu', sub: 'Đức · Ý · Mỹ · Nhật' },
  { value: '24/7', label: 'Hỗ trợ kỹ thuật', sub: 'Toàn quốc' },
];

export const HeroSection: React.FC = () => {
  const { setCurrentPage } = useApp();
  const [slide, setSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const current = heroSlides[slide];

  return (
    <section className="relative bg-white overflow-hidden pt-4 pb-10 lg:pt-8 lg:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* LEFT: Text */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            {/* Badge */}
            <div className={`inline-flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full text-xs font-semibold text-brand-700 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <span className="flex h-1.5 w-1.5 rounded-full bg-industrial-orange animate-pulse" />
              <span>KỸ THUẬT TRUYỀN ĐỘNG & ĐIỀU KHIỂN • SINCE 1993</span>
            </div>

            {/* Heading */}
            <h1 className={`text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight leading-tight text-corporate-dark ${mounted ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
              Giải pháp thủy lực,{' '}
              <span className="shimmer-text">khí nén</span>
              {' '}&{' '}
              <br className="hidden sm:inline" />
              <span className="text-brand-600">truyền động công nghiệp</span>
            </h1>

            {/* Desc */}
            <p className={`text-sm text-slate-500 max-w-lg leading-relaxed mx-auto lg:mx-0 ${mounted ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
              Đại lý uỷ quyền <strong className="text-slate-700">Bosch Rexroth · Emerson · Hydac · Settima</strong> tại Việt Nam từ 1993. Thiết kế HPU, cung cấp phụ tùng chính hãng và dịch vụ bảo trì 24/7.
            </p>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 ${mounted ? 'animate-fadeInUp delay-300' : 'opacity-0'}`}>
              <button
                onClick={() => setCurrentPage('products')}
                className="w-full sm:w-auto px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm rounded-lg transition-colors flex items-center justify-center space-x-1.5 group"
              >
                <span>Xem sản phẩm</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={`tel:${companyData.contact.hotline247Raw}`}
                className="w-full sm:w-auto px-4 py-2.5 bg-orange-50 hover:bg-orange-100 text-orange-700 font-semibold text-sm rounded-lg flex items-center justify-center space-x-1.5 transition-colors animate-glow"
              >
                <PhoneCall className="w-3.5 h-3.5 text-industrial-orange animate-pulse" />
                <span>{companyData.contact.hotline247}</span>
              </a>

              <button
                onClick={() => setCurrentPage('contact')}
                className="w-full sm:w-auto px-4 py-2.5 text-slate-600 hover:text-brand-600 font-semibold text-sm rounded-lg flex items-center justify-center space-x-1 transition-colors"
              >
                <span>Tư vấn kỹ thuật</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Trust tags */}
            <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 pt-1 ${mounted ? 'animate-fadeInUp delay-400' : 'opacity-0'}`}>
              {['100% CO/CQ chính hãng', 'Kho 500m² TP.HCM', 'Kỹ sư 24/7'].map(t => (
                <div key={t} className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <span className="text-xs text-slate-600 font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: AI banner slideshow */}
          <div className={`lg:col-span-6 ${mounted ? 'animate-slideInRight delay-200' : 'opacity-0'}`}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
              {/* Image */}
              <img
                key={slide}
                src={current.img}
                alt={current.tag}
                className="w-full h-full object-cover transition-opacity duration-700 opacity-100"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              {/* Tag top-left */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-brand-700 font-semibold text-xs px-2.5 py-1 rounded-full">
                {current.tag}
              </div>

              {/* Caption bottom */}
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-sm font-medium drop-shadow">{current.caption}</p>
                {/* Dot indicators */}
                <div className="flex items-center space-x-1.5 mt-2">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      className={`rounded-full transition-all duration-300 ${i === slide ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Since badge */}
              <div className="absolute top-3 right-3 bg-industrial-orange text-white text-xs font-bold px-2.5 py-1 rounded-full">
                SINCE 1993
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className={`mt-10 pt-6 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-center ${mounted ? 'animate-fadeInUp delay-500' : 'opacity-0'}`}>
          {stats.map(s => (
            <div key={s.label} className="space-y-0.5">
              <div className="text-2xl font-bold text-brand-600">{s.value}</div>
              <div className="text-xs font-semibold text-slate-800">{s.label}</div>
              <div className="text-[11px] text-slate-400">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
