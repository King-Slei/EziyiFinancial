import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/sections/Home";
import Footer from "./components/sections/Footer";
import AboutUsPage from "./components/sections/AboutUsPage"; // Import the About Us page
import MortgageReferral from "./components/sections/services/MortgageReferral";
import PersonalizedServices from "./components/sections/services/PersonalizedServices";
import InvestmentSavings from "./components/sections/services/InvestmentSavings";
import InsuranceProtection from "./components/sections/services/InsuranceProtection";
import FinancialGuideCard from "./components/sections/Blogs";
import CoachingAndMentoring from "./components/sections/services/Coaching";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        
        {/* About Us Page */}
        <Route
          path="/about"
          element={
            <>
              <AboutUsPage />
              <Footer />
            </>
          }
        />
        <Route path="/insurance" element={<InsuranceProtection />} />
        <Route path="/savings" element={<InvestmentSavings />} />
        <Route path="/personalized" element={<PersonalizedServices />} />
        <Route path="/mortgage" element={<MortgageReferral />} />
        <Route path="/coaching" element={<CoachingAndMentoring />} />
        <Route path="/tips" element={<FinancialGuideCard />} />
      </Routes>
    </Router>
  );
}

export default App;
