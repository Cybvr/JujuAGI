import React, { useState } from 'react';
import { Crown } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'weekly' | 'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'AI Writing Assistant',
      price: 7.99,
      tools: ['Paraphrasing Tool', 'Essay Writer', 'Story Generator', 'Article Rewriter', 'Text Summarizer'],
      benefits: ['300k AI Words', 'No Ads', '2X Faster Experience', 'Chat Support (24/7)'],
    },
    {
      name: 'Plagiarism Checker',
      price: 7.99,
      features: ['3000 Words Per Submission', 'Deep Search & Proquest', 'Support Multiple Languages'],
      benefits: ['Check 100 Pages Plagiarism', 'No Ads', '2X Faster Experience', 'Chat Support (24/7)'],
    },
    {
      name: 'All in One',
      price: 12.99,
      discount: 54,
      tools: ['AI Writing Assistant', 'Plagiarism Checker', 'OCR Tools'],
      benefits: ['360k AI Words', 'Check Plagiarism 100 Pages', '10k Images', 'No Ads', '2X Faster Experience', 'Chat Support (24/7)'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Plans & Pricing</h1>
      <p className="text-xl text-center mb-8">Choose your plans. get with awesome discounts.</p>

      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setBillingPeriod('weekly')}
            className={`px-4 py-2 text-sm font-medium border ${
              billingPeriod === 'weekly' ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            Weekly
          </button>
          <button
            type="button"
            onClick={() => setBillingPeriod('monthly')}
            className={`px-4 py-2 text-sm font-medium border ${
              billingPeriod === 'monthly' ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingPeriod('yearly')}
            className={`px-4 py-2 text-sm font-medium border ${
              billingPeriod === 'yearly' ? 'bg-black text-white' : 'bg-white text-black'
            } relative`}
          >
            Yearly
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              SAVE 2 MONTHS
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className={`border rounded-lg p-6 ${index === 2 ? 'bg-navy-blue text-white' : ''}`}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              {plan.name} {index === 2 && <Crown className="ml-2" size={24} />}
            </h2>
            <div className="text-3xl font-bold mb-4">
              ${plan.price}
              <span className="text-sm font-normal">/{billingPeriod === 'yearly' ? 'year' : billingPeriod}</span>
              {plan.discount && (
                <span className="text-sm font-normal text-green-500 ml-2">Save {plan.discount}%</span>
              )}
            </div>
            <button className="w-full bg-yellow-400 text-black font-bold py-2 rounded-md mb-4">
              Unlock It
            </button>
            <h3 className="font-semibold mb-2">Tool</h3>
            <ul className="list-disc list-inside mb-4">
              {(plan.tools || [plan.name]).map((tool, i) => (
                <li key={i}>{tool}</li>
              ))}
            </ul>
            {plan.features && (
              <>
                <h3 className="font-semibold mb-2">Features</h3>
                <ul className="list-disc list-inside mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
            <h3 className="font-semibold mb-2">Benefits</h3>
            <ul className="list-disc list-inside">
              {plan.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">What we offer in Trio Bundle</h2>
        <p className="mb-4">
          Simplify your subscriptions with our Trio Bundle, combining three plans into one seamless package to fulfill
          all your needs.
        </p>
      </div>
    </div>
  );
};

export default PricingPage;