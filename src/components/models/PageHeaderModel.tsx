import React from "react";
import { motion } from "framer-motion";
import background from "../../assets/background.png";
import Navbar from "../../components/units/NavBar";

interface Header {
  title: string;
}

const PageHeaderModel: React.FC<Header> = ({ title }) => {
  return (
    <div>
        <Navbar />

        {/* Hero Section */}
        <motion.div
            className="w-full text-center py-8 bg-cover bg-center"
            style={{ backgroundImage: `url(${background})` }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900">{title}</h1>
        </motion.div>
    </div>
  );
};

export default PageHeaderModel;