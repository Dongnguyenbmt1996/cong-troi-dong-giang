import React from "react";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import FloatingButtons from "../../floatingButtons/FloatingButtons";
export default function Caukinh() {
  return (
    <div className="about-page">
      <Header />

      {/* General Info */}
      <section className="about-section container my-5" data-aos="fade-up">
        <p>Cầu kính</p>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
