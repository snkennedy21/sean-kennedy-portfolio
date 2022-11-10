import DesktopNavigation from "./header/DesktopNavigation";
import Hero from "./hero/Hero";
import MobileNav from "./header/MobileNav";

function App() {
  return (
    <div className="App bg-darkColor">
      <DesktopNavigation></DesktopNavigation>
      <MobileNav></MobileNav>
      <Hero></Hero>
    </div>
  );
}

export default App;
