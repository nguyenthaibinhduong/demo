import React from 'react';
import { Award, Clock, Cpu, Truck, FileCheck2, Users2, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { companyData } from '../../data/company';

const reasons = [
  { icon: Award,     title: '30+ Năm Uy Tín', sub: 'Từ 1993 – hàng nghìn nhà máy đối tác' },
  { icon: FileCheck2,title: '100% CO/CQ Chính Hãng', sub: 'Bosch Rexroth · Hydac · Emerson · Settima' },
  { icon: Cpu,       title: 'Xưởng 500m² TP.HCM', sub: 'Chế tạo HPU theo bản vẽ 3D, thử tải' },
  { icon: Users2,    title: 'Kỹ Sư Chuyên Nghiệp', sub: 'Đào tạo bởi chuyên gia Đức, Ý' },
  { icon: Truck,     title: 'Kho Hàng Sẵn Sàng', sub: 'Bơm, van, ống, sensor – giao nhanh' },
  { icon: Clock,     title: 'Hỗ Trợ 24/7 Tận Nơi', sub: 'Đội kỹ thuật lưu động toàn quốc' },
];

export const WhyChooseUs: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <section className="py-12 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-600 block mb-1">VÌ SAO CHỌN CHÚNG TÔI</span>
            <h2 className="text-xl font-bold text-corporate-dark">Giá Trị Khác Biệt Của Quỳnh Engineering</h2>
          </div>
          <button
            onClick={() => setCurrentPage('about')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center space-x-1"
          >
            <span>Tìm hiểu thêm</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6 flat cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="bg-white rounded-2xl p-4 flex items-start space-x-3 group hover:bg-blue-50 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors">
                  <Icon className="w-4 h-4 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-800 group-hover:text-brand-700 transition-colors leading-tight">{r.title}</h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{r.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="mt-6 bg-brand-600 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
          {/* Decorative circle */}
          <div className="absolute right-0 top-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-base">Cần tư vấn kỹ thuật hoặc báo giá dự án?</h3>
            <p className="text-blue-100 text-xs mt-0.5">Phản hồi trong vòng 30 phút – kỹ sư Quỳnh trực tiếp hỗ trợ</p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-5 py-2 bg-industrial-orange hover:bg-orange-500 text-white font-semibold text-xs rounded-lg transition-colors"
            >
              Liên hệ ngay
            </button>
            <a
              href={`tel:${companyData.contact.hotline247Raw}`}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white font-semibold text-xs rounded-lg transition-colors"
            >
              {companyData.contact.hotline247}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
