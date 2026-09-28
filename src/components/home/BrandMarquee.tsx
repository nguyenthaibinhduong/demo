import React, { useState } from 'react';
import { brandPartners, BrandPartner } from '../../data/brands';
import { useApp } from '../../context/AppContext';
import { ShieldCheck } from 'lucide-react';

export const BrandMarquee: React.FC = () => {
  const { setCurrentPage, setSelectedBrand } = useApp();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredBrands = brandPartners.filter(b => {
    if (selectedFilter === 'all') return true;
    return b.category === selectedFilter;
  });

  const handleBrandClick = (brandId: string) => {
    setSelectedBrand(brandId);
    setCurrentPage('products');
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>ĐỐI TÁC TOÀN CẦU</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-corporate-dark">
              Đại Diện & Phân Phối Thương Hiệu Hàng Đầu
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-xl">
              Quỳnh Engineering là đại diện uỷ quyền và nhà phân phối chính thức của hơn 25 tập đoàn cơ khí truyền động từ Đức, Ý, Mỹ và Nhật Bản.
            </p>
          </div>

          {/* Filter tabs - Clean flat pill */}
          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-lg overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-white text-brand-700 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tất Cả ({brandPartners.length})
            </button>
            <button
              onClick={() => setSelectedFilter('hydraulic')}
              className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                selectedFilter === 'hydraulic'
                  ? 'bg-white text-brand-700 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Thủy Lực
            </button>
            <button
              onClick={() => setSelectedFilter('pneumatic')}
              className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                selectedFilter === 'pneumatic'
                  ? 'bg-white text-brand-700 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Khí Nén & Van
            </button>
            <button
              onClick={() => setSelectedFilter('sensor')}
              className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                selectedFilter === 'sensor'
                  ? 'bg-white text-brand-700 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cảm Biến & An Toàn
            </button>
          </div>
        </div>

        {/* Brands Grid (Clean flat cards, minimal borders) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredBrands.map((brand: BrandPartner) => (
            <div
              key={brand.id}
              onClick={() => handleBrandClick(brand.id)}
              className="group bg-slate-50/70 hover:bg-slate-100/80 rounded-xl p-3 flex flex-col justify-between cursor-pointer transition-colors"
            >
              <div className="h-11 w-full flex items-center justify-center p-1 bg-white rounded-lg mb-2">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-7 max-w-full object-contain filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-150"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerText = brand.name;
                      e.currentTarget.parentElement.className = "text-xs font-bold text-corporate-dark text-center flex items-center justify-center h-11";
                    }
                  }}
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-slate-800 group-hover:text-brand-600 transition-colors line-clamp-1">
                    {brand.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {brand.countryCode}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-500 mt-0.5">
                  <span className="truncate max-w-[95px]">{brand.categoryName}</span>
                  {brand.officialDistributor && (
                    <span className="text-brand-600 font-semibold" title="Đại lý phân phối uỷ quyền">
                      ✓ Uỷ quyền
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
