import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Video, Image } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <div className="text-[#164fff] mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface Tool {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
}

const ToolsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [tools, setTools] = useState<Tool[]>([]);

  useEffect(() => {
    const fetchedTools: Tool[] = [
      {
        icon: <Image size={32} color="green" />,
        title: "Image to PDF",
        description: "Convert images into organized PDF documents for easy sharing and archiving.",
        category: "Image"
      },
      {
        icon: <FileText size={32} color="lime" />,
        title: "Document Merger",
        description: "Combine multiple documents into a single file effortlessly.",
        category: "Document"
      },
      {
        icon: <FileText size={32} color="red" />,
        title: "Text Translator",
        description: "Translate text between multiple languages quickly and accurately.",
        category: "Text"
      },
      {
        icon: <Video size={32} color="orange" />,
        title: "Audio Trimmer",
        description: "Cut and trim audio files with precision for your perfect sound.",
        category: "Audio"
      },
      {
        icon: <Image size={32} color="brown" />,
        title: "Image Resizer",
        description: "Resize images to your desired dimensions without losing quality.",
        category: "Image"
      },
      {
        icon: <FileText size={32} color="teal" />,
        title: "Document to Text",
        description: "Extract text from documents for easy editing and analysis.",
        category: "Document"
      },
      {
        icon: <FileText size={32} color="cyan" />,
        title: "Text Summarizer",
        description: "Summarize long text into a shorter version while retaining key information.",
        category: "Text"
      },
    ];
    setTools(fetchedTools);
  }, []);


  const filteredTools = activeCategory === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12 text-gray-800">Our Tools</h2>
        <div className="flex justify-center mb-8">
          {['All', 'Image', 'Document', 'Text', 'Audio'].map(category => (
            <button
              key={category}
              className={`mx-2 px-4 py-2 rounded-md ${
                activeCategory === category
                  ? 'bg-[#164fff] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition duration-300`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTools.map((tool, index) => (
            <FeatureCard 
              key={index}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/all-tools" className="bg-[#164fff] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300">View All Tools</Link>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;