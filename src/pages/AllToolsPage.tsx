import React from 'react';
import { Link } from 'react-router-dom';
import { tools } from '../toolsData';
import { FileText, Image, RefreshCw } from 'lucide-react';

const AllToolsPage: React.FC = () => {
  const icons = {
    'text': <FileText size={24} />,
    'images': <Image size={24} />,
    'convert': <RefreshCw size={24} />
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">All Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map(tool => (
          <Link 
            key={tool.id} 
            to={`/tool/${tool.id}`} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <div className="text-blue-500 mb-4">{icons[tool.category]}</div>
            <h2 className="text-xl font-semibold mb-2">{tool.title}</h2>
            <p className="text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllToolsPage;