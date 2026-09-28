import React from 'react';
import { 
  ArrowRight, 
  Layers, 
  Cpu, 
  Wrench, 
  Activity 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CategoryGrid: React.FC = () => {
  const { setCurrentPage, setSelectedCategory } = useApp();

  const categories = [
    {
      id: "hydraulic",
      title: "Thiết Bị Thủy Lực",
      subtitle: "Hydraulic Components & Systems",
      description: "Bơm trục xoắn siêu êm Settima, bơm Rexroth, van tỉ lệ & servo, xi lanh thủy lực áp cao, bình tích áp Hydac, mô tơ và lọc dầu.",
      image: "https://www.quynh.vn/images/b/banner-box-tron-thietbi-q.png",
      items: ["Bơm thủy lực Settima / Rexroth", "Van phân phối & van áp suất", "Bình tích áp Hydac SB330", "Mô tơ thủy lực Sauer Danfoss"],
      tag: "Trọng tâm",
    },
    {
      id: "pneumatic",
      title: "Thiết Bị Khí Nén & Tự Động Hóa",
      subtitle: "Pneumatics & Automation Systems",
      description: "Hệ thống van đảo chiều Aventics, van điện từ màng lọc ASCO Emerson, xi lanh khí nén ISO và bộ lọc điều áp bôi trơn FRL.",
      image: "https://www.quynh.vn/images/b/box_tron_giai_phap.png",
      items: ["Van điện từ ASCO Numatics", "Cảm biến dòng khí AVENTICS AF2", "Xi lanh khí nén tiêu chuẩn", "Cụm van đế đảo chiều thông minh"],
      tag: "Emerson Partner",
    },
    {
      id: "power-pack",
      title: "Chế Tạo Trạm Nguồn & Hệ Thống",
      subtitle: "Custom Hydraulic Power Units (HPU)",
      description: "Xưởng cơ khí 500m² tại Quận 7 chuyên thiết kế mạch 3D, gia công thùng dầu, tích hợp đế van manifold và tủ điều khiển tự động PLC.",
      image: "https://www.quynh.vn/images/s/tram-nguon-thuy-luc-hydraulics-power-unit.png",
      items: ["Trạm nguồn máy ép gạch, ép mùn cưa", "Bộ nguồn nâng hạ cửa van thủy điện", "Hệ thống tời cẩu boong tàu thủy", "Đế van phân phối Manifold Block"],
      tag: "Sản xuất xưởng 500m²",
    },
    {
      id: "services",
      title: "Dịch Vụ Kỹ Thuật Bảo Trì",
      subtitle: "On-site Field Engineering Services",
      description: "Đội ngũ kỹ sư lưu động phục vụ toàn quốc: Súc rửa đường ống áp lực cao, lọc dầu online không dừng máy, phân tích mẫu dầu và nạp Nitơ bình tích áp.",
      image: "https://www.quynh.vn/images/b/banner-box-tron-dichvu-q.png",
      items: ["Súc rửa đường ống flushing Re > 4000", "Lọc dầu tuần hoàn tách nước online", "Đo độ bẩn dầu bằng Laser ISO 4406", "Thay màng ruột & nạp Nitơ N2"],
      tag: "Hỗ trợ 24/7",
    }
  ];

  const handleCardClick = (cat: typeof categories[0]) => {
    if (cat.id === "services") {
      setCurrentPage("services");
    } else {
      setSelectedCategory(cat.id);
      setCurrentPage("products");
    }
  };

  return (
    <section className="py-12 bg-white text-corporate-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs uppercase font-semibold text-brand-600 tracking-wider block mb-1">
            NĂNG LỰC CỐT LÕI
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-corporate-dark">
            4 Trụ Cột Kỹ Thuật Của Công Nghệ Quỳnh
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Cung cấp giải pháp trọn gói từ cung ứng linh kiện chính hãng, thiết kế chế tạo trạm nguồn đến bảo trì kỹ thuật định kỳ cho nhà máy.
          </p>
        </div>

        {/* 4 Pillars Grid (Clean Flat Cards, No Heavy Borders/Shadows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCardClick(cat)}
              className="group bg-slate-50/70 hover:bg-slate-100/80 rounded-2xl p-5 flex flex-col justify-between cursor-pointer transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-semibold tracking-wide bg-white text-brand-700 px-2.5 py-0.5 rounded-full">
                    {cat.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center p-1">
                    <img 
                      src={cat.image} 
                      alt={cat.title}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {cat.title}
                </h3>
                <span className="block text-[10px] font-mono text-slate-400 font-medium mb-1.5">
                  {cat.subtitle}
                </span>

                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  {cat.description}
                </p>

                {/* Sub items */}
                <div className="space-y-1 pt-2 border-t border-slate-200/60">
                  {cat.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-1.5 text-xs text-slate-700">
                      <span className="w-1 h-1 rounded-full bg-brand-500 shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-brand-600 group-hover:text-brand-700">
                <span>Khám phá chi tiết</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
