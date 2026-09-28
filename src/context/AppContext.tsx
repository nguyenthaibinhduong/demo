import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProductItem, productsData } from '../data/products';

export interface QuoteItem {
  product: ProductItem;
  quantity: number;
  notes?: string;
}

interface AppContextType {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  // Quote drawer & basket
  quoteItems: QuoteItem[];
  addToQuote: (product: ProductItem, quantity?: number) => void;
  removeFromQuote: (productId: string) => void;
  updateQuoteQuantity: (productId: string, quantity: number) => void;
  clearQuote: () => void;
  isQuoteDrawerOpen: boolean;
  setIsQuoteDrawerOpen: (open: boolean) => void;
  
  // Quick View Modal
  quickViewProduct: ProductItem | null;
  openQuickView: (product: ProductItem) => void;
  closeQuickView: () => void;
  
  // Mobile Nav Drawer
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (open: boolean) => void;
  
  // Search Modal
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (open: boolean) => void;

  // Language
  currentLang: 'vi' | 'en';
  setCurrentLang: (lang: 'vi' | 'en') => void;

  // Toast notification
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPageState] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>(() => {
    // initialize with 1 product for demo richness so the user immediately sees the RFQ counter
    return [
      {
        product: productsData[0], // Settima Continuum pump
        quantity: 1,
        notes: "Cần báo giá cho dự án nâng cấp trạm nguồn nhà máy"
      }
    ];
  });
  
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [currentLang, setCurrentLang] = useState<'vi' | 'en'>('vi');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const setCurrentPage = (page: string) => {
    setCurrentPageState(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileNavOpen(false);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const addToQuote = (product: ProductItem, quantity = 1) => {
    setQuoteItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Đã thêm "${product.name}" vào danh sách yêu cầu báo giá!`);
  };

  const removeFromQuote = (productId: string) => {
    setQuoteItems(prev => prev.filter(item => item.product.id !== productId));
    showToast("Đã xóa sản phẩm khỏi danh sách báo giá");
  };

  const updateQuoteQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromQuote(productId);
      return;
    }
    setQuoteItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearQuote = () => {
    setQuoteItems([]);
  };

  const openQuickView = (product: ProductItem) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedCategory,
        setSelectedCategory,
        selectedBrand,
        setSelectedBrand,
        searchQuery,
        setSearchQuery,
        quoteItems,
        addToQuote,
        removeFromQuote,
        updateQuoteQuantity,
        clearQuote,
        isQuoteDrawerOpen,
        setIsQuoteDrawerOpen,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        isMobileNavOpen,
        setIsMobileNavOpen,
        isSearchModalOpen,
        setIsSearchModalOpen,
        currentLang,
        setCurrentLang,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
