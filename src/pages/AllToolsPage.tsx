// pages/AllToolsPage.tsx
import { Link } from 'react-router-dom';

const AllToolsPage = () => {
  const tools = [
    { id: 'image-to-pdf', name: 'Image to PDF', category: 'Image' },
    { id: 'document-merger', name: 'Document Merger', category: 'Document' },
    { id: 'text-translator', name: 'Text Translator', category: 'Text' },
    { id: 'audio-trimmer', name: 'Audio Trimmer', category: 'Audio' },
    // Add more tools here
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link key={tool.id} to={`/tool/${tool.id}`} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">{tool.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllToolsPage;