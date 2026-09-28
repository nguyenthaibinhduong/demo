import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';
import { companyData } from '../data/company';
import { useApp } from '../context/AppContext';

export const AboutPage: React.FC = () => {
  const { setCurrentPage } = useApp();

  const milestones = [
    {
      year: "1993",
      title: "Thành Lập Doanh Nghiệp",
      desc: "Khởi đầu là đơn vị tiên phong tư vấn và cung ứng thiết bị thủy lực công nghiệp tại miền Nam trong thời kỳ đầu công nghiệp hóa."
    },
    {
      year: "2004",
      title: "Chuyển Đổi Thành Công Ty Cổ Phần Công Nghệ Quỳnh",
      desc: "Chính thức đăng ký MST 0303730904, mở rộng quan hệ đối tác đại lý chính thức với các tập đoàn thủy lực hàng đầu thế giới."
    },
    {
      year: "2012",
      title: "Hợp Tác Chiến Lược Cùng Rexroth Bosch & Hydac",
      desc: "Trở thành đại diện bán hàng chính thức phân phối thiết bị thủy lực Bosch Rexroth và thiết bị lọc dầu Hydac tại Việt Nam."
    },
    {
      year: "2018",
      title: "Mở Rộng Hệ Sinh Thái Emerson & Tự Động Hóa",
      desc: "Phân phối uỷ quyền dòng van Aventics, ASCO Emerson và thiết bị an toàn công nghiệp Schmersal (Đức)."
    },
    {
      year: "2026",
      title: "30+ Năm Vững Bước Dẫn Đầu",
      desc: "Sở hữu xưởng cơ khí 500m² tại Quận 7, TP.HCM với năng lực chế tạo trọn gói trạm nguồn thủy lực HPU và dịch vụ bảo trì lưu động toàn quốc."
    }
  ];

  return (
    <div className="bg-slate-50/50 text-[#172033] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 1. HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 bg-brand-50 px-3 py-1 rounded-full text-xs font-semibold text-brand-700">
            <Award className="w-3.5 h-3.5 text-industrial-orange" />
            <span>HÀNH TRÌNH 30+ NĂM PHÁT TRIỂN (1993 - 2026)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-corporate-dark leading-tight">
            Về Công Ty Cổ Phần <br />
            <span className="text-brand-600">
              Công Nghệ Quỳnh (Quynh Engineering)
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-justify sm:text-center">
            Công ty Cổ phần Công nghệ Quỳnh là công ty chuyên cung cấp các Giải Pháp Công Nghệ, Thiết Bị - Hệ Thống, Phụ Tùng Thủy Lực – Khí Nén và các Dịch Vụ Thiết Kế, Chế Tạo, Lắp Đặt, Sửa Chữa, Bảo Trì hệ thống thủy lực, khí nén cho các ngành công nghiệp trọng điểm tại Việt Nam.
          </p>
        </div>

        {/* 2. STATS OVERVIEW - Clean flat */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-white rounded-2xl text-center">
          {companyData.stats.map(s => (
            <div key={s.label} className="p-2">
              <div className="text-2xl sm:text-3xl font-bold text-industrial-orange">{s.value}</div>
              <div className="text-xs font-semibold text-slate-800 mt-1">{s.label}</div>
              <div className="text-[11px] text-slate-500">{s.sublabel}</div>
            </div>
          ))}
        </div>

        {/* 3. WORKSHOP & FACILITIES 500m2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-5 sm:p-8">
          <div className="space-y-3.5">
            <span className="text-[10px] font-mono text-brand-600 font-semibold uppercase tracking-wider block">
              CƠ SỞ VẬT CHẤT & NĂNG LỰC SẢN XUẤT
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-corporate-dark">
              Văn Phòng & Xưởng Chế Tạo 500 m² Tại Quận 7, TP.HCM
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed text-justify">
              Văn phòng chính và xưởng dịch vụ của Công ty Cổ phần Công nghệ Quỳnh tọa lạc tại Số 9, Đường 65, Phường Tân Phong, Quận 7, TP. Hồ Chí Minh với tổng diện tích 500 m². Cơ sở được chia thành các khu vực chức năng tiêu chuẩn:
            </p>

            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Khu văn phòng điều hành:</strong> Trung tâm kỹ thuật tính toán thiết kế mô phỏng 3D, phòng kinh doanh thương mại và bộ phận hỗ trợ khách hàng 24/7.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Xưởng cơ khí chế tạo trạm nguồn:</strong> Máy hàn, gia công đế van khối manifold block, máy uốn ống thép không hàn và giàn thử nghiệm áp lực tải tối đa đến 450 bar.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Kho hàng phụ tùng sẵn có:</strong> Tồn kho các dòng bơm Settima, van Rexroth/Aventics/ASCO, bình tích áp Hydac, rơ le an toàn Schmersal và phụ kiện ống VinilGomma.</span>
              </div>
            </div>

            <div className="pt-1">
              <a 
                href={companyData.headquarters.googleMapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-industrial-orange hover:underline"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Xem vị trí xưởng trên Google Maps &rarr;</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl overflow-hidden bg-slate-50 p-1">
              <img 
                src="https://www.quynh.vn/images/2025/28year_quynh_engineering.jpeg" 
                alt="Công nghệ Quỳnh - Trụ sở & Xưởng chế tạo"
                className="w-full h-auto rounded-lg object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://www.quynh.vn/images/s/tram-nguon-thuy-luc-hydraulics-power-unit.png";
                }}
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-industrial-orange text-white p-2.5 rounded-lg text-xs font-semibold hidden sm:block">
              Trụ sở Q.7, TP.HCM • Hoạt động từ 1993
            </div>
          </div>
        </div>

        {/* 4. OFFICIAL DISTRIBUTOR ACCREDITATION */}
        <div className="space-y-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-mono text-brand-600 font-semibold uppercase tracking-wider block mb-0.5">
              CHỨNG NHẬN ĐẠI LÝ CHÍNH THỨC
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-corporate-dark">
              Đại Diện Phân Phối Các Hãng Hàng Đầu Thế Giới
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Cam kết 100% sản phẩm có chứng nhận xuất xứ CO và chứng nhận chất lượng CQ từ nhà máy sản xuất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {companyData.certifications.map((cert, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white flex items-start space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-800 font-medium leading-relaxed">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. TIMELINE MILESTONES */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-mono text-industrial-orange font-semibold uppercase tracking-wider block mb-0.5">
              LỊCH SỬ PHÁT TRIỂN
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-corporate-dark">
              Các Mốc Son Phát Triển Của Quỳnh Engineering
            </h2>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-28 space-y-6 pl-5 sm:pl-6">
            {milestones.map((m) => (
              <div key={m.year} className="relative group">
                {/* Year Badge */}
                <div className="sm:absolute sm:-left-32 top-0 text-sm sm:text-base font-bold font-mono text-brand-600 bg-slate-50 sm:bg-transparent inline-block mb-1 sm:mb-0">
                  {m.year}
                </div>

                {/* Circle on timeline */}
                <div className="absolute -left-[27px] sm:-left-[31px] top-1.5 w-3 h-3 rounded-full bg-brand-600 border-2 border-white" />

                <div className="bg-white p-4 rounded-xl transition-colors">
                  <h3 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. BOTTOM CONTACT CTA */}
        <div className="bg-slate-100 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-corporate-dark">
              Sẵn Sàng Hợp Tác Kỹ Thuật Cùng Doanh Nghiệp Bạn
            </h3>
            <p className="text-xs text-slate-500 max-w-xl">
              Đội ngũ kỹ sư giàu kinh nghiệm của chúng tôi luôn sẵn sàng hỗ trợ khảo sát, tư vấn giải pháp tối ưu chi phí và độ bền hệ thống.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('contact')}
            className="px-5 py-2.5 bg-industrial-orange hover:bg-orange-600 text-white font-semibold text-xs rounded-lg transition-colors"
          >
            Liên Hệ Đặt Lịch Làm Việc
          </button>
        </div>
      </div>
    </div>
  );
};
