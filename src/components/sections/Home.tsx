import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/units/NavBar";
import Intro from "../../components/units/Intro";
import ProfessionalServicesPage from "./ProfessionalServicesPage";
import ClientCenteredApproach from "./ClientCenteredApproachPage";
import Consultation from "./Consultation";
import Footer from "./Footer";

const Home = () => {
    const consultationRef = useRef<HTMLDivElement | null>(null);
    const location = useLocation();

    // Scroll to Consultation if navigated with "#consultation"
    useEffect(() => {
        if (location.hash === "#consultation" && consultationRef.current) {
            consultationRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <div>
            <Navbar />
            <Intro />
            <ProfessionalServicesPage />
            <ClientCenteredApproach />
            
            {/* Consultation Section with ref */}
            <div ref={consultationRef}>
                <Consultation />
            </div>
            
            <Footer isHomePage={true} />
        </div>
    );
};

export default Home;
