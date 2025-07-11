import React from "react";
import FooterEN from "../../layout/footerEN";
import HeaderEN from "../../layout/headerEN";
import FloatingButtonsEN from "../../floatingButtons/FloatingButtonsEN";
export default function CaukinhEN() {
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
            Ngoc Rong Glass Bridge is one of the most prominent attractions at
            Dong Giang Heaven Gate Ecotourism Area, Quang Nam. With its unique
            design atop Bao Lam mountain, over 800 meters above sea level, this
            bridge offers an unmissable experience.
          </p>

          <img
            src="/images/cau-kinh-cong-troi-dong-giang-6.jpg"
            alt="Cầu kính Ngọc Rồng"
            className="img-fluid my-4 rounded shadow d-block mx-auto"
          />

          <h2>1. Introduction to the Glass Bridge</h2>
          <p>
            The glass bridge is 39 meters long, made of three-layer tempered
            glass. Its transparency allows visitors to feel like they are
            “walking on clouds” while admiring the forest scenery below.
          </p>

          <h2>2. Location and How to Get There</h2>
          <p>
            The Ngoc Rong Glass Bridge is located within the Dong Giang Heaven
            Gate Ecotourism Area, just about 1 hour and 15 minutes by car from
            Da Nang. From Da Nang, take National Road 14B through Ha Nha – Ka
            Dang bridge, then turn left toward Ma Cooih commune.
          </p>

          <img
            src="/images/cau-kinh-cong-troi-dong-giang-3.jpg"
            alt="Cầu kính nhìn từ xa"
            className="img-fluid my-4 rounded shadow d-block mx-auto"
          />

          <h2>3. Experiences on the Glass Bridge</h2>
          <ul>
            <li>Admire the majestic nature from above</li>
            <li>
              Check-in and "hunt clouds" in the early morning or late afternoon
            </li>
            <li>Experience the thrill of floating in mid-air</li>
            <li>
              Travel by cable car or electric vehicle to the foot of the bridge
            </li>
          </ul>

          <h2>4. Entrance Ticket Prices</h2>
          <p>
            The entrance ticket includes the glass bridge and many other
            activities:
            <br />– Adults: 400,000 VND <br />– Children (1–1.3m): 300,000 VND{" "}
            <br />– Under 1m: Free
          </p>

          <h2>5. Best Time to Visit the Glass Bridge</h2>
          <p>
            From March to August is the best time to visit: little rain, lots of
            sunshine, and a great chance to catch clouds. The best time is early
            morning (6:00 – 9:00 AM) or late afternoon (4:00 – 6:00 PM).
          </p>

          <img
            src="/images/cau-kinh-cong-troi-dong-giang-4.jpg"
            alt="Check-in trên cầu kính Ngọc Rồng"
            className="img-fluid my-4 rounded shadow d-block mx-auto"
          />

          <h2>6. Notes and Tips</h2>
          <ul>
            <li>Wear low-heeled shoes and comfortable clothing</li>
            <li>Avoid standing close to the edge when taking photos</li>
            <li>Not suitable for those afraid of heights</li>
            <li>Always follow safety instructions from staff</li>
          </ul>

          <p className="mt-4">
            The Ngoc Rong Glass Bridge is not only a unique architectural
            structure but also a place to experience the grandeur of nature. It
            truly stands out as a highlight of Dong Giang tourism. Come and feel
            the mysterious beauty of the Truong Son mountains here!
          </p>
        </div>
      </section>

      <FooterEN />
      <FloatingButtonsEN />
    </div>
  );
}
