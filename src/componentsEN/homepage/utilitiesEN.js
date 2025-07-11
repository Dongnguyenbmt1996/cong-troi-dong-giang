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

export default function UtilitiesEN() {
  return (
    <section className="utilities-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-4 text-success fw-bold">
          Additional Amenities
        </h2>
        <div className="row g-4">
          {/* Free Wifi */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="utility-item text-center p-3 shadow-sm rounded">
              <FaWifi size={30} className="mb-2 text-success" />
              <p>Free Wifi</p>
            </div>
          </div>
          {/* Swimming Pool */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="utility-item text-center p-3 shadow-sm rounded">
              <FaSwimmer size={30} className="mb-2 text-success" />
              <p>Swimming Pool</p>
            </div>
          </div>
          {/* Kids Playground */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="utility-item text-center p-3 shadow-sm rounded">
              <FaChild size={30} className="mb-2 text-success" />
              <p>Kids' Playground</p>
            </div>
          </div>
          {/* Restaurant */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="utility-item text-center p-3 shadow-sm rounded">
              <FaUtensils size={30} className="mb-2 text-success" />
              <p>Restaurant</p>
            </div>
          </div>
          {/* Laundry */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="utility-item text-center p-3 shadow-sm rounded">
              <FaTshirt size={30} className="mb-2 text-success" />
              <p>Laundry Service</p>
            </div>
          </div>
          {/* Daily Housekeeping */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="utility-item text-center p-3 shadow-sm rounded">
              <FaBroom size={30} className="mb-2 text-success" />
              <p>Daily Housekeeping</p>
            </div>
          </div>
          {/* Parking */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="utility-item text-center p-3 shadow-sm rounded">
              <FaParking size={30} className="mb-2 text-success" />
              <p>Parking Lot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
