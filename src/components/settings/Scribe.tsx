import React, { useState } from 'react';

const Scribe: React.FC = () => {
  const [content, setContent] = useState<string>('');

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            Pen
          </button>
          <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            Crop
          </button>
          <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            Zoom
          </button>
          <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            Undo
          </button>
          <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            Redo
          </button>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            Save
          </button>
          <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            Export
          </button>
        </div>
      </div>
      <div className="flex-grow border-2 border-dashed border-blue-300 rounded-lg p-4">
        {content ? (
          <textarea
            className="w-full h-full p-2 bg-transparent resize-none focus:outline-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400">
            Click to upload or drop file here
          </div>
        )}
      </div>
    </div>
  );
};

export default Scribe;