import React from "react";
import ServicesModel from "../../../components/models/ServicesModel";
import investmentImage from "../../../assets/investment.png";

const InvestmentSavings = () => {
  return (
    <div>
      <ServicesModel
        title="Investment Savings"
        image={investmentImage}
        content="Ensure your financial future with comprehensive investment protection plans tailored to safeguard your assets."
      />
    </div>
  );
};

export default InvestmentSavings;
