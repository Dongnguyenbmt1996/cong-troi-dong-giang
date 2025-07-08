import React from "react";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import FloatingButtons from "../../floatingButtons/FloatingButtons";
export default function Hangdong() {
  return (
    <div className="about-page">
      <Header />

      {/* General Info */}
      <section className="about-section container my-5" data-aos="fade-up">
        <h1 className="text-center fw-bold text-success mb-4">
          Khám phá hệ thống hang động ở Cổng Trời Đông Giang - Tuyệt tác giữa
          đại ngàn
        </h1>

        <p>
          Đến với khu du lịch Cổng Trời Đông Giang, du khách sẽ thật tiếc nếu bỏ
          qua cơ hội bước chân vào hệ thống hang động kỳ bí, nơi hội tụ vẻ đẹp
          hùng vĩ của núi rừng đại ngàn và sự kiến tạo kỳ diệu của thiên nhiên
          qua hàng nghìn năm.
        </p>

        <img
          src="/images/hang-dong.jpg"
          alt="Hệ thống hang động tại Cổng Trời Đông Giang"
          className="img-fluid rounded my-4 mx-auto d-block"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />

        <h2 className="fw-bold text-success mt-5">Vị trí độc đáo</h2>
        <p>
          Hệ thống hang động được phân bố khắp khuôn viên hơn 120ha, ẩn hiện
          giữa những ngọn núi xanh ngát và các dòng thác tự nhiên. Nơi đây nổi
          bật với Hang Gợp, Hang Ngọc Đế, Động Tiên Cung – những hang động được
          mệnh danh là "Phong Nha thu nhỏ của miền Trung".
        </p>
        <img
          src="/images/hang-dong-7.jpg"
          alt="Hang Ngọc Đế Đông Giang"
          className="img-fluid rounded my-4 mx-auto d-block"
        />

        <h2 className="fw-bold text-success mt-4">
          Tuyệt tác tự nhiên ban tặng
        </h2>
        <p>
          Hiện tại, Cổng Trời Đông Giang sở hữu hơn 20 hang động lớn nhỏ với
          muôn hình vạn trạng. Bên trong các hang là các khối nhũ đá lung linh,
          măng đá kỳ ảo, kết hợp ánh sáng tạo nên không gian như trong truyện cổ
          tích. Nhiệt độ trong hang luôn mát mẻ, dễ chịu quanh năm.
        </p>

        <img
          src="/images/hang-dong-6.jpg"
          alt="Hang Ngọc Đế Đông Giang"
          className="img-fluid rounded my-4 mx-auto d-block"
        />

        <h2 className="fw-bold text-success mt-4">
          Khám phá hoàn toàn miễn phí
        </h2>
        <p>
          Du khách chỉ cần mua <strong>vé vào cổng</strong> là có thể tự do tham
          quan toàn bộ hệ thống hang động, không mất thêm chi phí. Giá vé cụ thể
          như sau:
        </p>
        <ul>
          <li>
            Người lớn & Trẻ em từ 1.4m trở lên: <strong>400.000đ</strong>
          </li>
          <li>
            Trẻ em từ 1m – 1.3m: <strong>300.000đ</strong>
          </li>
          <li>
            Trẻ em dưới 1m: <strong>Miễn phí</strong>
          </li>
        </ul>

        <p>
          Với tấm vé này, bạn còn được trải nghiệm thêm: cáp treo, Cầu Kính Ngọc
          Rồng, chèo SUP, vườn hoa, check-in mây trời,...
        </p>

        <h2 className="fw-bold text-success mt-4">
          Thời điểm tham quan lý tưởng
        </h2>
        <p>
          Mùa xuân và mùa hè là thời điểm đẹp nhất để khám phá hang động. Lúc
          này thời tiết khô ráo, dễ di chuyển, cảnh quan rừng xanh mướt và dòng
          suối róc rách càng tăng phần hấp dẫn. Nhiệt độ trong hang dao động từ
          20-25°C, tạo cảm giác mát mẻ giữa tiết trời nắng nóng.
        </p>
        <img
          src="/images/he-thong-hang-dong-10.jpg"
          alt="Hang Ngọc Đế Đông Giang"
          className="img-fluid rounded my-4 mx-auto d-block"
        />

        <h2 className="fw-bold text-success mt-4">
          Một số lưu ý khi khám phá hang động
        </h2>
        <ul>
          <li>Mang giày đế thấp hoặc giày thể thao chống trơn trượt</li>
          <li>Trang phục gọn nhẹ, thấm hút mồ hôi</li>
          <li>Có thể mang theo đèn pin cá nhân để tăng trải nghiệm</li>
          <li>Kiểm tra dự báo thời tiết trước khi đi</li>
        </ul>

        <h2 className="fw-bold text-success mt-4">Hướng dẫn đường đi</h2>
        <p>
          Từ trung tâm Đà Nẵng, theo QL14B qua cầu Hà Nha – Hà Tân – xã Ka Dăng
          – xã Mà Cooih là đến nơi. Bạn có thể đi xe máy, ô tô cá nhân hoặc tour
          du lịch đều thuận tiện.
        </p>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
