import React from 'react';
import OtherToolsSection from './OtherToolsSection';

interface ToolPageProps {
  title: string;
  toolComponent: React.ReactNode;
  instructions: React.ReactNode;
  category: string;
}

const ToolPage: React.FC<ToolPageProps> = ({ title, toolComponent, instructions, category }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">{title}</h1>

      {/* Main tool component */}
      {toolComponent}

      {/* How to section */}
      <div className="mt-16 mb-12">
        <h2 className="text-3xl font-bold mb-8">How to {title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            {instructions}
          </div>
          <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-400">
              [Placeholder for step-by-step image]
            </div>
          </div>
        </div>
      </div>

      {/* Other Tools section */}
      <OtherToolsSection category={category} />
    </div>
  );
};

export default ToolPage;