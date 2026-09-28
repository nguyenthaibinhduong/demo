import React, { useState, useEffect, useRef } from 'react';
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
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalQuoteCount = quoteItems.reduce((acc, item) => acc + item.quantity, 0);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white transition-all duration-300">
      {/* TOP BAR */}
      <div className="bg-slate-50 text-corporate-dark text-xs border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between gap-y-1">
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1.5 text-slate-500">
              <MapPin className="w-3 h-3 text-brand-600 shrink-0" />
              <span className="truncate max-w-[220px] sm:max-w-none font-medium text-slate-700">Số 9, Đ. 65, P. Tân Phong, Q.7, TP.HCM</span>
            </div>
            <div className="hidden md:flex items-center space-x-1.5 text-slate-500">
              <Clock className="w-3 h-3 text-brand-600 shrink-0" />
              <span>Hỗ trợ kỹ thuật 24/7 toàn quốc</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 ml-auto">
            <a
              href={`tel:${companyData.contact.hotline247Raw}`}
              className="font-bold text-industrial-orange hover:text-orange-600 flex items-center space-x-1 transition-colors"
            >
              <PhoneCall className="w-3 h-3 animate-pulse" />
              <span>Hotline: {companyData.contact.hotline247}</span>
            </a>

            <div className="hidden lg:flex items-center text-slate-400 space-x-2 text-[11px] border-l border-slate-200 pl-3">
              <span>Thủy lực: <strong className="text-slate-700">{companyData.contact.hydraulicsPhone}</strong></span>
              <span>•</span>
              <span>Khí nén: <strong className="text-slate-700">{companyData.contact.pneumaticsPhone}</strong></span>
            </div>

            <div className="flex items-center space-x-1 pl-3 border-l border-slate-200">
              {(['vi', 'en'] as const).map(lang => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  className={`px-1.5 py-0.5 rounded text-[11px] font-medium transition-colors ${
                    currentLang === lang ? 'bg-brand-600 text-white' : 'text-slate-400 hover:text-slate-700'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className={`bg-white border-b border-slate-100 transition-all duration-200 ${isScrolled ? 'shadow-sm py-2' : 'py-2.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <div
            onClick={() => setCurrentPage('home')}
            className="flex items-center space-x-2.5 cursor-pointer group shrink-0"
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center p-1.5">
                <svg className="w-full h-full text-brand-600" viewBox="0 0 40 40" fill="none">
                  <path d="M20 4L24 7V11L28 12.5L31.5 10L34.5 13L32 16.5L33.5 20.5H37.5V24.5H33.5L32 28.5L34.5 32L31.5 35L28 32.5L24 34V38H20V34L16 32.5L12.5 35L9.5 32L12 28.5L10.5 24.5H6.5V20.5H10.5L12 16.5L9.5 13L12.5 10L16 12.5L20 11V4Z" fill="#1677D2" />
                  <circle cx="20" cy="22.5" r="5" fill="#F58220" />
                </svg>
              </div>
              <span className="absolute -bottom-1 -right-1 bg-industrial-orange text-[9px] font-bold text-white px-1 rounded-full">30Y</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-corporate-dark group-hover:text-brand-600 transition-colors">
                QUỲNH<span className="text-industrial-orange">.VN</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">Kỹ Thuật Truyền Động & Điều Khiển</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-0.5">
            {navigationData.map((item) => {
              const isActive = currentPage === item.href || (currentPage.startsWith(item.href) && item.href !== 'home');
              const hasDropdown = item.children && item.children.length > 0;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && openDropdown(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    onClick={() => {
                      setCurrentPage(item.href);
                      setActiveDropdown(null);
                    }}
                    className={`px-2.5 py-1.5 rounded-md text-[13px] font-medium whitespace-nowrap transition-colors flex items-center space-x-1 ${
                      isActive
                        ? 'text-brand-600 bg-brand-50 font-semibold'
                        : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 shrink-0 ${
                        activeDropdown === item.label ? 'rotate-180 text-brand-600' : 'text-slate-400'
                      }`} />
                    )}
                  </button>

                  {/* Dropdown */}
                  {hasDropdown && activeDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-slate-100 p-1.5 z-50"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      {item.children?.map((sub) => (
                        <div
                          key={sub.label}
                          onClick={() => {
                            setCurrentPage(sub.href.split('#')[0].split('?')[0]);
                            setActiveDropdown(null);
                          }}
                          className="px-3 py-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors group/item"
                        >
                          <div className="text-xs font-semibold text-slate-800 group-hover/item:text-brand-600 transition-colors">
                            {sub.label}
                          </div>
                          {sub.description && (
                            <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{sub.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center space-x-1.5 shrink-0">
            <button
              onClick={() => setIsSearchModalOpen(true)}
              aria-label="Tìm kiếm"
              className="p-2 rounded-lg text-slate-500 hover:text-brand-600 hover:bg-slate-50 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsQuoteDrawerOpen(true)}
              title="Danh sách báo giá"
              className="relative p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <FileText className="w-4 h-4" />
              {totalQuoteCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-industrial-orange text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalQuoteCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-brand-600 hover:bg-brand-700 text-white px-3.5 py-1.5 rounded-lg font-semibold text-xs transition-colors flex items-center space-x-1.5 whitespace-nowrap"
            >
              <span>Liên hệ</span>
              <ArrowRight className="w-3 h-3 hidden sm:inline" />
            </button>

            <button
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Mở menu"
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
