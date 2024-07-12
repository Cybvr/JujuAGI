import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logoblack.png';  // Adjust the path as necessary

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 pr-6">
            <img src={logo} alt='Logo' className="mb-2 mx-0 w-1/2 h-auto" />
            <p className="text-sm text-left">
              Juju is a marketing sidekick platform that empowers entrepreneurs, creators, and small businesses with tools for growth.
            </p>
          </div>

          <div className="w-full md:w-3/4 flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 mb-6 md:mb-0 px-2">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul>
                <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                <li><Link to="/all-tools" className="hover:text-blue-400">All Tools</Link></li>
                <li><Link to="/pricing" className="hover:text-blue-400">Pricing</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0 px-2">
              <h4 className="text-lg font-semibold mb-2">Tools</h4>
              <ul>
                <li><Link to="/tool/text-to-image" className="hover:text-blue-400">Text to Image</Link></li>
                {/* Add more tools here */}
              </ul>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0 px-2">
              <h4 className="text-lg font-semibold mb-2">Legal</h4>
              <ul>
                <li><Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-blue-400">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Juju. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
