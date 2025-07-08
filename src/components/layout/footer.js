import React from "react";
import "../css/Footer.css";
import FloatingButtons from "../floatingButtons/FloatingButtons";
export default function Footer() {
  return (
    <footer className="footer pt-5 pb-3 text-white">
      <div className="container">
        <div className="row gy-4">
          {/* Cột 1: Logo và mô tả */}
          <div className="col-lg-3 col-md-6">
            <img
              src="/images/logo-fvg-tach-nen.png"
              alt="Logo"
              className="footer-logo mb-3"
            />
            <p>
              Khu du lịch sinh thái Cổng Trời Đông Giang là điểm đến trải nghiệm
              thiên nhiên và văn hóa Cơ Tu, thuộc Tập đoàn FVG.
            </p>
          </div>

          {/* Cột 2: Thông tin liên hệ */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Thông tin liên hệ</h5>
            <p>📍 Xã Bến Hiên, TP Đà Nẵng</p>
            <p>📞 Hotline: 1900 599 999</p>
            <p>📧 Email: booking@congtroidonggiang.com</p>
          </div>

          {/* Cột 3: Liên kết nhanh */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">VỀ FVG TRAVEL</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home">Ưu đãi</a>
              </li>
              <li>
                <a href="#about">Tin tức</a>
              </li>
              <li>
                <a href="#tours">Tuyển dụng</a>
              </li>
              <li>
                <a href="#contact">Liên hệ</a>
              </li>
            </ul>
          </div>
          {/* Cột 4: Book phòng */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">ĐẶT PHÒNG NGAY HÔM NAY</h5>
            <a
              href="https://fvgtravel.com.vn/reservation?hotel_id=509067"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-booknow"
            >
              Book Now
            </a>
          </div>
        </div>

        <hr className="my-4" />

        <p className="text-center mb-0">
          © {new Date().getFullYear()} Cổng Trời Đông Giang - FVG Group
        </p>
        <FloatingButtons />
      </div>
    </footer>
  );
}
