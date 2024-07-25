import React from 'react';
import { useParams } from 'react-router-dom';
import { tools } from '../toolsData';
import RemoveBackground from '../components/tools/RemoveBackground';
import WordToPdf from '../components/tools/WordToPdf';
import Breadcrumbs from '../components/Breadcrumbs';
import OtherToolsSection from '../components/tools/common/OtherToolsSection';
import ToolNavigation from '../components/ToolNavigation';

const toolComponents: { [key: string]: React.FC } = {
  'remove-background': RemoveBackground,
  'word-to-pdf': WordToPdf,
};

const ToolTemplate: React.FC = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const tool = tools.find(t => t.id === toolId);

  if (!tool) return <div>Tool not found</div>;

  const ToolComponent = toolComponents[tool.id];

  const breadcrumbItems = [
    { label: 'Tools', path: '/all-tools' },
    { label: tool.title, path: `/tool/${tool.id}` },
  ];

  return (
    <div className="bg-zinc-50 min-h-screen flex">
      <ToolNavigation />
      <div className="flex-1 py-16">
        <div className="max-w-[900px] mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl font-bold mb-4">{tool.title}</h1>
          <p className="text-zinc-600 mb-4">{tool.description}</p>
          <ToolComponent />
          <OtherToolsSection category={tool.category} currentToolPath={`/tool/${tool.id}`} />
        </div>
      </div>
    </div>
  );
};

export default ToolTemplate;