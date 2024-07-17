import React, { useState } from 'react';
import ToolPage from '../common/ToolPage';

const WordCountTool: React.FC = () => {
  const [text, setText] = useState('');

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="space-y-4">
      <textarea
        className="w-full p-2 border rounded"
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here"
      />
      <p className="text-lg">Word count: {wordCount}</p>
    </div>
  );
};

const WordCountInstructions: React.FC = () => (
  <ol className="list-decimal list-inside space-y-2">
    <li>Enter or paste your text in the input box</li>
    <li>The word count will update automatically as you type</li>
  </ol>
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