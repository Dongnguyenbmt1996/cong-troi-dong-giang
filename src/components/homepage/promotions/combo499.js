import React from "react";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import FloatingButtons from "../../floatingButtons/FloatingButtons";
export default function ComboFivigo() {
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
            MÙA THU VÀNG, CÓ HẸN CÙNG CỔNG TRỜI ĐÔNG GIANG – CHỈ TỪ 499K/KHÁCH
          </h1>
          <p className="text-muted">Áp dụng từ 15/09/2024 đến 31/12/2024</p>

          <img
            src="/images/poster-499.jpg"
            alt="Combo Đông Giang 499K"
            className="img-fluid rounded mb-4 d-block mx-auto"
          />

          <ul className="list-unstyled fs-5">
            <li>
              ✅ Check-in săn mây trên <strong>Cầu Kính Ngọc Rồng</strong> tại
              Đỉnh núi Bảo Lâm – nơi giao thoa của đất trời mùa thu.
            </li>
            <li>
              ✅ Vé vào cổng khám phá toàn bộ <strong>khu du lịch</strong> Cổng
              Trời Đông Giang – kiệt tác giữa đại ngàn Trường Sơn.
            </li>
            <li>
              ✅ Một đêm nghỉ dưỡng tại <strong>khách sạn 4 sao</strong> giữa
              rừng núi thơ mộng.
            </li>
            <li>
              ✅ <strong>Bữa tối đặc sản</strong> mang đậm hương vị núi rừng.
            </li>
          </ul>

          <h4 className="mt-5 text-primary fw-bold">
            Các hoạt động trải nghiệm khác:
          </h4>
          <ul className="fs-5">
            <li>🎈 Cáp treo và Cầu Kính Ngọc Rồng</li>
            <li>
              🎭 Show diễn “Vũ điệu đại ngàn” – Tái hiện nét văn hóa Cơ Tu
            </li>
            <li>🛶 Chèo Sup tại Thác Trứng Rồng</li>
            <li>🏊 Hồ bơi vô cực giữa núi rừng</li>
            <li>
              🗺️ Tham quan Thị Trấn Chân Núi: Thác nước, động Tiên Cung, rừng
              Bòn Bon, làng văn hóa...
            </li>
            <li>🎉 Các chương trình giải trí hấp dẫn, mới lạ</li>
          </ul>

          <h5 className="mt-4">🎯 Điều kiện áp dụng:</h5>
          <ul className="fs-5">
            <li> Áp dụng cho 20 khách hàng đầu tiên.</li>
            <li> Ngày áp dụng: Thứ 2 – Thứ 6 và Chủ nhật.</li>
            <li> Thứ 7 phụ thu thêm 100.000đ/khách.</li>
            <li>
              Show diễn “Vũ điệu đại ngàn” tổ chức khi có từ 20 phòng lưu trú
              trở lên mỗi ngày.
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Info */}
      <section className="about-section container my-5">
        <h2 className="section-title">Thông tin liên hệ</h2>
        <table className="contact-table">
          <tbody>
            <tr>
              <td>📍</td>
              <td>Thôn A Sờ, Xã Bến Hiên, Thành Phố Đà Nẵng, Việt Nam</td>
            </tr>
            <tr>
              <td>📧</td>
              <td>info@fvgtravel.com.vn</td>
            </tr>
            <tr>
              <td>📞</td>
              <td>1900 599 999</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* CTA Section */}
      {/* <section className="cta-section text-center py-5 bg-success text-white">
        <h3 className="mb-3">Sẵn sàng khám phá chưa?</h3>
        <a
          href="https://fvgtravel.com.vn/reservation?hotel_id=509067"
          className="btn btn-warning btn-lg fw-bold"
        >
          Đặt vé ngay
        </a>
      </section> */}
      <Footer />
      <FloatingButtons />
    </div>
  );
}
