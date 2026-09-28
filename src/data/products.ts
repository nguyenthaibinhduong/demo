export interface ProductItem {
  id: string;
  name: string;
  code: string;
  brand: string;
  brandId: string;
  category: "hydraulic" | "pneumatic" | "sensor" | "automation" | "cleaning" | "power-pack";
  categoryLabel: string;
  image: string;
  shortDesc: string;
  description: string;
  specs: { [key: string]: string };
  applications: string[];
  inStock: boolean;
  warranty: string;
  badge?: string;
  origin: string;
}

export const productsData: ProductItem[] = [
  {
    id: "settima-continuum-pump",
    name: "Bơm Thủy Lực Siêu Êm Settima Continuum®",
    code: "SETTIMA-GR45-CONT",
    brand: "Settima",
    brandId: "settima",
    category: "hydraulic",
    categoryLabel: "Thủy lực",
    image: "https://www.quynh.vn/images/2025/bom-thuy-luc-settima-continuum_1.png",
    shortDesc: "Công nghệ bơm trục xoắn không xung áp lực, giảm ồn đến 15dB so với bơm bánh răng thông thường.",
    description: "Settima Continuum là dòng bơm thủy lực cao cấp sử dụng thiết kế rotor trục vít xoắn không tiếp xúc điểm, triệt tiêu gần như hoàn toàn tiếng ồn và xung nhịp áp suất. Rất phù hợp cho các nhà máy đòi hỏi độ yên tĩnh cao, hệ thống nâng hạ, máy ép nhựa và thiết bị công nghiệp tự động.",
    specs: {
      "Áp suất hoạt động tối đa": "Lên đến 300 bar (liên tục)",
      "Lưu lượng danh định": "10 - 300 cm³/vòng",
      "Độ ồn trung bình": "< 52 dB(A)",
      "Tốc độ vòng quay": "500 - 3500 rpm",
      "Vật liệu vỏ": "Hợp kim nhôm đúc hoặc gang graphite",
    },
    applications: [
      "Máy ép nhựa & đùn kim loại",
      "Hệ thống trạm nguồn thủy lực công nghiệp",
      "Thang máy & xe nâng thủy lực",
      "Môi trường sản xuất khép kín yêu cầu độ ồn thấp"
    ],
    inStock: true,
    warranty: "18 tháng chính hãng",
    badge: "Bán chạy nhất",
    origin: "Ý (Italy)"
  },
  {
    id: "karcher-hds-10-20-4m",
    name: "Máy Phun Rửa Áp Lực Cao Nước Nóng Kärcher HDS 10/20-4M",
    code: "KARCHER-HDS-1020-4M",
    brand: "Kärcher",
    brandId: "karcher",
    category: "cleaning",
    categoryLabel: "Thiết bị làm sạch",
    image: "https://www.quynh.vn/images/2026/phun-rua-ap-luc-cao-nuoc-nong-karcher-hds-10204m-1_3.png",
    shortDesc: "Thiết bị làm sạch công nghiệp hạng trung cao cấp với chế độ eco!efficiency tiết kiệm nhiên liệu.",
    description: "Kärcher HDS 10/20-4M tích hợp động cơ điện 4 cực làm mát bằng nước, đầu bơm 3 pít-tông sứ chịu mài mòn cực tốt. Chế độ eco!efficiency duy trì nhiệt độ 60°C giúp tối ưu hóa nhiên liệu 20% trong khi vẫn tẩy sạch dầu mỡ bám dính nặng trong xưởng bảo trì cơ khí.",
    specs: {
      "Áp lực làm việc": "20 - 200 bar (3000 PSI)",
      "Lưu lượng nước": "500 - 1000 l/h",
      "Nhiệt độ nước tối đa": "80°C - 155°C (chế độ hơi nước)",
      "Công suất kết nối": "7.8 kW",
      "Bình chứa nhiên liệu": "25 Lít (Dầu Diesel)"
    },
    applications: [
      "Vệ sinh trạm máy & dây chuyền cán thép",
      "Làm sạch vỏ tàu biển & container cảng",
      "Bảo trì thiết bị xe cơ giới hạng nặng",
      "Nhà máy chế biến thực phẩm & kho vận"
    ],
    inStock: true,
    warranty: "12 tháng tiêu chuẩn Kärcher",
    badge: "Công nghiệp nặng",
    origin: "CHLB Đức"
  },
  {
    id: "suco-pressure-transmitter-0705",
    name: "Cảm Biến Áp Suất Suco High Performance Series 0705 - 0720",
    code: "SUCO-HP-0705-HEX22",
    brand: "SUCO",
    brandId: "suco",
    category: "sensor",
    categoryLabel: "Cảm biến & Đo lường",
    image: "https://www.quynh.vn/images/2023/cam-bien-ap-suat-suco-pressure-transmitters-high-performance-hex22-0705-0710-0720_1.png",
    shortDesc: "Thân vỏ Hex 22 thép không gỉ 316L, chống sốc xung áp suất cực cao và độ trôi nhiệt cực thấp.",
    description: "Dòng cảm biến áp suất hiệu suất cao của SUCO sử dụng màng gốm hoặc công nghệ màng mỏng Piezoresistive, mang lại độ chính xác ±0.5% FS trong dải nhiệt rộng từ -40°C đến +125°C. Chuyên dụng cho kiểm soát áp lực thủy lực và khí nén tự động.",
    specs: {
      "Dải đo áp suất": "0 - 1 bar đến 0 - 600 bar",
      "Độ chính xác": "±0.5% FS (BFSL)",
      "Tín hiệu ngõ ra": "4-20 mA (2 dây) / 0-10 V (3 dây)",
      "Cấp bảo vệ": "IP67 / IP6K9K",
      "Kết nối cơ khí": "G 1/4, 1/4 NPT, 7/16-20 UNF"
    },
    applications: [
      "Giám sát áp suất trạm nguồn thủy lực",
      "Máy ép thủy lực tải trọng lớn",
      "Thiết bị xe công trình di động",
      "Hệ thống khí nén công nghiệp tự động"
    ],
    inStock: true,
    warranty: "24 tháng chính hãng",
    badge: "Độ chính xác cao",
    origin: "CHLB Đức"
  },
  {
    id: "aventics-af2-flow-sensor",
    name: "Cảm Biến Đo Lưu Lượng Khí Thông Minh AVENTICS AF2",
    code: "AVENTICS-AF2-FLOW",
    brand: "AVENTICS | Emerson",
    brandId: "aventics",
    category: "pneumatic",
    categoryLabel: "Khí nén",
    image: "https://www.quynh.vn/images/2023/dong_cam_bien_do_luu_luong_khi_thong_minh_aventics_af2_flow_sensors_1.png",
    shortDesc: "Đo lưu lượng, áp suất và nhiệt độ dòng khí nén tức thời, hỗ trợ kết nối IIoT OPC UA / MQTT.",
    description: "AVENTICS Series AF2 là cảm biến dòng chảy thế hệ mới giúp phát hiện rò rỉ khí nén trong nhà máy, tối ưu năng lượng theo tiêu chuẩn ISO 50001. Tích hợp màn hình OLED trực quan và kết nối truyền thông công nghiệp IO-Link, Ethernet.",
    specs: {
      "Dải lưu lượng đo": "Lên đến 15.000 l/phút",
      "Áp suất hoạt động": "0.1 đến 16 bar",
      "Truyền thông": "IO-Link, Ethernet (OPC UA, MQTT)",
      "Màn hình hiển thị": "OLED màu đa dòng sắc nét",
      "Độ chính xác lưu lượng": "±3% giá trị đo + 0.3% FS"
    },
    applications: [
      "Quản lý rò rỉ và năng lượng khí nén nhà máy",
      "Dây chuyền lắp ráp ô tô & điện tử",
      "Ngành bao bì & đóng chai tự động",
      "Hệ thống phòng sạch dược phẩm"
    ],
    inStock: true,
    warranty: "18 tháng Emerson",
    badge: "IIoT Smart Ready",
    origin: "CHLB Đức"
  },
  {
    id: "schmersal-belt-alignment-switch",
    name: "Công Tắc Giám Sát Lệch Băng Tải Schmersal T.441-11Y-M20",
    code: "SCHMERSAL-T441-11Y",
    brand: "Schmersal",
    brandId: "schmersal",
    category: "automation",
    categoryLabel: "An toàn công nghiệp",
    image: "https://www.quynh.vn/images/2026/schmersal_t.441-11y-m20-243_belt_alignment_switch.jpg",
    shortDesc: "Bảo vệ hệ thống băng tải tải nặng chống đứt hoặc tràn vật liệu do lệch tâm băng tải.",
    description: "Schmersal T.441-11Y được chế tạo với vỏ gang đúc chịu lực va đập cực lớn, chuyên dùng bảo vệ các tuyến băng tải dài tại nhà máy xi măng, nhiệt điện than, bến cảng xuất nhập quặng. Cơ cấu cần gạt con lăn chịu mài mòn tác động ở 2 góc cảnh báo & ngắt khẩn.",
    specs: {
      "Vật liệu vỏ": "Gang xám đúc En-GJL-200 sơn tĩnh điện",
      "Cấp bảo vệ": "IP65 theo chuẩn EN 60529",
      "Tiếp điểm": "1 NO + 1 NC hoặc 2 NO + 2 NC",
      "Góc tác động cảnh báo": "15° cảnh báo sớm, 30° ngắt dừng khẩn cấp",
      "Nhiệt độ môi trường": "-30°C đến +90°C"
    },
    applications: [
      "Băng tải vận chuyển clinker & xi măng",
      "Nhà máy nhiệt điện và mỏ than",
      "Cảng biển xếp dỡ hàng rời",
      "Nhà máy luyện cán thép nặng"
    ],
    inStock: true,
    warranty: "24 tháng Schmersal",
    badge: "An toàn Heavy-Duty",
    origin: "CHLB Đức"
  },
  {
    id: "schmersal-safety-relay-srb400ne",
    name: "Rờ Le An Toàn Công Nghiệp Schmersal SRB400NE 24V",
    code: "SCHMERSAL-SRB400NE-24V",
    brand: "Schmersal",
    brandId: "schmersal",
    category: "automation",
    categoryLabel: "An toàn công nghiệp",
    image: "https://www.quynh.vn/images/2026/ro-le-an-toan-safety_relay_schmersal_srb400ne_24v.jpg",
    shortDesc: "Đạt chuẩn an toàn quốc tế Category 4 / PL e theo EN ISO 13849-1 và SIL 3 theo IEC 61508.",
    description: "Module rờ le an toàn giám sát nút dừng khẩn cấp E-stop, công tắc cửa an toàn và cảm biến quang. Tự động kiểm tra chéo tiếp điểm đảm bảo độ tin cậy tuyệt đối cho chuỗi bảo vệ máy móc sản xuất.",
    specs: {
      "Điện áp điều khiển": "24 VDC (-15% / +20%)",
      "Ngõ ra an toàn": "4 tiếp điểm NO (Stop category 0)",
      "Thời gian trễ đáp ứng": "< 20 ms",
      "Cấp an toàn": "Cat. 4 / PL e, SIL 3",
      "Gắn tủ": "Thanh ray DIN Rail tiêu chuẩn"
    },
    applications: [
      "Tủ điều khiển dây chuyền đóng gói & robot",
      "Máy dập thủy lực & máy cán",
      "Hệ thống hàng rào an toàn nhà xưởng"
    ],
    inStock: true,
    warranty: "24 tháng",
    origin: "CHLB Đức"
  },
  {
    id: "quynh-hydraulic-power-unit",
    name: "Trạm Nguồn Thủy Lực Thiết Kế Chế Tạo Đồng Bộ (HPU)",
    code: "QUYNH-HPU-CUSTOM",
    brand: "Công Nghệ Quỳnh",
    brandId: "quynh",
    category: "power-pack",
    categoryLabel: "Trạm nguồn & Hệ thống",
    image: "https://www.quynh.vn/images/s/tram-nguon-thuy-luc-hydraulics-power-unit.png",
    shortDesc: "Thiết kế, gia công thùng dầu, tích hợp bơm Rexroth/Settima, van tỉ lệ và tủ điều khiển PLC.",
    description: "Quỳnh Engineering với xưởng chế tạo 500m² tại TP.HCM chuyên nhận thiết kế và sản xuất trọn gói các bộ nguồn thủy lực theo yêu cầu khắt khe của khách hàng. Mọi trạm nguồn đều được chạy thử nghiệm tải, đo độ bẩn dầu bằng thiết bị kiểm định chuyên dụng trước khi bàn giao xuất xưởng.",
    specs: {
      "Dung tích thùng dầu": "100 Lít - 5.000 Lít (Thép SS400 hoặc Inox 304/316)",
      "Áp suất thiết kế": "70 bar - 450 bar",
      "Công suất động cơ": "2.2 kW đến 160 kW (Siemens, ABB)",
      "Van điều khiển": "Rexroth, Atos, Yuken van điện từ hoặc van Servo",
      "Hệ làm mát": "Bộ tản nhiệt khí dầu hoặc trao đổi nhiệt nước dầu"
    },
    applications: [
      "Máy ép mùn cưa, máy ép phế liệu & máy ép gạch",
      "Cẩu tàu thủy & hệ thống tời neo hàng hải",
      "Cửa van xả lũ nhà máy thủy điện",
      "Hệ thống nâng sàn sân khấu & kích nâng siêu trường"
    ],
    inStock: false,
    warranty: "24 tháng hỗ trợ kỹ thuật tận nơi",
    badge: "Gia công theo yêu cầu",
    origin: "Sản xuất tại Việt Nam (Quỳnh Engineering)"
  },
  {
    id: "hydac-bladder-accumulator",
    name: "Bình Tích Áp Màng Cao Su Thủy Lực Hydac SB330",
    code: "HYDAC-SB330-SERIES",
    brand: "Hydac",
    brandId: "hydac",
    category: "hydraulic",
    categoryLabel: "Thủy lực",
    image: "https://www.quynh.vn/images/b/hydac.jpg",
    shortDesc: "Tích trữ năng lượng áp suất, giảm rung chấn va đập búa nước và bù rò rỉ thể tích dầu.",
    description: "Bình tích áp Hydac SB330 vỏ thép rèn chịu áp lực cao lên tới 330 bar. Quỳnh Engineering cung cấp dịch vụ thay ruột bàng (bladder), nạp khí Nitơ N2 tận công trình và cấp chứng nhận kiểm định an toàn nồi hơi áp lực.",
    specs: {
      "Áp suất làm việc": "Lên tới 330 bar",
      "Thể tích danh định": "1 Lít đến 50 Lít",
      "Chất liệu ruột màng": "NBR, Viton (FKM), ECO chống dầu",
      "Môi chất sạc": "Khí Nitơ tinh khiết N2 (khuyến cáo không dùng O2)",
      "Nhiệt độ làm việc": "-20°C đến +80°C"
    },
    applications: [
      "Nguồn dự phòng đóng mở van thủy điện",
      "Dập tắt xung áp suất trên đường ống bơm",
      "Hệ thống phanh xe cẩu chuyên dụng"
    ],
    inStock: true,
    warranty: "18 tháng Hydac",
    origin: "CHLB Đức"
  }
];
