import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Activities from "../about/Activities";
import Utilities from "./utilities";
import Promotions from "./promotion";
import "../css/home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <Header />
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
        />
        <h1 className="display-4 fw-bold h1-about">
          Khu Du Lịch Sinh Thái Cổng Trời Đông Giang
        </h1>
        <p className="fs-5">Trải nghiệm thiên nhiên & văn hóa Cơ Tu</p>
        <p>
          Tọa lạc giữa đại ngàn hùng vĩ, Cổng Trời Đông Giang không chỉ là điểm
          đến lý tưởng cho những ai yêu thiên nhiên mà còn là biểu tượng của sự
          phát triển bền vững. Là một trong những dự án trọng điểm của Tập đoàn
          FVG, khu du lịch có tổng diện tích 120 ha với tổng vốn đầu tư hơn 2600
          tỷ đồng, khẳng định sự quyết tâm, bản lĩnh, tầm nhìn của tập đoàn,
          đồng thời, thể hiện khát vọng nâng tầm du lịch sinh thái Việt Nam lên
          đẳng cấp quốc tế. Chính thức đón khách từ tháng 4/2022, Cổng Trời Đông
          Giang mang đến cho du khách trải nghiệm khám phá hệ thống thác suối,
          hang động kỳ vĩ, và tận hưởng khí hậu trong lành của thiên nhiên hoang
          sơ.{" "}
        </p>
        <Link to="/about" className="btn btn-outline-success mt-3 px-4">
          Xem thêm
        </Link>
      </section>
      <Activities />
      <Promotions />
      {/* các dịch vụ tiện ích khác */}
      <Utilities />
      {/* thông tin thêm */}
      <section className="container py-5" data-aos="fade-up">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h3 className="text-success fw-bold">
              Chốn an yên giữa thiên nhiên đại ngàn
            </h3>
            <p>
              Tựa như món quà tuyệt vời đầy mới mẻ mà thiên nhiên ban tặng, KDL
              ST Cổng Trời Đông Giang chính là “nơi trú ẩn” an yên giữa núi rừng
              hùng vĩ, lấp đầy tâm hồn của bạn với những điều bình yên và tiếp
              thêm năng lượng tích cực. Lắng nghe những thanh âm trong trẻo của
              núi rừng đại ngàn và tận hưởng bầu không khí trong lành, dễ chịu,
              hãy để KDL ST Cổng Trời Đông Giang dẫn lối bạn đến với hành trình
              du ngoạn thiên nhiên hùng vĩ và lưu giữ những kỉ niệm tuyệt vời
              theo cách của riêng mình nhé!
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/images/thac-cong-troi-dong-giang.jpg"
              className="img-fluid rounded shadow"
              alt="Thác Cổng Trời Đông Giang"
            />
          </div>
        </div>

        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-6">
            <h3 className="text-success fw-bold">Du lịch xanh giữa đại ngàn</h3>
            <p>
              Cổng Trời Đông Giang - nơi được ví von là “thiên đường” nghỉ dưỡng
              với hệ thống khách sạn tiêu chuẩn 4 sao bài bản và duy nhất tại
              khu vực miền núi tỉnh Quảng Nam. Hội tụ nhiều yếu tố cảnh quan đa
              dạng: hang động, thác nước tự nhiên,... Đây sẽ là điểm đến lí
              tưởng cho những ai yêu thiên nhiên và tìm kiếm một kì nghỉ với
              những trải nghiệm đáng nhớ.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/images/cap-treo-1.jpg"
              className="img-fluid rounded shadow"
              alt="Cáp treo Đông Giang"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
