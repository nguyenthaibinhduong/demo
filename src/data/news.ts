export interface NewsArticle {
  id: string;
  title: string;
  category: "Hoạt động công ty" | "Kỹ thuật chuyên sâu" | "Sản phẩm mới";
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string;
  featured: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "seepex-bom-truc-vit",
    title: "SEEPEX – GIẢI PHÁP BƠM TRỤC VÍT HIỆU SUẤT CAO | HÀNG DỰ ÁN ĐÃ VỀ VIỆT NAM",
    category: "Sản phẩm mới",
    date: "15/03/2026",
    readTime: "4 phút",
    image: "https://www.quynh.vn/images/2025/bom-thuy-luc-settima-continuum_1.png",
    summary: "Lô hàng bơm trục vít xoắn chuyên dụng cho vận chuyển bùn đặc, hóa chất sệt và chất lỏng có độ nhớt cực cao vừa cập cảng và sẵn sàng bàn giao cho đối tác dự án.",
    content: "Công nghệ Quỳnh vừa hoàn thành thủ tục nhập khẩu lô bơm trục vít SEEPEX cao cấp phục vụ cho các nhà máy xử lý nước thải công nghiệp và nhà máy hóa chất tại miền Nam. Với công nghệ rotor tiên tiến, dòng bơm này cho khả năng hút sâu, định lượng chính xác và không làm biến tính các chất lỏng nhạy cảm với lực cắt cơ học.",
    featured: true
  },
  {
    id: "nhiet-do-cam-bien-ap-suat",
    title: "Nhiệt độ ảnh hưởng đến độ chính xác của cảm biến áp suất như thế nào?",
    category: "Kỹ thuật chuyên sâu",
    date: "28/02/2026",
    readTime: "6 phút",
    image: "https://www.quynh.vn/images/2023/cam-bien-ap-suat-suco-pressure-transmitters-high-performance-hex22-0705-0710-0720_1.png",
    summary: "Phân tích hiện tượng giãn nở nhiệt và độ trôi điểm zero (zero drift) trong mạch đo thủy lực, hướng dẫn chọn cảm biến SUCO & ESI có bù nhiệt độ tích hợp.",
    content: "Trong các hệ thống thủy lực tải nặng, nhiệt độ dầu có thể dao động từ 25°C lúc khởi động lên đến 80°C khi làm việc liên tục. Sự thay đổi nhiệt độ này làm biến đổi điện trở của màng piezoresistive. Bài viết cung cấp các giải pháp lắp đặt ống siphon làm mát, chọn loại màng gốm hoặc công nghệ Silicon-on-Sapphire của ESI để triệt tiêu sai số nhiệt.",
    featured: true
  },
  {
    id: "cong-nghe-quynh-nam-tai-chinh",
    title: "Công Nghệ Quỳnh hoàn thành xuất sắc các mục tiêu cho năm tài chính",
    category: "Hoạt động công ty",
    date: "10/01/2026",
    readTime: "3 phút",
    image: "https://www.quynh.vn/images/2025/28year_quynh_engineering.jpeg",
    summary: "Nhìn lại chặng đường hơn 30 năm phát triển bền vững cùng các đối tác toàn cầu, mở rộng xưởng chế tạo trạm nguồn và dịch vụ kỹ thuật thủy lực lưu động.",
    content: "Với hơn 3 thập kỷ hình thành và phát triển từ năm 1993, Công ty Cổ phần Công nghệ Quỳnh tiếp tục khẳng định vị thế dẫn đầu trong mảng thiết bị truyền động và điều khiển thủy lực - khí nén tại Việt Nam. Năm qua đánh dấu bước tiến mạnh mẽ trong việc mở rộng năng lực chế tạo trạm nguồn thủy lực và hợp tác chiến lược với Emerson, Bosch Rexroth, Hydac.",
    featured: true
  },
  {
    id: "bom-canh-gat-parker",
    title: "Bơm cánh gạt thủy lực Parker chuyên dụng trong công nghiệp nặng",
    category: "Kỹ thuật chuyên sâu",
    date: "20/12/2025",
    readTime: "5 phút",
    image: "https://www.quynh.vn/images/b/18_parker.jpg",
    summary: "Tìm hiểu cấu tạo cartridge thay thế nhanh chóng của dòng bơm cánh gạt Parker T6 / T7, ưu điểm về lưu lượng ổn định và giảm thời gian dừng bảo dưỡng.",
    content: "Bơm cánh gạt Parker dòng Denison T6/T7 nổi tiếng với thiết kế cartridge có thể tháo lắp và thay thế lõi bơm ngay trên máy mà không cần tháo toàn bộ thân bơm khỏi mặt bích động cơ. Điều này giúp đội ngũ bảo trì nhà máy tiết kiệm đến 80% thời gian sửa chữa khi xảy ra sự cố mòn cánh gạt.",
    featured: false
  }
];
