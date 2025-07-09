import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import "../css/about.css"; // CSS tuỳ chỉnh

export default function Activities() {
  const activities = [
    {
      title: "Khám phá hệ thống hang động",
      image: "/images/hang-dong.jpg",
      link: "/activities/hang-dong",
    },
    {
      title: "Check-in Cầu Kính",
      image: "/images/cau-kinh-cong-troi-dong-giang.jpg",
      link: "/activities/cau-kinh",
    },
    {
      title: "Hành lang dạo bộ hình rồng dài nhất Việt Nam",
      image: "/images/duong-rong.jpg",
      link: "/activities/duong-rong",
    },

    {
      title: "Show Đại Ngàn",
      image: "/images/show-dai-ngan.jpg",
      link: "/activities/show-dai-ngan",
    },
    {
      title: "Hệ thống thác nước",
      image: "/images/thac-tien.jpg",
      link: "/activities/thac-nuoc",
    },
    {
      title: "Khám phá văn hóa bản địa",
      image: "/images/cong-troi-dong-giang-1.jpg",
      link: "/activities/van-hoa-co-tu",
    },
  ];

  return (
    <section className="featured-activities py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 text-success">
          Hoạt động nổi bật
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          grabCursor
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {activities.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={item.link} className="activity-card-link">
                <div className="card h-100 border-0 shadow">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title activity-title">{item.title}</h5>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
