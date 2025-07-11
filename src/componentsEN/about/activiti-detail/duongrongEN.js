import React from "react";
import FooterEN from "../../layout/footerEN";
import HeaderEN from "../../layout/headerEN";
import FloatingButtonsEN from "../../floatingButtons/FloatingButtonsEN";

export default function DuongrongEN() {
  return (
    <div className="about-page">
      <HeaderEN />

      {/* General Info */}
      <section className="about-section container my-5" data-aos="fade-up">
        <div className="container py-5">
          <h1 className="mb-4 text-center">
            Ngoc Rong Glass Bridge at Dong Giang Heaven Gate – Walking on Clouds
          </h1>

          <p>
            The Ngoc Rong Glass Bridge is one of the most popular attractions in
            the Dong Giang Heaven Gate Ecotourism Area, Quang Nam. With its
            unique design perched on the top of Bao Lam mountain at over 800m
            above sea level, this bridge is a must-visit experience.
          </p>

          <img
            src="/images/cau-kinh-cong-troi-dong-giang-6.jpg"
            alt="Ngoc Rong Glass Bridge"
            className="img-fluid my-4 rounded shadow d-block mx-auto"
          />

          <h2>1. Introduction to the Glass Bridge</h2>
          <p>
            The bridge is 39 meters long and made of three layers of tempered
            glass, providing a transparent view that makes visitors feel like
            they are walking on clouds while gazing at the forest below.
          </p>

          <h2>2. Location and How to Get There</h2>
          <p>
            The Ngoc Rong Glass Bridge is located in the Dong Giang Heaven Gate
            Ecotourism Area, about 1 hour and 15 minutes by car from downtown Da
            Nang. From Da Nang, take National Highway 14B through Ha Nha Bridge
            – Ka Dang, then turn left toward Ma Cooih commune.
          </p>

          <img
            src="/images/cau-kinh-cong-troi-dong-giang-3.jpg"
            alt="The glass bridge from afar"
            className="img-fluid my-4 rounded shadow d-block mx-auto"
          />

          <h2>3. Experiences When Visiting the Glass Bridge</h2>
          <ul>
            <li>Enjoy breathtaking natural views from above</li>
            <li>
              Check in and hunt clouds in the early morning or late afternoon
            </li>
            <li>Feel the thrill of walking in mid-air</li>
            <li>
              Use a cable car or electric shuttle to reach the bridge base
            </li>
          </ul>

          <h2>4. Admission Fees</h2>
          <p>
            Entrance tickets include access to the glass bridge and other
            attractions:
            <br />– Adults: 400,000 VND <br />– Children (1–1.3m): 300,000 VND{" "}
            <br />– Under 1m: Free
          </p>

          <h2>5. Best Time to Visit</h2>
          <p>
            From March to August is the ideal time: dry weather, lots of
            sunshine, and good conditions for cloud hunting. It’s best to go
            early in the morning (6:00 – 9:00) or late in the afternoon (16:00 –
            18:00).
          </p>

          <img
            src="/images/cau-kinh-cong-troi-dong-giang-4.jpg"
            alt="Check-in on Ngoc Rong Glass Bridge"
            className="img-fluid my-4 rounded shadow d-block mx-auto"
          />

          <h2>6. Notes and Tips</h2>
          <ul>
            <li>Wear flat shoes and comfortable clothes</li>
            <li>Avoid standing too close to the edge when taking photos</li>
            <li>Not suitable for those with a fear of heights</li>
            <li>Always follow safety instructions from staff</li>
          </ul>

          <p className="mt-4">
            The Ngoc Rong Glass Bridge is not only a unique architectural work
            but also a place offering magnificent natural experiences. It is
            truly a highlight of Dong Giang tourism. Come and experience the
            mystical beauty of the Truong Son mountain range here!
          </p>
        </div>
      </section>

      <FooterEN />
      <FloatingButtonsEN />
    </div>
  );
}
