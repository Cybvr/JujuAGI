import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Juju?",
      answer: "Juju is an all-in-one platform offering various file conversion and editing tools, including AI writing assistance, plagiarism checking, and OCR capabilities."
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
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
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

export default FAQSection;