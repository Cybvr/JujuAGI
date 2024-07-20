import React, { useState } from 'react';
import axios from 'axios';
import ToolPage from '../common/ToolPage';
import { BookOpen, AlignLeft, Loader } from 'lucide-react';

interface EssayData {
  topic: string;
  wordCount: string;
}

const EssayWriterTool: React.FC = () => {
  const [essayData, setEssayData] = useState<EssayData>({
    topic: '',
    wordCount: '',
  });
  const [generatedEssay, setGeneratedEssay] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEssayData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/generate-essay', {
        topic: essayData.topic,
        wordCount: essayData.wordCount,
      });

      setGeneratedEssay(response.data.generatedEssay);
    } catch (error) {
      console.error('Error generating essay:', error);
      setError('An error occurred while generating the essay. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-6 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-4 rounded-md shadow">
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
            Essay Topic
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BookOpen className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="topic"
              id="topic"
              value={essayData.topic}
              onChange={handleInputChange}
              placeholder="e.g. The Impact of Climate Change"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">Enter the main topic or title of your essay.</p>
        </div>

        <div className="bg-white p-4 rounded-md shadow">
          <label htmlFor="wordCount" className="block text-sm font-medium text-gray-700 mb-1">
            Word Count
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <AlignLeft className="h-5 w-5 text-gray-400" />
            </div>
            <select
              name="wordCount"
              id="wordCount"
              value={essayData.wordCount}
              onChange={handleInputChange}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              required
            >
              <option value="">Select word count</option>
              <option value="500">500 words</option>
              <option value="750">750 words</option>
              <option value="1000">1000 words</option>
              <option value="1500">1500 words</option>
              <option value="2000">2000 words</option>
            </select>
          </div>
          <p className="mt-1 text-sm text-gray-500">Select the desired length of your essay.</p>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
              Generating...
            </>
          ) : (
            'Generate Essay'
          )}
        </button>
      </form>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Generated Essay</h2>
        {error && <p className="text-red-500 mb-4 p-3 bg-red-100 rounded">{error}</p>}
        {isLoading && (
          <div className="flex items-center justify-center h-64">
            <Loader className="animate-spin h-8 w-8 text-indigo-600" />
          </div>
        )}
        {generatedEssay && (
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: generatedEssay.replace(/\n/g, '<br>') }} 
          />
        )}
      </div>
    </div>
  );
};

const EssayWriterInstructions: React.FC = () => (
  <div className="bg-blue-50 p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-4 text-blue-800">How to Use:</h3>
    <ol className="list-decimal list-inside space-y-2 text-blue-700">
      <li>Enter the main topic or title of your essay in the "Essay Topic" field.</li>
      <li>Select the desired word count for your essay from the dropdown menu.</li>
      <li>Click the "Generate Essay" button to create an AI-generated essay based on your input.</li>
      <li>Review the generated essay in the preview pane on the right.</li>
      <li>If needed, adjust your input and generate again to refine the result.</li>
    </ol>
  </div>
);

const EssayWriter: React.FC = () => (
  <ToolPage
    title="AI Essay Generator"
    toolComponent={<EssayWriterTool />}
    instructions={<EssayWriterInstructions />}
    category="writing"
  />
);

export default EssayWriter;