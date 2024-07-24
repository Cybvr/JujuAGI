import React, { useState } from 'react';
import ToolPage from '../common/ToolPage';

const LoremIpsumGeneratorTool: React.FC = () => {
  const [paragraphs, setParagraphs] = useState(1);
  const [generatedText, setGeneratedText] = useState('');

  const generateLoremIpsum = () => {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    setGeneratedText(Array(paragraphs).fill(loremIpsum).join('\n\n'));
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="paragraphs" className="block mb-2">Number of paragraphs:</label>
        <input
          type="number"
          id="paragraphs"
          value={paragraphs}
          onChange={(e) => setParagraphs(Math.max(1, parseInt(e.target.value)))}
          className="w-full p-2 border rounded"
          min="1"
        />
      </div>
      <button
        onClick={generateLoremIpsum}
        className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600"
      >
        Generate Lorem Ipsum
      </button>
      {generatedText && (
        <textarea
          className="w-full p-2 border rounded"
          rows={10}
          value={generatedText}
          readOnly
        />
      )}
    </div>
  );
};

const LoremIpsumInstructions: React.FC = () => (
  <ol className="list-decimal list-inside space-y-2">
    <li>Enter the number of paragraphs you want to generate</li>
    <li>Click the "Generate Lorem Ipsum" button</li>
    <li>Copy the generated text from the text area</li>
  </ol>
);

const LoremIpsumGenerator: React.FC = () => (
  <ToolPage
    title="Lorem Ipsum Generator"
    toolComponent={<LoremIpsumGeneratorTool />}
    instructions={<LoremIpsumInstructions />}
    category="writing"
  />
);

export default LoremIpsumGenerator;