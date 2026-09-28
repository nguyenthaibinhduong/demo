import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  FileText, 
  Eye, 
  Tag, 
  X, 
  SlidersHorizontal,
  PhoneCall
} from 'lucide-react';
import { productsData, ProductItem } from '../data/products';
import { brandPartners } from '../data/brands';
import { useApp } from '../context/AppContext';
import { companyData } from '../data/company';

export const ProductsPage: React.FC = () => {
  const { 
    selectedCategory, 
    setSelectedCategory, 
    selectedBrand, 
    setSelectedBrand, 
    addToQuote, 
    openQuickView,
    setIsQuoteDrawerOpen 
  } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const categories = [
    { id: 'all', label: 'Tất Cả Danh Mục' },
    { id: 'hydraulic', label: 'Thiết Bị Thủy Lực' },
    { id: 'pneumatic', label: 'Thiết Bị Khí Nén' },
    { id: 'sensor', label: 'Cảm Biến & Đo Lường' },
    { id: 'automation', label: 'An Toàn Tự Động Hóa' },
    { id: 'cleaning', label: 'Máy Làm Sạch Kärcher' },
    { id: 'power-pack', label: 'Trạm Nguồn & Chế Tạo' }
  ];

  const filteredProducts = useMemo(() => {
    return productsData.filter(p => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== 'all' && p.brandId !== selectedBrand) {
        return false;
      }
      // In stock
      if (inStockOnly && !p.inStock) {
        return false;
      }
      // Search
      if (searchTerm.trim()) {
        const lower = searchTerm.toLowerCase();
        const matchName = p.name.toLowerCase().includes(lower);
        const matchCode = p.code.toLowerCase().includes(lower);
        const matchBrand = p.brand.toLowerCase().includes(lower);
        const matchDesc = p.shortDesc.toLowerCase().includes(lower);
        return matchName || matchCode || matchBrand || matchDesc;
      }
      return true;
    });
  }, [selectedCategory, selectedBrand, inStockOnly, searchTerm]);

  const handleQuoteClick = (p: ProductItem, e: React.MouseEvent) => {
    e.stopPropagation();
    addToQuote(p, 1);
    setIsQuoteDrawerOpen(true);
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSearchTerm('');
    setInStockOnly(false);
  };

  return (
    <div className="bg-slate-50/50 text-[#172033] min-h-screen py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Page Header */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-brand-600 font-semibold uppercase tracking-wider">
            <span>DANH MỤC THIẾT BỊ CÔNG NGHIỆP</span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-corporate-dark">
            Sản Phẩm & Phụ Tùng Thủy Lực – Khí Nén
          </h1>

          <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
            Cung cấp linh kiện chính hãng 100% từ Đức, Ý, Mỹ và Nhật Bản. Đầy đủ chứng chỉ CO/CQ, bảo hành dài hạn và hỗ trợ tư vấn chọn mã thiết bị tương thích kỹ thuật.
          </p>
        </div>

        {/* Filter Toolbar Bar - Clean flat */}
        <div className="bg-white rounded-xl p-3.5 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-center">
            {/* Search Input (5 cols) */}
            <div className="md:col-span-5 relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm tên, mã sản phẩm hoặc thông số..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-7 py-1.5 text-xs text-[#172033] placeholder-slate-400 focus:outline-none focus:border-brand-600"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Select (3 cols) */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-[#172033] focus:outline-none focus:border-brand-600"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Brand Select (2 cols) */}
            <div className="md:col-span-2">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-[#172033] focus:outline-none focus:border-brand-600"
              >
                <option value="all">Tất cả hãng</option>
                {brandPartners.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Stock Toggle Checkbox & Reset (2 cols) */}
            <div className="md:col-span-2 flex items-center justify-between gap-2">
              <label className="flex items-center space-x-1.5 text-xs text-slate-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded border-slate-300 text-brand-600 focus:ring-brand-500 w-3.5 h-3.5"
                />
                <span className="text-[11px] font-medium">Có sẵn kho</span>
              </label>

              {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchTerm || inStockOnly) && (
                <button
                  onClick={handleResetFilters}
                  className="text-[11px] text-industrial-orange hover:underline font-semibold"
                >
                  Xóa lọc
                </button>
              )}
            </div>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pt-1 no-scrollbar text-xs">
            <span className="text-slate-400 text-[10px] uppercase font-semibold shrink-0">Hãng:</span>
            <button
              onClick={() => setSelectedBrand('all')}
              className={`px-2.5 py-0.5 rounded text-[11px] font-medium whitespace-nowrap transition-colors ${
                selectedBrand === 'all'
                  ? 'bg-brand-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Tất cả
            </button>
            {brandPartners.slice(0, 8).map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedBrand(selectedBrand === b.id ? 'all' : b.id)}
                className={`px-2.5 py-0.5 rounded text-[11px] font-medium whitespace-nowrap transition-colors ${
                  selectedBrand === b.id
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count & Status */}
        <div className="flex items-center justify-between text-xs text-[#64748B]">
          <span>Hiển thị <strong>{filteredProducts.length}</strong> thiết bị phù hợp tiêu chí</span>
          {inStockOnly && (
            <span className="text-emerald-700 font-medium">✓ Đang lọc các mặt hàng sẵn có tại kho TP.HCM</span>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#172033]">
              Không tìm thấy thiết bị phù hợp bộ lọc
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Quý khách vui lòng thử tìm kiếm với từ khóa khác hoặc đặt lại bộ lọc để xem toàn bộ danh mục sản phẩm.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-3.5 py-1.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-lg transition-colors"
            >
              Xem Toàn Bộ Sản Phẩm
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => openQuickView(product)}
                className="group bg-white rounded-xl border border-slate-100 hover:border-slate-300 flex flex-col justify-between overflow-hidden cursor-pointer transition-colors"
              >
                {/* Image Box */}
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

                  {/* Stock badge */}
                  <div className="absolute bottom-2 right-2">
                    {product.inStock ? (
                      <span className="bg-emerald-100 text-emerald-800 text-[9px] font-semibold px-2 py-0.5 rounded">
                        Có sẵn kho
                      </span>
                    ) : (
                      <span className="bg-slate-100 text-slate-500 text-[9px] font-medium px-2 py-0.5 rounded">
                        Đặt hàng
                      </span>
                    )}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-slate-800 text-xs font-medium py-1 px-2.5 rounded-md shadow-sm flex items-center space-x-1">
                      <Eye className="w-3 h-3 text-brand-600" />
                      <span>Xem thông số</span>
                    </span>
                  </div>
                </div>

                {/* Card Info */}
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

                  {/* Card Actions */}
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
                      aria-label="Xem chi tiết"
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technical Support Help Banner - Clean flat */}
        <div className="bg-slate-100 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base sm:text-lg font-bold text-corporate-dark">
              Chưa tìm thấy mã thiết bị hoặc cần tra cứu tương đương?
            </h3>
            <p className="text-xs text-slate-500 max-w-2xl">
              Gửi hình ảnh nhãn nameplate của bơm, van hoặc xi lanh cũ. Đội ngũ kỹ sư của Quỳnh sẽ tra cứu catalogue hãng và tư vấn mã thay thế tương thích 100%.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <a
              href={`tel:${companyData.contact.hotline247Raw}`}
              className="px-4 py-2 bg-industrial-orange hover:bg-orange-600 text-white font-semibold text-xs rounded-lg flex items-center space-x-1.5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Hotline Kỹ Thuật: {companyData.contact.hotline247}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
