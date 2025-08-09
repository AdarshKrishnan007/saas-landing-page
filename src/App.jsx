import "./App.css";
import Home from "./pages/Home";
import PartnerSupportSection from "./components/sections/PartnerSupport/PartnerSupportSection";
import Features from "./components/sections/Features/Features";
import PricingSection from "./components/sections/Pricing/PricingSection";
import About from "./components/sections/About/About";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Home />
      <PartnerSupportSection />
      <Features />
      <PricingSection />
      <About />
      <Footer />
    </div>
  );
}

export default App;
