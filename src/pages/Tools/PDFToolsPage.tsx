import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Image, ArrowRightLeft, Scissors } from 'lucide-react';

interface Tool {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
}

const PDFToolsPage: React.FC = () => {
  const pdfTools: Tool[] = [
    {
      icon: <Image size={32} />,
      title: "PDF to JPG",
      description: "Convert PDF pages to JPG images.",
      path: "/tool/pdf-to-jpg"
    },
    {
      icon: <FileText size={32} />,
      title: "JPG to PDF",
      description: "Convert JPG images to a PDF file.",
      path: "/tool/jpg-to-pdf"
    },
    {
      icon: <ArrowRightLeft size={32} />,
      title: "Merge PDF",
      description: "Combine multiple PDF files into one.",
      path: "/tool/merge-pdf"
    },
    {
      icon: <Scissors size={32} />,
      title: "Split PDF",
      description: "Separate a PDF into multiple files.",
      path: "/tool/split-pdf"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">PDF Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pdfTools.map((tool, index) => (
          <Link key={index} to={tool.path} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-indigo-600 mb-4">{tool.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
            <p className="text-zinc-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PDFToolsPage;