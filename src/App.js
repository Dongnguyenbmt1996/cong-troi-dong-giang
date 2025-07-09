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
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // thời gian hiệu ứng (ms)
      once: true, // chỉ chạy 1 lần khi cuộn
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/promotions/combo-ve-voi-dong-giang"
          element={<ComboFivigo />}
        />
        <Route path="/promotions/bang-gia-dich-vu" element={<Price />} />
        <Route path="/promotions/mien-phi-tre-em" element={<FreeForChild />} />
        <Route
          path="/promotions/mien-phi-nguoi-cao-tuoi"
          element={<FreeForOld />}
        />
        <Route path="/activities/hang-dong" element={<Hangdong />} />
        <Route path="/activities/cau-kinh" element={<Caukinh />} />
        <Route path="/activities/duong-rong" element={<Duongrong />} />
        <Route path="/activities/show-dai-ngan" element={<Show />} />
        <Route path="/activities/thac-nuoc" element={<Waterfall />} />
        <Route path="/activities/van-hoa-co-tu" element={<Cuture />} />
      </Routes>
    </Router>
  );
}

export default App;

// font-family: "Quicksand", serif;
//   color: #333;
//   line-height: 1.8;
