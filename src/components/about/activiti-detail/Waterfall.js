import React from "react";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import FloatingButtons from "../../floatingButtons/FloatingButtons";
export default function Waterfall() {
  return (
    <div className="about-page">
      <Header />

      {/* General Info */}
      <section className="about-section container my-5" data-aos="fade-up">
        <div className="container py-5">
          <h1 className="mb-4 text-center">
            Các thác nước tại Cổng Trời Đông Giang – Tuyệt tác giữa đại ngàn
          </h1>

          <p>
            Cổng Trời Đông Giang (Quảng Nam) được vinh danh là{" "}
            <strong>
              khu du lịch sinh thái có nhiều thác nước tự nhiên nhất Việt Nam
            </strong>
            , với <strong>25 thác nước lớn nhỏ</strong> trải dài hơn 5km giữa
            khu rừng nguyên sinh hùng vĩ. Đây là kỷ lục được xác lập bởi{" "}
            <em>Tổ chức Kỷ lục Việt Nam - VietKings</em>.
          </p>

          <img
            src="/images/he-thong-thac-nuoc-1.jpg"
            alt="Thác nước Cổng Trời Đông Giang"
            className="img-fluid my-4 d-block mx-auto rounded shadow"
          />

          <h2>Vẻ đẹp đa dạng và kỳ thú</h2>
          <p>
            Mỗi thác nước tại Cổng Trời Đông Giang đều mang một nét đẹp riêng,
            từ thác số 1 rực rỡ hoa trang rừng mùa hè, đến thác số 5 có độ dốc
            mạnh tạo dòng chảy hùng vĩ, hay thác số 3 độc đáo với hình vòng cung
            chia làm hai nhánh. Du khách sẽ được chiêm ngưỡng và hòa mình vào âm
            thanh róc rách giữa núi rừng xanh mát.
          </p>

          <h2>Đặt tên theo ngôn ngữ Cơ Tu</h2>
          <p>
            Mỗi thác nước tại đây đều được người Cơ Tu đặt những cái tên thân
            thương như Cruôl (chuối rừng), A Tút (cây đuốc), Tơ rang bhót (nơi
            khỉ ở), A Liêng (lõi gỗ), Trakir (trái trám hồng)..., phản ánh nét
            văn hóa bản địa độc đáo gắn liền với đời sống của họ.
          </p>

          <img
            src="/images/he-thong-thac-nuoc-2.jpg"
            alt="Thác nước hoang sơ Đông Giang"
            className="img-fluid my-4 d-block mx-auto rounded shadow"
          />

          <h2>Trải nghiệm không thể bỏ lỡ</h2>
          <ul>
            <li>
              Khám phá 25 con thác kỳ vĩ trong hành trình trekking xuyên rừng.
            </li>
            <li>
              Thưởng thức cảnh quan hoang sơ, dòng chảy mát lạnh trong lành.
            </li>
            <li>
              Check-in sống ảo với thiên nhiên độc đáo chỉ có tại Đông Giang.
            </li>
            <li>
              Tìm hiểu văn hóa dân tộc Cơ Tu qua câu chuyện gắn với từng con
              thác.
            </li>
          </ul>

          <p className="mt-4">
            Không chỉ là điểm đến lý tưởng cho những ai đam mê thiên nhiên, hệ
            thống thác nước tại Cổng Trời Đông Giang còn là di sản văn hóa và
            môi trường quý giá, làm nên một hành trình du lịch sinh thái đáng
            nhớ giữa lòng Trường Sơn đại ngàn.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
