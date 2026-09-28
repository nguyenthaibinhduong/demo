import React from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  ChevronRight,
  Send
} from 'lucide-react';
import { companyData } from '../../data/company';
import { brandPartners } from '../../data/brands';
import { useApp } from '../../context/AppContext';

export const Footer: React.FC = () => {
  const { setCurrentPage, showToast } = useApp();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Cảm ơn Quý khách đã đăng ký nhận bản tin kỹ thuật từ Quỳnh Engineering!");
  };

  return (
    <footer 
      className="relative text-[#172033] border-t border-slate-200 bg-cover bg-center bg-no-repeat bg-[url(https://www.quynh.vn/themes/vip/img/bgmain.jpg)]"
      
    >
      {/* 1. BRAND TRUST / PARTNERS ACCREDITATION MARQUEE */}
      <div className="border-b border-slate-200/60 py-6 bg-white/60 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-[11px] uppercase font-semibold tracking-wider text-slate-400">
              ĐẠI DIỆN & PHÂN PHỐI UỶ QUYỀN CHÍNH THỨC CÁC HÃNG TOÀN CẦU TẠI VIỆT NAM
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {brandPartners.slice(0, 8).map((b) => (
              <div 
                key={b.id}
                className="bg-slate-50/70 hover:bg-slate-100 p-2 rounded-lg transition-colors flex items-center justify-center h-10 w-24 sm:w-28 group"
                title={`${b.name} - ${b.country}`}
              >
                <img 
                  src={b.logo} 
                  alt={b.name} 
                  className="max-h-6 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerText = b.name;
                      e.currentTarget.parentElement.className = "text-xs font-semibold text-[#172033] text-center";
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company Profile (2 spans) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center p-2 text-white font-black text-xl shadow-xs">
                Q
              </div>
              <div>
                <h3 className="text-base font-black text-[#172033] tracking-wide">
                  CÔNG TY CỔ PHẦN CÔNG NGHỆ QUỲNH
                </h3>
                <span className="text-xs text-brand-600 font-bold uppercase tracking-wider">
                  QUYNH ENGINEERING CORPORATION
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed text-justify">
              Được thành lập từ năm 1993, Công ty Cổ phần Công nghệ Quỳnh là đơn vị tiên phong cung cấp giải pháp đồng bộ, thiết bị phụ tùng Thủy lực - Khí nén và dịch vụ kỹ thuật chế tạo trạm nguồn tại Việt Nam.
            </p>

            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-industrial-orange shrink-0 mt-0.5" />
                <span>{companyData.headquarters.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-brand-600 shrink-0" />
                <span>Quy mô trung tâm kỹ thuật & kho: {companyData.headquarters.area}</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Mã số thuế: <strong>{companyData.contact.taxId}</strong> (Sở KH&ĐT TP.HCM cấp)</span>
              </div>
            </div>

            {/* Direct hotline box - Clean flat */}
            <div className="p-3.5 rounded-xl bg-white space-y-1">
              <div className="text-[10px] font-semibold text-slate-400 uppercase">Đường dây nóng kỹ thuật 24/7:</div>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <a 
                  href={`tel:${companyData.contact.hotline247Raw}`}
                  className="text-base font-bold text-industrial-orange flex items-center space-x-1.5 hover:underline"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{companyData.contact.hotline247}</span>
                </a>
                <span className="text-xs text-slate-500">
                  Email: <a href={`mailto:${companyData.contact.email}`} className="text-brand-600 font-medium hover:underline">{companyData.contact.email}</a>
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Danh Mục Sản Phẩm */}
          <div>
            <h4 className="text-sm font-bold text-[#172033] uppercase tracking-wider mb-4 border-l-2 border-brand-600 pl-2.5">
              Sản Phẩm & Phụ Tùng
            </h4>
            <ul className="space-y-2 text-xs text-[#64748B]">
              <li>
                <button onClick={() => setCurrentPage('products')} className="hover:text-brand-600 flex items-center space-x-1 transition-colors text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Bơm Thủy Lực Settima & Rexroth</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('products')} className="hover:text-brand-600 flex items-center space-x-1 transition-colors text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Van Khí Nén Aventics & ASCO</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('products')} className="hover:text-brand-600 flex items-center space-x-1 transition-colors text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Bình Tích Áp Thủy Lực Hydac</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('products')} className="hover:text-brand-600 flex items-center space-x-1 transition-colors text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Cảm Biến Áp Suất SUCO & ESI</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('products')} className="hover:text-brand-600 flex items-center space-x-1 transition-colors text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>An Toàn Băng Tải Schmersal</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('products')} className="hover:text-brand-600 flex items-center space-x-1 transition-colors text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Máy Phun Rửa Cao Áp Kärcher</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('products')} className="hover:text-brand-600 flex items-center space-x-1 transition-colors text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Ống Mềm Cao Áp VinilGomma</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Dịch Vụ Kỹ Thuật */}
          <div>
            <h4 className="text-sm font-bold text-[#172033] uppercase tracking-wider mb-4 border-l-2 border-industrial-orange pl-2.5">
              Dịch Vụ Kỹ Thuật
            </h4>
            <ul className="space-y-2 text-xs text-[#64748B]">
              <li>
                <button onClick={() => setCurrentPage('services')} className="hover:text-brand-600 flex items-center space-x-1 transition-colors text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Thiết kế & chế tạo Trạm nguồn HPU</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('services')} className="hover:text-brand-600 flex items-center space-x-1 transition-colors text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Súc rửa đường ống thủy lực áp cao</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('services')} className="hover:text-brand-600 flex items-center space-x-1 transition-colors text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Lọc dầu tuần hoàn online không dừng máy</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('services')} className="hover:text-brand-600 flex items-center space-x-1 transition-colors text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Đo & phân tích độ bẩn dầu ISO 4406</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('services')} className="hover:text-brand-600 flex items-center space-x-1 transition-colors text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Sửa chữa & nạp Nitơ bình tích áp</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('services')} className="hover:text-brand-600 flex items-center space-x-1 transition-colors text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Hợp đồng bảo trì nhà máy trọn gói</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Bản Tin & Đăng Ký */}
          <div>
            <h4 className="text-sm font-bold text-[#172033] uppercase tracking-wider mb-4 border-l-2 border-emerald-600 pl-2.5">
              Bản Tin Kỹ Thuật
            </h4>
            <p className="text-xs text-[#64748B] mb-3">
              Nhận tài liệu kỹ thuật, cẩm nang bảo dưỡng thủy lực và thông báo hàng dự án mới nhất.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input 
                  type="email" 
                  name="email"
                  id="newsletter-email"
                  required
                  placeholder="Nhập địa chỉ email..."
                  className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-[#172033] placeholder-slate-400 focus:outline-none focus:border-brand-600 transition-colors"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs py-2 px-3 rounded-lg flex items-center justify-center space-x-1.5 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Đăng Ký Nhận Tin</span>
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-200/60">
              <span className="text-[11px] text-slate-500 block mb-2 font-medium">Kết nối cùng chúng tôi:</span>
              <div className="flex items-center space-x-2">
                <a href={companyData.social.facebook} target="_blank" rel="noreferrer" className="w-7 h-7 rounded-lg bg-white hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-600 transition-colors" title="Facebook">
                  <span className="text-xs font-bold">f</span>
                </a>
                <a href={companyData.social.youtube} target="_blank" rel="noreferrer" className="w-7 h-7 rounded-lg bg-white hover:bg-red-600 hover:text-white flex items-center justify-center text-slate-600 transition-colors" title="YouTube">
                  <span className="text-xs font-bold">YT</span>
                </a>
                <a href={companyData.social.linkedin} target="_blank" rel="noreferrer" className="w-7 h-7 rounded-lg bg-white hover:bg-blue-700 hover:text-white flex items-center justify-center text-slate-600 transition-colors" title="LinkedIn">
                  <span className="text-xs font-bold">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. COPYRIGHT & BOTTOM BAR */}
      <div className="bg-slate-900/5 backdrop-blur-xs border-t border-slate-200/80 py-4 text-xs text-[#64748B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © 1993 - 2026 <strong>CÔNG TY CỔ PHẦN CÔNG NGHỆ QUỲNH</strong>. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-[11px]">
            <button onClick={() => setCurrentPage('about')} className="hover:text-brand-600 transition-colors">Về chúng tôi</button>
            <span>•</span>
            <button onClick={() => setCurrentPage('contact')} className="hover:text-brand-600 transition-colors">Chính sách bảo hành</button>
            <span>•</span>
            <button onClick={() => setCurrentPage('contact')} className="hover:text-brand-600 transition-colors">Báo giá dự án</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
