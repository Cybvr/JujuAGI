import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { tools, Tool } from '../toolsData'; // Import Tool interface from toolsData

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  const filteredTools = tools.filter((tool: Tool) => 
    tool.category.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div className="container mx-auto px-12 py-24">
      <h1 className="text-3xl font-bold mb-6 capitalize">{category} Tools</h1>
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool: Tool) => (
            <Link 
              key={tool.id} 
              to={`/tool/${tool.id}`} 
              className="bg-white dark:bg-zinc-800 border p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h2 className="text-l font-semibold mb-2">{tool.title}</h2>
              <p className="text-zinc-600 dark:text-zinc-400">{tool.description}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-zinc-600 dark:text-zinc-400">No tools found in this category. 😢</p>
      )}
    </div>
  );
};

export default CategoryPage;