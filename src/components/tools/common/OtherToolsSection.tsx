import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Image, ArrowRightLeft, Scissors, Edit, Check, Layers, Minimize, Repeat, FileDown, FileSpreadsheet, FileJson } from 'lucide-react';

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
  'image': [
    { icon: <Layers size={24} />, title: 'Remove Background', description: 'Remove background from images easily.', path: '/tool/remove-background' },
    { icon: <Minimize size={24} />, title: 'Image Resizer', description: 'Resize images to your desired dimensions.', path: '/tool/image-resizer' },
    { icon: <Repeat size={24} />, title: 'Image Converter', description: 'Convert images between different formats.', path: '/tool/image-converter' },
    { icon: <FileDown size={24} />, title: 'Image Compressor', description: 'Compress images to reduce file size.', path: '/tool/image-compressor' },
  ],
  'writing': [
    { icon: <Edit size={24} />, title: 'Resume Writer', description: 'Create professional resumes with AI assistance.', path: '/tool/resume-writer' },
    { icon: <Edit size={24} />, title: 'Essay Writer', description: 'Generate essays on various topics with AI.', path: '/tool/essay-writer' },
    { icon: <Check size={24} />, title: 'Grammar Checker', description: 'Improve your writing with grammar suggestions.', path: '/tool/grammar-checker' },
    { icon: <FileText size={24} />, title: 'Plagiarism Detector', description: 'Check your text for potential plagiarism.', path: '/tool/plagiarism-detector' },
  ],
  'convert': [
    { icon: <FileSpreadsheet size={24} />, title: 'Excel to PDF', description: 'Convert Excel spreadsheets to PDF documents.', path: '/tool/excel-to-pdf' },
    { icon: <FileSpreadsheet size={24} />, title: 'CSV to Excel', description: 'Convert CSV files to Excel spreadsheets.', path: '/tool/csv-to-excel' },
    { icon: <FileJson size={24} />, title: 'XML to JSON', description: 'Convert XML files to JSON format.', path: '/tool/xml-to-json' },
    { icon: <FileText size={24} />, title: 'XML to CSV', description: 'Convert XML files to CSV format.', path: '/tool/xml-to-csv' },
  ],
};

interface OtherToolsSectionProps {
  category: string;
  currentToolPath: string;
}

const OtherToolsSection: React.FC<OtherToolsSectionProps> = ({ category, currentToolPath }) => {
  const tools = toolsByCategory[category] || [];
  const otherTools = tools.filter(tool => tool.path !== currentToolPath).slice(0, 4);

  if (otherTools.length === 0) {
    return null;  // Don't render anything if there are no other tools
  }

  return (
    <div className="mt-12">
      <h2 className="text-1xl font-bold mb-8">Other {category.toLowerCase()} Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {otherTools.map((tool, index) => (
          <Link key={index} to={tool.path} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-indigo-500 mb-4 flex justify-left">{tool.icon}</div>
            <h3 className="font-semibold text-left mb-2">{tool.title}</h3>
            <p className="text-sm text-gray-600 text-left">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OtherToolsSection;