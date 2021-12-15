import React, { useEffect } from 'react';
import Router from "./Router";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
import "./assets/scss/style.scss";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="beny_tm_all_wrap">
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="245, 34, 37"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <ScrollToTop />
      <Router/>
    </div>
  );
}


export default App;
