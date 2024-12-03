import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('');

  const handleSetActive = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navbar">
      <Link
        to="section1"
        smooth={true}
        duration={500}
        className={`nav-item ${activeTab === 'section1' ? 'active' : ''}`}
        onClick={() => handleSetActive('section1')}
      >
        WHAT? 달러보험
      </Link>
      <Link
        to="section2"
        smooth={true}
        duration={500}
        className={`nav-item ${activeTab === 'section2' ? 'active' : ''}`}
        onClick={() => handleSetActive('section2')}
      >
        WHY? 달러보험
      </Link>
      <Link
        to="section3"
        smooth={true}
        duration={500}
        className={`nav-item ${activeTab === 'section3' ? 'active' : ''}`}
        onClick={() => handleSetActive('section3')}
      >
        사은품 혜택
      </Link>
    </nav>
  );
};

export default Navbar;
