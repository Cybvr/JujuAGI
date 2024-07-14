import React from 'react';
import { Zap, Shield, Clock, Globe, Sparkles, RefreshCw } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center ">
    <div className="text-[#164fff] mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyChooseJuju: React.FC = () => {
  const features = [
    {
      icon: <Zap size={32} />,
      title: "Lightning Fast",
      description: "Process your files and documents at incredible speeds."
    },
    {
      icon: <Shield size={32} />,
      title: "Secure & Private",
      description: "Your data is encrypted and automatically deleted after processing."
    },
    {
      icon: <Clock size={32} />,
      title: "Time-Saving",
      description: "Automate repetitive tasks and focus on what matters most."
    },
    {
      icon: <Globe size={32} />,
      title: "Versatile Tools",
      description: "A wide range of tools to cover all your content needs."
    },
    {
      icon: <Sparkles size={32} />,
      title: "AI-Powered",
      description: "Leverage cutting-edge AI for smarter content creation."
    },
    {
      icon: <RefreshCw size={32} />,
      title: "Constant Updates",
      description: "We're always improving and adding new features."
    }
  ];

  return (
    <section className="px-4 py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto bg-gray-100 dark:bg-gray-900 rounded-lg px-4 py-16 ">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Juju?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseJuju;