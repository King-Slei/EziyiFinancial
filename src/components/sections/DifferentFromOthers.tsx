import React from "react";
import { motion } from "framer-motion";
import growthIllustration from "../../assets/different.png";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const DifferentFromOthers = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 flex flex-col items-center">
      <motion.h2
        className="text-4xl font-bold text-blue-900 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        Why Are We Different?
      </motion.h2>

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          {[{
            title: "Tailored Financial Solutions",
            text: "We take a personalized approach, creating strategies that align with your specific goals—whether it’s wealth building, retirement planning, or securing your family’s future."
          }, {
            title: "Unmatched Expertise and Client Commitment",
            text: "Our team brings years of experience and deep industry insight. We prioritize transparency, education, and trust, empowering you to make informed decisions with confidence."
          }, {
            title: "Ongoing Support and Guidance",
            text: "Financial planning is an evolving journey. We stay by your side, continuously reviewing and adjusting your strategy to adapt to life changes and market trends."
          }].map((item, index) => (
            <motion.div
              key={index}
              className="bg-blue-900 text-white p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-200">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Image Illustration */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
        >
          <img src={growthIllustration} alt="Financial Growth" className="w-full md:w-[90%] lg:w-[100%]" />
        </motion.div>
      </div>
    </div>
  );
};

export default DifferentFromOthers;