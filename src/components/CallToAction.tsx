// src/components/CallToAction.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-36 bg-gradient-to-r from-[#164fff] to-[#36c2ff] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-6xl font-bold mb-4">Try Juju for Free</h2>
        <p className="text-md mb-8">Start your 7-day free trial and get unlimited access to all Juju tools to generate, convert, compress and more.</p>
        <Link to="/signup" className="bg-white text-[#164fff] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;