export interface CompanyInfo {
  name: string;
  shortName: string;
  brandName: string;
  foundedYear: number;
  yearsOfExperience: number;
  slogan: string;
  description: string;
  headquarters: {
    address: string;
    area: string;
    city: string;
    country: string;
    googleMapUrl: string;
  };
  contact: {
    hotline247: string;
    hotline247Raw: string;
    hydraulicsPhone: string;
    hydraulicsPhoneRaw: string;
    pneumaticsPhone: string;
    pneumaticsPhoneRaw: string;
    officeTel: string;
    fax: string;
    email: string;
    taxId: string;
    workingHours: string;
  };
  social: {
    facebook: string;
    linkedin: string;
    youtube: string;
    twitter: string;
  };
  stats: {
    value: string;
    label: string;
    sublabel: string;
  }[];
  certifications: string[];
}

export const companyData: CompanyInfo = {
  name: "CÔNG TY CỔ PHẦN CÔNG NGHỆ QUỲNH",
  shortName: "Quỳnh Engineering",
  brandName: "CÔNG NGHỆ QUỲNH",
  foundedYear: 1993,
  yearsOfExperience: 32,
  slogan: "Kỹ thuật Truyền động & Điều khiển - Hệ thống - Giải pháp đồng bộ cho mọi ứng dụng công nghiệp",
  description: "Chuyên cung cấp các Giải Pháp Công Nghệ, Thiết Bị - Hệ Thống, Phụ Tùng Thủy Lực & Khí Nén và các Dịch Vụ Thiết Kế, Chế Tạo Trạm Nguồn, Lắp Đặt, Sửa Chữa, Bảo Trì hệ thống công nghiệp tại Việt Nam từ năm 1993.",
  headquarters: {
    address: "Số 9, Đường 65, Phường Tân Phong, Quận 7, TP. Hồ Chí Minh",
    area: "500 m² (Văn phòng điều hành, Trung tâm kỹ thuật & Kho bãi tiêu chuẩn)",
    city: "TP. Hồ Chí Minh",
    country: "Việt Nam",
    googleMapUrl: "https://maps.google.com/?q=Quynh+Engineering+Corporation+Tan+Phong+Quan+7+TPHCM"
  },
  contact: {
    hotline247: "+84 908 00 88 25",
    hotline247Raw: "0908008825",
    hydraulicsPhone: "+84 903 939 027",
    hydraulicsPhoneRaw: "0903939027",
    pneumaticsPhone: "+84 908 998 396",
    pneumaticsPhoneRaw: "0908998396",
    officeTel: "+84 28 3771 5330",
    fax: "+84 28 3771 5320",
    email: "info@quynh.vn",
    taxId: "0303730904",
    workingHours: "Thứ 2 - Thứ 6: 08:00 - 17:30 | Thứ 7: 08:00 - 12:00 (Kỹ thuật hỗ trợ 24/7)"
  },
  social: {
    facebook: "https://www.facebook.com/quynh.com.vn",
    linkedin: "https://www.linkedin.com/company/quynh-engineering-corp",
    youtube: "https://www.youtube.com/channel/UCdXCJN4zxKo9baFh-WBq2Yw",
    twitter: "https://twitter.com/quynhcorp"
  },
  stats: [
    {
      value: "30+",
      label: "Năm Kinh Nghiệm",
      sublabel: "Tiên phong từ 1993"
    },
    {
      value: "25+",
      label: "Thương Hiệu Toàn Cầu",
      sublabel: "Đại diện uỷ quyền chính hãng"
    },
    {
      value: "500+",
      label: "Dự Án Trọng Điểm",
      sublabel: "Dầu khí, thủy điện, xi măng, thép"
    },
    {
      value: "100%",
      label: "Chứng Chỉ CO / CQ",
      sublabel: "Nhập khẩu chính ngạch"
    }
  ],
  certifications: [
    "Đại diện bán hàng chính thức REXROTH BOSCH GROUP (Đức) tại Việt Nam",
    "Nhà phân phối uỷ quyền HYDAC INTERNATIONAL (Đức)",
    "Đối tác chiến lược EMERSON (Aventics, Asco, Tescom, Topworx)",
    "Đại diện phân phối EATON / VICKERS & SETTIMA",
    "Chứng nhận an toàn công nghiệp SCHMERSAL (Đức)"
  ]
};
