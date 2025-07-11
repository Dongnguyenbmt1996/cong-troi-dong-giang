import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "../css/promotion.css"; // CSS từ câu trả lời trước

const promotions = [
  {
    title: "Combo về với Đông Giang",
    desc: "Giảm giá 30% cho đoàn từ 4 người trở lên trong ngày Thứ 7 - Chủ nhật.",
    image: "/images/banner-499.jpg",
    link: "/promotions/combo-ve-voi-dong-giang",
  },
  {
    title: "Bảng giá dịch vụ",
    desc: "Tiết kiệm đến 400.000đ với combo hấp dẫn dành cho 2 người.",
    image: "/images/banner-giang-gia.jpg",
    link: "/promotions/bang-gia-dich-vu",
  },
  {
    title: "Miễn phí vé cho trẻ dưới 1,4M",
    desc: "Tham gia tour sống ảo chuyên sâu với HDV hỗ trợ miễn phí.",
    image: "/images/banner-mien-phi-tre-nho.jpg",
    link: "/promotions/mien-phi-tre-em",
  },
  {
    title: "Miễn phí vé cho cô chú từ 60 tuổi",
    desc: "Tặng kèm bữa ăn đặc sản khi đặt vé theo nhóm từ 5 người.",
    image: "/images/banner-uu-dai-ong-ba.jpg",
    link: "/promotions/mien-phi-nguoi-cao-tuoi",
  },
];

export default function PromotionsEN() {
  return (
    <section className="promo-section" data-aos="fade-up">
      <div className="container">
        <h2>Promotions & Special Offers</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 1, // Tablet trở xuống: 1 slide
            },
            992: {
              slidesPerView: 2, // Từ 992px (desktop): chỉ hiển thị 2 promotion
            },
          }}
        >
          {promotions.map((promo, index) => (
            <SwiperSlide key={index}>
              <div className="promo-card">
                <Link
                  to={promo.link}
                  className="promo-card text-decoration-none"
                >
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="promo-img"
                  />
                  <div className="promo-content">
                    {/* <h5>{promo.title}</h5> */}
                    {/* <p>{promo.desc}</p> */}
                    <a href={promo.link} className="btn btn-sm mt-2">
                      View Details
                    </a>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
