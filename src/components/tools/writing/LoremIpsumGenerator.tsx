import React, { useState } from 'react';
import ToolPage from '../common/ToolPage';
import { FileText, Copy } from 'lucide-react';

const LoremIpsumGeneratorTool: React.FC = () => {
  const [paragraphs, setParagraphs] = useState(1);
  const [generatedText, setGeneratedText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParagraphs(Math.max(1, parseInt(e.target.value)));
  };

  const generateLoremIpsum = () => {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    setGeneratedText(Array(paragraphs).fill(loremIpsum).join('\n\n'));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedText);
  };

  return (
    <div className="flex space-x-4">
      <div className="w-1/2 space-y-4">
        <input
          type="number"
          value={paragraphs}
          onChange={handleInputChange}
          className="w-full p-2 border rounded dark:bg-zinc-700 dark:text-white dark:border-zinc-600"
          min="1"
          placeholder="Number of paragraphs"
        />
        <button
          className="w-full bg-gray-500 dark:bg-zinc-800 text-white text-sm py-1 px-2 rounded flex items-center justify-center border dark:border-zinc-700"
          onClick={generateLoremIpsum}
        >
          <FileText className="mr-1" size={16} />
          Generate Lorem Ipsum
        </button>
      </div>
      <div className="w-1/2 relative">
        <textarea
          className="w-full p-2 border rounded dark:bg-zinc-700 dark:text-white dark:border-zinc-600"
          rows={13}
          value={generatedText}
          readOnly
          placeholder="Generated Lorem Ipsum will appear here"
        />
        <button
          className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          onClick={copyToClipboard}
          title="Copy to clipboard"
        >
          <Copy size={20} />
        </button>
      </div>
    </div>
  );
};

const LoremIpsumInstructions: React.FC = () => (
  <>
    <ol className="list-decimal list-inside space-y-2">
      <li>Enter the number of paragraphs you want to generate</li>
      <li>Click the "Generate Lorem Ipsum" button</li>
      <li>View the generated text in the output box</li>
      <li>Click the copy icon to copy the generated text to your clipboard</li>
    </ol>
  </>
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