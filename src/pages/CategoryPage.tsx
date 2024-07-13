import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
}

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [tools, setTools] = useState<Tool[]>([]);

  useEffect(() => {
    // This is where you'd typically fetch tools from an API
    // For now, we'll use dummy data
    const dummyTools: Tool[] = [
      { id: '1', name: 'Image Resizer', description: 'Resize your images easily', category: 'image' },
      { id: '2', name: 'PDF Converter', description: 'Convert documents to PDF', category: 'document' },
      { id: '3', name: 'Text Translator', description: 'Translate text to multiple languages', category: 'text' },
      { id: '4', name: 'Audio Trimmer', description: 'Trim your audio files', category: 'audio' },
      { id: '5', name: 'Face Swapper', description: 'Swap faces in images', category: 'swap' },
    ];

    setTools(dummyTools.filter(tool => tool.category === category));
  }, [category]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{category} Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link 
            key={tool.id} 
            to={`/tool/${tool.id}`} 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;