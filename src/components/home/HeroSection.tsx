import React from 'react';
import { 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Cpu, 
  FileText, 
  Wrench, 
  Layers,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { companyData } from '../../data/company';

export const HeroSection: React.FC = () => {
  const { setCurrentPage, setIsQuoteDrawerOpen } = useApp();

  return (
    <section className="relative bg-white text-corporate-dark overflow-hidden pt-6 pb-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: VALUE PROPOSITION & CTAS (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Small label */}
            <div className="inline-flex items-center space-x-2 bg-brand-50 px-3 py-1 rounded-full text-xs font-semibold text-brand-700">
              <span className="flex h-1.5 w-1.5 rounded-full bg-industrial-orange" />
              <span>KỸ THUẬT TRUYỀN ĐỘNG & ĐIỀU KHIỂN • SINCE 1993</span>
            </div>

            {/* Main Heading in Dark Text - Refined smaller size */}
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight leading-snug text-corporate-dark">
              Giải pháp thủy lực, khí nén và <br className="hidden sm:inline" />
              <span className="text-brand-600">
                truyền động công nghiệp
              </span>
            </h1>

            {/* Description in Gray */}
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed mx-auto lg:mx-0 text-justify sm:text-left">
              Đại lý phân phối uỷ quyền chính thức <strong>Bosch Rexroth, Emerson, Hydac, Settima, Eaton</strong> tại Việt Nam từ năm 1993. Thiết kế chế tạo trạm nguồn thủy lực (HPU), cung cấp phụ tùng chính hãng và dịch vụ súc rửa, lọc dầu bảo trì công nghiệp toàn quốc.
            </p>

            {/* CTAs Button Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 pt-1">
              {/* Primary Blue CTA: Khám phá sản phẩm */}
              <button
                onClick={() => setCurrentPage('products')}
                className="w-full sm:w-auto px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center space-x-1.5 group"
              >
                <span>Khám phá sản phẩm</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Secondary CTA: Nhận tư vấn */}
              <button
                onClick={() => setCurrentPage('contact')}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm rounded-lg flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span>Nhận tư vấn kỹ thuật</span>
              </button>

              {/* Hotline link */}
              <a
                href={`tel:${companyData.contact.hotline247Raw}`}
                className="w-full sm:w-auto px-3.5 py-2.5 bg-orange-50 hover:bg-orange-100 text-orange-700 font-semibold text-xs sm:text-sm rounded-lg flex items-center justify-center space-x-1.5 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-industrial-orange" />
                <span>{companyData.contact.hotline247}</span>
              </a>
            </div>

            {/* Highlights List - Minimal without heavy border */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-left">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                <span className="text-xs text-slate-600 font-medium">100% Hàng CO/CQ Gốc</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                <span className="text-xs text-slate-600 font-medium">Kho Bãi 500m² TP.HCM</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                <span className="text-xs text-slate-600 font-medium">Kỹ Sư Hỗ Trợ 24/7</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: TECHNICAL SHOWCASE (CLEAN FLAT SURFACE, NO HEAVY BORDERS/SHADOWS) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="bg-slate-50/80 rounded-2xl p-5 space-y-4">
                {/* Technical engineering indicator */}
                <div className="flex items-center justify-between pb-1">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
                      <Cpu className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                        TRUNG TÂM KỸ THUẬT THỦY LỰC
                      </h4>
                      <span className="text-[11px] text-slate-500">Xưởng chế tạo 500m² tại Q.7, TP.HCM</span>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                    Sẵn Sàng Giao
                  </span>
                </div>

                {/* Hero Showcase Visual on Clean White Surface */}
                <div className="relative bg-white rounded-xl p-4 flex items-center justify-center min-h-[190px] overflow-hidden">
                  <img 
                    src="https://www.quynh.vn/images/2025/bom-thuy-luc-settima-continuum_1.png" 
                    alt="Bơm Thủy Lực Settima Continuum và Trạm nguồn Quỳnh" 
                    className="max-h-40 object-contain relative z-10 transition-transform hover:scale-105 duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://www.quynh.vn/images/2025/28year_quynh_engineering.jpeg";
                    }}
                  />
                  <div className="absolute bottom-2 left-3 bg-slate-900/80 text-white px-2 py-0.5 rounded text-[10px] font-medium z-20">
                    <span className="w-1.5 h-1.5 rounded-full bg-industrial-orange inline-block mr-1" />
                    Settima Continuum® • Bơm thủy lực siêu êm 300 bar
                  </div>
                </div>

                {/* 3 Pillars in Card - Flat buttons without heavy borders */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div 
                    onClick={() => setCurrentPage('services')}
                    className="p-2.5 rounded-xl bg-white hover:bg-brand-50 cursor-pointer transition-colors"
                  >
                    <Wrench className="w-4 h-4 text-brand-600 mx-auto mb-1" />
                    <span className="block text-[11px] font-bold text-slate-800">Chế Tạo HPU</span>
                    <span className="text-[9px] text-slate-500">Theo yêu cầu</span>
                  </div>

                  <div 
                    onClick={() => setCurrentPage('services')}
                    className="p-2.5 rounded-xl bg-white hover:bg-brand-50 cursor-pointer transition-colors"
                  >
                    <Layers className="w-4 h-4 text-brand-600 mx-auto mb-1" />
                    <span className="block text-[11px] font-bold text-slate-800">Súc Rửa Ống</span>
                    <span className="text-[9px] text-slate-500">Re &gt; 4000</span>
                  </div>

                  <div 
                    onClick={() => setCurrentPage('services')}
                    className="p-2.5 rounded-xl bg-white hover:bg-brand-50 cursor-pointer transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                    <span className="block text-[11px] font-bold text-slate-800">Đo Bẩn Dầu</span>
                    <span className="text-[9px] text-slate-500">ISO 4406</span>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-0.5 text-center">
                  <button
                    onClick={() => setCurrentPage('services')}
                    className="text-xs font-semibold text-brand-600 hover:text-brand-800 flex items-center justify-center space-x-1 mx-auto transition-colors"
                  >
                    <span>Khám phá năng lực xưởng cơ khí 500m²</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS BAR COUNTER (CLEAN FLAT) */}
        <div className="mt-10 pt-6 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {companyData.stats.map((stat) => (
            <div key={stat.label} className="space-y-0.5">
              <div className="text-2xl sm:text-3xl font-bold text-brand-600">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-800">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
