import "./App.css";
import "bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/home";
import About from "./components/about/About";
import ComboFivigo from "./components/homepage/promotions/combo499";
import Price from "./components/homepage/promotions/Price";
import FreeForChild from "./components/homepage/promotions/FreeForChild";
import FreeForOld from "./components/homepage/promotions/FreeForOld";
import Hangdong from "./components/about/activiti-detail/hangdong";
import Caukinh from "./components/about/activiti-detail/caukinh";
import Duongrong from "./components/about/activiti-detail/duongrong";
import Show from "./components/about/activiti-detail/show";
import Waterfall from "./components/about/activiti-detail/Waterfall";
import Cuture from "./components/about/activiti-detail/Cuture";

// Component tiếng Anh
import HomeEN from "./componentsEN/homepage/homeEN";
import AboutEN from "./componentsEN/about/AboutEN";
import ComboFivigoEN from "./componentsEN/homepage/promotions/combo499EN";
import PriceEN from "./componentsEN/homepage/promotions/PriceEN";
import FreeForChildEN from "./componentsEN/homepage/promotions/FreeForChildEN";
import FreeForOldEN from "./componentsEN/homepage/promotions/FreeForOldEN";
import HangdongEN from "./componentsEN/about/activiti-detail/hangdongEN";
import CaukinhEN from "./componentsEN/about/activiti-detail/caukinhEN";
import DuongrongEN from "./componentsEN/about/activiti-detail/duongrongEN";
import ShowEN from "./componentsEN/about/activiti-detail/showEN";
import WaterfallEN from "./componentsEN/about/activiti-detail/WaterfallEN";
import CutureEN from "./componentsEN/about/activiti-detail/CutureEN";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // thời gian hiệu ứng (ms)
      once: true, // chỉ chạy 1 lần khi cuộn
    });

    // 2. Mặc định lang là "vi" nếu chưa từng set
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "vi");
    }
  }, []);
  const lang = localStorage.getItem("lang") || "vi";
  return (
    <Router>
      <Routes>
        <Route path="/" element={lang === "vi" ? <Home /> : <HomeEN />} />
        <Route
          path="/about"
          element={lang === "vi" ? <About /> : <AboutEN />}
        />
        <Route
          path="/promotions/combo-ve-voi-dong-giang"
          element={lang === "vi" ? <ComboFivigo /> : <ComboFivigoEN />}
        />
        <Route
          path="/promotions/bang-gia-dich-vu"
          element={lang === "vi" ? <Price /> : <PriceEN />}
        />
        <Route
          path="/promotions/mien-phi-tre-em"
          element={lang === "vi" ? <FreeForChild /> : <FreeForChildEN />}
        />
        <Route
          path="/promotions/mien-phi-nguoi-cao-tuoi"
          element={lang === "vi" ? <FreeForOld /> : <FreeForOldEN />}
        />
        <Route
          path="/activities/hang-dong"
          element={lang === "vi" ? <Hangdong /> : <HangdongEN />}
        />
        <Route
          path="/activities/cau-kinh"
          element={lang === "vi" ? <Caukinh /> : <CaukinhEN />}
        />
        <Route
          path="/activities/duong-rong"
          element={lang === "vi" ? <Duongrong /> : <DuongrongEN />}
        />
        <Route
          path="/activities/show-dai-ngan"
          element={lang === "vi" ? <Show /> : <ShowEN />}
        />
        <Route
          path="/activities/thac-nuoc"
          element={lang === "vi" ? <Waterfall /> : <WaterfallEN />}
        />
        <Route
          path="/activities/van-hoa-co-tu"
          element={lang === "vi" ? <Cuture /> : <CutureEN />}
        />
      </Routes>
    </Router>
  );
}

export default App;

// font-family: "Quicksand", serif;
//   color: #333;
//   line-height: 1.8;
