import React from "react";
import ServicesModel from "../../../components/models/ServicesModel";
import mortgage from "../../../assets/mortgage.png"

const MortgageReferral = () => {
  return (
    <ServicesModel
      title="Mortgage Referral"
      image={mortgage}
      content="Ensure your financial future with comprehensive investment protection plans tailored to safeguard your assets."
    />
  );
};

export default MortgageReferral;
