export interface EngineeringService {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  image: string;
  description: string;
  benefits: string[];
  workflow: {
    step: string;
    title: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  featured: boolean;
}

export const servicesData: EngineeringService[] = [
  {
    id: "tram-nguon-thuy-luc",
    title: "Thiết Kế & Chế Tạo Trạm Nguồn Thủy Lực (HPU)",
    slug: "thiet-ke-che-tao-tram-nguon-thuy-luc",
    tagline: "Tính toán lưu lượng, công suất động cơ, thiết kế 3D và gia công thùng dầu đồng bộ",
    image: "https://www.quynh.vn/images/s/tram-nguon-thuy-luc-hydraulics-power-unit.png",
    description: "Công ty Cổ phần Công nghệ Quỳnh sở hữu xưởng cơ khí chế tạo và kho bãi 500m² tại Quận 7, TP.HCM, trang bị đầy đủ máy móc gia công đế van (manifold block), uốn ống thép không hàn và tủ điều khiển tự động hóa. Chúng tôi nhận chế tạo mọi cấu hình trạm nguồn từ dân dụng 5 bar đến công nghiệp nặng 450 bar sử dụng thiết bị chính hãng Bosch Rexroth, Settima, Eaton.",
    benefits: [
      "Bản vẽ thiết kế cơ khí 3D và sơ đồ nguyên lý mạch thủy lực chuẩn quốc tế ISO 1219",
      "Sử dụng 100% linh kiện chính hãng Rexroth, Settima, Yuken, Hydac có chứng chỉ CO/CQ",
      "Kiểm tra chạy thử nghiệm tải tối đa (full load pressure testing) 100% trước khi xuất xưởng",
      "Bảo hành 24 tháng kèm hợp đồng cam kết kỹ thuật hỗ trợ tận nơi 24/7"
    ],
    workflow: [
      {
        step: "01",
        title: "Khảo Sát & Nhận Đề Bài",
        description: "Kỹ sư Quỳnh tiếp nhận yêu cầu về tải trọng pít-tông, tốc độ chu kỳ, nguồn điện và môi trường làm việc."
      },
      {
        step: "02",
        title: "Tính Toán & Mô Phỏng Thủy Lực",
        description: "Tính toán thể tích thùng dầu, công suất motor, chọn loại bơm (trục xoắn/cánh gạt/piston) và thiết kế mạch van khối manifold."
      },
      {
        step: "03",
        title: "Gia Công Cơ Khí & Lắp Ráp",
        description: "Hàn thùng dầu chống rỉ bên trong, uốn ống thủy lực chuẩn không rò rỉ, đấu nối tủ điện điều khiển PLC."
      },
      {
        step: "04",
        title: "Test Áp Lực, Lọc Dầu & Bàn Giao",
        description: "Chạy thử 24h liên tục, đo kiểm tra độ bẩn dầu đạt chuẩn NAS 6 - 8, hướng dẫn vận hành và bàn giao."
      }
    ],
    specifications: [
      { label: "Dung tích thùng dầu", value: "50 - 5.000 Lít" },
      { label: "Áp suất làm việc danh định", value: "Lên đến 450 Bar" },
      { label: "Công suất động cơ điện", value: "1.5 kW - 200 kW" },
      { label: "Tiêu chuẩn độ sạch xuất xưởng", value: "ISO 4406: 16/14/11 (NAS 6)" }
    ],
    featured: true
  },
  {
    id: "suc-rua-duong-ong",
    title: "Súc Rửa Đường Ống Thủy Lực (High-Velocity Flushing)",
    slug: "suc-rua-duong-ong",
    tagline: "Loại bỏ xỉ hàn, cát đúc và bụi bẩn cơ khí trong đường ống trước khi kết nối thiết bị",
    image: "https://www.quynh.vn/images/s/sucruaduongong.png",
    description: "Hơn 75% các sự cố hư hỏng bơm và kẹt van thủy lực bắt nguồn từ cặn bẩn sót lại trong hệ thống ống mới lắp đặt. Quỳnh Engineering cung cấp gói dịch vụ súc rửa đường ống tốc độ dòng chảy cao (Re > 4000 dòng chảy rối) với dàn xe bơm chuyên dụng công suất lớn, đảm bảo tẩy sạch mọi mạt sắt và xỉ hàn bám dính trên thành ống.",
    benefits: [
      "Tạo dòng chảy rối Reynolds > 4000 giúp bóc tách triệt để mọi tạp chất khỏi thành ống",
      "Trang bị dàn lọc bypass đa tầng micron (3µm, 5µm, 10µm) giữ lại hoàn toàn cặn cơ học",
      "Tiết kiệm chi phí thay thế pít-tông và bơm đắt tiền trước khi nghiệm thu nhà máy",
      "Cung cấp chứng chỉ kiểm định hạt cặn online bằng máy đếm laser đạt chuẩn quốc tế"
    ],
    workflow: [
      {
        step: "01",
        title: "Đấu Nối Mạch Vòng Tuần Hoàn (Looping)",
        description: "Cô lập các van servo và xi lanh nhạy cảm bằng ống mềm bypass, kết nối trạm súc rửa công suất lớn."
      },
      {
        step: "02",
        title: "Gia Nhiệt Dầu & Bơm Súc Rửa Vận Tốc Cao",
        description: "Nâng nhiệt dầu súc rửa lên 50-60°C để giảm độ nhớt và tăng hiệu quả sục rửa dòng rối."
      },
      {
        step: "03",
        title: "Gõ Xung Cơ Học Bằng Búa Khí Nén",
        description: "Tạo xung kích động trên các vị trí uốn cong và mối hàn để làm bong tróc xỉ hàn bám chắc."
      },
      {
        step: "04",
        title: "Đo Đếm Hạt Bẩn & Nghiệm Thu",
        description: "Lấy mẫu dầu kiểm tra bằng máy đo laser online đến khi đạt tiêu chuẩn chấp thuận của nhà sản xuất thiết bị."
      }
    ],
    specifications: [
      { label: "Lưu lượng trạm súc rửa", value: "Lên đến 1.200 Lít/phút" },
      { label: "Cấp lọc micron", value: "3 micron tuyệt đối (Beta > 200)" },
      { label: "Tiêu chuẩn lưu lượng rối", value: "Số Reynolds Re ≥ 4.000" },
      { label: "Thời gian xử lý", value: "1 - 3 ngày tùy quy mô tuyến ống" }
    ],
    featured: true
  },
  {
    id: "loc-dau-thuy-luc",
    title: "Lọc Dầu Thủy Lực Tuần Hoàn Online",
    slug: "loc-dau-thuy-luc",
    tagline: "Lọc sạch dầu ngay khi máy đang vận hành - Không cần dừng sản xuất hay thay dầu mới",
    image: "https://www.quynh.vn/images/s/locdauthuyluc.png",
    description: "Thay mới toàn bộ vài nghìn lít dầu thủy lực công nghiệp vô cùng tốn kém và ô nhiễm môi trường. Dịch vụ lọc dầu thủy lực tuần hoàn bằng trạm lọc di động của Quỳnh Engineering giúp loại bỏ hoàn toàn cặn rắn, bùn vecni hóa (varnish) và nước tự do/nhũ tương, phục hồi phẩm chất dầu về tương đương dầu mới mà không làm gián đoạn dây chuyền.",
    benefits: [
      "Vận hành lọc song song (Off-line kidney loop) khi máy móc nhà máy vẫn hoạt động 100%",
      "Tách nước tự do và nước hòa tan trong dầu xuống dưới 50 ppm",
      "Kéo dài tuổi thọ dầu thủy lực lên gấp 3 - 5 lần, tiết kiệm hàng trăm triệu đồng chi phí thay dầu",
      "Bảo vệ gioăng phớt, giảm nhiệt độ làm việc của trạm nguồn"
    ],
    workflow: [
      {
        step: "01",
        title: "Lấy Mẫu Ban Đầu & Đo Độ Nhớt",
        description: "Kiểm tra độ nhớt cSt, hàm lượng nước, màu sắc và mức độ nhiễm bẩn hiện trạng."
      },
      {
        step: "02",
        title: "Lắp Đặt Xe Lọc Tuần Hoàn",
        description: "Hút dầu từ đáy thùng qua các cấp lọc thô, lọc tinh và lõi tách nước chuyên dụng Hydac."
      },
      {
        step: "03",
        title: "Giám Sát Độ Sạch Liên Tục",
        description: "Quan sát chỉ số áp lực chênh lệch lọc và kiểm tra mẫu định kỳ mỗi 6 giờ."
      },
      {
        step: "04",
        title: "Cấp Báo Cáo Chất Lượng Dầu",
        description: "Bàn giao biên bản phân tích dầu đạt chuẩn trước và sau khi lọc."
      }
    ],
    specifications: [
      { label: "Lưu lượng xe lọc", value: "40 - 150 Lít/phút" },
      { label: "Lõi lọc sử dụng", value: "Hydac Betamicron® chính hãng Đức" },
      { label: "Hiệu quả tách nước", value: "Hàm lượng nước tồn dư < 50 ppm" },
      { label: "Độ sạch đạt được", value: "NAS 5 - NAS 7 (ISO 15/13/10)" }
    ],
    featured: true
  },
  {
    id: "kiem-tra-do-ban-dau",
    title: "Kiểm Tra & Phân Tích Độ Bẩn Dầu Thủy Lực",
    slug: "kiem-tra-do-ban-dau",
    tagline: "Phân tích hạt cặn theo tiêu chuẩn ISO 4406 & NAS 1638 bằng máy đếm quang học laser",
    image: "https://www.quynh.vn/images/s/dodobandau.png",
    description: "Độ bẩn của dầu là 'kẻ thù vô hình' hủy hoại bề mặt van servo và pít-tông bơm thủy lực. Quỳnh Engineering cung cấp dịch vụ lấy mẫu tại chỗ và đo đếm số lượng hạt kim loại ở các kích thước 4µm, 6µm, 14µm. Kết quả đo được xuất thành báo cáo kỹ thuật rõ ràng, kèm khuyến nghị bảo trì thiết thực cho đội ngũ kỹ thuật nhà máy.",
    benefits: [
      "Phát hiện sớm nguy cơ mài mòn bơm và kẹt spool van trước khi xảy ra sự cố dừng máy",
      "Đánh giá chính xác thời điểm cần thay lõi lọc hoặc lọc tuần hoàn",
      "Máy đo cầm tay laser Hydac / Parker chính xác tuyệt đối",
      "Có kết quả đo nhanh chóng trong vòng 30 phút ngay tại hiện trường"
    ],
    workflow: [
      {
        step: "01",
        title: "Lấy Mẫu Dầu Chuẩn Quy Cách",
        description: "Lấy mẫu từ cổng đo chuyên dụng khi hệ thống đang vận hành ở nhiệt độ làm việc bình thường."
      },
      {
        step: "02",
        title: "Đo Đếm Hạt Bằng Laser",
        description: "Đo số lượng hạt cặn ở 3 kênh kích cỡ: > 4µm(c), > 6µm(c), > 14µm(c)."
      },
      {
        step: "03",
        title: "Xác Định Cấp Độ Bẩn",
        description: "Quy đổi kết quả ra mã số tiêu chuẩn quốc tế ISO 4406:1999 hoặc bảng phân hạng NAS 1638."
      },
      {
        step: "04",
        title: "Lập Bản Báo Cáo Kỹ Thuật",
        description: "Gửi báo cáo phân tích chi tiết kèm tư vấn kỹ thuật trực tiếp từ chuyên gia thủy lực Quỳnh."
      }
    ],
    specifications: [
      { label: "Thiết bị đo", value: "Hydac FCU / PAMAS Laser Particle Counter" },
      { label: "Tiêu chuẩn áp dụng", value: "ISO 4406:1999, NAS 1638, SAE AS4059" },
      { label: "Độ phân giải kích thước hạt", value: "Từ 4 micron đến 70 micron" },
      { label: "Thời gian trả kết quả", value: "Ngay tại hiện trường hoặc trong 24h" }
    ],
    featured: true
  },
  {
    id: "sua-chua-va-thay-the-binh-tich-ap",
    title: "Sửa Chữa & Nạp Khí Nitơ Bình Tích Áp Thủy Lực",
    slug: "sua-chua-va-thay-the-binh-tich-ap",
    tagline: "Thay thế ruột cao su (bladder), kiểm định an toàn và nạp sạc khí N2 áp lực cao đến 350 bar",
    image: "https://www.quynh.vn/images/s/dich-vu-thay-binh-tich-ap.jpg",
    description: "Bình tích áp sau một thời gian làm việc thường bị rách màng cao su hoặc giảm áp suất khí nén N2 bên trong, dẫn đến hiện tượng giật cục, rung đường ống và tụt áp hệ thống. Kỹ thuật viên của Quỳnh Engineering sẵn sàng đến tận nhà máy để kiểm tra áp suất nạp trước (pre-charge pressure), thay ruột bình chính hãng Hydac/Rexroth và nạp lại khí Nitơ nguyên chất an toàn tuyệt đối.",
    benefits: [
      "Bộ dụng cụ nạp sạc và đồng hồ đo áp Hydac FPU-1 tiêu chuẩn châu Âu",
      "Sử dụng 100% khí Nitơ tinh khiết N2 99.999% (nghiêm cấm nạp Oxy/khí nén gây nổ)",
      "Kho phụ tùng có sẵn đầy đủ ruột cao su từ 0.5L đến 50L (chất liệu NBR, Viton, Butyl)",
      "Hỗ trợ kiểm định an toàn áp lực và cấp giấy chứng nhận cơ quan chức năng"
    ],
    workflow: [
      {
        step: "01",
        title: "Xả Áp Lực Dầu An Toàn",
        description: "Đóng van cách ly khối an toàn (safety block) và xả toàn bộ áp lực thủy lực về thùng."
      },
      {
        step: "02",
        title: "Kiểm Tra Áp Khí Còn Lại & Tháo Bình",
        description: "Gắn bộ nạp FPU để đo áp suất Nitơ, tháo nắp bình kiểm tra tình trạng ruột bàng cao su."
      },
      {
        step: "03",
        title: "Thay Mới Ruột Bình & Vệ Sinh Lòng Bình",
        description: "Lắp đặt ruột cao su mới chính hãng kèm phụ kiện van 1 chiều và vòng đệm chống rò rỉ."
      },
      {
        step: "04",
        title: "Nạp Khí Nitơ N2 Theo Áp Suất Yêu Cầu",
        description: "Nạp khí N2 từ bình khí cao áp đạt đúng thông số P0 của nhà chế tạo, kiểm tra rò rỉ và nghiệm thu."
      }
    ],
    specifications: [
      { label: "Dung tích xử lý", value: "Bình tích áp từ 0.5 Lít đến 60 Lít" },
      { label: "Áp suất nạp tối đa", value: "Đến 350 bar (dùng bình khí đệm áp)" },
      { label: "Hãng sản xuất tương thích", value: "Hydac, Bosch Rexroth, Olaer, Parker" },
      { label: "Thời gian hoàn thành", value: "Từ 2 đến 4 giờ làm việc tại công trình" }
    ],
    featured: true
  }
];
