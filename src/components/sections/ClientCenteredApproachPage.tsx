import { motion } from "framer-motion";
import Illustration from "../../assets/team.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const ClientCenteredApproach = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-6xl mx-auto p-10 flex flex-col md:flex-row items-start"
    >
      {/* Left Section: Illustration */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex items-center"
      >
        <img src={Illustration} alt="Illustration" className="w-full h-full object-cover" />
      </motion.div>

      {/* Right Section: Content */}
      <motion.div className="w-full md:w-1/2 pl-8">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-blue-900"
        >
          A Client-Centered Approach
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-gray-600 mt-4 max-w-3xl"
        >
          As a dedicated provider of accounting and tax services, we prioritize
          collaboration and clear communication to ensure you receive the best
          possible experience. Our goal is to work closely with you, offering
          tailored solutions that meet your financial needs.
        </motion.p>

        {/* Process Steps with Staggered Animations */}
        <motion.div
          variants={staggerContainer}
          className="mt-12 space-y-8 relative"
        >
          {[
            {
              title: "Initial Consultation",
              description:
                "Our first meeting, whether virtual or in-person, is designed to fully understand your needs and determine how we can best support you. Following our discussion, you will receive an engagement letter outlining the scope of work and key objectives.",
            },
            {
              title: "Document Review & Preparation",
              description:
                "Once the engagement letter is signed, we will request access to relevant documents and assess any additional information needed before proceeding with your tax or accounting services.",
              offset: "ml-10",
            },
            {
              title: "Ongoing Communication",
              description:
                "As we work through your file, we may reach out for further details or clarifications to ensure accuracy and completeness. Our goal is to keep the process seamless and efficient.",
            },
            {
              title: "Final Review & Submission",
              description:
                "Before your tax filing deadline, we will meet to review your final documents and collect any necessary authorization signatures. Once approved, your tax filings will be submitted to the appropriate government agencies.",
              offset: "ml-10",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`bg-blue-900 text-white p-6 rounded-lg shadow-lg relative max-w-xl ${step.offset || ""}`}
            >
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ClientCenteredApproach;
