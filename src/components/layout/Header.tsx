import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MapPin, 
  Search, 
  FileText, 
  Menu, 
  ChevronDown, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { companyData } from '../../data/company';
import { navigationData } from '../../data/navigation';

export const Header: React.FC = () => {
  const { 
    currentPage, 
    setCurrentPage, 
    quoteItems, 
    setIsQuoteDrawerOpen, 
    setIsMobileNavOpen,
    setIsSearchModalOpen,
    currentLang,
    setCurrentLang 
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalQuoteCount = quoteItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 w-full bg-white transition-all duration-300">
      {/* 1. TOP ANNOUNCEMENT & CONTACT BAR (LIGHT) */}
      <div className="bg-corporate-surface text-corporate-dark text-xs border-b border-corporate-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-y-2">
          {/* Left: Address & Working status */}
          <div className="flex items-center space-x-6 flex-wrap">
            <div className="flex items-center space-x-1.5 text-corporate-muted">
              <MapPin className="w-3.5 h-3.5 text-brand-600 shrink-0" />
              <span className="truncate max-w-[280px] sm:max-w-none text-corporate-dark font-medium">
                Số 9, Đ. 65, P. Tân Phong, Q.7, TP.HCM
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-1.5 text-corporate-muted">
              <Clock className="w-3.5 h-3.5 text-brand-600 shrink-0" />
              <span>Hỗ trợ kỹ thuật 24/7 toàn quốc</span>
            </div>
          </div>

          {/* Right: Direct Hotline & Language */}
          <div className="flex items-center space-x-4 ml-auto">
            <div className="flex items-center space-x-1 text-corporate-dark">
              <span className="text-corporate-muted hidden sm:inline">Hotline 24/7:</span>
              <a 
                href={`tel:${companyData.contact.hotline247Raw}`}
                className="font-bold text-industrial-orange hover:text-orange-600 flex items-center space-x-1 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-industrial-orange animate-pulse" />
                <span>{companyData.contact.hotline247}</span>
              </a>
            </div>

            <div className="hidden lg:flex items-center text-corporate-muted space-x-2 text-[11px] border-l border-corporate-border pl-3">
              <span>Thủy lực: <strong className="text-corporate-dark">{companyData.contact.hydraulicsPhone}</strong></span>
              <span>•</span>
              <span>Khí nén: <strong className="text-corporate-dark">{companyData.contact.pneumaticsPhone}</strong></span>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-1 pl-3 border-l border-corporate-border">
              <button 
                onClick={() => setCurrentLang('vi')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-medium transition-colors ${
                  currentLang === 'vi' 
                    ? 'bg-brand-600 text-white font-bold' 
                    : 'text-corporate-muted hover:text-corporate-dark'
                }`}
              >
                VN
              </button>
              <button 
                onClick={() => setCurrentLang('en')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-medium transition-colors ${
                  currentLang === 'en' 
                    ? 'bg-brand-600 text-white font-bold' 
                    : 'text-corporate-muted hover:text-corporate-dark'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR (WHITE BACKGROUND, CLEAN, NO HEAVY BORDERS/SHADOWS) */}
      <div className={`bg-white border-b border-slate-100 transition-all duration-200 ${
        isScrolled ? 'shadow-[0_1px_3px_rgba(0,0,0,0.04)] py-2' : 'py-2.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* BRAND LOGO */}
          <div 
            onClick={() => setCurrentPage('home')}
            className="flex items-center space-x-2.5 cursor-pointer group shrink-0"
          >
            <div className="relative">
              {/* Clean Gear Logo without heavy borders */}
              <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center p-1.5 transition-colors">
                <svg className="w-full h-full text-brand-600" viewBox="0 0 40 40" fill="none">
                  <path d="M20 4L24 7V11L28 12.5L31.5 10L34.5 13L32 16.5L33.5 20.5H37.5V24.5H33.5L32 28.5L34.5 32L31.5 35L28 32.5L24 34V38H20V34L16 32.5L12.5 35L9.5 32L12 28.5L10.5 24.5H6.5V20.5H10.5L12 16.5L9.5 13L12.5 10L16 12.5L20 11V4Z" fill="#1677D2" />
                  <circle cx="20" cy="22.5" r="5" fill="#F58220" />
                </svg>
              </div>
              <span className="absolute -bottom-1 -right-1 bg-industrial-orange text-[9px] font-bold text-white px-1 rounded-full">
                30Y
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-corporate-dark group-hover:text-brand-600 transition-colors">
                  QUỲNH<span className="text-industrial-orange">.VN</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-semibold bg-brand-50 text-brand-700">
                  SINCE 1993
                </span>
              </div>
              <span className="text-[10px] text-corporate-muted tracking-wide font-medium uppercase line-clamp-1">
                Kỹ Thuật Truyền Động & Điều Khiển
              </span>
            </div>
          </div>

          {/* DESKTOP NAVIGATION MENU (CLEAN, SINGLE-LINE, NO WRAPPING) */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
            {navigationData.map((item) => {
              const isActive = currentPage === item.href || (currentPage.startsWith(item.href) && item.href !== 'home');
              const hasDropdown = item.children && item.children.length > 0;

              return (
                <div 
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => {
                      setCurrentPage(item.href);
                      setActiveDropdown(null);
                    }}
                    className={`px-2.5 py-1.5 rounded-md text-[13px] font-medium whitespace-nowrap transition-colors flex items-center space-x-1 ${
                      isActive 
                        ? 'text-brand-600 bg-brand-50/80 font-semibold' 
                        : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                    {item.badge && (
                      <span className="ml-1 text-[9px] font-semibold bg-brand-100 text-brand-700 px-1 py-0.2 rounded">
                        {item.badge}
                      </span>
                    )}
                    {hasDropdown && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 shrink-0 ${
                        activeDropdown === item.label ? 'rotate-180 text-brand-600' : 'text-slate-400'
                      }`} />
                    )}
                  </button>

                  {/* LIGHT DROPDOWN MENU - CLEAN, FLAT, MINIMAL SHADOW */}
                  {hasDropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-slate-100 rounded-xl shadow-lg p-1.5 z-50 animate-in fade-in duration-100">
                      <div className="space-y-0.5">
                        {item.children?.map((sub) => (
                          <div
                            key={sub.label}
                            onClick={() => {
                              setCurrentPage(sub.href.split('#')[0].split('?')[0]);
                              setActiveDropdown(null);
                            }}
                            className="p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors group/item"
                          >
                            <div className="text-xs font-semibold text-corporate-dark group-hover/item:text-brand-600 transition-colors">
                              {sub.label}
                            </div>
                            {sub.description && (
                              <p className="text-[11px] text-corporate-muted mt-0.5 line-clamp-1">
                                {sub.description}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* RIGHT ACTIONS: SEARCH + QUOTE BASKET + "LIÊN HỆ TƯ VẤN" (CLEAN FLAT) */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
            {/* Quick Search Icon Button */}
            <button
              onClick={() => setIsSearchModalOpen(true)}
              aria-label="Tìm kiếm sản phẩm, thương hiệu"
              title="Tìm kiếm (mã sản phẩm, thương hiệu...)"
              className="p-2 rounded-lg text-slate-500 hover:text-brand-600 hover:bg-slate-50 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* QUOTE BASKET BUTTON (NO HEAVY BORDER) */}
            <button
              onClick={() => setIsQuoteDrawerOpen(true)}
              title="Danh sách yêu cầu báo giá"
              className="relative p-2 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors flex items-center space-x-1"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              {totalQuoteCount > 0 && (
                <span className="bg-industrial-orange text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalQuoteCount}
                </span>
              )}
            </button>

            {/* PRIMARY BLUE CTA BUTTON: "Liên hệ tư vấn" */}
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-brand-600 hover:bg-brand-700 text-white px-3.5 py-1.5 rounded-lg font-semibold text-xs transition-colors flex items-center space-x-1.5 whitespace-nowrap"
            >
              <span>Liên hệ tư vấn</span>
              <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
            </button>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Mở menu điều hướng"
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
