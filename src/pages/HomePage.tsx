import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import ToolsSection from '../components/ToolsSection';
import WhyChooseJuju from '../components/WhyChooseJuju';
import CallToAction from '../components/CallToAction';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What is Juju?",
      answer: "Juju is an all-in-one platform offering various file conversion and manipulation tools, including AI writing assistance, plagiarism checking, and OCR capabilities."
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
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
    <div className="bg-white min-h-screen">
      {/* Hero Section */}

      <section className="bg-gray-50 text-black py-36">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-4">Meet your sidekick</h1>
          <p className="text-xl mb-8">The Ultimate Hub of Tools, Add-ons & Assets for Every Creator</p>
          <div className="mb-8 relative">
            <div className="flex items-center justify-center">
              <input 
                type="search" 
                placeholder="Search tools" 
                className="px-4 py-2 rounded-l-md border border-gray-300 w-full md:w-1/2 lg:w-1/3"
              />
              <button 
                className="bg-blue-600 text-white px-3 py-2 rounded-r-md hover:bg-blue-700 transition duration-300"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 -mt-4 mb-4">
            <h2 className="text-sm font-semibold">Recent Tools:</h2>
            <div className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-4 py-1 rounded-full">PDF to JPG</div>
            <div className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-4 py-1 rounded-full">Video to Audio</div>
            <div className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-4 py-1 rounded-full">Text to Speech</div>
          </div>
        </div>
      </section>


      {/* Tools Section */}
      <ToolsSection />

      {/* Why Choose Juju Section */}
      <WhyChooseJuju />

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold text-center mb-12 text-gray-800">Pricing</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="bg-white p-8 rounded-md shadow-sm border border-gray-200 w-full md:w-1/3">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Free</h3>
              <ul className="mb-6 space-y-2 text-gray-600">
                <li>✅ Access to all tools</li>
                <li>✅ Ad-supported</li>
                <li>❌ Captchas required</li>
              </ul>
              <button className="w-full bg-[#164fff] text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Get Started</button>
            </div>
            <div className="bg-[#164fff] text-white p-8 rounded-md shadow-md w-full md:w-1/3">
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <ul className="mb-6 space-y-2">
                <li>✅ Access to all tools</li>
                <li>✅ Ad-free experience</li>
                <li>✅ No captchas</li>
              </ul>
              <button className="w-full bg-white text-[#164fff] py-2 rounded-md hover:bg-gray-100 transition duration-300">Upgrade Now</button>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Call-to-Action Section */}
      <CallToAction />

      

    </div>
  );
};

export default HomePage;