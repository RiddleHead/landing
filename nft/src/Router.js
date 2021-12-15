import React from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import ScrollTopBehaviour from "./components/ScrollTopBehaviour";

// import Preview from "../views/Preview";
// import HomeLight from "../views/all-home-version/HomeLight";
// import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation";
// import HomeParallaxAnimation from "../views/all-home-version/HomeParallaxAnimation";
// import HomeTextLoopAnimation from "../views/all-home-version/HomeTextLoopAnimation";
// import HomeTyperCreative from "../views/all-home-version/HomeTyperCreative";
// import HomeParallaxTyper from "../views/all-home-version/HomeParallaxTyper";
// import HomeDarkBubbleAnimation from "../views/all-home-version/HomeDarkBubbleAnimation";
// import HomeDark from "../views/all-home-version/HomeDark";
// import HomeDarkParticles from "../views/all-home-version/HomeDarkParticles";
// import HomeDarkAnimation from "../views/all-home-version/HomeDarkAnimation";


function Router() {

  return (
    <> 
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollTopBehaviour />
      <Routes>
        <Route basename={process.env.PUBLIC_URL} exact path='/' element={<Home />} />
        <Route basename={process.env.PUBLIC_URL} path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default Router;
