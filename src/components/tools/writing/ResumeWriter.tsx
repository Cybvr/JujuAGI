import React, { useState } from 'react';
import axios from 'axios';
import ToolPage from '../common/ToolPage';
import withLoginPrompt from '../../../hocs/withLoginPrompt';
import { Briefcase, Clock, Loader, Copy } from 'lucide-react';

interface ResumeData {
  jobTitle: string;
  yearsOfExperience: string;
}

const ResumeWriterTool: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    jobTitle: '',
    yearsOfExperience: '',
  });
  const [enhancedResume, setEnhancedResume] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setResumeData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/enhance-resume', {
        jobTitle: resumeData.jobTitle,
        yearsOfExperience: resumeData.yearsOfExperience,
      });

      setEnhancedResume(response.data.enhancedResume);
    } catch (error) {
      console.error('Error generating resume:', error);
      setError('An error occurred while generating the resume. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(enhancedResume);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-zinc-50 dark:bg-zinc-700 p-4 rounded-md shadow">
          <label htmlFor="jobTitle" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            Desired Job Title
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Briefcase className="h-5 w-5 text-zinc-400 dark:text-zinc-500" />
            </div>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              value={resumeData.jobTitle}
              onChange={handleInputChange}
              placeholder="e.g. Software Engineer"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-zinc-300 dark:border-zinc-600 rounded-md bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100"
              required
            />
          </div>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Enter the job title you're applying for.</p>
        </div>

        <div className="bg-zinc-50 dark:bg-zinc-700 p-4 rounded-md shadow">
          <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            Years of Experience
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Clock className="h-5 w-5 text-zinc-400 dark:text-zinc-500" />
            </div>
            <select
              name="yearsOfExperience"
              id="yearsOfExperience"
              value={resumeData.yearsOfExperience}
              onChange={handleInputChange}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-zinc-300 dark:border-zinc-600 rounded-md bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100"
              required
            >
              <option value="">Select years of experience</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Select your years of relevant experience.</p>
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
            'Generate Resume'
          )}
        </button>
      </form>

      <div className="bg-zinc-50 dark:bg-zinc-700 p-6 rounded-lg shadow-md relative">
        {error && <p className="text-red-500 mb-4 p-3 bg-red-100 dark:bg-red-900 rounded">{error}</p>}
        {isLoading && (
          <div className="flex items-center justify-center h-64">
            <Loader className="animate-spin h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          </div>
        )}
        {enhancedResume && (
          <>
            <div 
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: enhancedResume.replace(/\n/g, '<br>') }} 
            />
            <button
              className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              onClick={copyToClipboard}
              title="Copy to clipboard"
            >
              <Copy size={20} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const ResumeWriterInstructions: React.FC = () => (
  <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-4 text-indigo-800 dark:text-indigo-200">How to Use:</h3>
    <ol className="list-decimal list-inside space-y-2 text-indigo-700 dark:text-indigo-300">
      <li>Enter the job title you're applying for in the "Desired Job Title" field.</li>
      <li>Select your years of relevant experience from the dropdown menu.</li>
      <li>Click the "Generate Resume" button to create an AI-generated resume tailored to your input.</li>
      <li>Review the generated resume in the preview pane on the right.</li>
      <li>Use the copy button to copy the generated resume to your clipboard.</li>
      <li>If needed, adjust your input and generate again to refine the result.</li>
    </ol>
  </div>
);

const ResumeWriterWithLoginPrompt = withLoginPrompt(ResumeWriterTool);

const ResumeWriter: React.FC = () => (
  <ToolPage
    title="AI Resume Generator"
    toolComponent={<ResumeWriterWithLoginPrompt />}
    instructions={<ResumeWriterInstructions />}
    category="writing"
  />
);

export default ResumeWriter;