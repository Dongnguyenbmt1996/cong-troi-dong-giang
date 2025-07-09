import React from "react";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import FloatingButtons from "../../floatingButtons/FloatingButtons";
export default function Cuture() {
  return (
    <div className="about-page">
      <Header />

      {/* General Info */}
      <section className="about-section container my-5" data-aos="fade-up">
        <div className="container py-5">
          <h1 className="mb-4 text-center">
            Giới thiệu về Làng Văn Hóa Cơ Tu Cổng Trời Đông Giang
          </h1>

          <p>
            Làng Văn hóa Cơ Tu không chỉ là một điểm để tham quan, đây là nơi
            tái hiện nét văn hóa của người đồng bào Cơ Tu thông qua các hoạt
            động thú vị. Vậy ngôi làng này ở đâu và có gì hấp dẫn mà du khách ai
            cũng tò mò?
          </p>

          <img
            src="/images/kham-pha-van-hoa-ban-dia-1.jpg"
            alt="Làng Văn hóa Cơ Tu – một điểm tham quan nổi bật"
            className="img-fluid my-4 rounded shadow mx-auto d-block"
          />

          <h2>
            Đôi nét về làng Văn hóa Cơ Tu – Không gian nổi bật của khu du lịch
          </h2>
          <p>
            Đồng bào Cơ Tu là một trong 54 dân tộc Việt Nam mang những nét văn
            hóa đặc trưng đáng để tìm hiểu. Để hiểu hơn về người đồng bào này,
            hãy đến với làng Cơ Tu – một địa điểm nổi bật trong khu du lịch Cổng
            Trời Đông Giang.
          </p>

          <h2>Địa chỉ làng Văn hóa Cơ Tu</h2>
          <p>
            Làng Cơ Tu là một làng tái hiện không gian của người đồng bào Cơ Tu,
            nằm trong quần thể Khu du lịch sinh thái Cổng Trời Đông Giang. Thuộc
            địa phận xã Mà Cooih, huyện Đông Giang, tỉnh Quảng Nam. Cách thành
            phố Đà Nẵng chừng 100km về phía Tây.
          </p>

          <p>
            Khu du lịch này được tập đoàn FVG đầu tư bài bản với nhiều khu khác
            nhau với tổng diện tích hơn 120ha.
          </p>

          <img
            src="/images/kham-pha-van-hoa-ban-dia-2.jpg"
            alt="Ngôi làng nằm trong quần thể du lịch Cổng Trời Đông Giang"
            className="img-fluid my-4 rounded shadow mx-auto d-block"
          />

          <p>
            Việc chọn làm huyện miền núi Đông Giang phát triển, tập đoàn này
            mong muốn sẽ biến nơi này thành khu du lịch nghỉ dưỡng và vui chơi
            giải trí đẳng cấp. Kết hợp với đó là bảo tồn văn hóa truyền thống
            của đồng bào người Cơ Tu.
          </p>

          <h2>Làng Văn hóa Cơ Tu Cổng Trời Đông Giang có gì đặc sắc?</h2>
          <p>
            Rất dễ dàng để nhận ra ngôi làng này khi đến Cổng Trời Đông Giang.
            Bạn sẽ bắt gặp ngay một dãy nhà sàn thân gỗ, mái rơm – kiểu nhà đặc
            trưng của người Cơ Tu.
          </p>

          <p>
            Cùng với đó là hình ảnh những cô gái, chàng trai đang khoác lên mình
            những bộ trang phục thổ cẩm rực rỡ. Tất nhiên là còn có cả những vật
            dụng quen thuộc như: zoọng, rê, chuy, tà léc, cà vông…
          </p>

          <img
            src="/images/kham-pha-van-hoa-ban-dia-3.jpg"
            alt="Hình ảnh đặc trưng của làng Văn hóa Cơ Tu"
            className="img-fluid my-4 rounded shadow mx-auto d-block"
          />

          <p>
            Nét đặc trưng của văn hóa Cơ Tu cũng thể hiện qua các lễ hội, sự
            kiện và hoạt động giải trí, ẩm thực,… Đảm bảo khi tìm hiểu và khám
            phá, bạn sẽ cảm thấy vô cùng hứng thú.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
