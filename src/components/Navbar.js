import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(""); // 현재 활성화된 탭 상태 관리

  const handleSetActive = (tab) => {
    setActiveTab(tab); // 클릭된 탭 업데이트
  };

  return (
    <nav className="navbar">
      <Link
        to="section1"
        smooth={true}
        duration={500}
        className={`nav-item ${activeTab === "section1" ? "active" : ""}`}
        onClick={() => handleSetActive("section1")} // 클릭 시 상태 업데이트
      >
        어린이보험
      </Link>
      <Link
        to="section2"
        smooth={true}
        duration={500}
        className={`nav-item ${activeTab === "section2" ? "active" : ""}`}
        onClick={() => handleSetActive("section2")} // 클릭 시 상태 업데이트
      >
        현대해상보험 장점
      </Link>
      <Link
        to="section3"
        smooth={true}
        duration={500}
        className={`nav-item ${activeTab === "section3" ? "active" : ""}`}
        onClick={() => handleSetActive("section3")} // 클릭 시 상태 업데이트
      >
        사은품 혜택
      </Link>
    </nav>
  );
};

export default Navbar;
