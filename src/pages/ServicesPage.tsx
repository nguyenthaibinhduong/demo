import React from 'react';
import { 
  Wrench, 
  CheckCircle2, 
  PhoneCall
} from 'lucide-react';
import { servicesData } from '../data/services';
import { companyData } from '../data/company';
import { useApp } from '../context/AppContext';

export const ServicesPage: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <div className="bg-[#F8FAFC] text-[#172033] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-700 shadow-xs">
            <Wrench className="w-4 h-4 text-industrial-orange" />
            <span>NĂNG LỰC DỊCH VỤ KỸ THUẬT CHUYÊN SÂU</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#172033] leading-tight">
            Dịch Vụ Chế Tạo & Bảo Trì <br />
            <span className="text-brand-600">
              Hệ Thống Thủy Lực – Khí Nén Toàn Diện
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed text-justify sm:text-center">
            Công ty Cổ phần Công nghệ Quỳnh cung cấp các dịch vụ kỹ thuật tiêu chuẩn châu Âu: từ tư vấn thiết kế chế tạo trạm nguồn theo yêu cầu tại xưởng 500m² đến dịch vụ súc rửa, lọc dầu tuần hoàn và cứu hộ sự cố thủy lực lưu động 24/7 tận nhà máy.
          </p>
        </div>

        {/* 5 Detailed Services Sections */}
        <div className="space-y-16">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div 
                key={service.id}
                id={service.id}
                className="bg-white border border-[#E5EAF0] rounded-3xl p-6 sm:p-10 transition-all hover:border-brand-400 space-y-8 shadow-sm"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Service Text & Benefits */}
                  <div className={`space-y-4 ${isEven ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'}`}>
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 rounded-lg bg-orange-50 text-industrial-orange font-mono font-bold flex items-center justify-center text-sm border border-orange-200">
                        0{index + 1}
                      </span>
                      <span className="text-xs font-mono text-brand-600 font-bold uppercase tracking-wider">
                        {service.tagline}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-[#172033]">
                      {service.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                      {service.description}
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Lợi ích then chốt:
                      </span>
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image & Key Specs */}
                  <div className={`space-y-4 ${isEven ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'}`}>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-[#E5EAF0] flex items-center justify-center min-h-[220px]">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="max-h-48 max-w-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Specifications table */}
                    <div className="grid grid-cols-2 gap-2">
                      {service.specifications.map((s) => (
                        <div key={s.label} className="bg-[#F8FAFC] p-3 rounded-xl border border-[#E5EAF0] text-center">
                          <span className="text-[10px] text-slate-500 uppercase block">{s.label}</span>
                          <span className="text-xs font-bold text-brand-600 block mt-0.5">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4 Steps Workflow Bar */}
                <div className="pt-6 border-t border-[#E5EAF0]">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                    Quy trình triển khai 4 bước:
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {service.workflow.map((step) => (
                      <div key={step.step} className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E5EAF0] space-y-1.5 shadow-xs">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-black font-mono text-industrial-orange">
                            {step.step}.
                          </span>
                          <h4 className="text-xs font-bold text-[#172033]">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-[11px] text-[#64748B] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Banner */}
        <div className="bg-gradient-to-r from-brand-50 via-white to-amber-50/50 border border-brand-200 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#172033]">
              Cần Đội Kỹ Sư Xuống Nhà Máy Khảo Sát?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Chúng tôi trang bị đầy đủ máy đếm laser đo độ bẩn dầu, bộ nạp khí Nitơ cao áp FPU và xe lọc di động sẵn sàng lên đường hỗ trợ.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setCurrentPage('contact')}
              className="w-full sm:w-auto px-6 py-3 bg-industrial-orange hover:bg-orange-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all active:scale-95"
            >
              Đặt Lịch Khảo Sát Hiện Trường
            </button>
            <a
              href={`tel:${companyData.contact.hotline247Raw}`}
              className="w-full sm:w-auto px-5 py-3 bg-white hover:bg-slate-50 text-[#172033] font-semibold text-xs sm:text-sm rounded-xl border border-slate-300 transition-colors text-center"
            >
              Hotline 24/7: {companyData.contact.hotline247}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
