import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Image, ArrowRightLeft, Scissors } from 'lucide-react';

interface Tool {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
}

const toolsByCategory: Record<string, Tool[]> = {
  'pdf': [
    { icon: <Image size={24} />, title: 'PDF to JPG', description: 'Convert PDF pages to JPG images.', path: '/tool/pdf-to-jpg' },
    { icon: <FileText size={24} />, title: 'JPG to PDF', description: 'Convert JPG images to a PDF file.', path: '/tool/jpg-to-pdf' },
    { icon: <ArrowRightLeft size={24} />, title: 'Merge PDF', description: 'Combine multiple PDF files into one.', path: '/tool/merge-pdf' },
    { icon: <Scissors size={24} />, title: 'Split PDF', description: 'Separate a PDF into multiple files.', path: '/tool/split-pdf' },
  ],
  // Add other categories here
};

interface OtherToolsSectionProps {
  category: string;
}

const OtherToolsSection: React.FC<OtherToolsSectionProps> = ({ category }) => {
  const tools = toolsByCategory[category] || [];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-8">Other {category.toLowerCase()} Tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <Link key={index} to={tool.path} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-blue-500 mb-4 flex justify-center">{tool.icon}</div>
            <h3 className="font-semibold text-center mb-2">{tool.title}</h3>
            <p className="text-sm text-gray-600 text-center">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OtherToolsSection;