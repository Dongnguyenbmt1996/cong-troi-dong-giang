import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import "../css/about.css"; // CSS tuỳ chỉnh

export default function ActivitiesEN() {
  const activities = [
    {
      title: "Discover the Mysterious Cave System",
      image: "/images/hang-dong.jpg",
      link: "/activities/hang-dong",
    },
    {
      title: "Explore the Glass Bridge",
      image: "/images/cau-kinh-cong-troi-dong-giang.jpg",
      link: "/activities/cau-kinh",
    },
    {
      title: "Explore Vietnam’s Longest Dragon-Shaped Promenade",
      image: "/images/duong-rong.jpg",
      link: "/activities/duong-rong",
    },

    {
      title: "Show Dai Ngan",
      image: "/images/show-dai-ngan.jpg",
      link: "/activities/show-dai-ngan",
    },
    {
      title: "The Waterfall Complex",
      image: "/images/thac-tien.jpg",
      link: "/activities/thac-nuoc",
    },
    {
      title: " Explore Local Culture",
      image: "/images/cong-troi-dong-giang-1.jpg",
      link: "/activities/van-hoa-co-tu",
    },
  ];

  return (
    <section className="featured-activities py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 text-success">
          Highlighted Experiences
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
