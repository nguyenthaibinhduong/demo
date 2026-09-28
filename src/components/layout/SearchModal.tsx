import React, { useState, useMemo } from 'react';
import { 
  X, 
  Search, 
  ChevronRight, 
  FileText, 
  Wrench, 
  Tag 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { productsData } from '../../data/products';
import { brandPartners } from '../../data/brands';
import { servicesData } from '../../data/services';

export const SearchModal: React.FC = () => {
  const { 
    isSearchModalOpen, 
    setIsSearchModalOpen, 
    setCurrentPage, 
    openQuickView 
  } = useApp();

  const [term, setTerm] = useState('');

  const filteredProducts = useMemo(() => {
    if (!term.trim()) return productsData.slice(0, 4);
    const lower = term.toLowerCase();
    return productsData.filter(p => 
      p.name.toLowerCase().includes(lower) ||
      p.code.toLowerCase().includes(lower) ||
      p.brand.toLowerCase().includes(lower) ||
      p.shortDesc.toLowerCase().includes(lower)
    );
  }, [term]);

  const filteredBrands = useMemo(() => {
    if (!term.trim()) return brandPartners.slice(0, 4);
    const lower = term.toLowerCase();
    return brandPartners.filter(b => 
      b.name.toLowerCase().includes(lower) ||
      b.categoryName.toLowerCase().includes(lower) ||
      b.country.toLowerCase().includes(lower)
    );
  }, [term]);

  const filteredServices = useMemo(() => {
    if (!term.trim()) return servicesData.slice(0, 3);
    const lower = term.toLowerCase();
    return servicesData.filter(s => 
      s.title.toLowerCase().includes(lower) ||
      s.tagline.toLowerCase().includes(lower)
    );
  }, [term]);

  if (!isSearchModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsSearchModalOpen(false)}
      />

      <div className="min-h-full flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24">
        <div className="relative bg-white border border-[#E5EAF0] rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
          {/* Search Input Bar */}
          <div className="p-4 border-b border-[#E5EAF0] flex items-center space-x-3 bg-[#F8FAFC]">
            <Search className="w-5 h-5 text-brand-600 shrink-0" />
            <input 
              type="text"
              id="search-query-input"
              name="search-query"
              autoFocus
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Tìm kiếm mã sản phẩm (ví dụ: Settima, HDS, Suco, trạm nguồn...)"
              className="w-full bg-transparent text-[#172033] text-sm placeholder-slate-400 focus:outline-none"
            />
            {term && (
              <button 
                onClick={() => setTerm('')} 
                className="text-xs text-slate-400 hover:text-slate-700 px-1.5 py-0.5"
              >
                Xóa
              </button>
            )}
            <button
              onClick={() => setIsSearchModalOpen(false)}
              aria-label="Đóng tìm kiếm"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results list */}
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
            {/* 1. Products */}
            <div>
              <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                <FileText className="w-3.5 h-3.5 text-brand-600" />
                <span>Sản phẩm & Linh kiện ({filteredProducts.length})</span>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-xs text-slate-400 py-2">Không tìm thấy sản phẩm phù hợp.</div>
              ) : (
                <div className="space-y-1.5">
                  {filteredProducts.map(p => (
                    <div 
                      key={p.id}
                      onClick={() => {
                        setIsSearchModalOpen(false);
                        openQuickView(p);
                      }}
                      className="p-2.5 rounded-xl bg-white hover:bg-[#F8FAFC] border border-[#E5EAF0] hover:border-brand-400 flex items-center justify-between cursor-pointer transition-colors group shadow-xs"
                    >
                      <div className="flex items-center space-x-3 min-w-0">
                        <img 
                          src={p.image} 
                          alt={p.name}
                          className="w-10 h-10 object-contain rounded-md bg-slate-50 p-1 border border-slate-200 shrink-0" 
                          onError={(e) => {
                            e.currentTarget.src = "https://www.quynh.vn/images/2025/28year_quynh_engineering.jpeg";
                          }}
                        />
                        <div className="min-w-0">
                          <h4 className="text-xs font-bold text-[#172033] group-hover:text-brand-600 transition-colors line-clamp-1">
                            {p.name}
                          </h4>
                          <span className="text-[11px] font-mono text-[#64748B]">
                            {p.code} • <strong className="text-industrial-orange font-sans">{p.brand}</strong>
                          </span>
                        </div>
                      </div>

                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Services */}
            <div>
              <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                <Wrench className="w-3.5 h-3.5 text-industrial-orange" />
                <span>Dịch vụ kỹ thuật ({filteredServices.length})</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredServices.map(s => (
                  <div
                    key={s.id}
                    onClick={() => {
                      setIsSearchModalOpen(false);
                      setCurrentPage('services');
                    }}
                    className="p-2.5 rounded-xl bg-[#F8FAFC] hover:bg-white border border-[#E5EAF0] hover:border-brand-400 cursor-pointer transition-colors shadow-xs"
                  >
                    <div className="text-xs font-bold text-[#172033] line-clamp-1 hover:text-brand-600">
                      {s.title}
                    </div>
                    <div className="text-[11px] text-[#64748B] line-clamp-1 mt-0.5">
                      {s.tagline}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Brands */}
            <div>
              <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                <Tag className="w-3.5 h-3.5 text-emerald-600" />
                <span>Thương hiệu đối tác ({filteredBrands.length})</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {filteredBrands.map(b => (
                  <div
                    key={b.id}
                    onClick={() => {
                      setIsSearchModalOpen(false);
                      setCurrentPage('products');
                    }}
                    className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] text-xs text-slate-700 hover:text-brand-700 hover:bg-brand-50 border border-[#E5EAF0] cursor-pointer flex items-center space-x-2 transition-colors"
                  >
                    <span className="font-bold">{b.name}</span>
                    <span className="text-[10px] text-slate-400">({b.country})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
