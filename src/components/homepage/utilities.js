import React from "react";
import "../css/utilities.css";
import {
  FaWifi,
  FaSwimmer,
  FaChild,
  FaUtensils,
  FaShuttleVan,
  FaParking,
  FaBroom,
  FaTshirt,
} from "react-icons/fa";

export default function Utilities() {
  return (
    <section className="utilities-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-4 text-success fw-bold">
          Các dịch vụ tiện ích khác
        </h2>
        <div className="row g-4">
          {/* Wifi */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="utility-item text-center p-3 shadow-sm rounded">
              <FaWifi size={30} className="mb-2 text-success" />
              <p>Wifi miễn phí</p>
            </div>
          </div>
          {/* Hồ bơi */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="utility-item text-center p-3 shadow-sm rounded">
              <FaSwimmer size={30} className="mb-2 text-success" />
              <p>Hồ bơi</p>
            </div>
          </div>
          {/* Khu vui chơi trẻ em */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="utility-item text-center p-3 shadow-sm rounded">
              <FaChild size={30} className="mb-2 text-success" />
              <p>Khu vui chơi trẻ em</p>
            </div>
          </div>
          {/* Nhà hàng */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="utility-item text-center p-3 shadow-sm rounded">
              <FaUtensils size={30} className="mb-2 text-success" />
              <p>Nhà hàng</p>
            </div>
          </div>
          {/* Giặt là */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="utility-item text-center p-3 shadow-sm rounded">
              <FaTshirt size={30} className="mb-2 text-success" />
              <p>Giặt là</p>
            </div>
          </div>
          {/* Dọn phòng */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="utility-item text-center p-3 shadow-sm rounded">
              <FaBroom size={30} className="mb-2 text-success" />
              <p>Dọn phòng hằng ngày</p>
            </div>
          </div>
          {/* Bãi đỗ xe */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="utility-item text-center p-3 shadow-sm rounded">
              <FaParking size={30} className="mb-2 text-success" />
              <p>Bãi đỗ xe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
