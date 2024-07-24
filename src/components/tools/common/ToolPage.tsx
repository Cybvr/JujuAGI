import React from 'react';
import Breadcrumbs from '../../Breadcrumbs';
import OtherToolsSection from './OtherToolsSection';

interface ToolPageProps {
  title: string;
  toolComponent: React.ReactNode;
  instructions: React.ReactNode;
  category: string;
}

const ToolPage: React.FC<ToolPageProps> = ({ title, toolComponent, instructions, category }) => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Tools', path: '/all-tools' },
    { label: category.charAt(0).toUpperCase() + category.slice(1), path: `/category/${category}` },
    { label: title, path: `/tool/${title.toLowerCase().replace(/\s+/g, '-')}` },
  ];
  const currentToolPath = `/tool/${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="bg-zinc-50 dark:bg-zinc-800  min-h-screen py-8 pb-40">
      <div className="max-w-[1000px] mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Main tool component */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-left mb-8 tex-zinc-400">{title}</h1>
          {toolComponent}
        </div>
        {/* How to section */}
        <div className="mt-16 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700  p-6 rounded-lg shadow-sm">
            {instructions}
          </div>
        </div>
        {/* Other Tools section */}
        <OtherToolsSection category={category} currentToolPath={currentToolPath} />
      </div>
    </div>
  );
};

export default ToolPage;