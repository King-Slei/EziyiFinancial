import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/sections/Home";
import ChooseUs from "./components/units/ChooseUs";
import ProfessionalServicesPage from "./components/sections/ProfessionalServicesPage";
import ClientCenteredApproach from "./components/sections/ClientCenteredApproachPage";
import Consultation from "./components/sections/Consultation";
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
          path="/"
          element={
            <>
              <Home />
              <ChooseUs />
              <ProfessionalServicesPage />
              <ClientCenteredApproach />
              <Consultation />
              <Footer isHomePage={true} />
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
        <Route path="/investment" element={<InvestmentSavings/>} />
        <Route path="/savings" element={<InsuranceProtection />} />
        <Route path="/personalized" element={<PersonalizedServices />} />
        <Route path="/mortgage" element={<MortgageReferral />} />
        <Route path="/tips" element={<FinancialGuideCard />} />
      </Routes>
    </Router>
  );
}

export default App;
