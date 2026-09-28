import React, { useState } from 'react';
import { Wrench, ArrowRight, PhoneCall, ChevronRight } from 'lucide-react';
import { servicesData } from '../../data/services';
import { useApp } from '../../context/AppContext';
import { companyData } from '../../data/company';

// Unsplash industrial service images
const serviceBanners: Record<string, string> = {
  'thiet-ke-tram-nguon': 'https://images.unsplash.com/photo-1581093583449-8255a7d46e66?w=700&q=80',
  'suc-rua-duong-ong': 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=700&q=80',
  'loc-dau-thuy-luc': 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=700&q=80',
  'kiem-tra-do-ban-dau': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80',
  'sua-chua-binh-tich-ap': 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
};

const fallbackBanner = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80';

export const EngineeringServices: React.FC = () => {
  const { setCurrentPage } = useApp();
  const [selectedServiceId, setSelectedServiceId] = useState<string>(servicesData[0].id);
  const activeService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];
  const banner = serviceBanners[activeService.id] || fallbackBanner;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-7 gap-2">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-600 block mb-1">DỊCH VỤ KỸ THUẬT</span>
            <h2 className="text-xl font-bold text-corporate-dark">Trung Tâm Chế Tạo & Bảo Trì Thủy Lực</h2>
          </div>
          <button
            onClick={() => setCurrentPage('services')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center space-x-1 whitespace-nowrap"
          >
            <span>Xem tất cả dịch vụ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: service list */}
          <div className="lg:col-span-4 space-y-1">
            {servicesData.map((service, index) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`px-3 py-2.5 rounded-xl cursor-pointer transition-colors flex items-center justify-between group ${
                    isSelected ? 'bg-brand-50 text-brand-900' : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <span className={`text-xs font-bold font-mono shrink-0 w-5 ${isSelected ? 'text-brand-600' : 'text-slate-400'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <h4 className={`text-xs font-semibold truncate ${isSelected ? 'text-brand-800' : 'text-slate-800'}`}>{service.title}</h4>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">{service.tagline}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-brand-500' : 'text-slate-300'}`} />
                </div>
              );
            })}

            {/* Hotline box */}
            <div className="mt-3 px-3 py-3 bg-orange-50 rounded-xl">
              <p className="text-xs text-slate-600 mb-1.5">Cần khảo sát hiện trường?</p>
              <a
                href={`tel:${companyData.contact.hotline247Raw}`}
                className="font-bold text-sm text-industrial-orange flex items-center space-x-1.5"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{companyData.contact.hotline247}</span>
              </a>
            </div>
          </div>

          {/* RIGHT: service detail */}
          <div className="lg:col-span-8">
            {/* Banner image */}
            <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[16/7]">
              <img
                key={activeService.id}
                src={banner}
                alt={activeService.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent" />
              <div className="absolute left-4 bottom-4">
                <span className="text-[10px] text-white/70 font-mono uppercase block">QUY TRÌNH TIÊU CHUẨN CHÂU ÂU</span>
                <h3 className="text-white font-bold text-lg drop-shadow">{activeService.title}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeService.workflow.slice(0, 4).map((step) => (
                <div key={step.step} className="flex items-start space-x-2.5 p-3 bg-slate-50 rounded-xl">
                  <span className="text-sm font-bold text-industrial-orange font-mono shrink-0">{step.step}.</span>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">{step.title}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Specs row */}
            <div className="flex flex-wrap gap-2 mt-3">
              {activeService.specifications.map(spec => (
                <div key={spec.label} className="px-3 py-1.5 bg-white rounded-lg text-center">
                  <span className="block text-[10px] text-slate-400">{spec.label}</span>
                  <span className="text-xs font-bold text-brand-600">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setCurrentPage('services')}
                className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs rounded-lg flex items-center space-x-1.5 transition-colors"
              >
                <span>Chi tiết quy trình</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="px-4 py-2 text-slate-700 hover:text-brand-600 font-semibold text-xs rounded-lg transition-colors"
              >
                Yêu cầu báo giá →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
