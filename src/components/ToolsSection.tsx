import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Image, ArrowRightLeft, Scissors, Repeat, FileDown, Minimize, Layers, Edit, BookOpen, Check, Search } from 'lucide-react';

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
    // PDF tools
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
    // Image tools
    {
      icon: <Layers size={32} />,
      title: "Remove Background",
      description: "Remove background from images easily.",
      path: "/tool/remove-background",
      category: "Image"
    },
    {
      icon: <Minimize size={32} />,
      title: "Image Resizer",
      description: "Resize images to your desired dimensions.",
      path: "/tool/image-resizer",
      category: "Image"
    },
    {
      icon: <Repeat size={32} />,
      title: "Image Converter",
      description: "Convert images between different formats.",
      path: "/tool/image-converter",
      category: "Image"
    },
    {
      icon: <FileDown size={32} />,
      title: "Image Compressor",
      description: "Compress images to reduce file size.",
      path: "/tool/image-compressor",
      category: "Image"
    },
    // New Writing tools
    {
      icon: <Edit size={32} />,
      title: "AI Resume Writer",
      description: "Create professional resumes with AI assistance.",
      path: "/tool/resume-writer",
      category: "Writing"
    },
    {
      icon: <BookOpen size={32} />,
      title: "AI Essay Writer",
      description: "Generate essays on various topics with AI.",
      path: "/tool/essay-writer",
      category: "Writing"
    },
    {
      icon: <Check size={32} />,
      title: "Grammar Checker",
      description: "Improve your writing with grammar suggestions.",
      path: "/tool/grammar-checker",
      category: "Writing"
    },
    {
      icon: <Search size={32} />,
      title: "Plagiarism Detector",
      description: "Check your text for potential plagiarism.",
      path: "/tool/plagiarism-detector",
      category: "Writing"
    },
  ];

  const categories = ['All', 'PDF', 'Image', 'Writing', 'Convert'];

  const filteredTools = activeCategory === 'All'
    ? tools
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center" >
        <h2 className="text-4xl font-bold text-center mb-2">Our Tools</h2>
        <p className="text-md mb-8">Free resources that allow you to organize, create and save time on your work</p>
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`mx-2 px-4 py-2 rounded-md mb-2 ${
                activeCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTools.map((tool, index) => (
            <Link key={index} to={tool.path} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-blue-600 dark:text-blue-400 mb-4">{tool.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{tool.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;