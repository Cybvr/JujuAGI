import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { tools } from '../toolsData';
import { FileText, Image, RefreshCw } from 'lucide-react'; // Import icons

const ToolCard: React.FC<{ tool: typeof tools[0] }> = ({ tool }) => {
  const icons = {
    'text': <FileText size={24} />,
    'images': <Image size={24} />,
    'convert': <RefreshCw size={24} />
  };

  return (
    <Link to={`/tool/${tool.id}`} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
      <div className="text-blue-500 mb-4">{icons[tool.category]}</div>
      <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
      <p className="text-gray-600">{tool.description}</p>
    </Link>
  );
};

const ToolsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const categories = ['all', ...new Set(tools.map(tool => tool.category))];

  const filteredTools = activeCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Tools</h2>

        {/* Category filter */}
        <div className="flex justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`mx-2 px-4 py-2 rounded-md ${
                activeCategory === category 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid of tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredTools.slice(0, 6).map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {/* Link to all tools */}
        <div className="text-center">
          <Link 
            to="/all-tools" 
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
          >
            View All Tools
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;