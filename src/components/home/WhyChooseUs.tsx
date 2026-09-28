import React from 'react';
import { 
  Award, 
  Clock, 
  Cpu, 
  Truck, 
  FileCheck2,
  Users2
} from 'lucide-react';
import { companyData } from '../../data/company';
import { useApp } from '../../context/AppContext';

export const WhyChooseUs: React.FC = () => {
  const { setCurrentPage } = useApp();

  const reasons = [
    {
      icon: Award,
      title: "Hơn 30 Năm Uy Tín (Từ 1993)",
      description: "Hơn 3 thập kỷ đồng hành cùng sự phát triển công nghiệp Việt Nam, phục vụ hàng nghìn đối tác nhà máy lớn.",
      badge: "Kinh nghiệm 30+ năm"
    },
    {
      icon: FileCheck2,
      title: "100% Chính Hãng Kèm CO/CQ",
      description: "Nhập khẩu trực tiếp chính ngạch từ các tập đoàn Bosch Rexroth, Hydac, Emerson, Settima, Eaton với đầy đủ chứng chỉ hợp chuẩn.",
      badge: "Nguồn gốc rõ ràng"
    },
    {
      icon: Cpu,
      title: "Xưởng Gia Công 500m² Tại TP.HCM",
      description: "Được trang bị máy móc thử tải, gia công đế van thủy lực manifold và chế tạo thùng dầu HPU theo bản vẽ thiết kế 3D.",
      badge: "Cơ sở vật chất"
    },
    {
      icon: Users2,
      title: "Đội Ngũ Kỹ Sư Chuyên Nghiệp",
      description: "Kỹ sư cơ điện tử và thủy lực giàu kinh nghiệm, thường xuyên được đào tạo chuyên sâu bởi các chuyên gia chính hãng từ Đức và Ý.",
      badge: "Chuyên môn cao"
    },
    {
      icon: Truck,
      title: "Kho Hàng Sẵn Sàng Giao Dự Án",
      description: "Tồn kho đa dạng các loại bơm, van điện từ, bình tích áp, rơ le an toàn và ống cao su đáp ứng tiến độ khẩn cấp của nhà máy.",
      badge: "Giao hàng nhanh"
    },
    {
      icon: Clock,
      title: "Hỗ Trợ Kỹ Thuật 24/7 Tận Nơi",
      description: "Đội ngũ kỹ thuật trực chiến 24/7 sẵn sàng xuống hiện trường xử lý sự cố tràn dầu, tụt áp trạm nguồn ngay trong ngày.",
      badge: "Phục vụ 24/7"
    }
  ];

  return (
    <section className="py-12 bg-white text-[#172033] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs uppercase font-semibold text-brand-600 tracking-wider block mb-1">
            VÌ SAO CHỌN CHÚNG TÔI
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-corporate-dark">
            Giá Trị Khác Biệt Của Quỳnh Engineering
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Cam kết chất lượng chuẩn Đức, giá trị kỹ thuật thực tế và đồng hành cùng sự an toàn của toàn bộ hệ thống máy móc.
          </p>
        </div>

        {/* 6 Grid Cards - Flat, clean surfaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r) => {
            const IconComponent = r.icon;
            return (
              <div
                key={r.title}
                className="bg-slate-50/70 hover:bg-slate-100/70 rounded-2xl p-5 flex flex-col justify-between group transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-white text-brand-600 flex items-center justify-center transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded">
                      {r.badge}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-brand-600 transition-colors mb-1.5">
                    {r.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner CTA inside WhyChooseUs - Flat, clean */}
        <div className="mt-8 bg-slate-50 rounded-2xl p-5 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center lg:text-left">
            <h3 className="text-base sm:text-lg font-bold text-corporate-dark">
              Cần Tư Vấn Kỹ Thuật Hoặc Báo Giá Dự Án Gấp?
            </h3>
            <p className="text-xs text-slate-500 max-w-xl">
              Gửi thông số pít-tông, lưu lượng bơm hoặc mã thiết bị cần thay thế. Chuyên viên kỹ thuật của Quỳnh sẽ liên hệ phản hồi ngay.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setCurrentPage('contact')}
              className="w-full sm:w-auto px-5 py-2.5 bg-industrial-orange hover:bg-orange-600 text-white font-semibold text-xs rounded-lg transition-colors"
            >
              Liên Hệ Kỹ Sư Quỳnh
            </button>
            <a
              href={`tel:${companyData.contact.hotline247Raw}`}
              className="w-full sm:w-auto px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs rounded-lg transition-colors text-center"
            >
              Hotline: {companyData.contact.hotline247}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
