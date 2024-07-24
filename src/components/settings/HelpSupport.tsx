import React from 'react';
import { HelpCircle, Mail, MessageCircle } from 'lucide-react';

const HelpSupport: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Help and Support</h2>
      <p className="mb-6">Need assistance? Find help and support resources here.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SupportCard 
          icon={<HelpCircle size={24} />} 
          title="FAQs" 
          description="Find answers to common questions"
          link="/faqs"
        />
        <SupportCard 
          icon={<Mail size={24} />} 
          title="Email Support" 
          description="Contact our support team"
          link="mailto:support@example.com"
        />
        <SupportCard 
          icon={<MessageCircle size={24} />} 
          title="Live Chat" 
          description="Chat with our support agents"
          link="#"
          onClick={() => console.log('Open live chat')}
        />
      </div>
    </div>
  );
};

const SupportCard: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string; onClick?: () => void }> = 
  ({ icon, title, description, link, onClick }) => (
  <a href={link} onClick={onClick} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="text-indigo-500 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-zinc-600">{description}</p>
  </a>
);

export default HelpSupport;