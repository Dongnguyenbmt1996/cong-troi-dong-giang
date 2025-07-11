import React from "react";
import FooterEN from "../../layout/footerEN";
import HeaderEN from "../../layout/headerEN";
import FloatingButtonsEN from "../../floatingButtons/FloatingButtonsEN";

export default function WaterfallEN() {
  return (
    <div className="about-page">
      <HeaderEN />

      {/* General Info */}
      <section className="about-section container my-5" data-aos="fade-up">
        <div className="container py-5">
          <h1 className="mb-4 text-center">
            Waterfalls at Dong Giang Heaven Gate – A Masterpiece Amid the Great
            Forest
          </h1>

          <p>
            Dong Giang Heaven Gate (Quang Nam) has been recognized as the{" "}
            <strong>
              ecotourism site with the most natural waterfalls in Vietnam
            </strong>
            , featuring <strong>25 waterfalls</strong> stretching over 5
            kilometers within a pristine and majestic rainforest. This record
            was certified by the{" "}
            <em>Vietnam Record Organization – VietKings</em>.
          </p>

          <img
            src="/images/he-thong-thac-nuoc-1.jpg"
            alt="Dong Giang Heaven Gate Waterfalls"
            className="img-fluid my-4 d-block mx-auto rounded shadow"
          />

          <h2>Diverse and Fascinating Beauty</h2>
          <p>
            Each waterfall at Dong Giang Heaven Gate offers its own unique
            charm: Waterfall No.1 bursts with wild flowers in summer, Waterfall
            No.5 has a steep drop creating a powerful stream, and Waterfall No.3
            is distinctively shaped like a curved bow split into two branches.
            Visitors can immerse themselves in the soothing sound of water
            flowing through the lush forest.
          </p>

          <h2>Names in the Co Tu Language</h2>
          <p>
            Each waterfall is lovingly named by the Co Tu people using native
            words such as Cruôl (wild banana), A Tút (torch tree), Tơ rang bhót
            (monkey's place), A Liêng (wood core), Trakir (wild olive fruit),
            reflecting their unique culture and deep connection with nature.
          </p>

          <img
            src="/images/he-thong-thac-nuoc-2.jpg"
            alt="Untouched waterfalls in Dong Giang"
            className="img-fluid my-4 d-block mx-auto rounded shadow"
          />

          <h2>Experiences Not to Miss</h2>
          <ul>
            <li>
              Explore 25 magnificent waterfalls through a forest trekking
              journey.
            </li>
            <li>
              Enjoy pristine landscapes and refreshing, crystal-clear streams.
            </li>
            <li>
              Capture amazing photos in a unique natural setting found only in
              Dong Giang.
            </li>
            <li>
              Discover Co Tu culture through the stories behind each waterfall.
            </li>
          </ul>

          <p className="mt-4">
            Not only an ideal destination for nature lovers, the waterfall
            system at Dong Giang Heaven Gate is also a valuable cultural and
            environmental heritage — offering an unforgettable eco-tourism
            experience deep within the Truong Son mountain range.
          </p>
        </div>
      </section>

      <FooterEN />
      <FloatingButtonsEN />
    </div>
  );
}
