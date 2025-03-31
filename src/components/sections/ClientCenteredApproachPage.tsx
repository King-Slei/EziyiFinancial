import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const steps = [
  {
    title: "Initial Consultation",
    description:
      "Our first meeting, whether virtual or in-person, is designed to fully understand your needs and determine how we can best support you. During this session, we’ll go over important details like your income, expenses, assets, liabilities, and your comfort level with financial risks.",
  },
  {
    title: "Financial Analysis",
    description:
      "We analyze your financial situation and create a personalized plan. Review initial consultation data, identifying gaps and opportunities. Set realistic and prioritized financial goals with you. Develop a comprehensive financial plan covering savings, investment, insurance, retirement, tax planning, and risk management. Customize the plan to fit your unique needs, preferences, risk tolerance, and goals.",
  },
  {
    title: "Plan Presentation",
    description:
      "We present the detailed financial plan to you, ensuring it covers all areas of your need. Questions and feedback are encouraged to ensure all your concerns are addressed and you are comfortable with the proposed strategies.",
  },
  {
    title: "Implementation",
    description:
      "Based on agreed strategies, we put the financial plan into action and provide hands-on coaching during the implementation process.",
  },
  {
    title: "Ongoing Support",
    description:
      "We provide continuous support by scheduling regular reviews to assess progress and adjust the plan. We keep open communication with you, also informing you of market or financial changes. We educate you on financial concepts and strategies to empower informed decisions. Adapt the plan as your needs and goals evolve over time.",
  },
  {
    title: "Client Feedback and Improvement",
    description:
      "We continuously improve services based on your feedback. Conduct regular surveys to gather your feedback. Then we use this feedback to enhance services and your experience thereby fostering long-term client relationships.",
  },
];

const ClientCenteredApproach = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-6xl mx-auto p-10 text-center"
    >
      {/* Title Section */}
      <motion.h2
        variants={fadeInUp}
        className="text-4xl font-bold text-blue-900"
      >
        A Client-Centered Approach
      </motion.h2>
      <motion.p variants={fadeInUp} className="text-gray-600 mt-4 max-w-3xl mx-auto">
        As a dedicated provider of accounting and tax services, we prioritize
        collaboration and clear communication to ensure you receive the best
        possible experience. Our goal is to work closely with you, offering
        tailored solutions that meet your financial needs.
      </motion.p>

      {/* Steps Grid */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="bg-blue-900 text-white p-6 rounded-lg shadow-lg relative flex flex-col items-center"
          >
            <span className="absolute top-3 left-3 bg-white text-blue-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
              {index + 1}
            </span>
            <h3 className="text-xl font-bold mt-6">{step.title}</h3>
            <p className="mt-2 text-sm text-center">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ClientCenteredApproach;