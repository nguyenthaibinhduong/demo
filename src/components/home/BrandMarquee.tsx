import React from 'react';
import { brandPartners, BrandPartner } from '../../data/brands';
import { useApp } from '../../context/AppContext';

// Exactly 10 top official global partner brands
const top10Ids = [
  'bosch-rexroth',
  'hydac',
  'emerson',
  'aventics',
  'asco',
  'settima',
  'parker',
  'danfoss',
  'schmersal',
  'karcher'
];

export const BrandMarquee: React.FC = () => {
  const { setCurrentPage, setSelectedBrand } = useApp();

  const handleBrandClick = (brandId: string) => {
    setSelectedBrand(brandId);
    setCurrentPage('products');
  };

  // Filter 10 official brands
  const tenBrands: BrandPartner[] = top10Ids
    .map(id => brandPartners.find(b => b.id === id))
    .filter(Boolean) as BrandPartner[];

  // Repeat for smooth infinite sliding
  const slideItems = [...tenBrands, ...tenBrands, ...tenBrands];

  return (
    <section className="py-10 bg-slate-50/70 overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-center gap-3 text-center sm:text-left">
          <div>
            <span className="text-[11px] text-center w-full uppercase tracking-widest font-bold text-brand-600 block mb-1">
              ĐỐI TÁC TOÀN CẦU
            </span>
            <h2 className="text-xl font-bold text-corporate-dark">
              ĐẠI DIỆN & PHÂN PHỐI UỶ QUYỀN CHÍNH THỨC CÁC HÃNG TOÀN CẦU TẠI VIỆT NAM
            </h2>
          </div>
          {/* <button
            onClick={() => setCurrentPage('products')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-800 transition-colors whitespace-nowrap self-center sm:self-end"
          >
            Tất cả 25+ hãng →
          </button> */}
        </div>
      </div>

      {/* Infinite auto-scroll slide strip with large cards & logos, no text inside */}
      <div className="relative flex overflow-hidden py-2">
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="partner-track flex items-center gap-5 sm:gap-6 min-w-max">
          {slideItems.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              onClick={() => handleBrandClick(brand.id)}
              className="flex-shrink-0 w-44 sm:w-56 h-24 sm:h-28 bg-white rounded-2xl flex items-center justify-center p-4 sm:p-5 cursor-pointer group transition-all duration-300 hover:border-brand-500 hover:shadow-sm"
              title={brand.name}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-12 sm:max-h-14 max-w-[130px] sm:max-w-[160px] object-contain grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const el = e.currentTarget.parentElement;
                  if (el) {
                    const span = document.createElement('span');
                    span.textContent = brand.name;
                    span.className = 'text-xs sm:text-sm font-bold text-slate-800 text-center px-2 group-hover:text-brand-600';
                    el.appendChild(span);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
