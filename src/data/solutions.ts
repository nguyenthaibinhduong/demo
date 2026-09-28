export interface IndustrialSolution {
  id: string;
  title: string;
  industry: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  technologies: string[];
  keyResults: string[];
}

export const solutionsData: IndustrialSolution[] = [
  {
    id: "emerson-lop-xe",
    title: "Giải Pháp Khí Nén & Tự Động Hóa Emerson Cho Nhà Máy Sản Xuất Lốp Xe",
    industry: "Sản Xuất Ô Tô & Lốp Xe",
    image: "https://www.quynh.vn/images/2026/emerson_1.jpeg",
    summary: "Ứng dụng cụm van đảo chiều Aventics và cảm biến lưu lượng thông minh AF2 giúp tối ưu chu kỳ lưu hóa lốp và giảm 28% tiêu hao năng lượng khí nén.",
    challenge: "Công đoạn lưu hóa lốp đòi hỏi kiểm soát cực kỳ nghiêm ngặt về áp suất hơi nóng và thời gian đóng mở khuôn. Sự dao động áp suất khí nén gây phế phẩm và hao phí điện năng của máy nén khí.",
    solution: "Quỳnh Engineering phối hợp cùng Emerson triển khai cụm đảo van khí nén thông minh Aventics kết nối truyền thông công nghiệp Profinet, tích hợp cảm biến giám sát rò rỉ tức thời AF2 để cảnh báo hao hụt khí nén ngay trong từng chu kỳ sản xuất.",
    technologies: ["Aventics Valve Island", "Cảm biến dòng khí AF2", "Van điện từ ASCO chịu nhiệt cao"],
    keyResults: [
      "Giảm 28% lượng khí nén tiêu hao do phát hiện rò rỉ kịp thời",
      "Tăng độ ổn định áp suất lưu hóa lốp lên 99.8%",
      "Kéo dài tuổi thọ cụm van khí nén lên trên 5 năm làm việc liên tục"
    ]
  },
  {
    id: "schmersal-bang-tai-xi-mang",
    title: "Hệ Thống Giám Sát An Toàn Tuyến Băng Tải Tải Nặng Nhà Máy Xi Măng",
    industry: "Xi Măng, Khai Khoáng & Cảng Biển",
    image: "https://www.quynh.vn/images/2026/schmersal_t.441-11y-m20-243_belt_alignment_switch.jpg",
    summary: "Lắp đặt chuỗi công tắc lệch băng Schmersal và công tắc giật dây khẩn cấp chống đứt rách băng tải trên các tuyến vận chuyển clinker ngoài trời.",
    challenge: "Băng tải dài hàng nghìn mét làm việc trong môi trường bụi clinker đậm đặc, độ ẩm và rung chấn mạnh. Hiện tượng lệch băng tải nếu không ngắt kịp sẽ làm rách nát dây băng cao su gây thiệt hại hàng tỷ đồng và ngưng trệ sản xuất nhiều ngày.",
    solution: "Thiết kế và lắp đặt hệ thống công tắc giám sát lệch băng Schmersal vỏ gang đúc siêu bền, báo động 2 cấp: cấp 1 (15°) cảnh báo người vận hành cân chỉnh, cấp 2 (30°) ngắt khẩn cấp động cơ kéo.",
    technologies: ["Công tắc lệch băng Schmersal T.441", "Công tắc kéo dây dừng khẩn ZS 71", "Rơ le an toàn SRB Series"],
    keyResults: [
      "Ngăn ngừa hoàn toàn sự cố rách nát dây băng do xô lệch",
      "Tiêu chuẩn bảo vệ IP65 chống bụi và nước tuyệt đối ngoài trời",
      "Đạt chuẩn an toàn quốc tế khắt khe EN ISO 13849-1"
    ]
  },
  {
    id: "thuy-dien-cua-van",
    title: "Bộ Nguồn & Hệ Thống Xi Lanh Thủy Lực Đóng Mở Cửa Van Thủy Điện",
    industry: "Thủy Điện & Năng Lượng Tái Tạo",
    image: "https://www.quynh.vn/images/b/box_tron_giai_phap.png",
    summary: "Hệ thống trạm nguồn thủy lực điều khiển cửa van cung (radial gate) và cửa van đĩa xả đáy với hệ thống bình tích áp khí Nitơ dự phòng đóng khẩn cấp khi mất điện lưới.",
    challenge: "Yêu cầu an toàn cấp quốc gia: Khi đập thủy điện mất toàn bộ nguồn điện lưới, hệ thống thủy lực vẫn phải tự động xả áp hoặc đóng kín cửa xả lũ trong thời gian ấn định để đảm bảo an toàn hồ đập.",
    solution: "Quỳnh Engineering tính toán và lắp ráp cụm trạm nguồn kép chạy luân phiên, tích hợp dàn bình tích áp màng Hydac SB330 dự trữ năng lượng thủy lực đủ để vận hành 3 chu kỳ đóng mở cửa van hoàn toàn tự động.",
    technologies: ["Bộ nguồn Quỳnh HPU", "Bình tích áp Hydac SB330", "Van khối Rexroth Manifold", "Dầu chống cháy sinh học"],
    keyResults: [
      "Đảm bảo đóng mở khẩn cấp 100% độc lập khi mất điện lưới",
      "Độ tin cậy kỹ thuật liên tục trên 10 năm không sự cố",
      "Được nghiệm thu bởi hội đồng kỹ thuật các nhà máy thủy điện lớn"
    ]
  },
  {
    id: "thep-luyen-kim",
    title: "Nâng Cấp Hệ Thống Thủy Lực Máy Cán Thép Chịu Nhiệt Độ Cực Đoan",
    industry: "Luyện Kim & Cán Thép",
    image: "https://www.quynh.vn/images/b/banner.jpg",
    summary: "Tích hợp van servo tỉ lệ Rexroth và cụm lọc dầu tuần hoàn công suất cao cho giàn giá cán thép hình và thép cuộn.",
    challenge: "Môi trường bụi vảy cán thép nóng trên 900°C và nước phun làm mát khiến dầu thủy lực dễ bị nhiễm bẩn và suy giảm độ nhớt nhanh chóng, gây dao động kích thước sản phẩm cán.",
    solution: "Cung cấp van tỉ lệ và cụm bơm trục xoắn Settima chống mài mòn, lắp đặt hệ thống lọc dầu tuần hoàn liên tục không dừng máy và sử dụng ống mềm VinilGomma bọc sợi thủy tinh cách nhiệt.",
    technologies: ["Van Servo Rexroth", "Bơm Settima Continuum", "Lọc dầu tuần hoàn Hydac", "Ống bọc cách nhiệt VinilGomma"],
    keyResults: [
      "Dung sai độ dày thép cán cải thiện từ ±0.15mm xuống ±0.03mm",
      "Kéo dài chu kỳ thay dầu từ 6 tháng lên hơn 2 năm",
      "Giảm thiểu 90% sự cố dừng máy đột xuất do kẹt van"
    ]
  }
];
