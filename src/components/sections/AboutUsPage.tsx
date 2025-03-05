import profilePic from "../../assets/victor.png";
import { motion } from "framer-motion";
import DifferentFromOthers from "./DifferentFromOthers";
import PageHeaderModel from "../../components/models/PageHeaderModel";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 overflow-hidden">
      <PageHeaderModel title="About Us"/>

      {/* Content Section */}
      <motion.div
        className="flex-grow max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        {/* Image */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <img 
            src={profilePic} 
            alt="Victor Eziyi" 
            className="rounded-lg shadow-md w-56 md:w-72"
          />
        </motion.div>

        {/* Text */}
        <motion.div 
          className="w-full md:w-1/2 mt-2 md:mt-0 md:pl-4 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Meet Victor, Your Financial Advisor</h2>
          <p className="text-gray-700 mt-2 text-sm md:text-base leading-relaxed">
            Victor is a seasoned financial advisor licensed across Canada and the USA. 
            He specializes in helping individuals and businesses navigate their financial journey with confidence.
          </p>
          <p className="text-gray-700 mt-2 text-sm md:text-base leading-relaxed">
            With partnerships with over 20 financial institutions, Victor ensures clients receive the best options and tailored solutions.
          </p>
          <motion.button 
            className="mt-3 bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.div>

      <DifferentFromOthers />
    </div>
  );
};

export default AboutUsPage;
