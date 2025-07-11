import React from "react";
import FooterEN from "../../layout/footerEN";
import HeaderEN from "../../layout/headerEN";
import FloatingButtonsEN from "../../floatingButtons/FloatingButtonsEN";

export default function ShowEN() {
  return (
    <div className="about-page">
      <HeaderEN />

      {/* General Info */}
      <section className="about-section container my-5" data-aos="fade-up">
        <div className="container py-5">
          <h1 className="mb-4 text-center">
            Recreating Co Tu Culture through the Show "Dance of the Great
            Forest"
          </h1>

          <p>
            Debuting in April 2023, the show{" "}
            <strong>"Dance of the Great Forest"</strong> vividly showcases the
            diverse beauty of Co Tu culture — from natural landscapes to people
            and traditions — to both domestic and international tourists,
            highlighting the promising appeal of highland tourism in Dong Giang.
          </p>

          <h2>1. A Unique Cultural Performance</h2>
          <p>
            Lasting 30 minutes, the show is a large-scale production that
            recreates the festive atmosphere of the Co Tu people. Highlights
            include the signature dance "Tung tung Da dá", lyrical storytelling,
            traditional musical ensembles, and the New Rice Celebration —
            offering a rich emotional cultural journey.
          </p>

          <img
            src="/images/show-dai-ngan-1.jpg"
            alt="Dance of the Great Forest show"
            className="img-fluid my-4 rounded shadow d-block mx-auto"
          />

          <h2>2. Stunning Outdoor Stage</h2>
          <p>
            The performance takes place outdoors at the Co Tu Cultural Village
            stage within Dong Giang Heaven Gate Ecotourism Area. Featuring over
            30 local artisans and a modern lighting and sound system, the show
            is a visually stunning and emotionally engaging art experience.
          </p>

          <h2>3. Dedicated Artisans Behind the Scenes</h2>
          <p>
            The artisans undergo thorough training in dance movements, lyrical
            storytelling, and traditional instruments. The resounding sounds of
            the tam rech zither, abel, a guốch panpipe, and gongs echoing
            through the forest captivate the audience.
          </p>

          <img
            src="/images/show-dai-ngan-2.jpg"
            alt="Co Tu artisan performing"
            className="img-fluid my-4 rounded shadow d-block mx-auto"
          />

          <h2>4. Beauty in the "Tung tung Da dá" Dance</h2>
          <p>
            This is the highlight of the "Cha Ha Ro Tơ Me" New Rice Celebration,
            symbolizing the harmony between people and nature. Dressed in
            traditional brocade, artisans perform graceful movements reminiscent
            of reeds swaying in the wind — beautifully representing the unique
            Co Tu culture.
          </p>

          <img
            src="/images/show-dai-ngan-3.jpg"
            alt="Tung tung Da dá dance of the Co Tu"
            className="img-fluid my-4 rounded shadow d-block mx-auto"
          />

          <h2>5. Visitor Impressions</h2>
          <p>
            Many visitors shared how impressed they were with the performance.
            Ms. Minh Nguyet, a tourist from Hai Phong, said: “Beneath the forest
            canopy, the melodies of lyrical storytelling resonated deeply,
            showcasing the talent and soulful artistry of the Co Tu people.”
          </p>

          <h2>6. Preserving Indigenous Culture</h2>
          <p>
            According to Ms. Vo Ngoc Anh, CEO of FVG Travel: “'Dance of the
            Great Forest' contributes to preserving and promoting the essence of
            indigenous culture in the majestic Truong Son mountains, creating a
            unique tourism experience that attracts visitors from near and far.”
          </p>

          <blockquote className="mt-4 fst-italic text-center">
            “Give us just 30 minutes, and we will return to you all the love for
            our homeland and the radiant pride of the Co Tu people under the
            majestic Truong Son forest.”
          </blockquote>
        </div>
      </section>

      <FooterEN />
      <FloatingButtonsEN />
    </div>
  );
}
