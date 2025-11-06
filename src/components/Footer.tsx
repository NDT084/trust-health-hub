import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-4">Afya Health</h3>
            <p className="text-sm">Your trusted partner in health and wellness. Providing compassionate care for our community.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link></li>
              <li><Link to="/doctors" className="hover:text-teal-600 dark:hover:text-teal-400">Find a Doctor</Link></li>
              <li><Link to="/services" className="hover:text-teal-600 dark:hover:text-teal-400">Services</Link></li>
              <li><Link to="/appointments" className="hover:text-teal-600 dark:hover:text-teal-400">Book Appointment</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><Mail className="w-4 h-4 mr-2 text-teal-600 dark:text-teal-400" /> contact@afyahealth.com</li>
              <li className="flex items-center"><Phone className="w-4 h-4 mr-2 text-teal-600 dark:text-teal-400" /> +254 712 345 678</li>
              <li className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-teal-600 dark:text-teal-400" /> 123 Afya Lane, Nairobi, Kenya</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Emergency</h3>
            <p className="text-sm font-bold text-red-600 dark:text-red-500">For emergencies, please call:</p>
            <p className="text-lg font-bold text-red-600 dark:text-red-500">+254 700 111 222</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm">
          <p>&copy; 2025 Afya Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;