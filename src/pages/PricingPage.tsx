import React from 'react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h1>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md w-full md:w-1/3 flex flex-col">
            <h2 className="text-2xl font-bold mb-2">Free</h2>
            <p className="text-5xl font-bold text-blue-600 mb-4">$0</p>
            <ul className="mb-6 space-y-2 text-gray-600 flex-grow">
              <li>✅ Access to basic tools</li>
              <li>✅ Ad-supported</li>
              <li>❌ Premium features</li>
            </ul>
            <Link to="/signup" className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300 text-center">
              Get Started
            </Link>
          </div>
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md w-full md:w-1/3 flex flex-col">
            <h2 className="text-2xl font-bold mb-2">Lifetime Access</h2>
            <p className="text-5xl font-bold mb-4">$20</p>
            <ul className="mb-6 space-y-2 flex-grow">
              <li>✅ Access to all tools</li>
              <li>✅ Ad-free experience</li>
              <li>✅ Premium support</li>
            </ul>
            <Link to="/signup" className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition duration-300 text-center">
              Upgrade Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;