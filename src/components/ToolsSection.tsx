import React from "react";
import { Link } from "react-router-dom";
import { Image, FileText, ArrowRightLeft, Scissors, ChevronRight } from "lucide-react";

interface Tool {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
  category: string;
}

const ToolsSection: React.FC = () => {
  const recentTools: Tool[] = [
    {
      icon: <Image size={32} />,
      title: "PDF to JPG",
      description: "Convert PDF pages to JPG images.",
      path: "/tool/pdf-to-jpg",
      category: "PDF",
    },
    {
      icon: <FileText size={32} />,
      title: "JPG to PDF",
      description: "Convert JPG images to a PDF file.",
      path: "/tool/jpg-to-pdf",
      category: "PDF",
    },
    {
      icon: <ArrowRightLeft size={32} />,
      title: "Merge PDF",
      description: "Combine multiple PDF files into one.",
      path: "/tool/merge-pdf",
      category: "PDF",
    },
    {
      icon: <Scissors size={32} />,
      title: "Split PDF",
      description: "Separate a PDF into multiple files.",
      path: "/tool/split-pdf",
      category: "PDF",
    },
  ];

  return (
    <section className="pt-4 pb-20 bg-white dark:bg-zinc-800">
      <div className="container mx-auto px-10 text-left bg-zinc-50 dark:bg-zinc-700 py-20 rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-2 dark:text-white">
          Recent Tools
        </h2>
        <p className="text-md mb-8 text-center text-zinc-400 dark:text-zinc-300">
          Quick access to our most recently used tools
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recentTools.map((tool, index) => (
            <Link
              key={index}
              to={tool.path}
              className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-indigo-500 dark:text-indigo-400 mb-4">
                {tool.icon}
              </div>
              <h3 className="text-mb font-semibold mb-2 dark:text-white">
                {tool.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/all-tools"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View All Tools
            <ChevronRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;