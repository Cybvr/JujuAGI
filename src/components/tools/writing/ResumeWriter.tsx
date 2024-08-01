import React, { useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import ToolPage from '../common/ToolPage';
import { Briefcase, FileText, Loader, Copy, CheckCircle } from 'lucide-react';

interface ResumeData {
  jobTitle: string;
  description: string;
}

const ResumeWriterTool: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    jobTitle: '',
    description: '',
  });
  const [enhancedResume, setEnhancedResume] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      console.log('Sending request with data:', resumeData);
      const response = await axios.post('/api/enhance-resume', resumeData, {
        timeout: 60000, // 60 seconds timeout
        maxRedirects: 5,
      });
      console.log('Received response:', response.data);
      setEnhancedResume(response.data.enhancedResume);
    } catch (error) {
      console.error('Error generating resume:', error);
      let errorMessage = 'An error occurred while generating the resume. Please try again.';
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 500 && error.response.data.error === 'API key is not configured on the server') {
          errorMessage = 'The resume generator is currently unavailable due to a server configuration issue. Please try again later or contact support.';
        } else {
          errorMessage = `Error: ${error.response.status} - ${error.response.data.error || 'Unknown error'}`;
        }
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(enhancedResume);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setError('Failed to copy to clipboard. Please try again.');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-zinc-50 dark:bg-zinc-700 p-6 rounded-md shadow-sm transition-all duration-300 hover:shadow-md">
          <label htmlFor="jobTitle" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
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
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-zinc-300 dark:border-zinc-600 rounded-md bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 transition-all duration-300"
              required
            />
          </div>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Enter the job title you're applying for.</p>
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-700 p-6 rounded-md shadow-sm transition-all duration-300 hover:shadow-md">
          <label htmlFor="description" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
            Professional Description
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
              <FileText className="h-5 w-5 text-zinc-400 dark:text-zinc-500" />
            </div>
            <textarea
              name="description"
              id="description"
              value={resumeData.description}
              onChange={handleInputChange}
              placeholder="Describe in detail your education, skills, and experience. For example: 'I am a software engineer with a Bachelor's degree in Computer Science from XYZ University. I have 5 years of experience in full-stack development, proficient in JavaScript, React, Node.js, and Python. I've worked on projects involving...' "
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-zinc-300 dark:border-zinc-600 rounded-md bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 transition-all duration-300"
              rows={6}
              required
            />
          </div>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Provide a detailed description of your professional background.</p>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
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
        {error && (
          <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 rounded-md">
            <p className="text-red-700 dark:text-red-200">{error}</p>
          </div>
        )}
        {isLoading && (
          <div className="flex items-center justify-center h-64">
            <Loader className="animate-spin h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          </div>
        )}
        {enhancedResume && (
          <>
            <div
              className="prose dark:prose-invert max-w-none overflow-y-auto max-h-[70vh]"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(enhancedResume.replace(/\n/g, '<br>')) }}
            />
            <button
              className="absolute top-2 right-2 p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 bg-zinc-200 dark:bg-zinc-600 rounded-full transition-all duration-300"
              onClick={copyToClipboard}
              title="Copy to clipboard"
            >
              {copied ? <CheckCircle size={20} className="text-green-500" /> : <Copy size={20} />}
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
      <li>In the "Professional Description" field, provide a detailed description of your education, skills, and experience.</li>
      <li>Click the "Generate Resume" button to create an AI-enhanced resume tailored to your input.</li>
      <li>Review the generated resume in the preview pane on the right.</li>
      <li>Use the copy button to copy the generated resume to your clipboard.</li>
      <li>If needed, adjust your input and generate again to refine the result.</li>
    </ol>
  </div>
);

const ResumeWriter: React.FC = () => (
  <ToolPage
    title="AI Resume Generator"
    toolComponent={<ResumeWriterTool />}
    instructions={<ResumeWriterInstructions />}
    category="writing"
  />
);

export default ResumeWriter;