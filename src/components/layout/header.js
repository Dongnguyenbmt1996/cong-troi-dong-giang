import React, { useState } from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(false);
  const [showActivities, setShowActivities] = useState(false);

  const lang = localStorage.getItem("lang") || "vi";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setShowPromo(false);
    setShowActivities(false);
  };

  const toggleLanguage = () => {
    const newLang = lang === "vi" ? "en" : "vi";
    localStorage.setItem("lang", newLang);
    window.location.reload(); // để App.js render lại đúng component
  };

  return (
    <>
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

      {/* Sidebar menu trái */}
      <div className={`side-nav ${isOpen ? "open" : ""}`}>
        <button
          className="btn btn-sm btn-close float-end m-3"
          onClick={closeMenu}
        ></button>
        <ul className="nav flex-column mt-5 ps-4">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Trang chủ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              Giới thiệu
            </Link>
          </li>
          <li className="nav-item">
            <span
              className="nav-link"
              style={{ cursor: "pointer" }}
              onClick={() => setShowPromo(!showPromo)}
            >
              Khuyến Mãi {showPromo ? "▲" : "▼"}
            </span>
            {showPromo && (
              <ul className="nav flex-column ps-3">
                <li className="nav-item">
                  <Link
                    to="/promotions/combo-ve-voi-dong-giang"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Combo Đông Giang
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/promotions/bang-gia-dich-vu"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Bảng giá dịch vụ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/promotions/mien-phi-tre-em"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Trẻ em miễn phí
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/promotions/mien-phi-nguoi-cao-tuoi"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Miễn phí người cao tuổi
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item d-lg-none">
            <span
              className="nav-link"
              style={{ cursor: "pointer" }}
              onClick={() => setShowActivities(!showActivities)}
            >
              Hoạt động nổi bật {showActivities ? "▲" : "▼"}
            </span>
            {showActivities && (
              <ul className="nav flex-column ps-3">
                <li className="nav-item">
                  <Link
                    to="/activities/hang-dong"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Khám phá hang động
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/activities/cau-kinh"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Check-in Cầu Kính
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/activities/duong-rong"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Hành lang hình Rồng
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/activities/show-dai-ngan"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Show Đại Ngàn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/activities/thac-nuoc"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Hệ thống thác nước
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/activities/van-hoa-co-tu"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Văn hóa Cơ Tu
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <Link
            to="/"
            className="nav-link d-flex align-items-center px-2 py-1 rounded"
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              marginLeft: "10px",
            }}
            onClick={() => {
              localStorage.setItem("lang", "en");
              window.location.reload();
            }}
          >
            <img
              src="/images/flag-en.jpg"
              alt="English"
              style={{ width: "20px", height: "14px", marginRight: "6px" }}
            />
            EN
          </Link>
        </ul>
      </div>

      {/* Navbar chính */}
      <header className="sticky-top">
        <nav className="navbar navbar-light d-flex justify-content-between align-items-center px-3 py-2 nav-bar-header">
          <button
            className="btn btn-outline-primary d-lg-none"
            onClick={toggleMenu}
          >
            ☰
          </button>

          <a className="navbar-brand mx-auto d-lg-none" href="#">
            <img
              src="/images/logo-cong-troi-dong-giang-tach-nen.png"
              alt="Logo"
              height={60}
              className="logo-img"
            />
          </a>

          <a
            className="navbar-brand d-none d-lg-flex align-items-center"
            href="#"
          >
            <img
              src="/images/logo-cong-troi-dong-giang-tach-nen.png"
              alt="Logo"
              className="me-2 px-5 logo-img"
            />
          </a>

          <ul className="nav d-none d-lg-flex ms-auto px-5">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Trang chủ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeMenu}>
                Giới thiệu
              </Link>
            </li>

            <li className="nav-item position-relative">
              <span
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowPromo(!showPromo);
                  setShowActivities(false);
                }}
              >
                Khuyến Mãi {showPromo ? "▲" : "▼"}
              </span>
              {showPromo && (
                <ul className="dropdown-menu-custom position-absolute bg-white shadow rounded p-2">
                  <li>
                    <Link
                      to="/promotions/combo-ve-voi-dong-giang"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Combo Đông Giang
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/promotions/bang-gia-dich-vu"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Bảng giá dịch vụ
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/promotions/mien-phi-tre-em"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Trẻ em miễn phí
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/promotions/mien-phi-nguoi-cao-tuoi"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Miễn phí người cao tuổi
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item position-relative">
              <span
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowActivities(!showActivities);
                  setShowPromo(false);
                }}
              >
                Hoạt động nổi bật {showActivities ? "▲" : "▼"}
              </span>
              {showActivities && (
                <ul className="dropdown-menu-custom position-absolute bg-white shadow rounded p-2">
                  <li>
                    <Link
                      to="/activities/hang-dong"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Khám phá hang động
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/activities/cau-kinh"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Check-in Cầu Kính
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/activities/duong-rong"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Hành lang hình Rồng
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/activities/show-dai-ngan"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Show Đại Ngàn
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/activities/thac-nuoc"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Hệ thống thác nước
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/activities/van-hoa-co-tu"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Văn hóa Cơ Tu
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          {/* <Link
            to="/"
            className="nav-link"
            onClick={() => {
              localStorage.setItem("lang", "en");
              window.location.reload();
            }}
          >
            EN
          </Link> */}
          <Link
            to="/"
            className="nav-link d-flex align-items-center px-2 py-1 rounded"
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              marginLeft: "10px",
            }}
            onClick={() => {
              localStorage.setItem("lang", "en");
              window.location.reload();
            }}
          >
            <img
              src="/images/flag-en.jpg"
              alt="English"
              style={{ width: "20px", height: "14px", marginRight: "6px" }}
            />
            EN
          </Link>
        </nav>
      </header>
    </>
  );
}
