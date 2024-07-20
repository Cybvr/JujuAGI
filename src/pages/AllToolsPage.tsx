import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FileText, Hash, Type, Image, ArrowRightLeft, Scissors, Edit, 
  Check, Layers, Minimize, Repeat, FileDown, FileSpreadsheet, FileJson,
  Grid, FileImage, Pen, FileUp
} from 'lucide-react';

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
  }, [location.search]);

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case "pdf": return "bg-red-100 text-red-600";
      case "writing": return "bg-purple-100 text-purple-600";
      case "image": return "bg-green-100 text-green-600";
      case "convert": return "bg-yellow-100 text-yellow-600";
      default: return "bg-blue-100 text-blue-600";
    }
  };

  const tools: Tool[] = [
    // PDF tools
    {
      icon: <Image size={24} />,
      title: "PDF to JPG",
      description: "Convert PDF pages to JPG images.",
      path: "/tool/pdf-to-jpg",
      category: "pdf"
    },
    {
      icon: <FileText size={24} />,
      title: "JPG to PDF",
      description: "Convert JPG images to a PDF file.",
      path: "/tool/jpg-to-pdf",
      category: "pdf"
    },
    {
      icon: <ArrowRightLeft size={24} />,
      title: "Merge PDF",
      description: "Combine multiple PDF files into one.",
      path: "/tool/merge-pdf",
      category: "pdf"
    },
    {
      icon: <Scissors size={24} />,
      title: "Split PDF",
      description: "Separate a PDF into multiple files.",
      path: "/tool/split-pdf",
      category: "pdf"
    },
    // Writing tools
    {
      icon: <Edit size={24} />,
      title: "Text Case Converter",
      description: "Convert text to UPPERCASE, lowercase, or Title Case.",
      path: "/tool/text-case-converter",
      category: "writing"
    },
    {
      icon: <FileText size={24} />,
      title: "Word Count",
      description: "Count the words in your text.",
      path: "/tool/word-count",
      category: "writing"
    },
    {
      icon: <Hash size={24} />,
      title: "Character Count",
      description: "Count the characters in your text.",
      path: "/tool/character-count",
      category: "writing"
    },
    {
      icon: <Type size={24} />,
      title: "Lorem Ipsum Generator",
      description: "Generate Lorem Ipsum placeholder text.",
      path: "/tool/lorem-ipsum",
      category: "writing"
    },
    {
      icon: <Edit size={24} />,
      title: "AI Resume Writer",
      description: "Create professional resumes with AI assistance.",
      path: "/tool/resume-writer",
      category: "writing"
    },
    {
      icon: <Check size={24} />,
      title: "Grammar Checker",
      description: "Improve your writing with grammar suggestions.",
      path: "/tool/grammar-checker",
      category: "writing"
    },
    
    // Image tools
    {
      icon: <Layers size={24} />,
      title: "Remove Background",
      description: "Remove background from images easily.",
      path: "/tool/remove-background",
      category: "image"
    },
    {
      icon: <Minimize size={24} />,
      title: "Image Resizer",
      description: "Resize images to your desired dimensions.",
      path: "/tool/image-resizer",
      category: "image"
    },
    {
      icon: <Repeat size={24} />,
      title: "Image Converter",
      description: "Convert images between different formats.",
      path: "/tool/image-converter",
      category: "image"
    },
    {
      icon: <FileDown size={24} />,
      title: "Image Compressor",
      description: "Compress images to reduce file size.",
      path: "/tool/image-compressor",
      category: "image"
    },
    // Convert tools
    {
      icon: <FileText size={24} />,
      title: "Excel to PDF",
      description: "Convert Excel spreadsheets to PDF documents.",
      path: "/tool/excel-to-pdf",
      category: "convert"
    },
    {
      icon: <FileSpreadsheet size={24} />,
      title: "CSV to Excel",
      description: "Convert CSV files to Excel spreadsheets.",
      path: "/tool/csv-to-excel",
      category: "convert"
    },
    {
      icon: <FileJson size={24} />,
      title: "XML to JSON",
      description: "Convert XML files to JSON format.",
      path: "/tool/xml-to-json",
      category: "convert"
    },
    {
      icon: <FileText size={24} />,
      title: "XML to CSV",
      description: "Convert XML files to CSV format.",
      path: "/tool/xml-to-csv",
      category: "convert"
    },
];

  const filteredTools = activeCategory === 'all'
    ? tools
    : tools.filter(tool => tool.category === activeCategory);

  const categories = [
    { name: 'all', icon: <Grid size={18} /> },
    { name: 'pdf', icon: <FileText size={18} /> },
    { name: 'image', icon: <FileImage size={18} /> },
    { name: 'writing', icon: <Pen size={18} /> },
    { name: 'convert', icon: <FileUp size={18} /> }
  ];

  return (
    <div className="container mx-auto px-12 py-8 pb-8 pt-8">
      <h1 className="text-3xl font-bold mb-8 text-center">All Tools</h1>
      <div className="flex flex-wrap justify-center mb-8">
        {categories.map(category => (
          <Link
            key={category.name}
            to={`/all-tools?category=${category.name}`}
            className={`mx-2 px-4 py-2 rounded-md mb-2 flex items-center ${
              activeCategory === category.name
                ? 'bg-blue-500 text-white'
                : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTools.map((tool, index) => (
          <Link key={index} to={tool.path} className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm hover:bg-gray-50 border border-zinc-100">
            <div className={`${getCategoryColor(tool.category)} w-12 h-12 rounded-full flex items-center justify-center mb-36`}>
              {tool.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{tool.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllToolsPage;