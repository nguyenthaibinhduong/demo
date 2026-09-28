import React, { useState } from 'react';
import { FileText, Eye, ArrowRight, Sparkles } from 'lucide-react';
import { productsData, ProductItem } from '../../data/products';
import { useApp } from '../../context/AppContext';

const tabs = [
  { id: 'all', label: 'Tất Cả' },
  { id: 'hydraulic', label: 'Thủy Lực' },
  { id: 'pneumatic', label: 'Khí Nén' },
  { id: 'sensor', label: 'Cảm Biến' },
  { id: 'automation', label: 'An Toàn' },
  { id: 'cleaning', label: 'Kärcher' },
];

export const FeaturedProducts: React.FC = () => {
  const { setCurrentPage, addToQuote, openQuickView, setIsQuoteDrawerOpen } = useApp();
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredProducts = productsData
    .filter(p => activeTab === 'all' || p.category === activeTab)
    .slice(0, 8);

  const handleQuoteClick = (p: ProductItem, e: React.MouseEvent) => {
    e.stopPropagation();
    addToQuote(p, 1);
    setIsQuoteDrawerOpen(true);
  };

  return (
    <section className="py-12 bg-slate-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 gap-3">
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-industrial-orange" />
              <span>Sản Phẩm Tiêu Biểu</span>
            </div>
            <h2 className="text-xl font-bold text-corporate-dark">Thiết Bị & Phụ Tùng Công Nghiệp Chính Hãng</h2>
          </div>
          <button
            onClick={() => setCurrentPage('products')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center space-x-1 whitespace-nowrap"
          >
            <span>Xem toàn bộ danh mục</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center space-x-1 overflow-x-auto pb-1 mb-5 no-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-brand-600 text-white font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              onClick={() => openQuickView(product)}
              className="group bg-white rounded-xl flex flex-col overflow-hidden cursor-pointer hover:shadow-sm transition-shadow"
            >
              {/* Image */}
              <div className="relative bg-slate-50 aspect-square flex items-center justify-center p-3 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&q=60'; }}
                />
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-industrial-orange text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Info */}
              <div className="p-3 flex flex-col flex-1 justify-between space-y-2">
                <div>
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[10px] text-brand-600 font-semibold font-mono">{product.code}</span>
                    <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-medium">{product.brand}</span>
                  </div>
                  <h3 className="text-xs font-semibold text-slate-800 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                    {product.name}
                  </h3>
                </div>

                <button
                  onClick={(e) => handleQuoteClick(product, e)}
                  className="w-full py-1.5 bg-industrial-orange hover:bg-orange-500 text-white font-semibold text-xs rounded-lg flex items-center justify-center space-x-1 transition-colors"
                >
                  <FileText className="w-3 h-3" />
                  <span>Báo Giá</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
