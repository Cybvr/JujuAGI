import React from 'react';
import { CheckCircle } from 'lucide-react';

enum PlanType {
  Free = 'free',
  Premium = 'premium'
}

interface PlanDetails {
  title: string;
  price: string;
  features: string[];
}

const planDetails: Record<PlanType, PlanDetails> = {
  [PlanType.Free]: {
    title: "Free Plan",
    price: "$0/month",
    features: ['Basic access to tools', '5 conversions per day', 'Ad-supported']
  },
  [PlanType.Premium]: {
    title: "Premium Plan",
    price: "$9.99/month",
    features: ['Unlimited access to all tools', 'Unlimited conversions', 'Ad-free experience', 'Priority support']
  }
};

const Subscription: React.FC = () => {
  const currentPlan = PlanType.Free; // This should come from your user's data

  const renderPlanCard = (plan: PlanType) => {
    const details = planDetails[plan];
    return (
      <div className={`bg-white p-6 rounded-lg shadow-md border-2 ${currentPlan === plan ? 'border-blue-500' : 'border-gray-200'}`}>
        <h3 className="text-xl font-semibold mb-2">{details.title}</h3>
        <p className="text-2xl font-bold mb-4">{details.price}</p>
        <ul className="space-y-2 mb-6">
          {details.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={16} />
              {feature}
            </li>
          ))}
        </ul>
        {currentPlan === plan ? (
          <p className="text-blue-500 font-semibold">Current Plan</p>
        ) : (
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            {currentPlan === PlanType.Free ? 'Upgrade' : 'Downgrade'}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Subscription</h2>
      <p className="mb-6">View and manage your subscription details here.</p>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Current Plan: {planDetails[currentPlan].title}</h3>
        <p className="text-gray-600 mb-4">Your plan renews on: {currentPlan === PlanType.Free ? 'N/A' : 'June 1, 2024'}</p>
        <button className={`px-4 py-2 rounded ${currentPlan === PlanType.Free ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500 hover:bg-gray-600'} text-white`}>
          {currentPlan === PlanType.Free ? 'Upgrade to Premium' : 'Cancel Subscription'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {renderPlanCard(PlanType.Free)}
        {renderPlanCard(PlanType.Premium)}
      </div>
    </div>
  );
};

export default Subscription;