import React from "react";
import "./floatingbtn.css";

export default function FloatingButtonsEN() {
  return (
    <div className="floating-buttons">
      {/* zalo */}
      {/* <a
        href="https://zalo.me/0393950963"
        target="_blank"
        rel="noopener noreferrer"
        className="zalo-button icon-hover-glow"
      >
        <img src="/images/zalo-icon.png" alt="Zalo" />
      </a> */}
      {/* Face book */}
      <a
        href="https://www.facebook.com/fvgtravelcongtroidonggiang"
        target="_blank"
        rel="noopener noreferrer"
        className="zalo-button icon-hover-glow "
      >
        <img src="/images/mg.png" alt="Messenger" />
      </a>

      {/* Gọi điện */}
      <a href="tel: " className="call-button icon-animate icon-hover-glow">
        <span>093 497 33 33</span>
        <i className="bi bi-telephone-fill ms-2"></i>
      </a>

      {/* Lên đầu trang */}
      {/* <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="bi bi-arrow-up-short"></i>
      </button> */}
    </div>
  );
}
