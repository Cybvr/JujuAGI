import React, { useState } from 'react';
import ToolPage from '../common/ToolPage';

const PlagiarismDetectorTool: React.FC = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call a plagiarism detection service
    setResult(`Plagiarism check result for: ${text.substring(0, 50)}...`);
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
          Check for Plagiarism
        </button>
      </form>
      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-bold mb-2">Plagiarism Check Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

const PlagiarismDetectorInstructions: React.FC = () => (
  <>
    <h3 className="text-xl font-semibold mb-4">How to use:</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>Paste or type your text into the input box</li>
      <li>Click "Check for Plagiarism" to analyze your text</li>
      <li>Review the plagiarism report</li>
      <li>Address any identified instances of potential plagiarism</li>
    </ol>
  </>
);

const PlagiarismDetector: React.FC = () => (
  <ToolPage
    title="Plagiarism Detector"
    toolComponent={<PlagiarismDetectorTool />}
    instructions={<PlagiarismDetectorInstructions />}
    category="writing"
  />
);

export default PlagiarismDetector;