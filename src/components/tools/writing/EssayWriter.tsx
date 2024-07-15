import React, { useState } from 'react';
import ToolPage from '../common/ToolPage';

const EssayWriterTool: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [wordCount, setWordCount] = useState('');
  const [style, setStyle] = useState('academic');
  const [generatedEssay, setGeneratedEssay] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call an AI service to generate the essay
    setGeneratedEssay(`Generated ${wordCount} word ${style} essay about ${topic}.`);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Essay Topic"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={wordCount}
          onChange={(e) => setWordCount(e.target.value)}
          placeholder="Word Count"
          className="w-full p-2 border rounded"
        />
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="academic">Academic</option>
          <option value="creative">Creative</option>
          <option value="argumentative">Argumentative</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Generate Essay
        </button>
      </form>
      {generatedEssay && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-bold mb-2">Generated Essay:</h3>
          <p>{generatedEssay}</p>
        </div>
      )}
    </div>
  );
};

const EssayWriterInstructions: React.FC = () => (
  <>
    <h3 className="text-xl font-semibold mb-4">How to use:</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>Enter your essay topic</li>
      <li>Specify the desired word count</li>
      <li>Select the essay style (academic, creative, or argumentative)</li>
      <li>Click "Generate Essay" to create your AI-written essay</li>
      <li>Review and edit the generated essay as needed</li>
    </ol>
  </>
);

const EssayWriter: React.FC = () => (
  <ToolPage
    title="AI Essay Writer"
    toolComponent={<EssayWriterTool />}
    instructions={<EssayWriterInstructions />}
    category="writing"
  />
);

export default EssayWriter;