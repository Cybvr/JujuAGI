import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Image, ArrowRightLeft, Scissors } from 'lucide-react';

interface Tool {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
  category: string;
}

const ToolsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const tools: Tool[] = [
    {
      icon: <Image size={32} />,
      title: "PDF to JPG",
      description: "Convert PDF pages to JPG images.",
      path: "/tool/pdf-to-jpg",
      category: "PDF"
    },
    {
      icon: <FileText size={32} />,
      title: "JPG to PDF",
      description: "Convert JPG images to a PDF file.",
      path: "/tool/jpg-to-pdf",
      category: "PDF"
    },
    {
      icon: <ArrowRightLeft size={32} />,
      title: "Merge PDF",
      description: "Combine multiple PDF files into one.",
      path: "/tool/merge-pdf",
      category: "PDF"
    },
    {
      icon: <Scissors size={32} />,
      title: "Split PDF",
      description: "Separate a PDF into multiple files.",
      path: "/tool/split-pdf",
      category: "PDF"
    },
    // Add more tools for other categories here
  ];

  const categories = ['All', 'PDF', 'Image', 'Text', 'Audio', 'Convert'];

  const filteredTools = activeCategory === 'All'
    ? tools
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Tools</h2>

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
              {category}
            </button>
          ))}
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTools.map((tool, index) => (
            <Link key={index} to={tool.path} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-blue-600 mb-4">{tool.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;