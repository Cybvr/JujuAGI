import { useParams, Link } from 'react-router-dom';
import { tools } from '../toolsData';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryTools = tools.filter(tool => tool.category === category);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{category} Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryTools.map((tool) => (
          <Link key={tool.id} to={`/tool/${tool.id}`} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{tool.title}</h2>
            <p className="text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;