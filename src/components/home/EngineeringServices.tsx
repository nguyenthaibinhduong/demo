import React, { useState } from 'react';
import { Wrench, ArrowRight, PhoneCall, ChevronRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../../data/services';
import { useApp } from '../../context/AppContext';
import { companyData } from '../../data/company';

// Real AI industrial images for each service
const serviceAiVisuals: Record<string, { image: string; tag: string; metric: string }> = {
  'thiet-ke-tram-nguon': {
    image: '/hero2.jpg',
    tag: 'XƯỞNG CHẾ TẠO 500M² Q.7',
    metric: 'Áp suất 30 - 350 bar',
  },
  'suc-rua-duong-ong': {
    image: '/hero1.jpg',
    tag: 'SÚC RỬA ÁP SUẤT CAO',
    metric: 'Dòng chảy Reynolds > 4000',
  },
  'loc-dau-thuy-luc': {
    image: '/hero1.jpg',
    tag: 'LỌC TUẦN HOÀN ONLINE',
    metric: 'Không dừng máy sản xuất',
  },
  'kiem-tra-do-ban-dau': {
    image: '/hero3.jpg',
    tag: 'CHUẨN QUỐC TẾ ISO 4406',
    metric: 'Đo hạt cặn Laser chính xác',
  },
  'sua-chua-binh-tich-ap': {
    image: '/hero2.jpg',
    tag: 'BẢO TRÌ BÌNH TÍCH ÁP',
    metric: 'Nạp khí Nitơ N₂ đến 350 bar',
  },
};

export const EngineeringServices: React.FC = () => {
  const { setCurrentPage } = useApp();
  const [selectedServiceId, setSelectedServiceId] = useState<string>(servicesData[0].id);
  const activeService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];
  const visual = serviceAiVisuals[activeService.id] || {
    image: '/hero2.jpg',
    tag: 'DỊCH VỤ KỸ THUẬT',
    metric: 'Hỗ trợ 24/7 toàn quốc',
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - concise */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
          <div>
            <span className="text-[11px] uppercase tracking-widest font-bold text-brand-600 block mb-1">
              DỊCH VỤ KỸ THUẬT
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-corporate-dark">
              Gia Công Chế Tạo & Bảo Trì Hệ Thống Thủy Lực
            </h2>
          </div>
          <button
            onClick={() => setCurrentPage('services')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-800 flex items-center space-x-1 whitespace-nowrap self-start md:self-end"
          >
            <span>Tất cả dịch vụ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: 5 service selector list */}
          <div className="lg:col-span-5 space-y-1.5">
            {servicesData.map((service, index) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`p-3 rounded-xl cursor-pointer transition-all duration-200 flex items-center justify-between group ${
                    isSelected 
                      ? 'bg-brand-50 text-brand-900 shadow-sm' 
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <span className={`text-xs font-bold font-mono shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <h4 className={`text-xs sm:text-sm font-semibold truncate ${
                        isSelected ? 'text-brand-800' : 'text-slate-800 group-hover:text-brand-600'
                      }`}>
                        {service.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
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

            {/* Hotline banner */}
            <div className="mt-3 p-3.5 bg-orange-50/80 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-800">Cần kỹ sư khảo sát hiện trường?</p>
                <p className="text-[11px] text-slate-500">Đội xe kỹ thuật lưu động toàn quốc</p>
              </div>
              <a
                href={`tel:${companyData.contact.hotline247Raw}`}
                className="font-bold text-xs sm:text-sm text-industrial-orange hover:text-orange-600 flex items-center space-x-1 shrink-0 bg-white px-3 py-1.5 rounded-lg shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{companyData.contact.hotline247}</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Active service detail showcase with real AI images */}
          <div className="lg:col-span-7 bg-slate-50/70 rounded-2xl p-4 sm:p-5">
            {/* AI Image banner */}
            <div className="relative rounded-xl overflow-hidden aspect-[16/8] sm:aspect-[16/7] mb-4 bg-slate-900">
              <img
                key={activeService.id}
                src={visual.image}
                alt={activeService.title}
                className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute top-3 left-3 bg-brand-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                {visual.tag}
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-mono text-amber-300 block mb-0.5">
                  ✓ {visual.metric}
                </span>
                <h3 className="text-white font-bold text-base sm:text-lg leading-tight drop-shadow">
                  {activeService.title}
                </h3>
              </div>
            </div>

            {/* 4 workflow steps - concise */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
              {activeService.workflow.slice(0, 4).map((step) => (
                <div key={step.step} className="bg-white p-2.5 rounded-lg flex items-start space-x-2">
                  <span className="text-xs font-bold text-industrial-orange font-mono shrink-0">
                    0{step.step}.
                  </span>
                  <div className="min-w-0">
                    <h5 className="text-xs font-semibold text-slate-800 leading-snug">
                      {step.title}
                    </h5>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="pt-2 flex items-center justify-between border-t border-slate-200/70">
              <button
                onClick={() => setCurrentPage('services')}
                className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs rounded-lg flex items-center space-x-1.5 transition-colors"
              >
                <span>Xem quy trình chi tiết</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setCurrentPage('contact')}
                className="text-xs font-semibold text-slate-700 hover:text-brand-600 transition-colors"
              >
                Yêu cầu báo giá dịch vụ →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
