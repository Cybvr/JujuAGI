import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import logo from '../logoblack.png';  // Adjust the path as necessary

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 pr-6">
            <img src={logo} alt='Logo' className="mb-2 mx-0 w-1/2 h-auto" />
            <p className="text-sm text-left">
              Simple tools for simple tasks.       </p>
          </div>
          <div className="w-full md:w-3/4 flex flex-wrap -mx-2">
            <div className="w-full md:w-1/4 mb-4 px-2">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul>
                <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                <li><Link to="/all-tools" className="hover:text-blue-400">All Tools</Link></li>
                <li><Link to="/pricing" className="hover:text-blue-400">Pricing</Link></li>
                <li><Link to="/faq" className="hover:text-blue-400">FAQs</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4 px-2">
              <h4 className="text-lg font-semibold mb-2">Tools</h4>
              <ul>
                <li><Link to="/tool/text-to-image" className="hover:text-blue-400">Text to Image</Link></li>
                <li><Link to="/tool/remove-background" className="hover:text-blue-400">Remove BG</Link></li>
                <li><Link to="/tool/word-to-pdf" className="hover:text-blue-400">Word to PDF</Link></li>
                {/* Add more tools here */}
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4 px-2">
              <h4 className="text-lg font-semibold mb-2">Legal</h4>
              <ul>
                <li><Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-blue-400">Terms of Service</Link></li>
                <li><Link to="/Legal" className="hover:text-blue-400">Legal</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4 px-2">
              <h4 className="text-lg font-semibold mb-2">Social</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com" className="hover:text-blue-400">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.twitter.com" className="hover:text-blue-400">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com" className="hover:text-blue-400">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com" className="hover:text-blue-400">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Juju. All rights reserved. Made with ❤️ for the people of the internet by <a href="http://visual.ng" className="underline font-bold">VisualHQ</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;