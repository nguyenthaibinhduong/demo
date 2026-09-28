import React, { useState } from 'react';
import { 
  Wrench, 
  ArrowRight, 
  PhoneCall,
  Clock,
  ChevronRight
} from 'lucide-react';
import { servicesData } from '../../data/services';
import { useApp } from '../../context/AppContext';
import { companyData } from '../../data/company';

export const EngineeringServices: React.FC = () => {
  const { setCurrentPage } = useApp();
  const [selectedServiceId, setSelectedServiceId] = useState<string>(servicesData[0].id);

  const activeService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];

  return (
    <section className="py-12 bg-white text-[#172033]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1">
            <Wrench className="w-3.5 h-3.5 text-industrial-orange" />
            <span>DỊCH VỤ KỸ THUẬT CHUYÊN SÂU</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-corporate-dark">
            Trung Tâm Gia Công Chế Tạo & Bảo Trì Thủy Lực
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Sở hữu xưởng chế tạo trạm nguồn và trung tâm kỹ thuật 500m² tại Quận 7, TP.HCM cùng đội xe kỹ thuật lưu động sẵn sàng ứng cứu sự cố 24/7 trên toàn quốc.
          </p>
        </div>

        {/* Interactive Layout: Left Service Selector tabs (5 cols), Right Detailed Service View (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: Services Selector List */}
          <div className="lg:col-span-5 space-y-1.5">
            {servicesData.map((service, index) => {
              const isSelected = service.id === selectedServiceId;

              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`p-3 rounded-xl transition-colors cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-brand-50 text-brand-900'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-brand-600 text-white'
                        : 'bg-slate-100 text-slate-500 group-hover:text-brand-600'
                    }`}>
                      0{index + 1}
                    </div>

                    <div>
                      <h4 className={`text-xs sm:text-sm font-semibold transition-colors ${
                        isSelected ? 'text-brand-900' : 'text-slate-800 group-hover:text-brand-600'
                      }`}>
                        {service.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-brand-600 translate-x-0.5' : 'text-slate-300'
                  }`} />
                </div>
              );
            })}

            {/* Quick 24/7 Technical Support Call Box - Flat, clean */}
            <div className="p-4 rounded-xl bg-slate-50 mt-3 space-y-1.5">
              <div className="flex items-center space-x-1.5 text-xs font-semibold text-slate-800 uppercase">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Cần Đội Kỹ Thuật Khảo Sát Hiện Trường?</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Kỹ sư Quỳnh Engineering trực tiếp xuống nhà máy khảo sát mức độ nhiễm bẩn dầu, đo áp suất và lên phương án xử lý trong ngày.
              </p>
              <div className="pt-1 flex items-center justify-between">
                <a
                  href={`tel:${companyData.contact.hotline247Raw}`}
                  className="font-bold text-xs sm:text-sm text-industrial-orange hover:underline flex items-center space-x-1"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Hotline: {companyData.contact.hotline247}</span>
                </a>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="text-xs text-brand-600 font-semibold hover:text-brand-700"
                >
                  Đặt lịch khảo sát &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Detailed Service Showcase - Clean flat surface */}
          <div className="lg:col-span-7 bg-slate-50/70 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/60 pb-3">
              <div>
                <span className="text-[10px] font-mono text-brand-600 font-semibold uppercase tracking-wider block mb-0.5">
                  QUY TRÌNH TIÊU CHUẨN CHÂU ÂU
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-corporate-dark">
                  {activeService.title}
                </h3>
              </div>

              <div className="w-12 h-12 rounded-xl bg-white p-1.5 shrink-0 flex items-center justify-center">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed text-justify">
              {activeService.description}
            </p>

            {/* Workflow 4 Steps */}
            <div>
              <h4 className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                4 Bước Thực Hiện Chuẩn Hóa:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeService.workflow.map((step) => (
                  <div key={step.step} className="bg-white p-3 rounded-xl space-y-0.5">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-xs font-bold text-industrial-orange font-mono">
                        {step.step}.
                      </span>
                      <span className="text-xs font-semibold text-slate-800">
                        {step.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Specifications & Benefits - Flat cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-200/60">
              {activeService.specifications.map((spec) => (
                <div key={spec.label} className="bg-white p-2 rounded-lg text-center">
                  <span className="block text-[10px] text-slate-400 uppercase">{spec.label}</span>
                  <span className="text-xs font-bold text-brand-600 mt-0.5 block">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
              <button
                onClick={() => setCurrentPage('services')}
                className="w-full sm:w-auto px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs rounded-lg flex items-center justify-center space-x-1 transition-colors"
              >
                <span>Xem Quy Trình Kỹ Thuật Chi Tiết</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setCurrentPage('contact')}
                className="w-full sm:w-auto px-4 py-2 bg-slate-200/80 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-lg transition-colors text-center"
              >
                Yêu Cầu Báo Giá Dịch Vụ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
