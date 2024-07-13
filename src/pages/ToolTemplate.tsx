import { useParams } from 'react-router-dom';
import { tools } from '../toolsData';
import RemoveBackground from '../components/tools/RemoveBackground';
import WordToPdf from '../components/tools/WordToPdf';

const toolComponents: { [key: string]: React.FC } = {
  'remove-background': RemoveBackground,
  'word-to-pdf': WordToPdf,
};

const ToolTemplate = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const tool = tools.find(t => t.id === toolId);

  if (!tool) return <div>Tool not found</div>;

  const ToolComponent = toolComponents[tool.id];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{tool.title}</h1>
      <p className="text-gray-600 mb-4">{tool.description}</p>
      <ToolComponent />
    </div>
  );
};

export default ToolTemplate;