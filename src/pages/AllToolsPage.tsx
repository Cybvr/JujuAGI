import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FileText, Hash, Type, Image, ArrowRightLeft, Scissors, Edit, 
  Check, Layers, Minimize, Repeat, FileDown, FileSpreadsheet, FileJson,
  Grid, FileImage, Pen, FileUp, QrCode
} from 'lucide-react';

interface Tool {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
  category: string;
}

interface Category {
  name: string;
  icon: React.ReactNode;
}

const AllToolsPage: React.FC = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setActiveCategory(params.get('category') || 'all');
  }, [location.search]);

  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      pdf: "bg-red-100 text-red-600",
      writing: "bg-purple-100 text-purple-600",
      image: "bg-green-100 text-green-600",
      convert: "bg-yellow-100 text-yellow-600"
    };
    return colors[category] || "bg-indigo-100 text-indigo-600";
  };

  const tools: Tool[] = [
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
    {
      icon: <QrCode size={24} />,
      title: "QR Code Generator",
      description: "Generate QR codes for text or URLs.",
      path: "/tool/qr-code-generator",
      category: "convert"
    },
  ];

  const categories: Category[] = [
    { name: 'all', icon: <Grid size={18} /> },
    { name: 'pdf', icon: <FileText size={18} /> },
    { name: 'image', icon: <FileImage size={18} /> },
    { name: 'writing', icon: <Pen size={18} /> },
    { name: 'convert', icon: <FileUp size={18} /> }
  ];

  const filteredTools = activeCategory === 'all'
    ? tools
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-48 lg:pt-24">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-left text-zinc-900 dark:text-zinc-100">All Tools</h1>
      <CategoryLinks categories={categories} activeCategory={activeCategory} />
      <ToolGrid tools={filteredTools} getCategoryColor={getCategoryColor} />
    </div>
  );
};

const CategoryLinks: React.FC<{ categories: Category[], activeCategory: string }> = ({ categories, activeCategory }) => (
  <div className="flex flex-wrap justify-start mb-4 sm:mb-6 -mx-1">
    {categories.map(category => (
      <Link
        key={category.name}
        to={`/all-tools?category=${category.name}`}
        className={`m-1 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm rounded-sm flex items-center font-semibold transition-colors ${
          activeCategory === category.name
            ? 'bg-indigo-600 text-white'
            : 'bg-white text-zinc-400 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600'
        }`}
      >
        <span className="mr-1 sm:mr-2">{category.icon}</span>
        {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
      </Link>
    ))}
  </div>
);

const ToolGrid: React.FC<{ tools: Tool[], getCategoryColor: (category: string) => string }> = ({ tools, getCategoryColor }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {tools.map((tool, index) => (
      <Link key={index} to={tool.path} className="bg-white border border-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 p-8 sm:p-5 rounded-lg hover:shadow-lg transition-shadow">
        <div className={`${getCategoryColor(tool.category)} w-8 h-8 sm:w-12 sm:h-8 rounded-full flex items-center justify-center mb-3 sm:mb-4`}>
          {tool.icon}
        </div>
        <h3 className="text-lg sm:text-md font-semibold mb-2 text-zinc-900 dark:text-zinc-100">{tool.title}</h3>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">{tool.description}</p>
      </Link>
    ))}
  </div>
);

export default AllToolsPage;