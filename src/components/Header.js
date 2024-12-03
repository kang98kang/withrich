import React from 'react';
import { logo, mainBanner } from '../assets/img';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-text-overlay">
        <img src={logo} alt="Logo" className="header-logo" />
        <p>(광고)(무)백만인을위한달러종신보험Plus</p>
        <h1>우리아이 달러보험</h1>
      </div>
      {/* <img src={mainBanner} alt="Baby Image" className="header-image" /> */}
    </div>
  );
};

export default Header;
