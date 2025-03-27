import ServicesModel from "../../../components/models/ServicesModel";
import insurance from "../../../assets/insurance.png";

const CoachingAndMentoring = () => {
  return (
    <ServicesModel
      title="Coaching & Mentoring"
      image={insurance}
      content="From term and whole life insurance to critical illness and property protection, we help you choose the best options based on your lifestyle and financial situation"
    />
  );
};

export default CoachingAndMentoring;
