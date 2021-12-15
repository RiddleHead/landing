import React from "react";
// import Skills from "../skills/SkillsAnimation";

const AboutDarkAnimation = () => {
  return (
    <>
      <div className="about_inner">
        <div className="left">
          <img 
            src="img/about/Project.png" 
            className="image"
            data-aos="fade-right"
            data-aos-duration="1200"
            alt="" />
        </div>
        <div className="space60"/>
        <div className="right">
          <img 
            src="img/about/Group.png" 
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
            alt="" />
        </div>
      </div>

      <div className="about_inner-mobile">
        <div className="center">
          <img 
            src="img/about/Project_m.png" 
            className="image" 
            data-aos="fade-right" 
            data-aos-duration="1200"
            alt="" />
        </div>
        <div className="space100"/>
        <div className="center">
          <img 
            src="img/about/Group_m.png" 
            data-aos="fade-right" 
            data-aos-duration="1200" 
            data-aos-delay="300" 
            alt="" />
        </div>
      </div>
      {/* <Skills /> */}
    </>
  );
};

export default AboutDarkAnimation;
