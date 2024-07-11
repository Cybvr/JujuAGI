// pages/ToolTemplate.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ToolTemplate: React.FC = () => {
  const { toolId } = useParams<{ toolId: string }>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tool: {toolId}</h1>
      {/* Add tool-specific content here */}
    </div>
  );
};

export default ToolTemplate;