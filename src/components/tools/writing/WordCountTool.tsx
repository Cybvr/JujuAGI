import React, { useState } from 'react';
import ToolPage from '../common/ToolPage';
import { Copy } from 'lucide-react';

const WordCountTool: React.FC = () => {
  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const characterCount = text.length;
  const characterCountNoSpaces = text.replace(/\s/g, '').length;

  const copyToClipboard = () => {
    const result = `Word count: ${wordCount}
Character count (with spaces): ${characterCount}
Character count (without spaces): ${characterCountNoSpaces}`;
    navigator.clipboard.writeText(result);
  };

  return (
    <div className="flex space-x-4">
      <div className="w-1/2 space-y-4">
        <textarea
          className="w-full p-2 border rounded dark:bg-zinc-700 dark:text-white dark:border-zinc-600"
          rows={13}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here"
        />
      </div>
      <div className="w-1/2 relative">
        <div className="w-full p-2 border rounded dark:bg-zinc-700 dark:text-white dark:border-zinc-600 h-full">
          <p className="text-lg mb-2">Word count: {wordCount}</p>
          <p className="text-lg mb-2">Character count (with spaces): {characterCount}</p>
          <p className="text-lg">Character count (without spaces): {characterCountNoSpaces}</p>
        </div>
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

const WordCountInstructions: React.FC = () => (
  <>
    <ol className="list-decimal list-inside space-y-2">
      <li>Enter or paste your text in the input box on the left</li>
      <li>The word and character counts will update automatically as you type</li>
      <li>You'll see the word count and character counts (with and without spaces)</li>
      <li>Click the copy icon to copy the results to your clipboard</li>
    </ol>
  </>
);

const WordCount: React.FC = () => (
  <ToolPage
    title="Word Count Tool"
    toolComponent={<WordCountTool />}
    instructions={<WordCountInstructions />}
    category="writing"
  />
);

export default WordCount;