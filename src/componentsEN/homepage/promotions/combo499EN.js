import React from "react";
import FooterEN from "../../layout/footerEN";
import HeaderEN from "../../layout/headerEN";
import FloatingButtonsEN from "../../floatingButtons/FloatingButtonsEN";

export default function ComboFivigoEN() {
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
        <div className="container py-5">
          <h1 className="text-success fw-bold mb-4">
            GOLDEN AUTUMN ESCAPE TO DONG GIANG HEAVEN'S GATE – FROM ONLY
            499K/PERSON
          </h1>
          <p className="text-muted">
            Valid from September 15, 2024 to December 31, 2024
          </p>

          <img
            src="/images/poster-499.jpg"
            alt="Dong Giang Combo 499K"
            className="img-fluid rounded mb-4 d-block mx-auto"
          />

          <ul className="list-unstyled fs-5">
            <li>
              ✅ Cloud-hunting check-in on the{" "}
              <strong>Ngoc Rong Glass Bridge</strong> at Bao Lam Peak – where
              autumn sky meets earth.
            </li>
            <li>
              ✅ Entrance ticket to explore the entire{" "}
              <strong>Dong Giang Heaven's Gate</strong> – a masterpiece in the
              Truong Son jungle.
            </li>
            <li>
              ✅ One-night stay at a <strong>4-star hotel</strong> nestled in
              the mountains.
            </li>
            <li>
              ✅ A <strong>mountain specialty dinner</strong> full of forest
              flavors.
            </li>
          </ul>

          <h4 className="mt-5 text-primary fw-bold">
            Other must-try experiences:
          </h4>
          <ul className="fs-5">
            <li>🎈 Cable car & Ngoc Rong Glass Bridge</li>
            <li>
              🎭 “Dance of the Great Forest” show – A vibrant tribute to Co Tu
              culture
            </li>
            <li>🛶 SUP paddling at Dragon Egg Waterfall</li>
            <li>🏊 Infinity pool in the middle of the jungle</li>
            <li>
              🗺️ Explore Mountain Base Town: waterfalls, Tien Cung cave, Bon Bon
              forest, cultural village...
            </li>
            <li>🎉 Unique and exciting entertainment programs</li>
          </ul>

          <h5 className="mt-4">🎯 Terms & Conditions:</h5>
          <ul className="fs-5">
            <li> Limited to the first 20 customers.</li>
            <li> Valid on Mondays – Fridays and Sundays.</li>
            <li> An extra fee of 100,000 VND/person applies on Saturdays.</li>
            <li>
              “Dance of the Great Forest” show is available when there are at
              least 20 room bookings per day.
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Info */}
      <section className="about-section container my-5">
        <h2 className="section-title">Contact Information</h2>
        <table className="contact-table">
          <tbody>
            <tr>
              <td>📍</td>
              <td>Thon A So, Ben Hien Commune, Da Nang City, Vietnam</td>
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
        <h3 className="mb-3">Ready for your adventure?</h3>
        <a
          href="https://fvgtravel.com.vn/reservation?hotel_id=509067"
          className="btn btn-warning btn-lg fw-bold"
        >
          Book Now
        </a>
      </section> */}

      <FooterEN />
      <FloatingButtonsEN />
    </div>
  );
}
