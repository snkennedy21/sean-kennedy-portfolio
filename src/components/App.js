import DesktopNavigation from "./header/DesktopNavigation";
import Hero from "./hero/Hero";
import MobileNavigation from "./header/MobileNavigation";
import Portfolio from "./portfolio/Portfolio";
import About from "./about/About";
import Contact from "./contact/Contact";
import MainPage from "./MainPage";
import Footer from "./footer/Footer";
import ThankYouPage from "./thankyou/ThankYouPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  document.body.style.overflowX = "hidden";

  return (
    <div className="App bg-darkColor">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
