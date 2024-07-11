// src/pages/HomePage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Video, Image, Zap, Lock, Download, ChevronDown, ChevronUp } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <div className="text-purple-600 dark:text-purple-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Juju?",
      answer: "Juju is an all-in-one platform offering various file conversion and manipulation tools, including AI writing assistance, plagiarism checking, and OCR capabilities."
    },
    {
      question: "Is Juju free to use?",
      answer: "Juju offers both free and premium plans. The free plan provides access to basic features, while premium plans unlock additional tools and benefits."
    },
    {
      question: "How does the AI Writing Assistant work?",
      answer: "Our AI Writing Assistant uses advanced natural language processing to help you generate, edit, and improve your content across various formats and styles."
    },
    {
      question: "Can I use Juju for academic purposes?",
      answer: "Yes, Juju's tools, especially the Plagiarism Checker, are designed to assist students and researchers in maintaining academic integrity and improving their work."
    },
    {
      question: "What file formats does Juju support?",
      answer: "Juju supports a wide range of file formats including PDFs, images, audio files, and various document types. Check our tools section for specific format support."
    },
    {
      question: "How accurate is the Plagiarism Checker?",
      answer: "Our Plagiarism Checker uses extensive databases and advanced algorithms to provide highly accurate results, helping you ensure the originality of your content."
    },
    {
      question: "Is my data safe with Juju?",
      answer: "We take data privacy seriously. All uploaded files are encrypted and automatically deleted after processing. We never store or share your personal data."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to premium features until the end of your current billing period."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="flex-shrink-0 w-5 h-5 ml-2" />
                ) : (
                  <ChevronDown className="flex-shrink-0 w-5 h-5 ml-2" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">{faq.answer}</p>
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
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Meet your sidekick</h1>
          <p className="text-xl mb-8">The Ultimate Hub of Tools, Add-ons & Assets for Every Creator</p>
          <div className="space-x-4">
            <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">Get Started</button>
            <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-purple-600">Join Waitlist</button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Tools</h2>
          <div className="flex justify-center mb-8">
            <button className="mx-2 px-4 py-2 bg-purple-600 text-white rounded-full">All</button>
            <button className="mx-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-full">Image</button>
            <button className="mx-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-full">Document</button>
            <button className="mx-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-full">Text</button>
            <button className="mx-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-full">Audio</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Image size={32} />}
              title="Image to PDF" 
              description="Convert images into organized PDF documents for easy sharing and archiving."
            />
            <FeatureCard 
              icon={<FileText size={32} />}
              title="Document Merger" 
              description="Combine multiple documents into a single file effortlessly."
            />
            <FeatureCard 
              icon={<FileText size={32} />}
              title="Text Translator" 
              description="Translate text between multiple languages quickly and accurately."
            />
            <FeatureCard 
              icon={<Video size={32} />}
              title="Audio Trimmer" 
              description="Cut and trim audio files with precision for your perfect sound."
            />
          </div>
          <div className="text-center mt-12">
            <Link to="/all-tools" className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700">View All Tools</Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/3">
              <h3 className="text-2xl font-bold mb-4">Free</h3>
              <ul className="mb-6 space-y-2">
                <li>✅ Access to all tools</li>
                <li>✅ Ad-supported</li>
                <li>❌ Captchas required</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700">Get Started</button>
            </div>
            <div className="bg-purple-600 text-white p-8 rounded-lg shadow-md w-full md:w-1/3">
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <ul className="mb-6 space-y-2">
                <li>✅ Access to all tools</li>
                <li>✅ Ad-free experience</li>
                <li>✅ No captchas</li>
              </ul>
              <button className="w-full bg-white text-purple-600 py-2 rounded-full hover:bg-gray-100">Upgrade Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

    </div>
  );
};

export default HomePage;