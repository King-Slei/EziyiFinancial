import { motion } from "framer-motion";
import brainstorm from "../../assets/brainstorm.png";

const ChooseUs = () => {
    return (
        <div>
            {/* Why Choose Us Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }} // Start slightly below
                whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of section is in view
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col lg:flex-row items-center justify-between px-16 pb-24 max-w-7xl mx-auto relative"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:max-w-lg relative"
                >
                    <img src={brainstorm} alt="Consultation" className="relative w-full max-w-xl" />
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-xl text-left mt-12 lg:mt-0"
                >
                    <h3 className="text-5xl font-bold text-blue-700">Why Choose Us?</h3>
                    <p className="text-2xl text-gray-700 mt-8">
                        Financial success isn’t just about numbers – it’s about strategy, foresight, and making the right moves at the right time. We bring expert financial insight, tailored solutions, and a results-driven approach to help you secure your future with confidence.
                    </p>
                    <p className="text-2xl text-gray-700 mt-8">
                        Whether you’re looking to protect your assets, grow your wealth, or plan for the long term, we provide personalized guidance that turns your goals into reality.
                    </p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-10 bg-blue-700 text-white px-10 py-5 rounded text-2xl"
                    >
                        Meet Your Advisor
                    </motion.button>
                </motion.div>
            </motion.section>
        </div>
    );
};

export default ChooseUs;
