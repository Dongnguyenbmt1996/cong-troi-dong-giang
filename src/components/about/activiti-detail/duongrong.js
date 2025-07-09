import React from "react";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import FloatingButtons from "../../floatingButtons/FloatingButtons";
export default function Duongrong() {
  return (
    <div className="about-page">
      <Header />

      {/* General Info */}
      <section className="about-section container my-5" data-aos="fade-up">
        <div className="container py-5">
          <h1 className="mb-4 text-center">
            Cầu kính Ngọc Rồng tại Cổng Trời Đông Giang - Dạo bước trên mây
          </h1>

          <p>
            Cầu kính Ngọc Rồng là một trong những điểm tham quan nổi bật tại khu
            du lịch sinh thái Cổng Trời Đông Giang, Quảng Nam. Với thiết kế độc
            đáo nằm trên đỉnh núi Bảo Lâm cao hơn 800m, cây cầu này là biểu
            tượng trải nghiệm không thể bỏ lỡ.
          </p>

          <img
            src="/images/cau-kinh-cong-troi-dong-giang-6.jpg"
            alt="Cầu kính Ngọc Rồng"
            className="img-fluid my-4 rounded shadow d-block mx-auto"
          />

          <h2>1. Giới thiệu về cầu kính</h2>
          <p>
            Cầu kính có chiều dài 39m, được làm từ kính cường lực 3 lớp, trong
            suốt, giúp du khách có cảm giác "dạo bước trên mây" khi nhìn xuống
            cảnh rừng núi phía dưới.
          </p>

          <h2>2. Vị trí và cách di chuyển</h2>
          <p>
            Cầu kính Ngọc Rồng nằm trong khu du lịch sinh thái Cổng Trời Đông
            Giang, cách trung tâm Đà Nẵng chỉ khoảng 1 giờ 15 phút đi ô tô. Từ
            Đà Nẵng, bạn đi theo QL14B qua cầu Hà Nha – Ka Dăng, rẽ trái theo
            hướng xã Mà Cooih.
          </p>

          <img
            src="/images/cau-kinh-cong-troi-dong-giang-3.jpg"
            alt="Cầu kính nhìn từ xa"
            className="img-fluid my-4 rounded shadow d-block mx-auto"
          />

          <h2>3. Trải nghiệm khi tham quan cầu kính</h2>
          <ul>
            <li>Ngắm cảnh thiên nhiên hùng vĩ từ trên cao</li>
            <li>Check-in "săn mây" vào sáng sớm hoặc chiều muộn</li>
            <li>Trải nghiệm cảm giác lơ lửng giữa không trung</li>
            <li>Di chuyển bằng cáp treo hoặc xe điện để đến chân cầu</li>
          </ul>

          <h2>4. Giá vé tham quan</h2>
          <p>
            Vé vào cổng khu du lịch bao gồm cầu kính và nhiều hoạt động khác:
            <br />– Người lớn: 400.000đ <br />– Trẻ em 1–1.3m: 300.000đ <br />–
            Dưới 1m: Miễn phí
          </p>

          <h2>5. Thời điểm lý tưởng để đi cầu kính</h2>
          <p>
            Từ tháng 3 đến tháng 8 là thời gian đẹp nhất: ít mưa, nhiều nắng, dễ
            săn mây. Bạn nên đi vào sáng sớm (6h – 9h) hoặc chiều muộn (16h –
            18h).
          </p>

          <img
            src="/images/cau-kinh-cong-troi-dong-giang-4.jpg"
            alt="Check-in trên cầu kính Ngọc Rồng"
            className="img-fluid my-4 rounded shadow d-block mx-auto"
          />

          <h2>6. Một số lưu ý</h2>
          <ul>
            <li>Mang giày đế thấp, trang phục thoải mái</li>
            <li>Không nên đứng sát mép cầu khi chụp ảnh</li>
            <li>Không phù hợp cho người sợ độ cao</li>
            <li>Luôn tuân thủ hướng dẫn an toàn từ nhân viên</li>
          </ul>

          <p className="mt-4">
            Cầu kính Ngọc Rồng không chỉ là một công trình kiến trúc độc đáo mà
            còn là nơi mang lại trải nghiệm thiên nhiên kỳ vĩ, xứng đáng là điểm
            nhấn du lịch của Đông Giang. Hãy đến và cảm nhận vẻ đẹp huyền bí của
            vùng núi Trường Sơn tại nơi đây!
          </p>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
