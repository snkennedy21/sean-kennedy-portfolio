import DesktopNavigation from "./header/DesktopNavigation";
import Hero from "./hero/Hero";
import MobileNavigation from "./header/MobileNavigation";
import Portfolio from "./portfolio/Portfolio";
import About from "./about/About";
import Contact from "./contact/Contact";
import React from "react";

function MainPage() {
  return (
    <React.Fragment>
      <DesktopNavigation />
      <MobileNavigation />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </React.Fragment>
  );
}

export default MainPage;
