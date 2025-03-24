import { motion } from "framer-motion";
import Typewriter from "react-typewriter-effect";
import calculator from "../../assets/calculator.png";
import overlay from "../../assets/overlay.png";

const Intro = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: 50 }} // Start below the screen
            animate={{ opacity: 1, y: 0 }} // Slide up smoothly
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col lg:flex-row items-center justify-between py-24 px-16 max-w-7xl mx-auto"
        >
            <div className="max-w-xl text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    <Typewriter
                        text="Top-Notch Financial Advice & Solution For You!"
                        cursorColor="#2563EB"
                        typeSpeed={60}
                        eraseSpeed={30}
                        eraseDelay={3000}
                    />
                </h2>
                <a 
                        href="https://calendly.com/eziyifinancial" 
                        target="_blank" 
                        rel="noopener noreferrer"
                >
                    <button className="mt-10 bg-blue-700 text-white px-10 py-5 rounded text-2xl">
                        Book Free Consultation
                    </button>
                </a>
            </div>
            <div className="relative flex justify-center mt-12 lg:mt-0 lg:max-w-lg">
                <img src={overlay} alt="Background Overlay" className="absolute inset-0 w-full h-full object-cover" />
                <img src={calculator} alt="Financial Growth" className="relative w-full max-w-xl" />
            </div>
        </motion.header>
    );
};

export default Intro;
