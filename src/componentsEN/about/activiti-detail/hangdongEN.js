import React from "react";
import FooterEN from "../../layout/footerEN";
import HeaderEN from "../../layout/headerEN";
import FloatingButtonsEN from "../../floatingButtons/FloatingButtonsEN";

export default function HangdongEN() {
  return (
    <div className="about-page">
      <HeaderEN />

      {/* General Info */}
      <section className="about-section container my-5" data-aos="fade-up">
        <h1 className="text-center fw-bold text-success mb-4">
          Explore the Cave System at Dong Giang Heaven Gate – A Masterpiece in
          the Great Forest
        </h1>

        <p>
          Visiting Dong Giang Heaven Gate Ecotourism Area would not be complete
          without stepping into its mysterious cave system, where the majestic
          beauty of primeval mountains meets the magical formations shaped by
          nature over thousands of years.
        </p>

        <img
          src="/images/hang-dong.jpg"
          alt="Cave system at Dong Giang Heaven Gate"
          className="img-fluid rounded my-4 mx-auto d-block"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />

        <h2 className="fw-bold text-success mt-5">Unique Location</h2>
        <p>
          The cave system spans over 120 hectares, nestled among lush green
          mountains and natural waterfalls. Notable caves include Hang Gợp, Ngọc
          Đế Cave, and Tiên Cung Cave – often referred to as the "Miniature
          Phong Nha of Central Vietnam."
        </p>
        <img
          src="/images/hang-dong-7.jpg"
          alt="Ngọc Đế Cave, Dong Giang"
          className="img-fluid rounded my-4 mx-auto d-block"
        />

        <h2 className="fw-bold text-success mt-4">Nature's Gift</h2>
        <p>
          Currently, Dong Giang Heaven Gate features over 20 large and small
          caves of various shapes. Inside the caves, you’ll find shimmering
          stalactites and magical stalagmites combined with lighting, creating a
          fairy-tale-like space. The temperature inside remains pleasantly cool
          year-round.
        </p>

        <img
          src="/images/hang-dong-6.jpg"
          alt="Ngọc Đế Cave, Dong Giang"
          className="img-fluid rounded my-4 mx-auto d-block"
        />

        <h2 className="fw-bold text-success mt-4">Free Exploration</h2>
        <p>
          Visitors only need to purchase a{" "}
          <strong>general entrance ticket</strong> to freely explore the entire
          cave system, with no extra charges. Ticket prices are as follows:
        </p>
        <ul>
          <li>
            Adults & Children over 1.4m: <strong>400,000 VND</strong>
          </li>
          <li>
            Children from 1m – 1.3m: <strong>300,000 VND</strong>
          </li>
          <li>
            Children under 1m: <strong>Free</strong>
          </li>
        </ul>

        <p>
          This ticket also includes other experiences: cable car, Ngoc Rong
          Glass Bridge, SUP paddling, flower garden, cloud-hunting check-ins,
          and more.
        </p>

        <h2 className="fw-bold text-success mt-4">Best Time to Visit</h2>
        <p>
          Spring and summer are the ideal times to explore the caves. The dry
          weather makes it easier to move around, with vibrant green forest
          scenery and babbling streams adding to the charm. Inside the caves,
          the temperature stays between 20–25°C, providing a refreshing escape
          from the heat.
        </p>
        <img
          src="/images/he-thong-hang-dong-10.jpg"
          alt="Ngọc Đế Cave, Dong Giang"
          className="img-fluid rounded my-4 mx-auto d-block"
        />

        <h2 className="fw-bold text-success mt-4">Things to Keep in Mind</h2>
        <ul>
          <li>Wear flat or anti-slip sports shoes</li>
          <li>Lightweight, breathable clothing</li>
          <li>You may bring a flashlight to enhance the experience</li>
          <li>Check the weather forecast before your trip</li>
        </ul>

        <h2 className="fw-bold text-success mt-4">How to Get There</h2>
        <p>
          From downtown Da Nang, take National Highway 14B through Ha Nha Bridge
          – Ha Tan – Ka Dang Commune – Ma Cooih Commune. You can travel by
          motorbike, private car, or join a tour, all are convenient.
        </p>
      </section>

      <FooterEN />
      <FloatingButtonsEN />
    </div>
  );
}
