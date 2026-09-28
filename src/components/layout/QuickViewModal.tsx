import React from 'react';
import { 
  X, 
  ShieldCheck, 
  FileText, 
  PhoneCall, 
  Globe 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { companyData } from '../../data/company';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, closeQuickView, addToQuote, setIsQuoteDrawerOpen } = useApp();

  if (!quickViewProduct) return null;

  const handleAddToQuoteAndOpen = () => {
    addToQuote(quickViewProduct, 1);
    closeQuickView();
    setIsQuoteDrawerOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={closeQuickView}
      />

      <div className="min-h-full flex items-center justify-center p-4">
        <div className="relative bg-white border border-[#E5EAF0] rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
          {/* Close button */}
          <button
            onClick={closeQuickView}
            aria-label="Đóng cửa sổ"
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-slate-400 hover:text-slate-700 hover:bg-slate-100 border border-slate-200 transition-colors shadow-xs"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Product Image & Badges */}
            <div className="p-6 bg-[#F8FAFC] flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#E5EAF0] relative">
              <div className="w-full max-w-[260px] aspect-square rounded-2xl bg-white p-4 flex items-center justify-center shadow-xs border border-[#E5EAF0]">
                <img 
                  src={quickViewProduct.image} 
                  alt={quickViewProduct.name}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://www.quynh.vn/images/2025/28year_quynh_engineering.jpeg";
                  }}
                />
              </div>

              {quickViewProduct.badge && (
                <div className="absolute top-6 left-6 bg-industrial-orange text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-xs">
                  {quickViewProduct.badge}
                </div>
              )}

              <div className="mt-4 flex items-center space-x-3 text-xs text-[#64748B]">
                <span className="flex items-center space-x-1">
                  <Globe className="w-3.5 h-3.5 text-brand-600" />
                  <span>Xuất xứ: {quickViewProduct.origin}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{quickViewProduct.warranty}</span>
                </span>
              </div>
            </div>

            {/* Right: Technical Specs & Actions */}
            <div className="p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-brand-600 mb-1 font-semibold">
                  <span>MÃ: {quickViewProduct.code}</span>
                  <span>•</span>
                  <span className="text-industrial-orange font-bold font-sans">{quickViewProduct.brand}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#172033] leading-snug">
                  {quickViewProduct.name}
                </h3>

                <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                  {quickViewProduct.description}
                </p>

                {/* Specs Table */}
                <div className="mt-4 bg-[#F8FAFC] rounded-xl p-3 border border-[#E5EAF0] space-y-2">
                  <span className="text-[11px] font-bold text-[#172033] uppercase tracking-wider block border-b border-[#E5EAF0] pb-1">
                    Thông số kỹ thuật chính:
                  </span>
                  <div className="space-y-1.5 text-xs">
                    {Object.entries(quickViewProduct.specs).map(([label, value]) => (
                      <div key={label} className="flex justify-between items-center text-slate-700">
                        <span className="text-slate-500">{label}:</span>
                        <span className="font-semibold text-[#172033] text-right ml-2">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications tags */}
                <div className="mt-3">
                  <span className="text-[11px] text-slate-500 block mb-1.5 font-medium">Ứng dụng tiêu biểu:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {quickViewProduct.applications.map((app) => (
                      <span key={app} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-[#E5EAF0] flex items-center gap-2">
                <button
                  onClick={handleAddToQuoteAndOpen}
                  className="flex-1 py-2.5 px-4 bg-industrial-orange hover:bg-orange-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs flex items-center justify-center space-x-2 transition-all active:scale-[0.98]"
                >
                  <FileText className="w-4 h-4" />
                  <span>Yêu Cầu Báo Giá Kỹ Thuật</span>
                </button>

                <a
                  href={`tel:${companyData.contact.hotline247Raw}`}
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-industrial-orange border border-slate-200 transition-colors"
                  title="Gọi hotline tư vấn kỹ thuật"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
