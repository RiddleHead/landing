import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiHelpCircle,
  FiMap,
  FiUsers,
  FiLink,
} from "react-icons/fi";

Modal.setAppElement("#root");

const Header = () => {
  const [isOpenWarn, setIsOpenWarn] = useState(false);
  const [navbar, setNavbar] = useState(false);

  function toggleModalWarnOne() {
    setIsOpenWarn(!isOpenWarn);
  }

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
                  <a href onClick={toggleModalWarnOne}>
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


      {/* Start Modal Motion Graphy */}
      <Modal
            isOpen={isOpenWarn}
            onRequestClose={toggleModalWarnOne}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalWarnOne}>
                <img src="img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    {/* <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            "img/service/1.jpg"
                          })`,
                        }}
                      ></div>
                    </div> */}
                    <div className="description">
                      <h3>오픈 준비중입니다!!</h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Motion Graphy */}
    </>
  );
};

export default Header;
