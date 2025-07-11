// import React, { useState } from "react";
// import "../css/Header.css";
// import { Link } from "react-router-dom";

// export default function HeaderEN() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showPromo, setShowPromo] = useState(false);
//   const [showActivities, setShowActivities] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       {isOpen && <div className="overlay" onClick={closeMenu}></div>}

//       <div className={`side-nav ${isOpen ? "open" : ""}`}>
//         <button
//           className="btn btn-sm btn-close float-end m-3"
//           onClick={closeMenu}
//         ></button>
//         <ul className="nav flex-column mt-5 ps-4">
//           <li className="nav-item">
//             <Link to="/en" className="nav-link" onClick={closeMenu}>
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/en/about" className="nav-link" onClick={closeMenu}>
//               About Us
//             </Link>
//           </li>
//           <li className="nav-item">
//             <span
//               className="nav-link"
//               style={{ cursor: "pointer" }}
//               onClick={() => setShowPromo(!showPromo)}
//             >
//               Promotions {showPromo ? "▲" : "▼"}
//             </span>
//             {showPromo && (
//               <ul className="nav flex-column ps-3">
//                 <li className="nav-item">
//                   <Link
//                     to="/en/promotions/combo-ve-voi-dong-giang"
//                     className="nav-link"
//                     onClick={closeMenu}
//                   >
//                     Dong Giang Combo
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     to="/en/promotions/bang-gia-dich-vu"
//                     className="nav-link"
//                     onClick={closeMenu}
//                   >
//                     Service Pricing
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     to="/en/promotions/mien-phi-tre-em"
//                     className="nav-link"
//                     onClick={closeMenu}
//                   >
//                     Free for Children
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     to="/en/promotions/mien-phi-nguoi-cao-tuoi"
//                     className="nav-link"
//                     onClick={closeMenu}
//                   >
//                     Free for Seniors
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li className="nav-item d-lg-none">
//             <span
//               className="nav-link"
//               style={{ cursor: "pointer" }}
//               onClick={() => setShowActivities(!showActivities)}
//             >
//               Highlights {showActivities ? "▲" : "▼"}
//             </span>
//             {showActivities && (
//               <ul className="nav flex-column ps-3">
//                 <li className="nav-item">
//                   <Link
//                     to="/en/activities/hang-dong"
//                     className="nav-link"
//                     onClick={closeMenu}
//                   >
//                     Cave Exploration
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     to="/en/activities/cau-kinh"
//                     className="nav-link"
//                     onClick={closeMenu}
//                   >
//                     Glass Bridge Check-in
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     to="/en/activities/duong-rong"
//                     className="nav-link"
//                     onClick={closeMenu}
//                   >
//                     Dragon-Shaped Corridor
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     to="/en/activities/show-dai-ngan"
//                     className="nav-link"
//                     onClick={closeMenu}
//                   >
//                     Dai Ngan Show
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     to="/en/activities/thac-nuoc"
//                     className="nav-link"
//                     onClick={closeMenu}
//                   >
//                     Waterfall System
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     to="/en/activities/van-hoa-co-tu"
//                     className="nav-link"
//                     onClick={closeMenu}
//                   >
//                     Co Tu Culture
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//         </ul>
//       </div>

//       <header className="sticky-top">
//         <nav className="navbar navbar-light d-flex justify-content-between align-items-center px-3 py-2 nav-bar-header">
//           <button
//             className="btn btn-outline-primary d-lg-none"
//             onClick={toggleMenu}
//           >
//             ☰
//           </button>

//           <a className="navbar-brand mx-auto d-lg-none" href="#">
//             <img
//               src="/images/logo-cong-troi-dong-giang-tach-nen.png"
//               alt="Logo"
//               height={60}
//               className="logo-img"
//             />
//           </a>

