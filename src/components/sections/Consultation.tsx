import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import { Mail, MapPin, Phone } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  concerns: string;
  details: string;
}

const Consultation = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    concerns: "",
    details: "",
  });

  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        "service_2l2guu8", 
        "template_mnj9zfa", 
        { ...formData } as Record<string, unknown>,
        "V9ztEx0bZRtF_njfP" // Public Key
      );

      console.log("Email sent successfully:", response);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        concerns: "",
        details: "",
      });
      setSuccessMessage("Thank you contacting us! We're looking forward to connecting with you.");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Email sending failed:", error.message);
        alert("Failed to send message, please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-cover bg-center">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">
        Ready To Make A Change In Your Finance
      </h1>
      <p className="text-center text-gray-700 mt-2">
        Contact us today to schedule an appointment.
      </p>
      <div className="mt-8 w-full max-w-5xl flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-8">
        <div className="w-full md:w-1/3 bg-blue-50 p-6 rounded-lg flex flex-col space-y-6">
          <div className="flex items-center space-x-3">
            <MapPin className="text-blue-700" />
            <div>
              <p className="font-bold">Location</p>
              <p>Alberta, Canada</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="text-blue-700" />
            <div>
              <p className="font-bold">Email</p>
              <p>eziyi.financial@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-blue-700" />
            <div>
              <p className="font-bold">Phone No.</p>
              <p>403-831-2049</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              className="w-full p-3 border rounded focus:outline-blue-500"
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full p-3 border rounded focus:outline-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="w-full p-3 border rounded focus:outline-blue-500"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full p-3 border rounded focus:outline-blue-500"
              value={formData.location}
              onChange={handleChange}
            />
            <select
              name="concerns"
              className="w-full p-3 border rounded focus:outline-blue-500"
              value={formData.concerns}
              onChange={handleChange}
            >
              <option>Primary Financial Concerns</option>
              <option>Investment</option>
              <option>Retirement Planning</option>
              <option>Debt Management</option>
            </select>
            <textarea
              name="details"
              placeholder="Give Details"
              className="w-full p-3 border rounded h-24 focus:outline-blue-500"
              value={formData.details}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            >
              Book Free Consultation ➤
            </button>
          </form>
          {successMessage && (
            <div className="mt-4 bg-green-100 text-green-800 p-4 rounded">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Consultation;