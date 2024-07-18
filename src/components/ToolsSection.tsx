import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Image,
  ArrowRightLeft,
  Scissors,
  Repeat,
  FileDown,
  Minimize,
  Layers,
  Edit,
  BookOpen,
  Hash,
  Check,
  Search,
  Type,
} from "lucide-react";

interface Tool {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
  category: string;
}

const ToolsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case "PDF":
        return "text-red-500 dark:text-red-400";
      case "Image":
        return "text-green-500 dark:text-green-400";
      case "Writing":
        return "text-purple-500 dark:text-purple-400";
      case "Convert":
        return "text-yellow-500 dark:text-yellow-400";
      default:
        return "text-blue-500 dark:text-blue-400";
    }
  };

  const tools: Tool[] = [
    // PDF tools
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
    // Image tools
    {
      icon: <Layers size={32} />,
      title: "Remove Background",
      description: "Remove background from images easily.",
      path: "/tool/remove-background",
      category: "Image",
    },
    {
      icon: <Minimize size={32} />,
      title: "Image Resizer",
      description: "Resize images to your desired dimensions.",
      path: "/tool/image-resizer",
      category: "Image",
    },
    {
      icon: <Repeat size={32} />,
      title: "Image Converter",
      description: "Convert images between different formats.",
      path: "/tool/image-converter",
      category: "Image",
    },
    {
      icon: <FileDown size={32} />,
      title: "Image Compressor",
      description: "Compress images to reduce file size.",
      path: "/tool/image-compressor",
      category: "Image",
    },
    // New Writing tools
    {
      icon: <Type size={32} />,
      title: "Text Case Converter",
      description: "Convert text to UPPERCASE, lowercase, or Title Case.",
      path: "/tool/text-case-converter",
      category: "writing",
    },
    {
      icon: <FileText size={32} />,
      title: "Word Count",
      description: "Count the words in your text.",
      path: "/tool/word-count",
      category: "writing",
    },
    {
      icon: <Hash size={32} />,
      title: "Character Count",
      description: "Count the characters in your text.",
      path: "/tool/character-count",
      category: "writing",
    },
    {
      icon: <Type size={32} />,
      title: "Lorem Ipsum Generator",
      description: "Generate Lorem Ipsum placeholder text.",
      path: "/tool/lorem-ipsum",
      category: "writing",
    },
    {
      icon: <Edit size={32} />,
      title: "AI Resume Writer",
      description: "Create professional resumes with AI assistance.",
      path: "/tool/resume-writer",
      category: "Writing",
    },
    {
      icon: <BookOpen size={32} />,
      title: "AI Essay Writer",
      description: "Generate essays on various topics with AI.",
      path: "/tool/essay-writer",
      category: "Writing",
    },
    {
      icon: <Check size={32} />,
      title: "Grammar Checker",
      description: "Improve your writing with grammar suggestions.",
      path: "/tool/grammar-checker",
      category: "Writing",
    },
    {
      icon: <Search size={32} />,
      title: "Plagiarism Detector",
      description: "Check your text for potential plagiarism.",
      path: "/tool/plagiarism-detector",
      category: "Writing",
    },
  ];

  const categories = ["All", "PDF", "Image", "Writing", "Convert"];

  const filteredTools =
    activeCategory === "All"
      ? tools
      : tools.filter((tool) => tool.category === activeCategory);

  return (
    <section className="pt-4 pb-20 bg-white dark:bg-zinc-800">
      <div className="container mx-auto px-10 text-left bg-zinc-50 dark:bg-zinc-700 py-20 rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-2 dark:text-white">
          Our Tools
        </h2>
        <p className="text-md mb-8 text-center text-zinc-400 dark:text-zinc-300">
          Free resources that allow you to organize, create and save time on
          your work
        </p>
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`mx-2 px-4 py-2 rounded-md mb-2 ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-500"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTools.map((tool, index) => (
            <Link
              key={index}
              to={tool.path}
              className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`${getCategoryColor(tool.category)} mb-4`}>
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
      </div>
    </section>
  );
};

export default ToolsSection;
