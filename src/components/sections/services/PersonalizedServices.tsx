import React from "react";
import ServicesModel from "../../../components/models/ServicesModel";
import personalized from "../../../assets/personalized.png";

const PersonalizedServices = () => {
  return (
    <ServicesModel
      title="Personalized"
      image={personalized}
      content="Ensure your financial future with comprehensive investment protection plans tailored to safeguard your assets."
    />
  );
};

export default PersonalizedServices;
