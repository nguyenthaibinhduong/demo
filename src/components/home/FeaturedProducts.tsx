import React, { useState } from 'react';
import { 
  FileText, 
  Eye, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { productsData, ProductItem } from '../../data/products';
import { useApp } from '../../context/AppContext';

export const FeaturedProducts: React.FC = () => {
  const { setCurrentPage, addToQuote, openQuickView, setIsQuoteDrawerOpen } = useApp();
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'Tất Cả Sản Phẩm' },
    { id: 'hydraulic', label: 'Thủy Lực' },
    { id: 'pneumatic', label: 'Khí Nén & Van' },
    { id: 'sensor', label: 'Cảm Biến & Đo Lường' },
    { id: 'automation', label: 'An Toàn Tự Động Hóa' },
    { id: 'cleaning', label: 'Máy Rửa Kärcher' }
  ];

  const filteredProducts = productsData.filter(p => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  const handleQuoteClick = (p: ProductItem, e: React.MouseEvent) => {
    e.stopPropagation();
    addToQuote(p, 1);
    setIsQuoteDrawerOpen(true);
  };

  return (
    <section className="py-12 bg-slate-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-industrial-orange" />
              <span>Sản Phẩm Tiêu Biểu</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-corporate-dark">
              Thiết Bị & Phụ Tùng Công Nghiệp Chính Hãng
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-xl">
              Tất cả thiết bị đều có đầy đủ chứng chỉ nguồn gốc xuất xứ CO và chứng chỉ chất lượng CQ từ nhà sản xuất.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('products')}
            className="inline-flex items-center space-x-1 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
          >
            <span>Xem toàn bộ danh mục</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Category Tabs - Clean flat pill */}
        <div className="flex items-center space-x-1 overflow-x-auto pb-2 mb-6 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-brand-700 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => openQuickView(product)}
              className="group bg-white rounded-xl border border-slate-100 hover:border-slate-300 flex flex-col justify-between overflow-hidden cursor-pointer transition-colors"
            >
              {/* Image Preview Box */}
              <div className="relative bg-slate-50/50 p-4 aspect-square flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                  onError={(e) => {
                    e.currentTarget.src = "https://www.quynh.vn/images/2025/28year_quynh_engineering.jpeg";
                  }}
                />

                {/* Badges */}
                <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
                  {product.badge && (
                    <span className="bg-industrial-orange text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {product.badge}
                    </span>
                  )}
                  <span className="bg-white/95 text-slate-800 text-[10px] font-semibold px-2 py-0.5 rounded">
                    {product.brand}
                  </span>
                </div>

                {/* Quick view hover action button */}
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-slate-800 text-xs font-medium py-1 px-2.5 rounded-md shadow-sm flex items-center space-x-1">
                    <Eye className="w-3 h-3 text-brand-600" />
                    <span>Xem thông số</span>
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2.5">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-0.5">
                    <span className="text-brand-600 font-semibold">{product.code}</span>
                    <span>{product.origin}</span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Specs Snippet */}
                <div className="pt-2 border-t border-slate-100 space-y-0.5 text-[11px] text-slate-500">
                  {Object.entries(product.specs).slice(0, 2).map(([k, v]) => (
                    <div key={k} className="flex justify-between items-center">
                      <span className="truncate max-w-[110px] text-slate-400">{k}:</span>
                      <span className="font-medium text-slate-800 truncate max-w-[130px]">{v}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5">
                  <button
                    onClick={(e) => handleQuoteClick(product, e)}
                    className="flex-1 py-1.5 px-3 bg-industrial-orange hover:bg-orange-600 text-white font-semibold text-xs rounded-lg flex items-center justify-center space-x-1 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Báo Giá</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openQuickView(product);
                    }}
                    aria-label="Xem chi tiết kỹ thuật"
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
