import DesktopNavigation from "./header/DesktopNavigation";
import Hero from "./hero/Hero";
import MobileNavigation from "./header/MobileNavigation";
import Portfolio from "./portfolio/Portfolio";
import About from "./about/About";

function App() {
  document.body.style.overflowX = "hidden";

  return (
    <div className="App bg-darkColor">
      <DesktopNavigation></DesktopNavigation>
      <MobileNavigation></MobileNavigation>
      <Hero></Hero>
      <About />
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
