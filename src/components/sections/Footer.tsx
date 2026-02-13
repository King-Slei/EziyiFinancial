import React, { useState } from "react";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
// import linkedin from "../../assets/linkedin.png";
import background from "../../assets/background.png";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

type FooterProps = {
  isHomePage?: boolean;
};

const Footer: React.FC<FooterProps> = ({ isHomePage = false }) => {
  const [popupContent, setPopupContent] = useState<string | null>(null);

  const openPopup = (content: string) => setPopupContent(content);
  const closePopup = () => setPopupContent(null);

  const privacyPolicyText = `
PRIVACY POLICY

Introduction
We value your trust. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or engage our financial advisory services.

Information We Collect
• Personal details: Name, email, phone number, address.
• Financial information: Income, assets, liabilities, investment preferences.
• Website data: Cookies, IP address, browsing behavior, analytics.

How We Use Your Information
* To provide financial advisory services.
* To comply with legal and regulatory obligations (e.g., SEC in the U.S., provincial securities commissions in Canada).
* To communicate with you about services, updates, and promotions (with consent).

Sharing of Information
• With trusted third parties (custodians, compliance auditors, IT providers).
• When required by law or regulators.
• We do not sell your personal information to marketers.

Data Security
We use encryption, secure servers, and restricted access to protect your data.

Your Rights
• Canada (PIPEDA & provincial laws): Right to access, correct, or withdraw consent for data use.
• U.S. (state laws, e.g., CCPA in California): Right to know what data is collected, request deletion, and opt out of data sharing.

Cookies & Tracking
We use cookies and analytics tools to improve website performance. You may disable cookies in your browser settings.

Updates to Policy
We may update this Privacy Policy periodically. Changes will be posted on this page with a revised date.

Contact Us
For privacy inquiries, email us at victor@eziyifinancial.com or call +1 (403) 831-2049
`;

  const termsOfServiceText = `
TERMS OF SERVICES

Acceptance of Terms
By accessing or using our website and services, you agree to these Terms of Service.

Services Provided
We offer financial advisory services, including investment guidance, retirement planning, and wealth management. Information on this website is for general purposes only and does not constitute personalized financial advice unless a formal client agreement is signed.

Eligibility
You must be at least 18 years old to use our services. Certain services may be restricted by jurisdiction.

Client Responsibilities
• Provide accurate and complete information.
• Maintain confidentiality of login credentials.
• Use our services in compliance with applicable laws.

Limitations of Liability
We are not liable for losses due to market fluctuations or investment risks. All investments carry risk, and past performance does not guarantee future results.

Intellectual Property
All website content, including text, graphics, and logos, is our property and may not be reproduced without permission.

Termination of Use
We reserve the right to suspend or terminate services if terms are violated.

Governing Law
• For Canadian clients: These Terms are governed by the laws of the applicable province and federal laws of Canada.
• For U.S. clients: These Terms are governed by the laws of the applicable state and federal laws of the United States.

Dispute Resolution
Any disputes will be resolved through arbitration or mediation, unless otherwise required by law.

Amendments
We may update these Terms at any time. Continued use of our services after changes indicates acceptance.
`;

  return (
    <>
      {/* Ready Section */}
      {!isHomePage && (
        <div
          className="bg-cover bg-center py-12 flex flex-col items-center text-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <motion.h2
            className="text-3xl font-bold text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            Ready To Get Started? Let’s Get in Touch
          </motion.h2>

          <a
            href="https://calendly.com/eziyifinancial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="mt-4 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
            >
              Contact Us
            </motion.button>
          </a>
        </div>
      )}

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center">

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-4">
            <a className="hover:underline">HOME</a>
            <a className="hover:underline">ABOUT</a>
            <a className="hover:underline">SERVICES</a>
            <a className="hover:underline">FAQ</a>
            <a className="hover:underline">TIPS & TRICKS</a>
            <a 
              href="https://calendly.com/eziyifinancial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
            >
              BOOK AN APPOINTMENT
            </a>

            {/* Popup Menu Buttons */}
            <button
              onClick={() => openPopup(privacyPolicyText)}
              className="hover:underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => openPopup(termsOfServiceText)}
              className="hover:underline"
            >
              Terms of Service
            </button>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-center mb-4">
            © Copyright 2025 VictorEziyi. All Rights Reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/eziyi_financial/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-md shadow-md"
            >
              <img src={instagram} alt="Instagram" className="w-6 h-6" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61566523444789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-md shadow-md"
            >
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
            </a>

          </div>
        </div>

        {/* Popup Modal */}
        {popupContent && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-start justify-center z-50 p-4 pt-12"
            onClick={closePopup}
          >
            <div
              className="bg-white text-black max-w-3xl w-full p-6 rounded-lg overflow-y-auto max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closePopup}
                className="float-right text-red-500 font-bold text-lg"
              >
                ×
              </button>
              <pre className="whitespace-pre-wrap">{popupContent}</pre>
            </div>
          </div>
        )}
      </footer>
    </>
  );
};

export default Footer;
