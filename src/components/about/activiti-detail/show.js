import React from "react";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import FloatingButtons from "../../floatingButtons/FloatingButtons";
export default function Show() {
  return (
    <div className="about-page">
      <Header />

      {/* General Info */}
      <section className="about-section container my-5" data-aos="fade-up">
        <div className="container py-5">
          <h1 className="mb-4 text-center">
            Tái hiện văn hóa Cơ Tu qua show "Vũ điệu đại ngàn"
          </h1>

          <p>
            Ra mắt từ tháng 04/2023, show diễn <strong>Vũ điệu đại ngàn</strong>{" "}
            đã tái hiện trọn vẹn và giới thiệu đa dạng vẻ đẹp từ cảnh quan thiên
            nhiên, con người đến văn hóa đồng bào Cơ Tu tới du khách trong và
            ngoài nước, khẳng định sức hút đầy tiềm năng của du lịch vùng cao
            Đông Giang trong tương lai.
          </p>

          <h2>1. Show diễn đặc sắc về văn hóa Cơ Tu</h2>
          <p>
            Với thời lượng 30 phút, "Vũ điệu đại ngàn" là một chương trình dàn
            dựng quy mô lớn, tái hiện không gian lễ hội bản sắc Cơ Tu. Vũ điệu
            nổi bật "Tung tung Da dá" cùng các chương trình Nói lý – Hát lý, hòa
            tấu nhạc cụ truyền thống và lễ hội Mừng lúa mới tạo nên hành trình
            văn hóa giàu cảm xúc.
          </p>

          <img
            src="/images/show-dai-ngan-1.jpg"
            alt="Show diễn Vũ điệu đại ngàn"
            className="img-fluid my-4 rounded shadow d-block mx-auto"
          />

          <h2>2. Không gian biểu diễn mãn nhãn</h2>
          <p>
            Chương trình được biểu diễn ngoài trời tại sân khấu làng văn hóa Cơ
            Tu trong khu du lịch sinh thái Cổng Trời Đông Giang. Với hơn 30 nghệ
            nhân bản địa cùng hệ thống âm thanh ánh sáng hiện đại, show diễn trở
            thành bữa tiệc nghệ thuật mãn nhãn và đầy cảm xúc.
          </p>

          <h2>3. Sự chuẩn bị công phu của các nghệ nhân</h2>
          <p>
            Các nghệ nhân tham gia phải luyện tập thuần thục các điệu múa, lời
            hát lý, nhạc cụ truyền thống và trình diễn với sự nghiêm túc và sáng
            tạo. Những âm thanh vang vọng từ đàn tam rech, abel, khèn a guốch
            hay chiêng vang giữa đại ngàn khiến khán giả say đắm.
          </p>

          <img
            src="/images/show-dai-ngan-2.jpg"
            alt="Nghệ nhân biểu diễn Cơ Tu"
            className="img-fluid my-4 rounded shadow d-block mx-auto"
          />

          <h2>4. Nét đẹp trong điệu múa Tung tung Da dá</h2>
          <p>
            Đây là vũ điệu tiêu biểu trong Lễ Mừng lúa mới – "Cha Ha Ro Tơ Me",
            thể hiện sự gắn bó, đoàn kết giữa con người và thiên nhiên. Với
            trang phục thổ cẩm truyền thống, các nghệ nhân thể hiện những động
            tác uyển chuyển như cây lau trước gió, tôn lên vẻ đẹp văn hóa đặc
            sắc của dân tộc Cơ Tu.
          </p>

          <img
            src="/images/show-dai-ngan-3.jpg"
            alt="Vũ điệu da dá Cơ Tu"
            className="img-fluid my-4 rounded shadow d-block mx-auto"
          />

          <h2>5. Đánh giá của du khách</h2>
          <p>
            Nhiều du khách cho biết họ rất ấn tượng với show diễn. Chị Minh
            Nguyệt – một du khách từ Hải Phòng – chia sẻ: "Trong không gian dưới
            tán rừng, những giai điệu Nói lý, hát lý vang vọng sâu lắng, thể
            hiện tài năng và tâm hồn nghệ sĩ của người Cơ Tu".
          </p>

          <h2>6. Góp phần bảo tồn văn hóa bản địa</h2>
          <p>
            Theo bà Võ Ngọc Anh, Tổng Giám đốc FVG Travel: "Vũ điệu đại ngàn"
            góp phần bảo tồn và phát huy tinh hoa văn hóa bản địa giữa không
            gian đại ngàn Trường Sơn, tạo dấu ấn du lịch đặc sắc thu hút du
            khách khắp nơi".
          </p>

          <blockquote className="mt-4 fst-italic text-center">
            "Hãy cho chúng tôi 30 phút trọn vẹn, chúng tôi sẽ gửi lại cho các
            bạn tất cả những tình yêu quê hương và niềm tự hào đầy rực rỡ của
            những người con Cơ Tu dưới đại ngàn Trường Sơn hùng vĩ."
          </blockquote>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
