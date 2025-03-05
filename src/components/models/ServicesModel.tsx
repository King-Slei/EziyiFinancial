import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/sections/Footer";
import PageHeaderModel from "./PageHeaderModel";
import { Link } from "react-router-dom";

type ServicesModelProps = {
  title: string;
  image: string;
  content: string;
};

const ServicesModel: React.FC<ServicesModelProps> = ({ title, image, content }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 overflow-hidden">
      {/* Page Header Section */}
      <PageHeaderModel title={title} />
      
      {/* Content Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        
        {/* Image Section */}
        <motion.div
          className="md:w-1/2 mb-6 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={image} alt={title} className="w-full h-auto" />
        </motion.div>
        
        {/* Text Content Section */}
        <motion.div
          className="md:w-1/2 text-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4">{title}</h2>
          <p className="mb-4">{content}</p>
          
          {/* Call to Action Button */}
          <Link to="/EziyiFinancial#consultation">
            <motion.button 
              className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ServicesModel;
