import React from "react";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import FloatingButtons from "../../floatingButtons/FloatingButtons";
export default function FreeForChild() {
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
            ƯU ĐÃI ĐẶC BIỆT DÀNH CHO ÔNG BÀ VÀ CÁC BÉ TẠI CỔNG TRỜI ĐÔNG GIANG
          </h1>
          <p className="text-muted">27/09/2024</p>

          <img
            src="/images/free-for-child.jpg"
            alt="Ưu đãi ông bà và trẻ em"
            className="img-fluid rounded mb-4 d-block mx-auto"
          />

          <p>Đón thu sang, ngập tràn ưu đãi!</p>

          <p>
            Cổng Trời Đông Giang hân hoan gửi tặng Quý Ông Bà và các bé yêu
            những món quà đặc biệt đón mùa thu tuyệt vời này:
          </p>

          <ul>
            <li>
              🎁 <strong>Miễn phí vé tham quan</strong> khi đặt phòng lưu trú
              dành cho Cô/Chú từ 60 tuổi.
              <br />
              <em>Áp dụng vào thứ 2 và thứ 3 hàng tuần.</em>
            </li>
            <li>
              🎁 <strong>Miễn phí vé tham quan</strong> cho trẻ em dưới 1.4m khi
              đặt phòng lưu trú hoặc đi về trong ngày.
              <br />
              <em>Áp dụng vào thứ 4 và thứ 5 hàng tuần.</em>
            </li>
          </ul>

          <p>
            Đến với Cổng Trời Đông Giang để trải nghiệm các dịch vụ độc đáo:
          </p>

          <ul>
            <li>
              ✅ Check-in săn mây trên Cầu Kính tại Đỉnh núi Bảo Lâm - huyền ảo
              như tiên cảnh
            </li>
            <li>✅ Miễn phí Cáp treo</li>
            <li>
              ✅ Xem show diễn <strong>Vũ điệu đại ngàn</strong> – hòa mình vào
              văn hóa Cơ Tu
            </li>
            <li>
              ✅ Chiêm ngưỡng Thác nước, Động Tiên Cung, Hang Ngọc Đế, Rừng Bòn
              Bon, và nhiều thắng cảnh hùng vĩ khác
            </li>
            <li>✅ Khám phá làng văn hóa Cơ Tu truyền thống</li>
            <li>
              ✅ Chèo Sup tại Thác Trứng Rồng – trải nghiệm thiên nhiên mát lạnh
            </li>
            <li>
              ✅ Hồ bơi vô cực giữa núi rừng – thư giãn và ngắm cảnh tuyệt vời
            </li>
          </ul>

          <p>
            Hãy để Cổng Trời Đông Giang kết nối trái tim gia đình bạn – tận
            hưởng trọn vẹn từng khoảnh khắc bên nhau giữa đại ngàn hùng vĩ!
          </p>

          <p className="text-danger">
            *Lưu ý: Show diễn Vũ điệu đại ngàn chỉ tổ chức khi có tối thiểu 20
            phòng lưu trú/ngày tại KDL.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <Footer />
      <FloatingButtons />
    </div>
  );
}
