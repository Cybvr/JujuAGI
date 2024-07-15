import React, { useState } from 'react';
import ToolPage from '../common/ToolPage';

const GrammarCheckerTool: React.FC = () => {
  const [text, setText] = useState('');
  const [checkedText, setCheckedText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call a grammar checking service
    setCheckedText(`Checked version of: ${text}`);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here"
          className="w-full p-2 border rounded h-40"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Check Grammar
        </button>
      </form>
      {checkedText && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-bold mb-2">Corrected Text:</h3>
          <p>{checkedText}</p>
        </div>
      )}
    </div>
  );
};

const GrammarCheckerInstructions: React.FC = () => (
  <>
    <h3 className="text-xl font-semibold mb-4">How to use:</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>Paste or type your text into the input box</li>
      <li>Click "Check Grammar" to analyze your text</li>
      <li>Review the suggestions and corrections</li>
      <li>Apply the changes to improve your writing</li>
    </ol>
  </>
);

const GrammarChecker: React.FC = () => (
  <ToolPage
    title="Grammar Checker"
    toolComponent={<GrammarCheckerTool />}
    instructions={<GrammarCheckerInstructions />}
    category="writing"
  />
);

export default GrammarChecker;