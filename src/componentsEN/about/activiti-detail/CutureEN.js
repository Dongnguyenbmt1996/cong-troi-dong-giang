import React from "react";
import FooterEN from "../../layout/footerEN";
import HeaderEN from "../../layout/headerEN";
import FloatingButtonsEN from "../../floatingButtons/FloatingButtonsEN";

export default function CutureEN() {
  return (
    <div className="about-page">
      <HeaderEN />

      {/* General Info */}
      <section className="about-section container my-5" data-aos="fade-up">
        <div className="container py-5">
          <h1 className="mb-4 text-center">
            Introduction to the Co Tu Cultural Village at Dong Giang Heaven Gate
          </h1>

          <p>
            The Co Tu Cultural Village is not just a sightseeing spot — it is a
            place that recreates the culture of the Co Tu ethnic people through
            engaging activities. So where is this village located and what makes
            it so intriguing to visitors?
          </p>

          <img
            src="/images/kham-pha-van-hoa-ban-dia-1.jpg"
            alt="Co Tu Cultural Village – a prominent attraction"
            className="img-fluid my-4 rounded shadow mx-auto d-block"
          />

          <h2>
            Overview of the Co Tu Cultural Village – A Highlight of the Tourist
            Complex
          </h2>
          <p>
            The Co Tu are one of Vietnam’s 54 ethnic groups, known for their
            distinctive and rich cultural identity. To better understand them,
            visit the Co Tu Village – a standout location within Dong Giang
            Heaven Gate Tourism Area.
          </p>

          <h2>Location of the Co Tu Cultural Village</h2>
          <p>
            The Co Tu Village is a reconstructed area showcasing the life and
            space of the Co Tu people. It is part of the Dong Giang Heaven Gate
            Ecotourism Complex, located in Ma Cooih commune, Dong Giang
            district, Quang Nam province — about 100 km west of Da Nang city.
          </p>

          <p>
            This tourism complex is a well-planned investment by FVG Group,
            featuring multiple zones over an area of more than 120 hectares.
          </p>

          <img
            src="/images/kham-pha-van-hoa-ban-dia-2.jpg"
            alt="The village inside Dong Giang Heaven Gate Tourism Complex"
            className="img-fluid my-4 rounded shadow mx-auto d-block"
          />

          <p>
            By choosing to develop the mountainous Dong Giang district, the
            investor aims to turn the area into a top-tier destination for
            tourism and leisure — while also preserving the cultural heritage of
            the Co Tu ethnic people.
          </p>

          <h2>What Makes the Co Tu Cultural Village Special?</h2>
          <p>
            It's easy to spot the village upon entering Dong Giang Heaven Gate.
            You'll immediately see rows of stilt houses made of wooden frames
            and thatched roofs — the traditional homes of the Co Tu.
          </p>

          <p>
            You'll also see men and women wearing vibrant brocade costumes —
            and, of course, familiar everyday items such as: zoong (pots), re
            (baskets), chuy (bags), ta lec, ca vong…
          </p>

          <img
            src="/images/kham-pha-van-hoa-ban-dia-3.jpg"
            alt="Typical scene from the Co Tu Cultural Village"
            className="img-fluid my-4 rounded shadow mx-auto d-block"
          />

          <p>
            The unique culture of the Co Tu is also reflected through festivals,
            events, entertainment, and cuisine. Exploring the village will leave
            you feeling deeply fascinated and culturally enriched.
          </p>
        </div>
      </section>

      <FooterEN />
      <FloatingButtonsEN />
    </div>
  );
}
