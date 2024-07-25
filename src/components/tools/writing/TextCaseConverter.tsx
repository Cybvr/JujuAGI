import React, { useState } from 'react';
import ToolPage from '../common/ToolPage';
import { ArrowUpAZ, ArrowDownAZ, ArrowDownWideNarrow, ArrowRightToLine, Copy } from 'lucide-react';

const TextCaseConverterTool: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const convertCase = (type: 'upper' | 'lower' | 'title' | 'sentence') => {
    switch (type) {
      case 'upper':
        setOutputText(inputText.toUpperCase());
        break;
      case 'lower':
        setOutputText(inputText.toLowerCase());
        break;
      case 'title':
        setOutputText(
          inputText
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        );
        break;
      case 'sentence':
        setOutputText(
          inputText.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase())
        );
        break;
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
  };

  return (
    <div className="flex space-x-4">
      <div className="w-1/2 space-y-4">
        <textarea
          className="w-full p-2 border rounded dark:bg-zinc-700 dark:text-white dark:border-zinc-600"
          rows={5}
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your text here"
        />
        <div className="flex space-x-2">
          <button
            className="bg-gray-500 dark:bg-zinc-800 text-white text-sm py-1 px-2 rounded flex items-center border dark:border-zinc-700"
            onClick={() => convertCase('upper')}
          >
            <ArrowUpAZ className="mr-1" size={16} />
            Uppercase
          </button>
          <button
            className="bg-gray-500 dark:bg-zinc-800 text-white text-sm py-1 px-2 rounded flex items-center border dark:border-zinc-700"
            onClick={() => convertCase('lower')}
          >
            <ArrowDownAZ className="mr-1" size={16} />
            Lowercase
          </button>
          <button
            className="bg-gray-500 dark:bg-zinc-800 text-white text-sm py-1 px-2 rounded flex items-center border dark:border-zinc-700"
            onClick={() => convertCase('title')}
          >
            <ArrowDownWideNarrow className="mr-1" size={16} />
            Title case
          </button>
          <button
            className="bg-gray-500 dark:bg-zinc-800 text-white text-sm py-1 px-2 rounded flex items-center border dark:border-zinc-700"
            onClick={() => convertCase('sentence')}
          >
            <ArrowRightToLine className="mr-1" size={16} />
            Sentence case
          </button>
        </div>
      </div>
      <div className="w-1/2 relative">
        <textarea
          className="w-full p-2 border rounded dark:bg-zinc-700 dark:text-white dark:border-zinc-600"
          rows={13}
          value={outputText}
          readOnly
          placeholder="Converted text will appear here"
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

const TextCaseConverterInstructions: React.FC = () => (
  <>
    <ol className="list-decimal list-inside space-y-2">
      <li>Enter or paste your text in the input box</li>
      <li>Click on the desired case conversion button</li>
      <li>View the converted text in the output box</li>
      <li>Click the copy icon to copy the converted text to your clipboard</li>
    </ol>
  </>
);

const TextCaseConverter: React.FC = () => (
  <ToolPage
    title="Text Case Converter"
    toolComponent={<TextCaseConverterTool />}
    instructions={<TextCaseConverterInstructions />}
    category="writing"
  />
);

export default TextCaseConverter;