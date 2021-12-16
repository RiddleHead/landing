import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiHelpCircle,
  FiMap,
  FiUsers,
  FiLink,
} from "react-icons/fi";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* TOPBAR  */}
      <div className={navbar ? "beny_tm_topbar animate" : "beny_tm_topbar"}>
        <div className="in">
          <div className="topbar_inner">
            <div className="logo">
              <Link to="/">
                <img src="img/logo/light.png" alt="brand" />
              </Link>
            </div>
            <div className="menu">
              <Scrollspy
                className="anchor_nav"
                items={[
                  "home",
                  "about",
                  "roadmap",
                  "team",
                  "link",
                ]}
                currentClassName="current"
                offset={-88}
              >
                <li className="current">
                  <a href="#home">
                    <span className="first">Home</span>
                    <span className="second">Home</span>
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <span className="first">About</span>
                    <span className="second">About</span>
                  </a>
                </li>
                <li>
                  <a href="#roadmap">
                    <span className="first">Roadmap</span>
                    <span className="second">Roadmap</span>
                  </a>
                </li>
                <li>
                  <a href="#team">
                    <span className="first">Team</span>
                    <span className="second">Team</span>
                  </a>
                </li>
                <li>
                  <a href="#link">
                    <span className="first">Link</span>
                    <span className="second">Link</span>
                  </a>
                </li>
                <li>
                  <a href="http://13.125.103.118/randomMint">
                    <span className="wrapper">
                      <span className="first">Mint Now</span>
                      <span className="second">Mint Now</span>
                    </span>
                  </a>
                </li>
              </Scrollspy>
            </div>
          </div>
        </div>
      </div>
      {/* /TOPBAR */}

      <div className="mobile-menu-wrapper">
        <Scrollspy
          className="mobile_menu-icon"
          items={["home", "about", "roadmap", "team", "link"]}
          currentClassName="current"
          offset={-65}
        >
          <li>
            <a href="#home">
              <FiHome />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <FiHelpCircle />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#roadmap">
              <FiMap />
              <span>Roadmap</span>
            </a>
          </li>
          <li>
            <a href="#team">
              <FiUsers />
              <span>Team</span>
            </a>
          </li>
          <li>
            <a href="#link">
              <FiLink />
              <span>Link</span>
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* End mobile-menu */}
    </>
  );
};

export default Header;
