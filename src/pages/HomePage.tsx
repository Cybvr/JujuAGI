import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import ToolsSection from '../components/ToolsSection';
import WhyChooseJuju from '../components/WhyChooseJuju';
import CallToAction from '../components/CallToAction';
import InstallGuide from '../components/InstallGuide';
import PricingPlans from '../components/PricingPlans';
import TestimonialSection from '../components/TestimonialSection';
import FAQSection from '../components/FAQSection';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="bg-white dark:bg-zinc-900 min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 text-black dark:text-white py-24 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold mb-4">Meet your sidekick</h1>
          <p className="text-lg mb-12 text-zinc-600 dark:text-zinc-300">A Collection of simple tools for simple tasks</p>
          <div className="mb-8 relative">
            <form onSubmit={handleSearch} className="flex items-center justify-center">
              <input 
                type="search" 
                placeholder="Search tools" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-6 py-4 rounded-l-md w-full md:w-2/3 lg:w-1/2 text-xl bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none shadow-md"
              />
              <button 
                type="submit"
                className="bg-blue-600 text-white px-6 py-4 rounded-r-md hover:bg-blue-700 transition duration-300 shadow-md"
                aria-label="Search"
              >
                <Search size={28} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      <ToolsSection />
      <WhyChooseJuju />
      <InstallGuide />
      <section id="pricing" className="bg-zinc-50 dark:bg-zinc-900 px-4 py-12">
        <div className="container mx-auto px-4 py-16 text-center ">
          <h2 className="text-4xl font-bold text-center mb-2 text-zinc-800 dark:text-white">Pricing</h2>
          <p className="text-md mb-8  text-zinc-400">Keeping it simple for your wallet</p>
          <PricingPlans />
        </div>
      </section>
      <TestimonialSection />
      <FAQSection />
      <CallToAction />
    </div>
  );
};

export default HomePage;