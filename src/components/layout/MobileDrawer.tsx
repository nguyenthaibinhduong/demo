import React, { useState } from 'react';
import { 
  X, 
  ChevronRight, 
  ChevronDown, 
  PhoneCall, 
  FileText,
  Search
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { companyData } from '../../data/company';
import { navigationData } from '../../data/navigation';

export const MobileDrawer: React.FC = () => {
  const { 
    isMobileNavOpen, 
    setIsMobileNavOpen, 
    currentPage, 
    setCurrentPage, 
    setIsQuoteDrawerOpen,
    setIsSearchModalOpen,
    quoteItems 
  } = useApp();

  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!isMobileNavOpen) return null;

  const totalQuoteCount = quoteItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleAccordion = (label: string) => {
    setExpandedItem(prev => prev === label ? null : label);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsMobileNavOpen(false)}
      />

      {/* Drawer content */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white border-l border-[#E5EAF0] shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300">
        {/* Top Header */}
        <div className="p-4 border-b border-[#E5EAF0] flex items-center justify-between bg-[#F8FAFC]">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold text-base shadow-xs">
              Q
            </div>
            <div>
              <span className="font-extrabold text-[#172033] text-base tracking-wide">QUỲNH<span className="text-industrial-orange">.VN</span></span>
              <span className="block text-[10px] text-[#64748B] font-medium">Kỹ Thuật Truyền Động</span>
            </div>
          </div>

          <button 
            onClick={() => setIsMobileNavOpen(false)}
            aria-label="Đóng menu"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Search & Quote Triggers */}
        <div className="p-3 border-b border-[#E5EAF0] grid grid-cols-2 gap-2 bg-white">
          <button
            onClick={() => {
              setIsMobileNavOpen(false);
              setIsSearchModalOpen(true);
            }}
            className="flex items-center justify-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold py-2 px-3 rounded-xl border border-slate-200"
          >
            <Search className="w-3.5 h-3.5 text-brand-600" />
            <span>Tìm kiếm</span>
          </button>

          <button
            onClick={() => {
              setIsMobileNavOpen(false);
              setIsQuoteDrawerOpen(true);
            }}
            className="flex items-center justify-center space-x-1.5 bg-industrial-orange hover:bg-orange-600 text-white text-xs font-bold py-2 px-3 rounded-xl shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Báo giá ({totalQuoteCount})</span>
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {navigationData.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedItem === item.label;
            const isActive = currentPage === item.href;

            return (
              <div key={item.label} className="border-b border-slate-100 pb-1">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (!hasChildren) {
                        setCurrentPage(item.href);
                        setIsMobileNavOpen(false);
                      } else {
                        toggleAccordion(item.label);
                      }
                    }}
                    className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                      isActive ? 'text-brand-600 bg-brand-50' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] bg-orange-100 text-industrial-orange px-1.5 py-0.5 rounded-full font-bold ml-2">
                        {item.badge}
                      </span>
                    )}
                  </button>

                  {hasChildren && (
                    <button
                      onClick={() => toggleAccordion(item.label)}
                      className="p-2 text-slate-400 hover:text-slate-700"
                      aria-label="Mở rộng menu"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-brand-600' : ''
                      }`} />
                    </button>
                  )}
                </div>

                {/* Submenu Accordion */}
                {hasChildren && isExpanded && (
                  <div className="pl-3 pr-1 py-1 space-y-1 bg-[#F8FAFC] rounded-xl mt-1 border border-slate-100">
                    {item.children?.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => {
                          setCurrentPage(sub.href.split('#')[0].split('?')[0]);
                          setIsMobileNavOpen(false);
                        }}
                        className="w-full text-left py-2 px-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-brand-600 hover:bg-white flex items-center justify-between transition-colors"
                      >
                        <span>{sub.label}</span>
                        <ChevronRight className="w-3 h-3 text-slate-400" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Contact Details in Drawer */}
        <div className="p-4 bg-[#F8FAFC] border-t border-[#E5EAF0] space-y-3">
          <div className="text-[11px] text-slate-500 font-semibold uppercase">Liên hệ nhanh:</div>
          <a 
            href={`tel:${companyData.contact.hotline247Raw}`}
            className="flex items-center space-x-2 text-industrial-orange font-bold text-sm bg-white p-2.5 rounded-xl border border-[#E5EAF0] shadow-xs"
          >
            <PhoneCall className="w-4 h-4 text-industrial-orange shrink-0 animate-pulse" />
            <span>Hotline 24/7: {companyData.contact.hotline247}</span>
          </a>

          <div className="text-[11px] text-slate-600 space-y-1">
            <div>Thủy lực: <strong className="text-[#172033]">{companyData.contact.hydraulicsPhone}</strong></div>
            <div>Khí nén: <strong className="text-[#172033]">{companyData.contact.pneumaticsPhone}</strong></div>
            <div className="pt-1 text-[10px] text-slate-400">{companyData.headquarters.address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
