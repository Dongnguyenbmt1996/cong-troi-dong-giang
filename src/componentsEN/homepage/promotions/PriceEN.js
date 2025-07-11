import React from "react";
import FooterEN from "../../layout/footerEN";
import HeaderEN from "../../layout/headerEN";
import FloatingButtonsEN from "../../floatingButtons/FloatingButtonsEN";

export default function PriceEN() {
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
            DONG GIANG HEAVEN'S GATE – UPDATED TICKET PRICES FOR 2025
          </h1>
          <p className="text-muted">December 27, 2024</p>

          <img
            src="/images/bang-gia.jpg"
            alt="Service Price List"
            className="img-fluid rounded mb-4 d-block mx-auto"
          />

          <p>
            Ring in the new year with an exciting journey –{" "}
            <strong>Updated ticket prices for 2025!</strong>
          </p>

          <p>
            Starting from just <strong>#400K</strong>, enjoy amazing experiences
            including:
          </p>

          <ul>
            <li>
              <strong>Free</strong> cable car ride – the first of its kind in
              Quang Nam, offering panoramic views of the majestic forested
              mountains.
            </li>
            <li>
              <strong>Free</strong> access to the Dragon Pearl Glass Bridge,
              uniquely designed in the shape of a dragon pearl.
            </li>
            <li>
              Check-in and cloud hunt at Bao Lam Peak – 801 meters high and
              stunning like a fairyland.
            </li>
            <li>
              Immerse yourself in colorful flower gardens, Love Park, Water
              Park, and natural hot springs and waterfalls.
            </li>
            <li>
              Walk along the 500m Dragon-shaped Path –{" "}
              <em>the longest covered dragon walkway in Vietnam</em>.
            </li>
            <li>
              Discover sacred temples and caves: Ba Lam Cung Holy Mother Temple,
              Ngoc De Cave, Tien Cung Cave, and more.
            </li>
            <li>
              Explore Co Tu ethnic culture and enjoy forest cuisine: bamboo
              rice, grilled chicken, etc.
            </li>
            <li>
              Visit Bon Bon Forest, Quynh Anh Flower Garden, and Dong Giang
              Heaven’s Gate.
            </li>
            <li>
              Stroll along the Ngan River and check in at Kieu Bridge, O Thuoc
              Bridge, and more.
            </li>
          </ul>

          <p>
            Visitors can conveniently buy tickets directly at the entrance –
            perfect for those who want a flexible schedule.
          </p>

          <p>
            Or <strong>book tickets online</strong> for detailed consultation.
            Call us at <strong>1900 866644</strong> or message our official
            Facebook page for fast and convenient support.
          </p>
        </div>
      </section>

      <FooterEN />
      <FloatingButtonsEN />
    </div>
  );
}
