import React from "react";
import "../css/about.css";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Activities from "./Activities";
import FloatingButtons from "../floatingButtons/FloatingButtons";
export default function About() {
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
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="/images/fivi-go.jpg"
              alt="Khu du lịch"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="section-title">Thông tin chung</h2>
            <p>
              Cổng Trời Đông Giang là một dự án do Tập đoàn FVG đầu tư với tổng
              vốn hơn 2600 tỷ đồng, trải dài trên diện tích 120ha, chia thành 4
              phân khu. Đây là một trong những khu du lịch lớn nhất tỉnh Quảng
              Nam.
            </p>
            <p>
              Khu du lịch không chỉ là điểm đến mới mẻ mà còn góp phần gìn giữ
              văn hóa người Cơ Tu, với hệ thống hang động, thác suối, nhà sàn...
              và khung cảnh núi rừng tuyệt đẹp.
            </p>
          </div>
        </div>
      </section>

      <Activities />

      {/* CTA Section */}
      <Footer />
      <FloatingButtons />
    </div>
  );
}
