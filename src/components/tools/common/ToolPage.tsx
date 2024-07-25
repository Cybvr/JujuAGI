import React from 'react';
import Breadcrumbs from '../../Breadcrumbs';
import OtherToolsSection from './OtherToolsSection';
import ToolNavigation from '../../ToolNavigation';

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
    <div className="bg-zinc-50 dark:bg-zinc-800 min-h-screen">
      <div className="flex p-4 md:p-8 lg:p-16 gap-8">
        {/* Tool Navigation Column */}
        <div className="flex-shrink-0 hidden md:block">
          <ToolNavigation />
        </div>
        {/* Main Content Column */}
        <div className="flex-1 w-full md:w-auto">
          <Breadcrumbs items={breadcrumbItems} />
          {/* Main tool component */}
          <div className="mt-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6 shadow-sm">
            <h1 className="text-xl md:text-2xl font-bold text-left mb-4 md:mb-6 text-zinc-400">{title}</h1>
            {toolComponent}
          </div>
          {/* How to section */}
          <div className="mt-4 md:mt-6">
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 p-4 md:p-6 rounded-lg shadow-sm">
              {instructions}
            </div>
          </div>
          {/* Other Tools section */}
          <div className="mt-4 md:mt-6">
            <OtherToolsSection category={category} currentToolPath={currentToolPath} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolPage;