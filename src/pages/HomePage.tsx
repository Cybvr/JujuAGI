import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import ToolsSection from '../components/ToolsSection';
import WhyChooseJuju from '../components/WhyChooseJuju';
import CallToAction from '../components/CallToAction';
import InstallGuide from '../components/InstallGuide';
import PricingPlans from '../components/PricingPlans';
import TestimonialSection from '../components/TestimonialSection';
import FAQSection from '../components/FAQSection'; // Assuming FAQSection is correctly imported from the correct file path

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-800 text-black dark:text-white py-24 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Meet your sidekick</h1>
          <p className="text-md mb-8">A Collection of simple tools for simple tasks</p>
          <div className="mb-8 relative">
            <form onSubmit={handleSearch} className="flex items-center justify-center">
              <input 
                type="search" 
                placeholder="Search tools" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 w-full md:w-1/2 lg:w-1/3 bg-white dark:bg-gray-700 text-black dark:text-white"
              />
              <button 
                type="submit"
                className="bg-blue-600 text-white px-3 py-2 rounded-r-md hover:bg-blue-700 transition duration-300"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 mb-4">
            <h2 className="text-sm font-semibold">Recent Tools:</h2>
            <div className="flex flex-wrap justify-center gap-2">
              <div className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-sm font-semibold px-4 py-1 rounded-full">PDF to JPG</div>
              <div className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-sm font-semibold px-4 py-1 rounded-full">Video to Audio</div>
              <div className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-sm font-semibold px-4 py-1 rounded-full">Text to Speech</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <ToolsSection />

      {/* Why Choose Juju Section */}
      <WhyChooseJuju />

      {/* Your existing sections */}
      <InstallGuide />

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 dark:bg-gray-900 px-4 py-12">
        <div className="container mx-auto px-4 py-16 text-center ">
          <h2 className="text-4xl font-bold text-center mb-2 text-gray-800 dark:text-white">Pricing</h2>
          <p className="text-md mb-8">Keeping it simple for your wallet</p>
          <PricingPlans />
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Call-to-Action Section */}
      <CallToAction />
    </div>
  );
};

export default HomePage;
