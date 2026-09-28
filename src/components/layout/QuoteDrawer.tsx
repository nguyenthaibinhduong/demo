import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Send, 
  CheckCircle2, 
  Building2, 
  User, 
  Phone, 
  Mail, 
  FileText,
  Clock
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { companyData } from '../../data/company';

export const QuoteDrawer: React.FC = () => {
  const { 
    isQuoteDrawerOpen, 
    setIsQuoteDrawerOpen, 
    quoteItems, 
    updateQuoteQuantity, 
    removeFromQuote,
    clearQuote,
    showToast 
  } = useApp();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    projectNotes: ''
  });

  if (!isQuoteDrawerOpen) return null;

  const totalItemCount = quoteItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    showToast("Yêu cầu báo giá kỹ thuật đã được gửi thành công!");
  };

  const handleResetAndClose = () => {
    setFormSubmitted(false);
    clearQuote();
    setIsQuoteDrawerOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsQuoteDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-lg w-full bg-white border-l border-[#E5EAF0] shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300">
        {/* Top Title Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E5EAF0] flex items-center justify-between bg-[#F8FAFC]">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-industrial-orange">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-[#172033]">
                Danh Sách Yêu Cầu Báo Giá
              </h3>
              <p className="text-xs text-[#64748B]">
                {quoteItems.length} sản phẩm • {totalItemCount} thiết bị
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsQuoteDrawerOpen(false)}
            aria-label="Đóng bảng báo giá"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Success Confirmation State */}
        {formSubmitted ? (
          <div className="flex-1 p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 animate-bounce shadow-xs">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h4 className="text-xl font-bold text-[#172033]">
              Đã Nhận Yêu Cầu Báo Giá!
            </h4>

            <div className="bg-[#F8FAFC] rounded-2xl p-4 text-xs text-slate-700 border border-[#E5EAF0] max-w-sm text-left space-y-2 shadow-xs">
              <div className="flex justify-between border-b border-[#E5EAF0] pb-1.5">
                <span className="text-[#64748B]">Mã yêu cầu (RFQ):</span>
                <span className="font-mono font-bold text-brand-600">RFQ-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div className="flex justify-between border-b border-[#E5EAF0] pb-1.5">
                <span className="text-[#64748B]">Khách hàng:</span>
                <span className="font-semibold text-[#172033]">{formData.fullName || "Kỹ sư dự án"}</span>
              </div>
              <div className="flex justify-between border-b border-[#E5EAF0] pb-1.5">
                <span className="text-[#64748B]">Đơn vị:</span>
                <span className="font-semibold text-[#172033]">{formData.company || "Doanh nghiệp"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Thời gian phản hồi:</span>
                <span className="text-emerald-700 font-semibold">Trong vòng 15 - 30 phút</span>
              </div>
            </div>

            <p className="text-xs text-[#64748B] max-w-xs leading-relaxed">
              Bộ phận kỹ thuật thương mại của Công nghệ Quỳnh sẽ liên hệ lại trực tiếp qua số điện thoại <strong>{formData.phone || "của Quý khách"}</strong> để gửi báo giá chi tiết và catalogue kỹ thuật.
            </p>

            <div className="pt-2 w-full space-y-2">
              <a
                href={`tel:${companyData.contact.hotline247Raw}`}
                className="w-full py-2.5 px-4 bg-industrial-orange hover:bg-orange-600 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-xs"
              >
                <span>Cần gấp? Gọi Hotline {companyData.contact.hotline247}</span>
              </a>

              <button
                onClick={handleResetAndClose}
                className="w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors border border-slate-200"
              >
                Đóng & Tạo Yêu Cầu Mới
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
              {quoteItems.length === 0 ? (
                <div className="h-64 flex flex-col items-center justify-center text-center p-6 text-slate-400 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                    <FileText className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">
                    Chưa có thiết bị nào trong danh sách báo giá
                  </p>
                  <p className="text-xs text-[#64748B] max-w-xs">
                    Vui lòng bấm nút <strong>"Báo giá"</strong> tại các sản phẩm hoặc dịch vụ để thêm vào danh sách yêu cầu.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 pb-1 border-b border-[#E5EAF0]">
                    <span>Sản phẩm & Linh kiện đã chọn:</span>
                    <button
                      onClick={clearQuote}
                      className="text-red-500 hover:text-red-700 hover:underline font-medium"
                    >
                      Xóa tất cả
                    </button>
                  </div>

                  {quoteItems.map((item) => (
                    <div 
                      key={item.product.id}
                      className="p-3 bg-white rounded-xl border border-[#E5EAF0] shadow-xs flex items-start space-x-3 group hover:border-brand-400 transition-colors"
                    >
                      <img 
                        src={item.product.image} 
                        alt={item.product.name}
                        className="w-14 h-14 object-contain rounded-lg bg-slate-50 p-1 border border-slate-200 shrink-0"
                        onError={(e) => {
                          e.currentTarget.src = "https://www.quynh.vn/images/2025/28year_quynh_engineering.jpeg";
                        }}
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="text-xs font-bold text-[#172033] line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromQuote(item.product.id)}
                            aria-label="Xóa sản phẩm"
                            className="text-slate-400 hover:text-red-500 p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="flex items-center space-x-2 text-[11px] text-[#64748B] mt-0.5">
                          <span className="font-mono text-brand-600 font-semibold">{item.product.code}</span>
                          <span>•</span>
                          <span className="font-semibold text-industrial-orange">{item.product.brand}</span>
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-[#E5EAF0]">
                          <span className="text-[11px] text-slate-500">Số lượng:</span>
                          <div className="flex items-center space-x-1.5 bg-slate-100 border border-slate-200 rounded-md p-0.5">
                            <button
                              onClick={() => updateQuoteQuantity(item.product.id, item.quantity - 1)}
                              className="w-5 h-5 flex items-center justify-center text-slate-600 hover:text-[#172033] hover:bg-white rounded"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-[#172033] w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuoteQuantity(item.product.id, item.quantity + 1)}
                              className="w-5 h-5 flex items-center justify-center text-slate-600 hover:text-[#172033] hover:bg-white rounded"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Form Section */}
              {quoteItems.length > 0 && (
                <form id="rfq-form" onSubmit={handleSubmit} className="mt-5 pt-4 border-t border-[#E5EAF0] space-y-3">
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-[#172033] uppercase tracking-wider">
                    <span>Thông tin liên hệ nhận báo giá:</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">
                        Họ và tên <span className="text-industrial-orange">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Nguyễn Văn A"
                          className="w-full bg-white border border-[#DCE3EC] rounded-lg pl-8 pr-3 py-1.5 text-xs text-[#172033] placeholder-slate-400 focus:outline-none focus:border-brand-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">
                        Số điện thoại <span className="text-industrial-orange">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="09xx xxx xxx"
                          className="w-full bg-white border border-[#DCE3EC] rounded-lg pl-8 pr-3 py-1.5 text-xs text-[#172033] placeholder-slate-400 focus:outline-none focus:border-brand-600"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">
                        Công ty / Nhà máy
                      </label>
                      <div className="relative">
                        <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Tên công ty"
                          className="w-full bg-white border border-[#DCE3EC] rounded-lg pl-8 pr-3 py-1.5 text-xs text-[#172033] placeholder-slate-400 focus:outline-none focus:border-brand-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">
                        Email nhận file báo giá <span className="text-industrial-orange">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@company.vn"
                          className="w-full bg-white border border-[#DCE3EC] rounded-lg pl-8 pr-3 py-1.5 text-xs text-[#172033] placeholder-slate-400 focus:outline-none focus:border-brand-600"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">
                      Ghi chú thông số kỹ thuật hoặc tiến độ cần hàng
                    </label>
                    <textarea
                      rows={2}
                      value={formData.projectNotes}
                      onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                      placeholder="Ví dụ: Cần CO/CQ gốc, giao hàng tại Khu công nghiệp..."
                      className="w-full bg-white border border-[#DCE3EC] rounded-lg p-2 text-xs text-[#172033] placeholder-slate-400 focus:outline-none focus:border-brand-600"
                    />
                  </div>
                </form>
              )}
            </div>

            {/* Bottom Actions */}
            {quoteItems.length > 0 && (
              <div className="p-4 sm:p-5 bg-[#F8FAFC] border-t border-[#E5EAF0] space-y-2">
                <button
                  type="submit"
                  form="rfq-form"
                  className="w-full py-3 px-4 bg-industrial-orange hover:bg-orange-600 text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi Yêu Cầu Báo Giá Kỹ Thuật</span>
                </button>

                <div className="flex items-center justify-center space-x-1.5 text-[11px] text-slate-500 pt-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Kỹ sư Quỳnh Engineering phản hồi trong 15-30 phút</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
