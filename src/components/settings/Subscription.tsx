import React, { useState, useEffect } from 'react';
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

interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending';
}

const planDetails: Record<PlanType, PlanDetails> = {
  [PlanType.Free]: {
    title: "Free Plan",
    price: "$0/month",
    features: ['Basic access to tools', '5 conversions per day', 'Ad-supported']
  },
  [PlanType.Premium]: {
    title: "Pro Plan",
    price: "$10/month",
    features: ['Unlimited access to all tools', 'Unlimited conversions', 'Ad-free experience', 'Priority support']
  }
};

declare global {
  interface Window {
    FlutterwaveCheckout: any;
  }
}

const Subscription: React.FC = () => {
  const [currentPlan, setCurrentPlan] = useState<PlanType>(PlanType.Free);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch current plan
        const planResponse = await fetch('/api/user/current-plan');
        const planData = await planResponse.json();
        setCurrentPlan(planData.plan);

        // Fetch invoices
        const invoiceResponse = await fetch('/api/user/invoices');
        const invoiceData = await invoiceResponse.json();
        setInvoices(invoiceData);

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handlePayment = () => {
    window.FlutterwaveCheckout({
      public_key: "YOUR_FLUTTERWAVE_PUBLIC_KEY",
      tx_ref: Date.now().toString(),
      amount: 10,
      currency: "USD",
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email: "user@example.com",
        name: "John Doe",
      },
      customizations: {
        title: "Juju Pro Subscription",
        description: "Monthly subscription for Juju Pro",
        logo: "https://yourlogo.com/logo.png",
      },
      callback: async function(response: any) {
        console.log("Payment successful", response);
        // Handle subscription activation here
        try {
          const upgradeResponse = await fetch('/api/upgrade-subscription', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ transactionId: response.transaction_id }),
          });
          if (upgradeResponse.ok) {
            setCurrentPlan(PlanType.Premium);
          }
        } catch (error) {
          console.error('Error upgrading subscription:', error);
        }
      },
      onclose: function() {
        console.log("Payment modal closed");
      }
    });
  };

  const handleCancelSubscription = async () => {
    try {
      const response = await fetch('/api/cancel-subscription', { method: 'POST' });
      if (response.ok) {
        setCurrentPlan(PlanType.Free);
      }
    } catch (error) {
      console.error('Error cancelling subscription:', error);
    }
  };

  const renderPlanCard = (plan: PlanType) => {
    const details = planDetails[plan];
    return (
      <div className={`bg-white p-6 rounded-lg shadow-md border-2 ${currentPlan === plan ? 'border-indigo-500' : 'border-zinc-200'}`}>
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
          <p className="text-indigo-500 font-semibold">Current Plan</p>
        ) : (
          <button 
            onClick={handlePayment}
            className="w-full bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
            disabled={currentPlan === PlanType.Premium}
          >
            {currentPlan === PlanType.Free ? 'Upgrade' : 'Downgrade'}
          </button>
        )}
      </div>
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Subscription</h2>
      <p className="mb-6">View and manage your subscription details here.</p>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Current Plan: {planDetails[currentPlan].title}</h3>
        <p className="text-zinc-600 mb-4">Your plan renews on: {currentPlan === PlanType.Free ? 'N/A' : 'June 1, 2024'}</p>
        <button 
          onClick={currentPlan === PlanType.Free ? handlePayment : handleCancelSubscription}
          className={`px-4 py-2 rounded ${currentPlan === PlanType.Free ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-zinc-500 hover:bg-zinc-600'} text-white`}
        >
          {currentPlan === PlanType.Free ? 'Upgrade to Pro' : 'Cancel Subscription'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {renderPlanCard(PlanType.Free)}
        {renderPlanCard(PlanType.Premium)}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Invoices</h3>
        {invoices.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Date</th>
                <th className="text-left">Amount</th>
                <th className="text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td>{invoice.date}</td>
                  <td>${invoice.amount.toFixed(2)}</td>
                  <td>{invoice.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No invoices available.</p>
        )}
      </div>
    </div>
  );
};

export default Subscription;