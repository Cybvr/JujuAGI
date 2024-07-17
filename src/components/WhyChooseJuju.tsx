import React from 'react';
import { Zap, Shield, Clock, Globe, Sparkles, RefreshCw } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2 text-zinc-50">{title}</h3>
    <p className="text-zinc-300">{description}</p>
  </div>
);

const WhyChooseJuju: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Process your files and documents at incredible speeds."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Secure & Private",
      description: "Your data is encrypted and automatically deleted after processing."
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: "Time-Saving",
      description: "Automate repetitive tasks and focus on what matters most."
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-500" />,
      title: "Versatile Tools",
      description: "A wide range of tools to cover all your content needs."
    },
    {
      icon: <Sparkles className="w-12 h-12 text-pink-500" />,
      title: "AI-Powered",
      description: "Leverage cutting-edge AI for smarter content creation."
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-indigo-500" />,
      title: "Constant Updates",
      description: "We're always improving and adding new features."
    }
  ];

  return (
    <section className="py-12 px-8 bg-white dark:bg-zinc-800">
      <div className="container mx-auto px-12 py-12 bg-black dark:bg-zinc-900 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-white  mb-4">Why Choose Juju?</h2>
        <p className="text-mb text-center text-zinc-400 mb-8">A handy toolbox for your digital life</p>
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