//           <a
//             className="navbar-brand d-none d-lg-flex align-items-center"
//             href="#"
//           >
//             <img
//               src="/images/logo-cong-troi-dong-giang-tach-nen.png"
//               alt="Logo"
//               className="me-2 px-5 logo-img"
//             />
//           </a>

//           <ul className="nav d-none d-lg-flex ms-auto px-5">
//             <li className="nav-item">
//               <Link to="/en" className="nav-link" onClick={closeMenu}>
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/en/about" className="nav-link" onClick={closeMenu}>
//                 About Us
//               </Link>
//             </li>

//             <li className="nav-item position-relative">
//               <span
//                 className="nav-link"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => setShowPromo(!showPromo)}
//               >
//                 Promotions {showPromo ? "▲" : "▼"}
//               </span>
//               {showPromo && (
//                 <ul className="dropdown-menu-custom position-absolute bg-white shadow rounded p-2">
//                   <li>
//                     <Link
//                       to="/en/promotions/combo-ve-voi-dong-giang"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Dong Giang Combo
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/en/promotions/bang-gia-dich-vu"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Service Pricing
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/en/promotions/mien-phi-tre-em"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Free for Children
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/en/promotions/mien-phi-nguoi-cao-tuoi"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Free for Seniors
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>

//             <li className="nav-item position-relative">
//               <span
//                 className="nav-link"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => {
//                   setShowActivities(!showActivities);
//                   setShowPromo(false);
//                 }}
//               >
//                 Highlights {showActivities ? "▲" : "▼"}
//               </span>
//               {showActivities && (
//                 <ul className="dropdown-menu-custom position-absolute bg-white shadow rounded p-2">
//                   <li>
//                     <Link
//                       to="/en/activities/hang-dong"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Cave Exploration
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/en/activities/cau-kinh"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Glass Bridge Check-in
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/en/activities/duong-rong"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Dragon-Shaped Corridor
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/en/activities/show-dai-ngan"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Dai Ngan Show
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/en/activities/thac-nuoc"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Waterfall System
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/en/activities/van-hoa-co-tu"
//                       className="dropdown-item"
//                       onClick={closeMenu}
//                     >
//                       Co-Tu Culture
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//           </ul>
//           <li className="nav-item">
//             <Link to="/" className="nav-link">
//               VI
//             </Link>
//           </li>
//         </nav>
//       </header>
//     </>
//   );
// }
import React, { useState } from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

export default function HeaderEN() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(false);
  const [showActivities, setShowActivities] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const togglePromo = () => {
    setShowPromo(!showPromo);
    setShowActivities(false);
  };

  const toggleActivities = () => {
    setShowActivities(!showActivities);
    setShowPromo(false);
  };

  return (
    <>
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

      {/* Mobile Sidebar Menu */}
      <div className={`side-nav ${isOpen ? "open" : ""}`}>
        <button
          className="btn btn-sm btn-close float-end m-3"
          onClick={closeMenu}
        ></button>
        <ul className="nav flex-column mt-5 ps-4">
          <li className="nav-item">
            <Link to="/en" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/en/about" className="nav-link" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <span
              className="nav-link"
              onClick={togglePromo}
              style={{ cursor: "pointer" }}
            >
              Promotions {showPromo ? "▲" : "▼"}
            </span>
            {showPromo && (
              <ul className="nav flex-column ps-3">
                <li className="nav-item">
                  <Link
                    to="/en/promotions/combo-ve-voi-dong-giang"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Dong Giang Combo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/en/promotions/bang-gia-dich-vu"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Service Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/en/promotions/mien-phi-tre-em"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Free for Children
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/en/promotions/mien-phi-nguoi-cao-tuoi"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Free for Seniors
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="nav-item">
            <span
              className="nav-link"
              onClick={toggleActivities}
              style={{ cursor: "pointer" }}
            >
              Highlights {showActivities ? "▲" : "▼"}
            </span>
            {showActivities && (
              <ul className="nav flex-column ps-3">
                <li className="nav-item">
                  <Link
                    to="/en/activities/hang-dong"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Cave Exploration
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/en/activities/cau-kinh"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Glass Bridge
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/en/activities/duong-rong"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Dragon-Shaped Corridor
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/en/activities/show-dai-ngan"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Dai Ngan Show
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/en/activities/thac-nuoc"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Waterfall System
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/en/activities/van-hoa-co-tu"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Co Tu Culture
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              VI
            </Link>
          </li> */}
          <Link
            to="/"
            className="nav-link d-flex align-items-center px-2 py-1 rounded"
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              marginLeft: "10px",
            }}
            onClick={() => {
              localStorage.setItem("lang", "vi");
              window.location.reload();
            }}
          >
            <img
              src="/images/flag-vn.png"
              alt="Vietnamese"
              style={{ width: "20px", height: "14px", marginRight: "6px" }}
            />
            VI
          </Link>
        </ul>
      </div>

      {/* Main Header */}
      <header className="sticky-top">
        <nav className="navbar navbar-light d-flex justify-content-between align-items-center px-3 py-2 nav-bar-header">
          {/* Mobile Menu Button */}
          <button
            className="btn btn-outline-primary d-lg-none"
            onClick={toggleMenu}
          >
            ☰
          </button>

          {/* Logo */}
          <Link className="navbar-brand mx-auto d-lg-none" to="/en">
            <img
              src="/images/logo-cong-troi-dong-giang-tach-nen.png"
              alt="Logo"
              height={60}
              className="logo-img"
            />
          </Link>

          <Link
            className="navbar-brand d-none d-lg-flex align-items-center"
            to="/en"
          >
            <img
              src="/images/logo-cong-troi-dong-giang-tach-nen.png"
              alt="Logo"
              className="me-2 px-5 logo-img"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="nav d-none d-lg-flex ms-auto px-5">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>

            <li className="nav-item position-relative">
              <span
                className="nav-link"
                onClick={togglePromo}
                style={{ cursor: "pointer" }}
              >
                Promotions {showPromo ? "▲" : "▼"}
              </span>
              {showPromo && (
                <ul className="dropdown-menu-custom position-absolute bg-white shadow rounded p-2">
                  <li>
                    <Link
                      to="/promotions/combo-ve-voi-dong-giang"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Dong Giang Combo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/promotions/bang-gia-dich-vu"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Service Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/promotions/mien-phi-tre-em"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Free for Children
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/promotions/mien-phi-nguoi-cao-tuoi"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Free for Seniors
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item position-relative">
              <span
                className="nav-link"
                onClick={toggleActivities}
                style={{ cursor: "pointer" }}
              >
                Highlights {showActivities ? "▲" : "▼"}
              </span>
              {showActivities && (
                <ul className="dropdown-menu-custom position-absolute bg-white shadow rounded p-2">
                  <li>
                    <Link
                      to="/activities/hang-dong"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Cave Exploration
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/activities/cau-kinh"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Glass Bridge
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/activities/duong-rong"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Dragon Corridor
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/activities/show-dai-ngan"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Dai Ngan Show
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/activities/thac-nuoc"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Waterfall
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/activities/van-hoa-co-tu"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Co Tu Culture
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Language Switcher */}
            {/* <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={() => {
                  localStorage.setItem("lang", "vi");
                  window.location.reload(); // Reload để App.js đọc lại lang mới
                }}
              >
                VI
              </Link>
            </li> */}
          </ul>
          <Link
            to="/"
            className="nav-link d-flex align-items-center px-2 py-1 rounded"
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              marginLeft: "10px",
            }}
            onClick={() => {
              localStorage.setItem("lang", "vi");
              window.location.reload();
            }}
          >
            <img
              src="/images/flag-vn.png"
              alt="Vietnamese"
              style={{ width: "20px", height: "14px", marginRight: "6px" }}
            />
            VI
          </Link>
        </nav>
      </header>
    </>
  );
}
