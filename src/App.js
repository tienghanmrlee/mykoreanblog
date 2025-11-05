import React from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header>
        <div className="logo">Mr. Lee 🇰🇷</div>
        <nav>
          <a href="#home">Trang chủ</a>
          <a href="#courses">Khóa học</a>
          <a href="#blog">Blog</a>
          <a href="#library">Thư viện</a>
          <a href="#contact">Liên hệ</a>
        </nav>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Học tiếng Hàn cùng Mr. Lee</h1>
          <p>Học vui – nhớ lâu – chuẩn Gen Z!</p>
          <button>Bắt đầu ngay</button>
        </div>
      </section>

      {/* ===== SECTION: KHÓA HỌC ===== */}
      <section id="courses">
        <h2>Khóa học nổi bật</h2>
        <div className="card-container">
          <div className="card">
            <img
              src="https://cdn.pixabay.com/photo/2020/05/06/08/17/education-5139852_1280.jpg"
              alt="TOPIK"
            />
            <div className="card-content">
              <h3>Khóa luyện TOPIK</h3>
              <p>
                Ôn luyện theo format mới nhất, mẹo làm bài chuẩn Hàn Quốc và
                tips nhớ nhanh.
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/19/14/00/student-1839808_1280.jpg"
              alt="Giao tiếp"
            />
            <div className="card-content">
              <h3>Giao tiếp thực tế</h3>
              <p>
                Tự tin nói chuyện với người Hàn qua các tình huống đời sống:
                quán ăn, trường học, ký túc xá.
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/09/09/17/people-1245776_1280.jpg"
              alt="Du học"
            />
            <div className="card-content">
              <h3>Chuẩn bị du học</h3>
              <p>
                Hướng dẫn phỏng vấn DSQ, viết kế hoạch học tập, hồ sơ du học
                chuẩn form 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION: BLOG ===== */}
      <section id="blog">
        <h2>Blog & Mẹo học tiếng Hàn</h2>
        <div className="card-container">
          <div className="card">
            <img
              src="https://cdn.pixabay.com/photo/2018/02/22/18/03/learn-3176369_1280.jpg"
              alt="Mẹo học"
            />
            <div className="card-content">
              <h3>Mẹo học từ vựng siêu tốc ⚡</h3>
              <p>
                Bí kíp ghi nhớ 1000 từ vựng TOPIK trong 2 tháng bằng hình ảnh &
                âm thanh.
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/06/13/47/learn-2592179_1280.jpg"
              alt="Ngữ pháp"
            />
            <div className="card-content">
              <h3>Ngữ pháp dễ nhầm 😅</h3>
              <p>
                Phân biệt các cấu trúc giống nhau: -(으)ㄹ게요, -(으)려고요,
                -(으)ㄹ까요? bằng ví dụ cực dễ hiểu.
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://cdn.pixabay.com/photo/2015/09/05/21/51/books-925589_1280.jpg"
              alt="Văn hóa Hàn"
            />
            <div className="card-content">
              <h3>Văn hóa Hàn Quốc 🇰🇷</h3>
              <p>
                Giải mã văn hóa giao tiếp, thói quen học tập và ứng xử của sinh
                viên Hàn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer id="contact">
        <h3>Liên hệ với Mr. Lee</h3>
        <p>Email: <a href="mailto:mrlee.koreanedu@gmail.com">mrlee.koreanedu@gmail.com</a></p>
        <p>Zalo / Messenger: <strong>@MrLeeKorean</strong></p>
        <p>© 2025 Mr. Lee Korean Blog | Học tiếng Hàn cùng đam mê 🇻🇳🇰🇷</p>
      </footer>
    </>
  );
}

export default App;