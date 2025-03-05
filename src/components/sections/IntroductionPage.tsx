import brainstorm from "../../assets/brainstorm.png";
import calculator from "../../assets/calculator.png";
import overlay from "../../assets/overlay.png";

const IntroductionPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-8 bg-white shadow-md text-2xl">
        <h1 className="text-5xl font-bold text-blue-900 ml-16">VictorEziyi</h1>
        <div className="space-x-10 hidden md:flex text-2xl">
          <a href="#" className="text-gray-700 hover:text-blue-600 relative after:block after:h-1 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 relative after:block after:h-1 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">About Us</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 relative after:block after:h-1 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Services</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 relative after:block after:h-1 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Tips & Tricks</a>
        </div>
        <div className="space-x-8 mr-16">
          <button className="border border-blue-700 text-blue-700 px-6 py-4 rounded hover:bg-blue-100 text-2xl">Contact Us</button>
          <button className="bg-blue-700 text-white px-6 py-4 rounded text-2xl">Book Appointment</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col lg:flex-row items-center justify-between py-24 px-16 max-w-7xl mx-auto">
        <div className="max-w-xl text-left">
          <h2 className="text-6xl font-bold text-gray-900 leading-tight">
            Top-Notch Financial Advice & Solution For <span className="text-blue-600">You!</span>
          </h2>
          <button className="mt-10 bg-blue-700 text-white px-10 py-5 rounded text-2xl">Book Appointment</button>
        </div>
        <div className="relative flex justify-center mt-12 lg:mt-0 lg:max-w-lg">
          <img src={overlay} alt="Background Overlay" className="absolute inset-0 w-full h-full object-cover" />
          <img src={calculator} alt="Financial Growth" className="relative w-full max-w-xl" />
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-16 pb-24 max-w-7xl mx-auto relative">
        <div className="lg:max-w-lg relative">
          <img src={brainstorm} alt="Consultation" className="relative w-full max-w-xl" />
        </div>
        <div className="max-w-xl text-left mt-12 lg:mt-0">
          <h3 className="text-5xl font-bold text-blue-700">Why Choose Us?</h3>
          <p className="text-2xl text-gray-700 mt-8">
            Financial success isn’t just about numbers – it’s about strategy, foresight, and making the right moves at the right time. We bring expert financial insight, tailored solutions, and a results-driven approach to help you secure your future with confidence.
          </p>
          <p className="text-2xl text-gray-700 mt-8">
            Whether you’re looking to protect your assets, grow your wealth, or plan for the long term, we provide personalized guidance that turns your goals into reality.
          </p>
          <button className="mt-10 bg-blue-700 text-white px-10 py-5 rounded text-2xl">Meet Your Advisor</button>
        </div>
      </section>
    </div>
  );
};

export default IntroductionPage;