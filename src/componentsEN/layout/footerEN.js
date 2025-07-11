import React from "react";
import "../css/Footer.css";
import FloatingButtonsEN from "../floatingButtons/FloatingButtonsEN";

export default function FooterEN() {
  return (
    <footer className="footer pt-5 pb-3 text-white">
      <div className="container">
        <div className="row gy-4">
          {/* Column 1: Logo and Description */}
          <div className="col-lg-3 col-md-6">
            <img
              src="/images/logo-cong-troi-dong-giang-tach-nen.png"
              alt="Logo"
              className="footer-logo mb-3"
            />
            <p>
              Dong Giang Heaven Gate Ecotourism is a destination to experience
              nature and Co Tu culture, developed by FVG Group.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Contact Information</h5>
            <p>📍 Ben Hien Commune, Da Nang City</p>
            <p>📞 Hotline: 1900 599 999</p>
            <p>📧 Email: booking@congtroidonggiang.com</p>
          </div>

          {/* Column 3: Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">ABOUT FVG TRAVEL</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home">Promotions</a>
              </li>
              <li>
                <a href="#about">News</a>
              </li>
              <li>
                <a href="#tours">Careers</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Booking */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">BOOK YOUR STAY TODAY</h5>
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
          © {new Date().getFullYear()} Dong Giang Heaven Gate – FVG Group
        </p>
        <FloatingButtonsEN />
      </div>
    </footer>
  );
}
