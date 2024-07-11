// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Juju</h3>
            <p className="text-sm">Your all-in-one tool for file conversion and manipulation.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
              <li><Link to="/all-tools" className="hover:text-purple-400">All Tools</Link></li>
              <li><Link to="/pricing" className="hover:text-purple-400">Pricing</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Legal</h4>
            <ul>
              <li><Link to="/privacy" className="hover:text-purple-400">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-purple-400">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-purple-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-purple-400"><i className="fab fa-instagram"></i></a>
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