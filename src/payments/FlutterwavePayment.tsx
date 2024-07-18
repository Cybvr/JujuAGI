import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

interface FlutterwavePaymentProps {
  amount: number;
  customerEmail: string;
  customerName: string;
  customerPhone: string;
  onSuccess: (transaction: any) => void;
  onFailure: (error: any) => void;
}

const FlutterwavePayment: React.FC<FlutterwavePaymentProps> = ({
  amount,
  customerEmail,
  customerName,
  customerPhone,
  onSuccess,
  onFailure
}) => {
  const config = {
    public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY as string,
    tx_ref: Date.now().toString(),
    amount: amount,
    currency: 'USD',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: customerEmail,
      phone_number: customerPhone,
      name: customerName,
    },
    customizations: {
      title: 'Juju AI Lifetime Access',
      description: 'Payment for Juju AI Lifetime Access',
      logo: 'https://your-logo-url.png',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handlePayment = () => {
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal();
        if (response.status === "successful") {
          onSuccess(response);
        } else {
          onFailure(response);
        }
      },
      onClose: () => {},
    });
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
    >
      Pay ${amount} for Lifetime Access
    </button>
  );
};

export default FlutterwavePayment;