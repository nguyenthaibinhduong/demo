import React from 'react';
import { brandPartners } from '../../data/brands';
import { useApp } from '../../context/AppContext';

export const BrandMarquee: React.FC = () => {
  const { setCurrentPage, setSelectedBrand } = useApp();

  const handleBrandClick = (brandId: string) => {
    setSelectedBrand(brandId);
    setCurrentPage('products');
  };

  // Duplicate for infinite loop
  const doubled = [...brandPartners, ...brandPartners];

  return (
    <section className="py-8 bg-slate-50/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400 block mb-0.5">ĐỐI TÁC TOÀN CẦU</span>
            <h2 className="text-base font-bold text-corporate-dark">
              Đại Diện & Phân Phối <span className="text-brand-600">25+ Thương Hiệu Hàng Đầu</span>
            </h2>
          </div>
          <button
            onClick={() => setCurrentPage('products')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors whitespace-nowrap"
          >
            Xem tất cả →
          </button>
        </div>
      </div>

      {/* Infinite auto-scroll strip */}
      <div className="relative flex overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="partner-track flex items-center gap-4 min-w-max">
          {doubled.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              onClick={() => handleBrandClick(brand.id)}
              className="flex-shrink-0 w-28 h-16 bg-white rounded-xl flex flex-col items-center justify-center gap-1 cursor-pointer group transition-colors hover:bg-blue-50"
              title={brand.name}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-7 max-w-[80px] object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-200"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const el = e.currentTarget.parentElement;
                  if (el) {
                    const span = document.createElement('span');
                    span.textContent = brand.name;
                    span.className = 'text-[10px] font-bold text-slate-700 text-center px-1';
                    el.appendChild(span);
                  }
                }}
              />
              <span className="text-[9px] text-slate-400 font-medium group-hover:text-brand-600 transition-colors">{brand.countryCode}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
