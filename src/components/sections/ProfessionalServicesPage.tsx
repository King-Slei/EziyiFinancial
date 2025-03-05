import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const ProfessionalServicesPage = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-10 py-20 bg-gray-100"
    >
      {/* Title */}
      <motion.h2
        variants={cardVariants}
        className="text-4xl md:text-6xl font-bold text-blue-900 mb-12"
      >
        Professional Services
      </motion.h2>

      {/* Service Cards */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl"
      >
        {[
          {
            icon: "💸",
            title: "Insurance Protection and Solutions",
            description:
              "Life is unpredictable, but the right insurance ensures financial security for you and your loved ones. We provide tailored solutions to keep you prepared for the unexpected.",
          },
          {
            icon: "💵",
            title: "Investment, Savings, and Retirement",
            description:
              "Building wealth and securing your future requires smart planning. Whether investing, saving for major goals, or preparing for retirement, we offer expert guidance.",
          },
          {
            icon: "📈",
            title: "Personalized Financial Services",
            description:
              "Managing finances shouldn’t be overwhelming. We provide personalized strategies for budgeting, debt management, tax planning, and wealth building.",
          },
          {
            icon: "🏠",
            title: "Mortgage Referral",
            description:
              "Finding the right mortgage can be complex. We connect you with trusted mortgage professionals to secure the best rates and terms for a smooth home-buying process.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="bg-blue-900 text-white p-8 md:p-10 rounded-2xl shadow-xl text-left transition-transform duration-300"
          >
            <div className="flex items-center gap-4 md:gap-6 mb-4">
              <span className="text-4xl md:text-6xl">{service.icon}</span>
              <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
            </div>
            <p className="text-base md:text-lg mb-4">{service.description}</p>
            <a href="#" className="text-white underline text-lg hover:text-gray-300">
              Learn more →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProfessionalServicesPage;
