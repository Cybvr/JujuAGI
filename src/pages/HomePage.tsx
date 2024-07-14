import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import ToolsSection from '../components/ToolsSection';
import WhyChooseJuju from '../components/WhyChooseJuju';
import CallToAction from '../components/CallToAction';
import InstallGuide from '../components/InstallGuide';
import PricingPlans from '../components/PricingPlans';
import TestimonialSection from '../components/TestimonialSection';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What is Juju?",
      answer: "Juju is an all-in-one platform offering various file conversion and editing tools, including AI writing assistance, plagiarism checking, and OCR capabilities."
    },
    {
      question: "Is Juju free to use?",
      answer: "Juju offers both free and premium plans. The free plan provides access to basic features, while premium plans unlock additional tools and benefits."
    },
    // ... (add the rest of your FAQs here)
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-md font-bold text-center mb-12 text-gray-800 dark:text-gray-50">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-5 font-medium text-left text-gray-700 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#164fff] hover:bg-gray-50"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="flex-shrink-0 w-5 h-5 ml-2 text-[#164fff]" />
                ) : (
                  <ChevronDown className="flex-shrink-0 w-5 h-5 ml-2 text-[#164fff]" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-5 border border-t-0 border-gray-200 bg-white rounded-b-lg">
                  <p className="mb-2 text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-800 text-black dark:text-white py-24 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Meet your sidekick</h1>
          <p className="text-xl mb-8">A Collection of simple tools for various tasks</p>
          <div className="mb-8 relative">
            <div className="flex items-center justify-center">
              <input 
                type="search" 
                placeholder="Search tools" 
                className="px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 w-full md:w-1/2 lg:w-1/3 bg-white dark:bg-gray-700 text-black dark:text-white"
              />
              <button 
                className="bg-blue-600 text-white px-3 py-2 rounded-r-md hover:bg-blue-700 transition duration-300"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>
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
      <section id="pricing" className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Pricing</h2>
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