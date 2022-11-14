import DesktopNavigation from "./header/DesktopNavigation";
import Hero from "./hero/Hero";
import MobileNavigation from "./header/MobileNavigation";
import Portfolio from "./portfolio/Portfolio";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

function App() {
  document.body.style.overflowX = "hidden";

  return (
    <div className="App bg-darkColor">
      <DesktopNavigation />
      <MobileNavigation />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
