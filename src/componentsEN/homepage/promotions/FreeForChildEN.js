import React from "react";
import FooterEN from "../../layout/footerEN";
import HeaderEN from "../../layout/headerEN";
import FloatingButtonsEN from "../../floatingButtons/FloatingButtonsEN";

export default function FreeForChildEN() {
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
            SPECIAL OFFERS FOR GRANDPARENTS AND CHILDREN AT DONG GIANG HEAVEN'S
            GATE
          </h1>
          <p className="text-muted">September 27, 2024</p>

          <img
            src="/images/free-for-child.jpg"
            alt="Special Offers for Seniors and Children"
            className="img-fluid rounded mb-4 d-block mx-auto"
          />

          <p>Celebrate the arrival of autumn with exclusive offers!</p>

          <p>
            Dong Giang Heaven’s Gate is delighted to present special autumn
            gifts for beloved grandparents and children:
          </p>

          <ul>
            <li>
              🎁 <strong>Free entrance ticket</strong> for guests aged 60 and
              above when booking accommodation.
              <br />
              <em>Applicable on Mondays and Tuesdays.</em>
            </li>
            <li>
              🎁 <strong>Free entrance ticket</strong> for children under 1.4m
              when booking accommodation or day trips.
              <br />
              <em>Applicable on Wednesdays and Thursdays.</em>
            </li>
          </ul>

          <p>
            Come to Dong Giang Heaven’s Gate and experience a variety of unique
            attractions:
          </p>

          <ul>
            <li>
              ✅ Cloud-hunting check-in on the Glass Bridge at Bao Lam Peak – a
              magical fairyland scene
            </li>
            <li>✅ Free cable car rides</li>
            <li>
              ✅ Enjoy the <strong>“Dance of the Great Forest”</strong> –
              immerse in the Co Tu culture
            </li>
            <li>
              ✅ Admire Dragon Egg Waterfall, Tien Cung Cave, Ngoc De Cave, Bon
              Bon Forest, and other majestic natural wonders
            </li>
            <li>✅ Explore the traditional Co Tu cultural village</li>
            <li>
              ✅ Paddle SUP at Dragon Egg Waterfall – refreshing nature
              experience
            </li>
            <li>
              ✅ Relax at the jungle infinity pool – stunning panoramic mountain
              views
            </li>
          </ul>

          <p>
            Let Dong Giang Heaven’s Gate bring your family closer – cherish
            every moment together in the heart of the majestic Truong Son
            mountains!
          </p>

          <p className="text-danger">
            *Note: “Dance of the Great Forest” show will only be held when there
            are at least 20 room bookings per day.
          </p>
        </div>
      </section>

      <FooterEN />
      <FloatingButtonsEN />
    </div>
  );
}
