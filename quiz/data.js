const MAX_SCORE = 100;

let QUESTIONS = [
  {
    id: 1,
    question: "Trái Đất quay quanh Mặt Trời mất bao lâu?",
    options: [
      { key: "A", text: "1 ngày" },
      { key: "B", text: "1 tuần" },
      { key: "C", text: "1 năm" },
      { key: "D", text: "10 năm" }
    ],
    correct: "C"
  },
  {
    id: 2,
    question: "Bộ phận nào của cây có chức năng quang hợp?",
    options: [
      { key: "A", text: "Lá" },
      { key: "B", text: "Rễ" },
      { key: "C", text: "Thân" },
      { key: "D", text: "Hoa" }
    ],
    correct: "A"
  },
  {
    id: 3,
    question: "Nước sôi ở bao nhiêu độ C (điều kiện chuẩn)?",
    options: [
      { key: "A", text: "50°C" },
      { key: "B", text: "90°C" },
      { key: "C", text: "100°C" },
      { key: "D", text: "120°C" }
    ],
    correct: "C"
  },
  {
    id: 4,
    question: "Hành tinh nào được gọi là Hành tinh Đỏ?",
    options: [
      { key: "A", text: "Sao Kim" },
      { key: "B", text: "Sao Hỏa" },
      { key: "C", text: "Sao Mộc" },
      { key: "D", text: "Sao Thổ" }
    ],
    correct: "B"
  },
  {
    id: 5,
    question: "Đơn vị đo cường độ dòng điện là gì?",
    options: [
      { key: "A", text: "Vôn" },
      { key: "B", text: "Oát" },
      { key: "C", text: "Ampe" },
      { key: "D", text: "Jun" }
    ],
    correct: "C"
  },
  {
    id: 6,
    question: "5 × 8 bằng bao nhiêu?",
    options: [
      { key: "A", text: "30" },
      { key: "B", text: "35" },
      { key: "C", text: "40" },
      { key: "D", text: "45" }
    ],
    correct: "C"
  },
  {
    id: 7,
    question: "Số nguyên tố nhỏ nhất là số nào?",
    options: [
      { key: "A", text: "0" },
      { key: "B", text: "1" },
      { key: "C", text: "2" },
      { key: "D", text: "3" }
    ],
    correct: "C"
  },
  {
    id: 8,
    question: "Căn bậc hai của 81 là?",
    options: [
      { key: "A", text: "7" },
      { key: "B", text: "8" },
      { key: "C", text: "9" },
      { key: "D", text: "10" }
    ],
    correct: "C"
  },
  {
    id: 9,
    question: "Thủ đô của Việt Nam là gì?",
    options: [
      { key: "A", text: "TP.HCM" },
      { key: "B", text: "Đà Nẵng" },
      { key: "C", text: "Hà Nội" },
      { key: "D", text: "Huế" }
    ],
    correct: "C"
  },
  {
    id: 10,
    question: "Châu lục nào lớn nhất thế giới?",
    options: [
      { key: "A", text: "Châu Âu" },
      { key: "B", text: "Châu Á" },
      { key: "C", text: "Châu Phi" },
      { key: "D", text: "Châu Mỹ" }
    ],
    correct: "B"
  },
  {
    id: 11,
    question: "HTML là viết tắt của gì?",
    options: [
      { key: "A", text: "HyperText Markup Language" },
      { key: "B", text: "HighText Machine Language" },
      { key: "C", text: "Hyper Machine Language" },
      { key: "D", text: "Home Tool Markup Language" }
    ],
    correct: "A"
  },
  {
    id: 12,
    question: "CSS dùng để làm gì?",
    options: [
      { key: "A", text: "Xử lý logic" },
      { key: "B", text: "Tạo cấu trúc web" },
      { key: "C", text: "Trang trí giao diện" },
      { key: "D", text: "Kết nối database" }
    ],
    correct: "C"
  },
  {
    id: 13,
    question: "Vua Quang Trung tên thật là gì?",
    options: [
      { key: "A", text: "Nguyễn Huệ" },
      { key: "B", text: "Nguyễn Ánh" },
      { key: "C", text: "Lê Lợi" },
      { key: "D", text: "Trần Hưng Đạo" }
    ],
    correct: "A"
  },
  {
    id: 14,
    question: "Con người có bao nhiêu nhiễm sắc thể?",
    options: [
      { key: "A", text: "44" },
      { key: "B", text: "46" },
      { key: "C", text: "48" },
      { key: "D", text: "50" }
    ],
    correct: "B"
  },
  {
    id: 15,
    question: "Từ 'Apple' trong tiếng Anh nghĩa là gì?",
    options: [
      { key: "A", text: "Cam" },
      { key: "B", text: "Táo" },
      { key: "C", text: "Chuối" },
      { key: "D", text: "Nho" }
    ],
    correct: "B"
  },
  {
    id: 16,
    question: "Ăn nhiều rau xanh giúp ích gì?",
    options: [
      { key: "A", text: "Tăng cholesterol" },
      { key: "B", text: "Bổ sung chất xơ" },
      { key: "C", text: "Gây béo phì" },
      { key: "D", text: "Gây mất nước" }
    ],
    correct: "B"
  },
  {
    id: 17,
    question: "Bóng đá mỗi đội có bao nhiêu cầu thủ trên sân?",
    options: [
      { key: "A", text: "9" },
      { key: "B", text: "10" },
      { key: "C", text: "11" },
      { key: "D", text: "12" }
    ],
    correct: "C"
  },
  {
    id: 18,
    question: "Hành tinh nào lớn nhất trong Hệ Mặt Trời?",
    options: [
      { key: "A", text: "Sao Thổ" },
      { key: "B", text: "Sao Hỏa" },
      { key: "C", text: "Sao Mộc" },
      { key: "D", text: "Sao Kim" }
    ],
    correct: "C"
  },
  {
    id: 19,
    question: "Con người hít thở khí gì để sống?",
    options: [
      { key: "A", text: "CO2" },
      { key: "B", text: "Oxy" },
      { key: "C", text: "Nitơ" },
      { key: "D", text: "Hydro" }
    ],
    correct: "B"
  },
  {
    id: 20,
    question: "Thủ đô của Nhật Bản là thành phố nào?",
    options: [
      { key: "A", text: "Osaka" },
      { key: "B", text: "Kyoto" },
      { key: "C", text: "Tokyo" },
      { key: "D", text: "Nagoya" }
    ],
    correct: "C"
  },
  {
    id: 21,
    question: "1 giờ có bao nhiêu phút?",
    options: [
      { key: "A", text: "30" },
      { key: "B", text: "45" },
      { key: "C", text: "60" },
      { key: "D", text: "90" }
    ],
    correct: "C"
  },
  {
    id: 22,
    question: "Cơ quan nào điều khiển hoạt động của cơ thể người?",
    options: [
      { key: "A", text: "Tim" },
      { key: "B", text: "Não" },
      { key: "C", text: "Gan" },
      { key: "D", text: "Phổi" }
    ],
    correct: "B"
  },
  {
    id: 23,
    question: "Ngôn ngữ lập trình nào chạy trên trình duyệt?",
    options: [
      { key: "A", text: "Python" },
      { key: "B", text: "Java" },
      { key: "C", text: "JavaScript" },
      { key: "D", text: "C++" }
    ],
    correct: "C"
  },
  {
    id: 24,
    question: "Loại vitamin nào có nhiều trong cam?",
    options: [
      { key: "A", text: "Vitamin A" },
      { key: "B", text: "Vitamin B" },
      { key: "C", text: "Vitamin C" },
      { key: "D", text: "Vitamin D" }
    ],
    correct: "C"
  },
  {
    id: 25,
    question: "Kim loại nào dẫn điện tốt nhất?",
    options: [
      { key: "A", text: "Sắt" },
      { key: "B", text: "Đồng" },
      { key: "C", text: "Nhôm" },
      { key: "D", text: "Bạc" }
    ],
    correct: "D"
  },
  {
    id: 26,
    question: "Quốc gia nào có dân số đông nhất thế giới?",
    options: [
      { key: "A", text: "Ấn Độ" },
      { key: "B", text: "Trung Quốc" },
      { key: "C", text: "Mỹ" },
      { key: "D", text: "Nga" }
    ],
    correct: "A"
  },
  {
    id: 27,
    question: "Con vật nào được gọi là 'chúa sơn lâm'?",
    options: [
      { key: "A", text: "Hổ" },
      { key: "B", text: "Sư tử" },
      { key: "C", text: "Báo" },
      { key: "D", text: "Gấu" }
    ],
    correct: "B"
  },
  {
    id: 28,
    question: "CSS viết tắt của cụm từ nào?",
    options: [
      { key: "A", text: "Creative Style Sheets" },
      { key: "B", text: "Cascading Style Sheets" },
      { key: "C", text: "Computer Style Sheets" },
      { key: "D", text: "Colorful Style Sheets" }
    ],
    correct: "B"
  },
  {
    id: 29,
    question: "Số Pi (π) xấp xỉ bằng bao nhiêu?",
    options: [
      { key: "A", text: "2.14" },
      { key: "B", text: "3.14" },
      { key: "C", text: "4.13" },
      { key: "D", text: "5.14" }
    ],
    correct: "B"
  },
  {
    id: 30,
    question: "Động vật nào là động vật có vú?",
    options: [
      { key: "A", text: "Cá mập" },
      { key: "B", text: "Cá heo" },
      { key: "C", text: "Rắn" },
      { key: "D", text: "Ếch" }
    ],
    correct: "B"
  },
  {
    id: 31,
    question: "HTML dùng để làm gì?",
    options: [
      { key: "A", text: "Trang trí web" },
      { key: "B", text: "Xử lý logic" },
      { key: "C", text: "Tạo cấu trúc web" },
      { key: "D", text: "Kết nối server" }
    ],
    correct: "C"
  },
  {
    id: 32,
    question: "Nước chiếm khoảng bao nhiêu % trọng lượng cơ thể người?",
    options: [
      { key: "A", text: "30%" },
      { key: "B", text: "50%" },
      { key: "C", text: "60%" },
      { key: "D", text: "80%" }
    ],
    correct: "C"
  },
  {
    id: 33,
    question: "Hình nào có 4 cạnh bằng nhau?",
    options: [
      { key: "A", text: "Hình chữ nhật" },
      { key: "B", text: "Hình thang" },
      { key: "C", text: "Hình vuông" },
      { key: "D", text: "Hình bình hành" }
    ],
    correct: "C"
  },
  {
    id: 34,
    question: "Bộ nhớ RAM dùng để làm gì?",
    options: [
      { key: "A", text: "Lưu dữ liệu lâu dài" },
      { key: "B", text: "Xử lý đồ họa" },
      { key: "C", text: "Lưu trữ tạm thời" },
      { key: "D", text: "Kết nối mạng" }
    ],
    correct: "C"
  },
  {
    id: 35,
    question: "Mặt Trời là gì?",
    options: [
      { key: "A", text: "Hành tinh" },
      { key: "B", text: "Ngôi sao" },
      { key: "C", text: "Vệ tinh" },
      { key: "D", text: "Thiên thạch" }
    ],
    correct: "B"
  },
  {
    id: 36,
    question: "Ai là người phát minh ra bóng đèn?",
    options: [
      { key: "A", text: "Newton" },
      { key: "B", text: "Einstein" },
      { key: "C", text: "Edison" },
      { key: "D", text: "Galileo" }
    ],
    correct: "C"
  },
  {
    id: 37,
    question: "Loại thực phẩm nào cung cấp nhiều protein?",
    options: [
      { key: "A", text: "Rau" },
      { key: "B", text: "Trái cây" },
      { key: "C", text: "Thịt" },
      { key: "D", text: "Đường" }
    ],
    correct: "C"
  },
  {
    id: 38,
    question: "JavaScript là ngôn ngữ lập trình gì?",
    options: [
      { key: "A", text: "Biên dịch" },
      { key: "B", text: "Thông dịch" },
      { key: "C", text: "Hợp ngữ" },
      { key: "D", text: "Máy" }
    ],
    correct: "B"
  },
  {
    id: 39,
    question: "Đơn vị đo nhiệt độ là gì?",
    options: [
      { key: "A", text: "Ampe" },
      { key: "B", text: "Vôn" },
      { key: "C", text: "Độ C" },
      { key: "D", text: "Oát" }
    ],
    correct: "C"
  },
  {
    id: 40,
    question: "Cầu vồng có mấy màu?",
    options: [
      { key: "A", text: "5" },
      { key: "B", text: "6" },
      { key: "C", text: "7" },
      { key: "D", text: "8" }
    ],
    correct: "C"
  },
  {
    id: 41,
    question: "Loại động vật nào đẻ trứng?",
    options: [
      { key: "A", text: "Chó" },
      { key: "B", text: "Mèo" },
      { key: "C", text: "Gà" },
      { key: "D", text: "Bò" }
    ],
    correct: "C"
  },
  {
    id: 42,
    question: "Hệ điều hành phổ biến trên điện thoại Android là gì?",
    options: [
      { key: "A", text: "iOS" },
      { key: "B", text: "Windows" },
      { key: "C", text: "Android" },
      { key: "D", text: "Linux" }
    ],
    correct: "C"
  },
  {
    id: 43,
    question: "Con người có bao nhiêu giác quan?",
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "4" },
      { key: "C", text: "5" },
      { key: "D", text: "6" }
    ],
    correct: "C"
  },
  {
    id: 44,
    question: "Loài chim nào không biết bay?",
    options: [
      { key: "A", text: "Chim sẻ" },
      { key: "B", text: "Đà điểu" },
      { key: "C", text: "Đại bàng" },
      { key: "D", text: "Chim én" }
    ],
    correct: "B"
  },
  {
    id: 45,
    question: "Công thức hóa học của nước là gì?",
    options: [
      { key: "A", text: "CO2" },
      { key: "B", text: "H2O" },
      { key: "C", text: "O2" },
      { key: "D", text: "NaCl" }
    ],
    correct: "B"
  },
  {
    id: 46,
    question: "Ngôn ngữ nào dùng để truy vấn cơ sở dữ liệu?",
    options: [
      { key: "A", text: "HTML" },
      { key: "B", text: "CSS" },
      { key: "C", text: "SQL" },
      { key: "D", text: "PHP" }
    ],
    correct: "C"
  },
  {
    id: 47,
    question: "Số nào là số chẵn?",
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "5" },
      { key: "C", text: "7" },
      { key: "D", text: "8" }
    ],
    correct: "D"
  },
  {
    id: 48,
    question: "Đâu là nguồn năng lượng tái tạo?",
    options: [
      { key: "A", text: "Than đá" },
      { key: "B", text: "Dầu mỏ" },
      { key: "C", text: "Năng lượng mặt trời" },
      { key: "D", text: "Khí đốt" }
    ],
    correct: "C"
  },
  {
    id: 49,
    question: "Loại hình nghệ thuật nào sử dụng màu sắc?",
    options: [
      { key: "A", text: "Âm nhạc" },
      { key: "B", text: "Hội họa" },
      { key: "C", text: "Văn học" },
      { key: "D", text: "Điêu khắc" }
    ],
    correct: "B"
  },
  {
    id: 50,
    question: "Tháng nào có ít ngày nhất trong năm?",
    options: [
      { key: "A", text: "Tháng 1" },
      { key: "B", text: "Tháng 2" },
      { key: "C", text: "Tháng 3" },
      { key: "D", text: "Tháng 4" }
    ],
    correct: "B"
  }
];