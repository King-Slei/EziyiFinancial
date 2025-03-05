import { Mail, MapPin, Phone } from "lucide-react";

const Consultation = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-cover bg-center"
      // style={{ backgroundImage: "url('/mnt/data/image.png')" }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">
        Ready To Make A Change In Your Finance
      </h1>
      <p className="text-center text-gray-700 mt-2">
        Contact us today to schedule an appointment.
      </p>

      <div className="mt-8 w-full max-w-5xl flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-8">
        {/* Contact Info */}
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
          <div className="flex items-center space-x-3">
            {/* <Linkedin className="text-blue-700" />
            <div>
              <p className="font-bold">LinkedIn</p>
              <p>Victoreziyi</p>
            </div> */}
          </div>
        </div>

        {/* Consultation Form */}
        <div className="w-full md:w-2/3 p-6">
          <form className="space-y-4">
            <input type="text" placeholder="Full name" className="w-full p-3 border rounded focus:outline-blue-500" />
            <input type="email" placeholder="Email address" className="w-full p-3 border rounded focus:outline-blue-500" />
            <input type="text" placeholder="Phone number" className="w-full p-3 border rounded focus:outline-blue-500" />
            <input type="text" placeholder="Location" className="w-full p-3 border rounded focus:outline-blue-500" />
            <input type="datetime-local" className="w-full p-3 border rounded focus:outline-blue-500" />
            <select className="w-full p-3 border rounded focus:outline-blue-500">
              <option>Primary Financial Concerns</option>
              <option>Investment</option>
              <option>Retirement Planning</option>
              <option>Debt Management</option>
            </select>
            <textarea placeholder="Give Details" className="w-full p-3 border rounded h-24 focus:outline-blue-500"></textarea>
            <button 
              type="submit" 
              className="w-full bg-blue-900 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            >
              Book Free Consultation ➤
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
