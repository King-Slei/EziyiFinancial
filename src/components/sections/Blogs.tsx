import { motion } from "framer-motion";
import PageHeaderModel from "../../components/models/PageHeaderModel";
import Footer from "./Footer";
import success from "../../assets/success.png";

const FinancialGuideCard = () => {
  return (
    <div>
      {/* Page Header */}
      <PageHeaderModel title="Blogs and Articles" />
      
      <div  className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
      {/* Card Container */}
      <motion.div 
        className="bg-white shadow-lg rounded-xl p-6 flex max-w-4xl mx-auto items-center space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Image Section */}
        <motion.img 
          src={success} 
          alt="Success Road" 
          className="w-40 h-32 rounded-lg object-cover"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Text Section */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-blue-900">
            Building Wealth with Confidence: Victor’s Expert Guide to Financial Success
          </h3>
          <p className="text-gray-700 mt-2 text-sm">
            Wealth isn’t built overnight—it requires strategic planning, smart decision-making, and a long-term vision. 
            Whether you’re just starting your financial journey or looking to optimize your current strategy, having a clear plan in place is essential. 
            A well-structured financial roadmap helps you manage risks, grow your assets, and secure a comfortable fut...
          </p>
        </div>
      </motion.div>
    </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FinancialGuideCard;
