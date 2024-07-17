import React, { useState } from 'react';
import ToolPage from '../common/ToolPage';

const CharacterCountTool: React.FC = () => {
  const [text, setText] = useState('');

  const characterCount = text.length;
  const characterCountNoSpaces = text.replace(/\s/g, '').length;

  return (
    <div className="space-y-4">
      <textarea
        className="w-full p-2 border rounded"
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here"
      />
      <p className="text-lg">Character count (with spaces): {characterCount}</p>
      <p className="text-lg">Character count (without spaces): {characterCountNoSpaces}</p>
    </div>
  );
};

const CharacterCountInstructions: React.FC = () => (
  <ol className="list-decimal list-inside space-y-2">
    <li>Enter or paste your text in the input box</li>
    <li>The character counts will update automatically as you type</li>
    <li>You'll see counts both including and excluding spaces</li>
  </ol>
);

const CharacterCount: React.FC = () => (
  <ToolPage
    title="Character Count Tool"
    toolComponent={<CharacterCountTool />}
    instructions={<CharacterCountInstructions />}
    category="writing"
  />
);

export default CharacterCount;