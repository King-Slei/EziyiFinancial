import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = () => {
        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        dropdownTimeout.current = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 200); // Small delay before closing
    };

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, to: string) => {
        if (event.ctrlKey || event.metaKey) {
            window.open(to, "_blank");
            event.preventDefault();
        }
    };

    return (
        <nav className="bg-white shadow-md w-full">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-6 lg:px-16">
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Logo" className="h-8 w-8" />
                    <h1 className="text-4xl font-bold text-blue-900">Eziyi Financial</h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 text-lg">
                    <Link to="/" className="text-blue-900 font-bold hover:text-blue-600" onClick={(e) => handleLinkClick(e, "/")}>Home</Link>
                    <Link to="/about" className="text-blue-900 font-bold hover:text-blue-600" onClick={(e) => handleLinkClick(e, "/about")}>About Us</Link>

                    {/* Services Dropdown */}
                    <div 
                        className="relative group"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="text-blue-900 font-bold hover:text-blue-600 cursor-pointer">Services</div>
                        {isDropdownOpen && (
                            <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-10">
                                <Link to="/insurance" className="block px-6 py-3 text-blue-900 font-bold hover:bg-blue-100" onClick={(e) => handleLinkClick(e, "/insurance")}>Insurance</Link>
                                <Link to="/savings" className="block px-6 py-3 text-blue-900 font-bold hover:bg-blue-100" onClick={(e) => handleLinkClick(e, "/savings")}>Savings & Retirement</Link>
                                <Link to="/personalized" className="block px-6 py-3 text-blue-900 font-bold hover:bg-blue-100" onClick={(e) => handleLinkClick(e, "/personalized")}>Personalized Services</Link>
                                <Link to="/mortgage" className="block px-6 py-3 text-blue-900 font-bold hover:bg-blue-100" onClick={(e) => handleLinkClick(e, "/mortgage")}>Mortgage Referral</Link>
                                <Link to="/coaching" className="block px-6 py-3 text-blue-900 font-bold hover:bg-blue-100" onClick={(e) => handleLinkClick(e, "/coaching")}>Coaching & Mentoring </Link>
                            </div>
                        )}
                    </div>

                    <Link to="/tips" className="text-blue-900 font-bold hover:text-blue-600" onClick={(e) => handleLinkClick(e, "/tips")}>Tips & Tricks</Link>
                </div>

                {/* Buttons */}
                <div className="hidden md:flex space-x-4">
                    <Link to="#consultation">
                        <button className="w-full border border-blue-900 text-blue-900 font-bold px-5 py-3 rounded hover:bg-blue-100">
                            Contact Us
                        </button>
                    </Link>

                    <a 
                        href="https://calendly.com/eziyifinancial" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <button className="bg-blue-900 text-white font-bold px-5 py-3 rounded">
                            Book Free Consultation
                        </button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
                    {isMenuOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white p-6 space-y-4 text-center">
                    <Link to="/" className="block text-blue-900 font-bold hover:text-blue-600" onClick={(e) => handleLinkClick(e, "/")}>Home</Link>
                    <Link to="/about" className="block text-blue-900 font-bold hover:text-blue-600" onClick={(e) => handleLinkClick(e, "/about")}>About Us</Link>

                    <div className="relative">
                        <button 
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="block w-full text-blue-900 font-bold hover:text-blue-600"
                        >
                            Services {isDropdownOpen ? "▲" : "▼"}
                        </button>
                        {isDropdownOpen && (
                            <div className="bg-gray-100 mt-2 rounded-lg">
                                <Link to="/insurance" className="block px-6 py-3 text-blue-900 font-bold hover:bg-blue-100" onClick={(e) => handleLinkClick(e, "/insurance")}>Insurance</Link>
                                <Link to="/savings" className="block px-6 py-3 text-blue-900 font-bold hover:bg-blue-100" onClick={(e) => handleLinkClick(e, "/savings")}>Savings & Retirement</Link>
                                <Link to="/personalized" className="block px-6 py-3 text-blue-900 font-bold hover:bg-blue-100" onClick={(e) => handleLinkClick(e, "/personalized")}>Personalized Services</Link>
                                <Link to="/mortgage" className="block px-6 py-3 text-blue-900 font-bold hover:bg-blue-100" onClick={(e) => handleLinkClick(e, "/mortgage")}>Mortgage Referral</Link>
                                <Link to="/coaching" className="block px-6 py-3 text-blue-900 font-bold hover:bg-blue-100" onClick={(e) => handleLinkClick(e, "/coaching")}>Coaching & Mentoring </Link>
                            </div>
                        )}
                    </div>

                    <Link to="/tips" className="block text-blue-900 font-bold hover:text-blue-600" onClick={(e) => handleLinkClick(e, "/tips")}>Tips & Tricks</Link>

                    <button className="w-full border border-blue-900 text-blue-900 font-bold px-5 py-3 rounded hover:bg-blue-100">
                        Contact Us
                    </button>

                    <a 
                        href="https://calendly.com/eziyifinancial" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <button className="w-full bg-blue-900 text-white font-bold px-5 py-3 rounded">
                            Book Free Consultation
                        </button>
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
