import React, { useState } from 'react';
import { 
  PhoneCall, 
  MapPin, 
  Clock, 
  Building2, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronDown
} from 'lucide-react';
import { companyData } from '../data/company';
import { useApp } from '../context/AppContext';

export const ContactPage: React.FC = () => {
  const { showToast } = useApp();

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    department: 'all',
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast("Tin nhắn liên hệ của Quý khách đã được gửi thành công đến Quỳnh Engineering!");
  };

  const faqs = [
    {
      q: "Công ty Cổ phần Công nghệ Quỳnh có cung cấp đầy đủ chứng chỉ CO / CQ không?",
      a: "100% thiết bị thủy lực và khí nén do Quỳnh Engineering cung cấp (Bosch Rexroth, Hydac, Emerson, Settima, Eaton...) đều được nhập khẩu chính ngạch kèm Giấy chứng nhận xuất xứ (Certificate of Origin - CO) và Giấy chứng nhận chất lượng (Certificate of Quality - CQ) gốc từ nhà sản xuất."
    },
    {
      q: "Thời gian kỹ sư Quỳnh có mặt tại nhà máy để khảo sát sự cố là bao lâu?",
      a: "Đối với khu vực TP.HCM, Bình Dương, Đồng Nai, Long An và Bà Rịa - Vũng Tàu, đội kỹ thuật ứng cứu sự cố của chúng tôi có thể xuất phát và có mặt tại nhà máy trong vòng 2 - 4 giờ làm việc. Đối với các tỉnh thành xa hơn hoặc dự án thủy điện/mỏ khoáng sản, thời gian xử lý từ 12 - 24 giờ."
    },
    {
      q: "Quy trình thiết kế và chế tạo trạm nguồn thủy lực HPU tại xưởng mất bao lâu?",
      a: "Tùy thuộc vào quy mô và độ phức tạp: Với các trạm nguồn công suất nhỏ đến trung bình (dưới 500L), thời gian hoàn thiện gia công thùng dầu, uốn ống và chạy thử tải tại xưởng 500m² từ 7 - 14 ngày. Với các hệ thống trạm nguồn lớn điều khiển tự động PLC hoặc đóng mở cửa van thủy điện, thời gian từ 3 - 6 tuần."
    },
    {
      q: "Dịch vụ lọc dầu thủy lực tuần hoàn có cần ngưng vận hành nhà máy không?",
      a: "Hoàn toàn không. Trạm lọc di động của Quỳnh Engineering hoạt động theo nguyên lý mạch lọc nhánh độc lập (Off-line kidney loop), hút dầu từ đáy thùng và trả dầu sạch về thùng trong khi các máy móc dây chuyền sản xuất của Quý khách vẫn làm việc 100% công suất bình thường."
    }
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#172033] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-700 shadow-xs">
            <PhoneCall className="w-4 h-4 text-industrial-orange" />
            <span>KẾT NỐI VỚI CHUYÊN GIA KỸ THUẬT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#172033] leading-tight">
            Liên Hệ & Yêu Cầu <br />
            <span className="text-brand-600">
              Hỗ Trợ Kỹ Thuật 24/7
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed text-justify sm:text-center">
            Quý khách có nhu cầu báo giá thiết bị, khảo sát hệ thống thủy lực nhà máy hoặc chế tạo trạm nguồn theo yêu cầu, vui lòng liên hệ trực tiếp với các đường dây nóng chuyên trách hoặc gửi thông tin theo biểu mẫu bên dưới.
          </p>
        </div>

        {/* 3 Hotlines Department Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#E5EAF0] rounded-3xl p-6 flex flex-col justify-between space-y-4 hover:border-brand-400 transition-colors shadow-sm">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-industrial-orange flex items-center justify-center border border-orange-200">
                <PhoneCall className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="text-base font-bold text-[#172033]">Hotline Kỹ Thuật 24/7</h3>
              <p className="text-xs text-[#64748B]">Ứng cứu sự cố, hỗ trợ kỹ thuật khẩn cấp và tiếp nhận dự án mới.</p>
            </div>
            <a 
              href={`tel:${companyData.contact.hotline247Raw}`}
              className="text-lg font-black text-industrial-orange hover:underline block"
            >
              {companyData.contact.hotline247}
            </a>
          </div>

          <div className="bg-white border border-[#E5EAF0] rounded-3xl p-6 flex flex-col justify-between space-y-4 hover:border-brand-400 transition-colors shadow-sm">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center border border-blue-200">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#172033]">Chuyên Trách Thủy Lực</h3>
              <p className="text-xs text-[#64748B]">Bơm Settima, Rexroth, xi lanh thủy lực, bình tích áp Hydac, trạm nguồn HPU.</p>
            </div>
            <a 
              href={`tel:${companyData.contact.hydraulicsPhoneRaw}`}
              className="text-lg font-black text-brand-600 hover:underline block"
            >
              {companyData.contact.hydraulicsPhone}
            </a>
          </div>

          <div className="bg-white border border-[#E5EAF0] rounded-3xl p-6 flex flex-col justify-between space-y-4 hover:border-brand-400 transition-colors shadow-sm">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#172033]">Chuyên Trách Khí Nén & Van</h3>
              <p className="text-xs text-[#64748B]">Van Aventics, ASCO Emerson, rơ le an toàn Schmersal, thiết bị làm sạch Kärcher.</p>
            </div>
            <a 
              href={`tel:${companyData.contact.pneumaticsPhoneRaw}`}
              className="text-lg font-black text-emerald-700 hover:underline block"
            >
              {companyData.contact.pneumaticsPhone}
            </a>
          </div>
        </div>

        {/* Contact Form + Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white border border-[#E5EAF0] rounded-3xl p-6 sm:p-10 shadow-sm">
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono text-brand-600 font-bold uppercase tracking-wider block mb-1">
                GỬI YÊU CẦU TRỰC TIẾP
              </span>
              <h2 className="text-2xl font-black text-[#172033]">
                Biểu Mẫu Tiếp Nhận Thông Tin & Báo Giá
              </h2>
              <p className="text-xs text-[#64748B] mt-1">
                Kỹ sư phụ trách sẽ liên hệ lại qua điện thoại và gửi email bảng báo giá chi tiết trong vòng 15 - 30 phút.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50/60 rounded-2xl border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-[#172033]">Cảm Ơn Quý Khách Đã Liên Hệ!</h3>
                <p className="text-xs text-slate-700 max-w-md mx-auto">
                  Yêu cầu của Quý khách đã được chuyển tới bộ phận kỹ thuật thương mại Công nghệ Quỳnh. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 bg-brand-600 text-xs font-bold text-white rounded-xl hover:bg-brand-700 shadow-xs"
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Họ và tên <span className="text-industrial-orange">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullname}
                      onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full bg-[#F8FAFC] border border-[#DCE3EC] rounded-xl px-3.5 py-2.5 text-xs text-[#172033] placeholder-slate-400 focus:outline-none focus:border-brand-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Số điện thoại <span className="text-industrial-orange">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="09xx xxx xxx"
                      className="w-full bg-[#F8FAFC] border border-[#DCE3EC] rounded-xl px-3.5 py-2.5 text-xs text-[#172033] placeholder-slate-400 focus:outline-none focus:border-brand-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email nhận báo giá <span className="text-industrial-orange">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@doanhnghiep.vn"
                      className="w-full bg-[#F8FAFC] border border-[#DCE3EC] rounded-xl px-3.5 py-2.5 text-xs text-[#172033] placeholder-slate-400 focus:outline-none focus:border-brand-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Tên Công ty / Nhà máy
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Công ty CP / TNHH..."
                      className="w-full bg-[#F8FAFC] border border-[#DCE3EC] rounded-xl px-3.5 py-2.5 text-xs text-[#172033] placeholder-slate-400 focus:outline-none focus:border-brand-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Khu vực / Địa chỉ công trình
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="KCN Sóng Thần, KCN Nhơn Trạch..."
                      className="w-full bg-[#F8FAFC] border border-[#DCE3EC] rounded-xl px-3.5 py-2.5 text-xs text-[#172033] placeholder-slate-400 focus:outline-none focus:border-brand-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phân loại yêu cầu
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-[#DCE3EC] rounded-xl px-3.5 py-2.5 text-xs text-[#172033] focus:outline-none focus:border-brand-600"
                    >
                      <option value="all">Báo giá thiết bị thủy lực / khí nén</option>
                      <option value="hpu">Thiết kế chế tạo trạm nguồn HPU</option>
                      <option value="flushing">Dịch vụ súc rửa đường ống flushing</option>
                      <option value="oil">Lọc dầu tuần hoàn & kiểm tra độ bẩn</option>
                      <option value="accum">Sửa chữa & nạp Nitơ bình tích áp</option>
                      <option value="other">Hợp tác dự án / Đại lý</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nội dung yêu cầu kỹ thuật & tiến độ giao hàng <span className="text-industrial-orange">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Vui lòng cung cấp mã thiết bị, hãng sản xuất, lưu lượng áp suất hoặc yêu cầu khảo sát hiện trường..."
                    className="w-full bg-[#F8FAFC] border border-[#DCE3EC] rounded-xl p-3 text-xs text-[#172033] placeholder-slate-400 focus:outline-none focus:border-brand-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-industrial-orange hover:bg-orange-600 text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi Yêu Cầu Liên Hệ & Báo Giá</span>
                </button>
              </form>
            )}
          </div>

          {/* Headquarters Info & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono text-brand-600 font-bold uppercase tracking-wider block mb-1">
                TRỤ SỞ & XƯỞNG CHẾ TẠO
              </span>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E5EAF0] space-y-2">
                  <h4 className="font-bold text-[#172033] text-sm">
                    {companyData.name}
                  </h4>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-industrial-orange shrink-0 mt-0.5" />
                    <span>{companyData.headquarters.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Quy mô: {companyData.headquarters.area}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{companyData.contact.workingHours}</span>
                  </div>
                </div>

                <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E5EAF0] space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Điện thoại văn phòng:</span>
                    <strong className="text-[#172033]">{companyData.contact.officeTel}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Số Fax:</span>
                    <strong className="text-[#172033]">{companyData.contact.fax}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Email giao dịch:</span>
                    <strong className="text-brand-600">{companyData.contact.email}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Mã số thuế:</span>
                    <strong className="text-emerald-700">{companyData.contact.taxId}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed iframe */}
            <div className="rounded-2xl overflow-hidden border border-[#E5EAF0] h-64 bg-slate-50 relative shadow-xs">
              <iframe
                title="Bản đồ đường đi Công Nghệ Quỳnh"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.9859618117675!2d106.70632082913482!3d10.738811317139723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528c2922697ef%3A0xf0553370907d4f26!2sQu%E1%BB%B3nh+Engineering+Corporation!5e0!3m2!1sen!2s!4v1446473791668"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono text-industrial-orange font-bold uppercase tracking-wider block mb-1">
              HỎI ĐÁP THƯỜNG GẶP
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#172033]">
              Giải Đáp Thắc Mắc Kỹ Thuật
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = activeFaq === i;

              return (
                <div
                  key={i}
                  className="bg-white border border-[#E5EAF0] rounded-2xl overflow-hidden transition-colors shadow-xs"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#172033]">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-brand-600 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-[#64748B] leading-relaxed border-t border-[#E5EAF0] pt-3 text-justify">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
