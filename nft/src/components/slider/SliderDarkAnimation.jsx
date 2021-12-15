import React, { useRef, useEffect } from "react";
import Social from "../Social";
import SocialTwo from "../SocialTwo";
import ReactTyped from "react-typed";
import { RellaxWrapper } from "react-rellax-wrapper";
import { AnimateKeyframes }  from 'react-simple-animate';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from 'gsap';



const SliderDarkAnimation = () => {

  const randomRange = ((n1, n2) => {
    return Math.floor( (Math.random() * (n2 - n1 + 1)) + n1 );
  });
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#imageAnim2", {
      scrollTrigger: { 
        trigger: "#imageAnim2",
        toggleActions: "restart",
        scrub: 0.5,
        start: "top top",
      },
      x: 300,
      duration: 1,
    });
  
  }, []);

  const rand = randomRange(1,4);

  return (
    //    HERO
    <div className="beny_tm_hero" id="home">
      <div className="background">
        <div
          className="image bg-pc"
          style={{
            backgroundImage: `url(${
              "img/slider/7.png"
            })`,
          }}
        ></div>
        <div
          className="image bg-m"
          style={{
            backgroundImage: `url(${
              "img/slider/7_m.png"
            })`,
          }}
        ></div> 
        <div
          className="image bg-pc"
          style={{
            backgroundImage: `url(${
              "img/slider/7-2.png"
            })`,
          }}
        ></div>
        <div
          className="image"
          style={{
            background: `rgba(7, 5, 5, 0.5)`,
          }}
        ></div>
        <div
          className="image bg-m"
          style={{
            backgroundImage: `url(${
              "img/slider/7-2_m.png"
            })`,
          }}
        ></div>
            <div className="image bg-pc" 
            id="imageAnim2" 
            style={{
              backgroundImage: `url(${
                "img/slider/char"+rand+".gif"
              })`,
            }} 
            ></div>
            <div className="image bg-m" 
            id="imageAnim2" 
            style={{
              backgroundImage: `url(${
                "img/slider/char"+rand+"_m.gif"
              })`,
            }} 
            ></div>
        <div
          className="image bg-pc"
          style={{
            backgroundImage: `url(${
              "img/slider/7-3.png"
            })`,
          }}
        ></div>
        <div
          className="image bg-m"
          style={{
            backgroundImage: `url(${
              "img/slider/7-3_m.png"
            })`,
          }}
        ></div>
        <div className="overlay"></div>

        {/* <RellaxWrapper className="pa-image" style={{ marginTop: 200, marginRight: 500 }} speed={-5} percentage={0.7}>
          <img src="img/slider/star.png" alt='star-1' />
        </RellaxWrapper>
        <RellaxWrapper className="pa-image" style={{ marginTop: 200, marginLeft: 500 }} speed={-4}>
          <img src="img/slider/star.png" alt='star-1' />
        </RellaxWrapper> */}
      </div>
      {/* End bg */}

      {/* <div className="tr-space">
        <div className="tr-image">
          <AnimateKeyframes play  
            iterationCount= "infinite" 
            direction= "normal"
            duration= {15} 
            keyframes= {[
              "transform: translateX(0)",
              "transform: translateX(-100%)"
            ]} 
            >
            <img src="img/slider/group.png" alt="group" style={{ position: 'absolute', float: 'left', paddingRight: '2vw', width: '100%' }}/>
          </AnimateKeyframes>
          <AnimateKeyframes play  
            iterationCount= "infinite" 
            direction= "normal"
            duration= {15} 
            keyframes= {[
              "transform: translateX(100%)",
              "transform: translateX(0%)"
            ]} >
            <img src="img/slider/group.png" alt="group2" 
            style={{ position: 'absolute', float: 'left', width: '100%' }}/>
          </AnimateKeyframes>
        </div>
      </div> */}
      
      <div className="go-to go-to-next">
        <a href="#about">
          <span></span>
        </a>
      </div>
      {/* End animated goto button */}

      <div className="container">
        <div className="content">
          <div className="content_inner">
            <h1
              className="job"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              RIDDLE<br/>
              HEAD
              {/* <span className="typer-toper">
                <ReactTyped
                  loop
                  typeSpeed={150}
                  backSpeed={60}
                  strings={["RIDDLE HEAD", "숨겨진", "우리의 모습들"]}
                  smartBackspace
                  shuffle={false}
                  backDelay={1}
                  fadeOut={false}
                  fadeOutDelay={100}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />
              </span> */}
              {/* <br /> <span>Based In California.</span> */}
            </h1>
            {/* End .social */}

            {/* <div
              className="beny_tm_button"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <a className="anchor" href="#about">
                <span className="wrapper">
                  <span className="first">See Portfolio</span>
                  <span className="second">See Portfolio</span>
                </span>
              </a>
            </div> */}
            {/* End beny_tm_button */}
          </div>
        </div>
      </div>
      {/* End .container */}

      {/* <div className="social" data-aos="fade-left" data-aos-duration="1200">
        <SocialTwo />
      </div> */}
      {/* End .social */}
    </div>
    //HERO
  );
};

export default SliderDarkAnimation;
