import ServicesModel from "../../../components/models/ServicesModel";
import mortgage from "../../../assets/mortgage.png"

const MortgageReferral = () => {
  return (
    <ServicesModel
      title="Mortgage Referral"
      image={mortgage}
      content="Securing the right mortgage is one of the most important financial decisions you’ll make, whether you’re buying your first home, refinancing, or investing in property. With so many lenders, interest rates, and loan options available, navigating the mortgage process can be overwhelming. Finding the right solution requires expert guidance to ensure you secure the best terms, minimize costs, and make a financially sound decision that fits your long-term goals.
               Through our mortgage referral services, we connect you with trusted mortgage professionals who offer competitive rates and tailored loan options. By working with a network of reputable lenders, we help streamline the process, ensuring you receive expert advice and access to financing that aligns with your needs. Whether you're looking for lower interest rates, flexible payment plans, or refinancing opportunities, we guide you toward the best mortgage solutions for your unique situation."
    />
  );
};

export default MortgageReferral;
