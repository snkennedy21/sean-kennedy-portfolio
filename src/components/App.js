import DesktopNavigation from "./header/DesktopNavigation";
import Hero from "./hero/Hero";
import MobileNavigation from "./header/MobileNavigation";
import Portfolio from "./portfolio/Portfolio";

function App() {
  document.body.style.overflowX = "hidden";

  return (
    <div className="App bg-darkColor">
      <DesktopNavigation></DesktopNavigation>
      <MobileNavigation></MobileNavigation>
      <Hero></Hero>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
