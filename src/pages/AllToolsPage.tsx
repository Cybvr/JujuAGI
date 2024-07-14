import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Image, ArrowRightLeft, Scissors } from 'lucide-react';

interface Tool {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
  category: string;
}

const AllToolsPage: React.FC = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    setActiveCategory(category || 'all');
    console.log('Active category:', category || 'all'); // Debug log
  }, [location.search]);

  const tools: Tool[] = [
    {
      icon: <Image size={32} />,
      title: "PDF to JPG",
      description: "Convert PDF pages to JPG images.",
      path: "/tool/pdf-to-jpg",
      category: "pdf"
    },
    {
      icon: <FileText size={32} />,
      title: "JPG to PDF",
      description: "Convert JPG images to a PDF file.",
      path: "/tool/jpg-to-pdf",
      category: "pdf"
    },
    {
      icon: <ArrowRightLeft size={32} />,
      title: "Merge PDF",
      description: "Combine multiple PDF files into one.",
      path: "/tool/merge-pdf",
      category: "pdf"
    },
    {
      icon: <Scissors size={32} />,
      title: "Split PDF",
      description: "Separate a PDF into multiple files.",
      path: "/tool/split-pdf",
      category: "pdf"
    },
    // Add more tools here for other categories
  ];

  const filteredTools = activeCategory === 'all'
    ? tools
    : tools.filter(tool => tool.category === activeCategory);

  console.log('Filtered tools:', filteredTools); // Debug log

  const categories = ['all', 'pdf', 'image', 'text', 'audio', 'convert'];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Tools</h1>
      <div className="flex justify-center mb-8">
        {categories.map(category => (
          <Link
            key={category}
            to={`/all-tools?category=${category}`}
            className={`mx-2 px-4 py-2 rounded-md ${
              activeCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTools.map((tool, index) => (
          <Link key={index} to={tool.path} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-blue-600 mb-4">{tool.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
            <p className="text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllToolsPage;