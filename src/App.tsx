import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { QuoteDrawer } from './components/layout/QuoteDrawer';
import { QuickViewModal } from './components/layout/QuickViewModal';
import { SearchModal } from './components/layout/SearchModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

import { PhoneCall, FileText, ArrowUp, CheckCircle } from 'lucide-react';
import { companyData } from './data/company';

const AppContent: React.FC = () => {
  const { currentPage, setIsQuoteDrawerOpen, quoteItems, toastMessage } = useApp();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'products':
        return <ProductsPage />;
      case 'services':
        return <ServicesPage />;
      case 'solutions':
        return <SolutionsPage />;
      case 'news':
        return <NewsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  const totalQuoteCount = quoteItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#172033] selection:bg-brand-500 selection:text-white">
      {/* Toast Notification Banner - Sleek, minimal */}
      {toastMessage && (
        <div className="fixed top-16 right-4 z-50 bg-white border border-slate-100 text-[#172033] px-3.5 py-2.5 rounded-xl shadow-md flex items-center space-x-2 text-xs animate-in slide-in-from-top duration-200">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Drawers & Modals */}
      <MobileDrawer />
      <QuoteDrawer />
      <QuickViewModal />
      <SearchModal />

      {/* Floating Action Controls */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-2">
        {/* Floating Hotline Button */}
        <a
          href={`tel:${companyData.contact.hotline247Raw}`}
          aria-label="Gọi hotline hỗ trợ 24/7"
          className="flex items-center space-x-1.5 bg-industrial-orange hover:bg-orange-600 text-white py-2 px-3.5 rounded-full shadow-md font-semibold text-xs transition-colors group"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Hotline: {companyData.contact.hotline247}</span>
        </a>

        {/* Floating Quote Cart */}
        <button
          onClick={() => setIsQuoteDrawerOpen(true)}
          aria-label="Mở danh sách báo giá"
          className="relative bg-brand-600 hover:bg-brand-700 text-white p-2.5 rounded-full shadow-md transition-colors flex items-center justify-center"
        >
          <FileText className="w-4 h-4" />
          {totalQuoteCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-industrial-orange text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {totalQuoteCount}
            </span>
          )}
        </button>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Cuộn lên đầu trang"
            className="bg-white hover:bg-slate-50 text-slate-600 p-2 rounded-full border border-slate-200 shadow-sm transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
