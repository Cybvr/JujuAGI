import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const PricingPlans: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      features: [
        { name: 'Access to basic tools', included: true },
        { name: 'Limited file size (up to 10MB)', included: true },
        { name: '5 conversions per day', included: true },
        { name: 'Ad-supported experience', included: true },
        { name: 'Standard support', included: true },
        { name: 'Access to premium tools', included: false },
        { name: 'Ad-free experience', included: false },
        { name: 'Unlimited conversions', included: false },
        { name: 'Priority support', included: false },
      ],
      ctaText: 'Get Started',
      ctaLink: '/signup',
    },
    {
      name: 'Lifetime Access',
      price: '$20',
      features: [
        { name: 'Access to all tools (basic & premium)', included: true },
        { name: 'Increased file size limit (up to 50MB)', included: true },
        { name: 'Unlimited conversions', included: true },
        { name: 'Ad-free experience', included: true },
        { name: 'Priority support', included: true },
        { name: 'Early access to new features', included: true },
      ],
      ctaText: 'Upgrade Now',
      ctaLink: '/signup',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-md w-full md:w-1/2 flex flex-col ${
            plan.name === 'Lifetime Access' ? 'border-2 border-blue-500' : ''
          }`}
        >
          <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
          <p className="text-4xl font-bold text-blue-600 mb-4">{plan.price}</p>
          <ul className="mb-6 space-y-2 text-zinc-600 dark:text-zinc-300 flex-grow">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                {feature.included ? (
                  <Check className="text-green-500 mr-2" size={20} />
                ) : (
                  <X className="text-red-500 mr-2" size={20} />
                )}
                {feature.name}
              </li>
            ))}
          </ul>
          <Link
            to={plan.ctaLink}
            className={`${
              plan.name === 'Lifetime Access'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-zinc-200 text-zinc-800 hover:bg-zinc-300'
            } px-6 py-2 rounded-md font-semibold transition duration-300 text-center`}
          >
            {plan.ctaText}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;