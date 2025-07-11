import React from "react";
import "../css/about.css";
import HeaderEN from "../layout/headerEN";
import FooterEN from "../layout/footerEN";
import ActivitiesEN from "./ActivitiesEN";
import FloatingButtonsEN from "../floatingButtons/FloatingButtonsEN";
export default function AboutEN() {
  return (
    <div className="about-page">
      <HeaderEN />
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
            <h2 className="section-title">General Information</h2>
            <p>
              Dong Giang Heaven Gate is a project invested by FVG Group with a
              total capital of over 2,600 billion VND, spanning an area of 120
              hectares and divided into 4 subzones. It is one of the largest
              tourist areas in Quang Nam province.
            </p>
            <p>
              This destination is not only a fresh new stop for travelers, but
              also contributes to preserving the culture of the Co Tu people,
              with its system of caves, waterfalls, stilt houses, and stunning
              mountainous scenery.
            </p>
          </div>
        </div>
      </section>

      <ActivitiesEN />

      {/* CTA Section */}
      <FooterEN />
      <FloatingButtonsEN />
    </div>
  );
}
