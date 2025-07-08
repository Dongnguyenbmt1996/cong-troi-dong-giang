import React from "react";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import FloatingButtons from "../../floatingButtons/FloatingButtons";
export default function Price() {
  return (
    <div className="about-page">
      <Header />
      <section
        className="text-white text-center p-5 banner-home"
        style={{
          backgroundImage: "url('/images/cau-kinh-cong-troi-dong-giang.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></section>

      {/* General Info */}
      <section className="about-section container my-5" data-aos="fade-up">
        <div className="container py-5">
          <h1 className="text-success fw-bold mb-4">
            CỔNG TRỜI ĐÔNG GIANG CẬP NHẬT BẢNG GIÁ VÉ MỚI NHẤT 2025
          </h1>
          <p className="text-muted">27/12/2024</p>

          <img
            src="/images/bang-gia.jpg"
            alt="Bảng giá dịch vụ"
            className="img-fluid rounded mb-4 d-block mx-auto"
          />

          <p>
            Chào năm mới với hành trình đầy hứng khởi -{" "}
            <strong>Cập nhật bảng giá vé mới nhất 2025!</strong>
          </p>

          <p>
            Chỉ từ <strong>#400K</strong>, bạn sẽ được tận hưởng ngay những trải
            nghiệm tuyệt vời:
          </p>

          <ul>
            <li>
              <strong>Miễn phí</strong> Cáp treo đầu tiên tại Quảng Nam, ngắm
              nhìn toàn cảnh hùng vĩ của thiên nhiên đại ngàn từ trên cao.
            </li>
            <li>
              <strong>Miễn phí</strong> trải nghiệm Cầu Kính Ngọc Rồng được
              thiết kế theo hình dáng viên Ngọc Rồng.
            </li>
            <li>
              Check-in săn mây tại Đỉnh núi Bảo Lâm cao 801m đẹp như tiên cảnh.
            </li>
            <li>
              Đắm mình trong sắc hoa tại Công viên Tình yêu, Công viên nước, tắm
              suối, thác tự nhiên.
            </li>
            <li>
              Đường dạo hình Rồng dài 500m -{" "}
              <em>kỷ lục Hành lang có mái che hình Rồng dài nhất Việt Nam</em>.
            </li>
            <li>
              Chiêm ngưỡng hệ thống đền, hang động: Đền Bà Lâm Cung Thánh Mẫu,
              Hang Ngọc Đế, Động Tiên Cung,...
            </li>
            <li>
              Trải nghiệm văn hoá tại làng Cơ Tu, thưởng thức ẩm thực núi rừng:
              cơm lam, gà nướng...
            </li>
            <li>
              Tham quan Rừng Bòn Bon, vườn hoa Quỳnh Anh, Cổng Trời Đông Giang
            </li>
            <li>Tản bộ dọc sông Ngân, check-in Cầu Kiều, Cầu Ô Thước,...</li>
          </ul>

          <p>
            Du khách có thể dễ dàng mua vé trực tiếp tại cổng vào khu du lịch.
            Đây là lựa chọn phù hợp nếu bạn muốn linh hoạt kế hoạch tham quan.
          </p>

          <p>
            Hoặc <strong>đặt vé trực tuyến</strong> để nhận tư vấn chi tiết. Gọi
            ngay <strong>1900 866644</strong> hoặc nhắn tin qua Facebook chính
            thức để được hỗ trợ nhanh chóng và tiện lợi.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <Footer />
      <FloatingButtons />
    </div>
  );
}
