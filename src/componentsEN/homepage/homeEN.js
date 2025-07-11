import React from "react";
import HeaderEN from "../layout/headerEN";
import FooterEN from "../layout/footerEN";
import ActivitiesEN from "../about/ActivitiesEN";
import UtilitiesEN from "./utilitiesEN";
import PromotionsEN from "./promotionEN";
import "../css/home.css";
import { Link } from "react-router-dom";

export default function HomeEN() {
  return (
    <div>
      <HeaderEN />
      <section
        className="text-white text-center p-5 banner-home"
        style={{
          backgroundImage: "url('/images/banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></section>

      <section className="about" data-aos="fade-up">
        <img
          className="leaf-img position-absolute"
          src="/images/la-cay-1.png"
          alt="Leaf decoration"
        />
        <h1 className="display-4 fw-bold h1-about">
          Dong Giang Heaven’s Gate Eco-tourism Area
        </h1>
        <p className="fs-5">Experience Nature & Co Tu Culture</p>
        <p>
          Nestled in the heart of majestic mountains, Dong Giang Heaven’s Gate
          is not only a perfect destination for nature lovers but also a symbol
          of sustainable development. As a key project of FVG Group, this
          120-hectare tourist complex with a total investment of over 2,600
          billion VND affirms the group's vision and ambition to elevate
          Vietnamese eco-tourism to international standards. Officially opened
          to visitors in April 2022, it offers magnificent waterfalls, caves,
          and a refreshing climate of pristine nature.
        </p>
        <Link to="/about-en" className="btn btn-outline-success mt-3 px-4">
          Learn More
        </Link>
      </section>

      <ActivitiesEN />
      <PromotionsEN />
      {/* Utility services */}
      <UtilitiesEN />

      {/* Additional Information */}
      <section className="container py-5" data-aos="fade-up">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h3 className="text-success fw-bold">
              A Peaceful Haven Amidst Majestic Nature
            </h3>
            <p>
              Like a fresh and precious gift from nature, Dong Giang Heaven’s
              Gate is a peaceful sanctuary nestled in the mountains, filling
              your soul with serenity and recharging you with positive energy.
              Listen to the pure sounds of the jungle and enjoy the refreshing
              atmosphere—let this eco-tourism area guide you on a journey to
              embrace nature and create unforgettable memories your own way!
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/images/thac-cong-troi-dong-giang.jpg"
              className="img-fluid rounded shadow"
              alt="Dong Giang Waterfall"
            />
          </div>
        </div>

        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-6">
            <h3 className="text-success fw-bold">
              Green Tourism in the Highlands
            </h3>
            <p>
              Dong Giang Heaven’s Gate is hailed as a “paradise” resort
              featuring the only professionally managed 4-star hotel system in
              the mountainous region of Quang Nam. With diverse landscapes
              including caves, waterfalls, and more—this is the ideal
              destination for those who love nature and seek a truly memorable
              holiday.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/images/cap-treo-1.jpg"
              className="img-fluid rounded shadow"
              alt="Dong Giang Cable Car"
            />
          </div>
        </div>
      </section>

      <FooterEN />
    </div>
  );
}
