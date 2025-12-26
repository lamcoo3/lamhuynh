const elmProjectGrid = document.getElementById("project-grid");

const PROJECTS = [
  {
    title: "Smart Quiz",
    desc: "Nền tảng trắc nghiệm thông minh giúp người dùng làm bài, quản lý đáp án đã chọn, hiển thị tiến độ và kết quả một cách trực quan, phù hợp cho học tập và kiểm tra nhanh.",
    link: "quiz",
    thumb: "quiz.png"
  },
  {
    title: "Quick Math",
    desc: "Ứng dụng tính toán nhanh giúp xử lý các phép toán cơ bản và so sánh số học một cách trực quan. Thiết kế thân thiện, rõ ràng, dễ thao tác trên mọi thiết bị.",
    link: "quick-math",
    thumb: "quick-math.png"
  },
  {
    title: "ZCart Checkout",
    desc: "ZCart Checkout là giao diện giỏ hàng hiện đại giúp người dùng dễ dàng quản lý sản phẩm, điều chỉnh số lượng, áp dụng mã giảm giá và xem tổng tiền theo thời gian thực. Thiết kế tối giản, trực quan, phù hợp cho các website bán đồ ăn, đồ uống và thương mại điện tử nhỏ.",
    link: "zcart-checkout",
    thumb: "zcart-checkout.png"
  },
  {
    title: "ASCII Shape Generator",
    desc: "ASCII Shape Generator là công cụ tạo hình khối bằng ký tự ASCII nhanh gọn và trực quan. Người dùng chỉ cần nhập kích thước, ký tự và chọn kiểu hình (vuông, rỗng, đặc…), hệ thống sẽ sinh kết quả ngay lập tức, hỗ trợ sao chép để dùng trong code, bài tập lập trình hoặc trình bày văn bản.",
    link: "ascii-shape-generator",
    thumb: "ascii-shape-generator.png"
  }
];

renderProjects(PROJECTS);

function renderProjects() {
  let result = "";
  for (let i = 0; i < PROJECTS.length; i++) {
    const title = PROJECTS[i].title;
    const desc = PROJECTS[i].desc;
    const link = PROJECTS[i].link;
    const thumb = PROJECTS[i].thumb;

    result += `<div class="project-card">
        <div class="project-image">
          <img src="images/${thumb}" alt="Smart Quiz">
        </div>
        <div class="project-content">
          <h3>${title}</h3>
          <p>${desc}</p>
          <a href="${link}" class="btn">Xem demo</a>
        </div>
      </div>`
  }
  elmProjectGrid.innerHTML = result;
}
