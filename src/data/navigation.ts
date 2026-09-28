export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
    icon?: string;
  }[];
}

export const navigationData: NavItem[] = [
  {
    label: "Trang Chủ",
    href: "home",
  },
  {
    label: "Giới Thiệu",
    href: "about",
    children: [
      {
        label: "Về Công Nghệ Quỳnh",
        href: "about",
        description: "Hơn 30 năm tiên phong kỹ thuật truyền động và điều khiển từ 1993."
      },
      {
        label: "Đối Tác & Thương Hiệu",
        href: "about",
        description: "Đại lý phân phối uỷ quyền 25+ hãng hàng đầu thế giới."
      },
      {
        label: "Năng Lực Xưởng & Kho Bãi",
        href: "about",
        description: "Xưởng gia công trạm nguồn và kho 500 m² tại Quận 7, TP.HCM."
      }
    ]
  },
  {
    label: "Sản Phẩm",
    href: "products",
    children: [
      {
        label: "Thiết Bị Thủy Lực",
        href: "products?cat=hydraulic",
        description: "Bơm thủy lực, van phân phối, xi lanh, mô tơ, bình tích áp, lọc dầu."
      },
      {
        label: "Thiết Bị Khí Nén",
        href: "products?cat=pneumatic",
        description: "Van khí nén Aventics/ASCO, xi lanh khí nén, bộ lọc điều áp bôi trơn FRL."
      },
      {
        label: "Cảm Biến & Đo Lường",
        href: "products?cat=sensor",
        description: "Cảm biến áp suất SUCO, ESI, cảm biến lưu lượng dòng khí AF2."
      },
      {
        label: "An Toàn Tự Động Hóa",
        href: "products?cat=automation",
        description: "Công tắc lệch băng tải Schmersal, rơ le an toàn, khóa liên động."
      },
      {
        label: "Thiết Bị Làm Sạch Kärcher",
        href: "products?cat=cleaning",
        description: "Máy phun rửa áp lực cao nước nóng / lạnh công nghiệp dự án."
      },
      {
        label: "Trạm Nguồn Chế Tạo (HPU)",
        href: "products?cat=power-pack",
        description: "Bộ nguồn thiết kế theo yêu cầu tích hợp van khối manifold."
      }
    ]
  },
  {
    label: "Dịch Vụ",
    href: "services",
    children: [
      {
        label: "Thiết Kế & Chế Tạo Trạm Nguồn",
        href: "services#tram-nguon-thuy-luc",
        description: "Tính toán lưu lượng, áp lực, thiết kế 3D và chạy thử nghiệm tải."
      },
      {
        label: "Súc Rửa Đường Ống Áp Cao",
        href: "services#suc-rua-duong-ong",
        description: "Sục rửa dòng chảy rối Reynolds > 4000 tẩy sạch xỉ hàn trước khi chạy máy."
      },
      {
        label: "Lọc Dầu Tuần Hoàn Online",
        href: "services#loc-dau-thuy-luc",
        description: "Lọc sạch cặn bẩn và tách nước khi máy vẫn đang hoạt động 100%."
      },
      {
        label: "Kiểm Tra Độ Bẩn Dầu",
        href: "services#kiem-tra-do-ban-dau",
        description: "Đo đếm hạt cặn quang học laser theo tiêu chuẩn ISO 4406 & NAS 1638."
      },
      {
        label: "Sửa Chữa & Nạp Bình Tích Áp",
        href: "services#sua-chua-va-thay-the-binh-tich-ap",
        description: "Thay màng ruột cao su và nạp khí Nitơ N2 áp suất cao đến 350 bar."
      }
    ]
  },
  {
    label: "Giải Pháp",
    href: "solutions",
    children: [
      {
        label: "Nhà Máy Sản Xuất Lốp Xe & Ô Tô",
        href: "solutions#emerson-lop-xe",
        description: "Tự động hóa chu kỳ khí nén Emerson tiết kiệm năng lượng 28%."
      },
      {
        label: "Tuyến Băng Tải Xi Măng & Khoáng Sản",
        href: "solutions#schmersal-bang-tai-xi-mang",
        description: "Giám sát lệch băng Schmersal chống đứt rách dây chuyền tải nặng."
      },
      {
        label: "Hệ Thống Thủy Điện & Hồ Đập",
        href: "solutions#thuy-dien-cua-van",
        description: "Trạm nguồn và xi lanh đóng mở cửa van xả lũ tích hợp bình tích áp khẩn cấp."
      },
      {
        label: "Luyện Kim & Cán Thép",
        href: "solutions#thep-luyen-kim",
        description: "Van servo tỉ lệ Rexroth và bơm Settima chịu môi trường cực đoan."
      }
    ]
  },
  {
    label: "Tin Tức",
    href: "news"
  },
  {
    label: "Liên Hệ",
    href: "contact"
  }
];
