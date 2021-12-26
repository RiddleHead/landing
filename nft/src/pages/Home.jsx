import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/HeaderDark";
import Slider from "../components/slider/SliderDarkAnimation";
import About from "../components/about/AboutDarkAnimation";
import Service from "../components/service/ServiceAnimation";
import Social from "../components/Social"
import Portfolio from "../components/portfolio/PortfolioAnimation";
import Testimonial from "../components/testimonial/Testimonial";
import Blog from "../components/blog/BlogAnimation";
import Contact from "../components/Contact";
import Footer from "../components/footer/Footer";
import Address from "../components/Address";

const Home = () => {
  document.body.classList.add("dark");
  return (
    <div className="home-light">
      <div
        className="demo-fixed-wrapper"
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="50"
      >
      </div>
      {/* demo show wrapper  */}

      <Header />
      {/* End Header */}

      <Slider />
      {/* End Slider */}

      <div className="background-group" style={{
            backgroundImage: `url(${
              "img/service/rmbg_pc.png"
            })`,
          }}>
      {/* ABOUT */}
      <div className="beny_tm_about" id="about">
        <div className="container">
          <div className="beny_tm_title_holder">
            {/* <span>About Me</span> */}
            <h2>About</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              egestas. Id fermentum nullam ipsum massa.
            </p> */}
          </div>
          {/* End .beny_tm_title */}
          <About />
          {/* End Slider */}
        </div>
      </div>
      {/* /ABOUT */}
      
      <div className="roadmap_star" style={{
            backgroundImage: `url(${
              "img/service/rmbg_star.gif"
            })`,
          }}>
      {/* ROADMAP */}
      <div className="beny_tm_services" id="roadmap">
        <div className="container">
          <div className="beny_tm_title_holder">
            {/* <span>Services</span> */}
            <h2>Road Map</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              egestas. Id fermentum nullam ipsum massa.
            </p> */}
          </div>
          {/* End beny_tm_title */}
          <Service />
        </div>
       </div>
      {/* /ROADMAP */}
      
      </div>

      {/* TEAM */}
      <div className="beny_tm_news" id="team">
        <div className="container">
          <div className="beny_tm_title_holder">
            {/* <span>Blogs</span> */}
            <h2>Team</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              egestas. Id fermentum nullam ipsum massa.
            </p> */}
          </div>
          {/* End beny_tm_title */}
          <Blog />
        </div>
      </div>
      {/* /TEAM */}

      </div>
      {/* TESTIMONIALS */}
      {/* <div className="beny_tm_testimonials">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Testimonials</span>
            <h2>What's Clients Say.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              egestas. Id fermentum nullam ipsum massa.
            </p>
          </div> */}
          {/* End beny_tm_title */}
          {/* <div
            className="testimonials_list"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Testimonial />
          </div>
        </div>
      </div> */}
      {/* /TESTIMONIALS */}

      {/*  CONTACT */}
      <div className="beny_tm_contact" id="link">
        <div className="container">
        
          <div className="contact-made">
            
            <h2>Let's discuss our project</h2>
            
            <div className="space60"/>

            <div
                className="mobile_social"
                data-aos="fade-up"
                data-aos-duration="600"
            >
              <Social />
            </div>
          </div>
          {/* <div className="contact_inner">
              <div
                className="left"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="beny_tm_title_holder">
                  <span>Contact</span>
                  <h2>Let's discuss your project</h2>
                </div>
                <div className="short_list">
                  <Address />
                </div>
              </div> */}
            {/* End .left */}

            {/* <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <div className="title">
                <p>
                  I'm always open to discussing product
                  <br />
                  <span>design work or partnerships.</span>
                </p>
              </div>
              <div className="fields">
                <Contact />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* /CONTACT */}

      {/* COPYRIGHT */}
      <div className="beny_tm_copyright">
        <div className="container">
          <Footer />
        </div>
      </div>
      {/* /COPYRIGHT */}
    </div>
  );
};

export default Home;
