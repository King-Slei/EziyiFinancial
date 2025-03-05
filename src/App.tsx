import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/sections/Home";
import Footer from "./components/sections/Footer";
import AboutUsPage from "./components/sections/AboutUsPage"; // Import the About Us page
import MortgageReferral from "./components/sections/services/MortgageReferral";
import PersonalizedServices from "./components/sections/services/PersonalizedServices";
import InvestmentSavings from "./components/sections/services/InvestmentSavings";
import InsuranceProtection from "./components/sections/services/InsuranceProtection";
import FinancialGuideCard from "./components/sections/Blogs";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/EziyiFinancial"
          element={
            <>
              <Home />
            </>
          }
        />
        
        {/* About Us Page */}
        <Route
          path="/EziyiFinancial/about"
          element={
            <>
              <AboutUsPage />
              <Footer />
            </>
          }
        />
        <Route path="/EziyiFinancial/investment" element={<InvestmentSavings/>} />
        <Route path="/EziyiFinancial/savings" element={<InsuranceProtection />} />
        <Route path="/EziyiFinancial/personalized" element={<PersonalizedServices />} />
        <Route path="/EziyiFinancial/mortgage" element={<MortgageReferral />} />
        <Route path="/EziyiFinancial/tips" element={<FinancialGuideCard />} />
      </Routes>
    </Router>
  );
}

export default App;
