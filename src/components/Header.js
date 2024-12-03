import React from "react";
import { logo, mainBanner } from "../assets/img";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-text-overlay">
        <img src={logo} alt="Logo" className="header-logo" />
        <p>(광고)현대해상 굿앤굿어린이종합보험Q</p>
        <h1>
          현대해상 본사 상담원과 <br />
          함께하는 우리아이 첫 보험
        </h1>
      </div>
      {/* <img src={mainBanner} alt="Baby Image" className="header-image" /> */}
    </div>
  );
};

export default Header;
