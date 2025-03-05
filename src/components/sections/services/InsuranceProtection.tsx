import ServicesModel from "../../../components/models/ServicesModel";
import insurance from "../../../assets/insurance.png";

const InsuranceProtection = () => {
  return (
    <ServicesModel
      title="Insurace Protection"
      image={insurance}
      content="Ensure your financial future with comprehensive investment protection plans tailored to safeguard your assets."
    />
  );
};

export default InsuranceProtection;
