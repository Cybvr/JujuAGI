import React, { useState } from 'react';
import axios from 'axios';
import ToolPage from '../common/ToolPage';
import { Briefcase, Clock, Loader } from 'lucide-react';

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-6 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-4 rounded-md shadow">
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
            Desired Job Title
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Briefcase className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              value={resumeData.jobTitle}
              onChange={handleInputChange}
              placeholder="e.g. Software Engineer"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">Enter the job title you're applying for.</p>
        </div>

        <div className="bg-white p-4 rounded-md shadow">
          <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 mb-1">
            Years of Experience
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Clock className="h-5 w-5 text-gray-400" />
            </div>
            <select
              name="yearsOfExperience"
              id="yearsOfExperience"
              value={resumeData.yearsOfExperience}
              onChange={handleInputChange}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
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
          <p className="mt-1 text-sm text-gray-500">Select your years of relevant experience.</p>
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

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Generated Resume</h2>
        {error && <p className="text-red-500 mb-4 p-3 bg-red-100 rounded">{error}</p>}
        {isLoading && (
          <div className="flex items-center justify-center h-64">
            <Loader className="animate-spin h-8 w-8 text-indigo-600" />
          </div>
        )}
        {enhancedResume && (
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: enhancedResume.replace(/\n/g, '<br>') }} 
          />
        )}
      </div>
    </div>
  );
};

const ResumeWriterInstructions: React.FC = () => (
  <div className="bg-blue-50 p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-4 text-blue-800">How to Use:</h3>
    <ol className="list-decimal list-inside space-y-2 text-blue-700">
      <li>Enter the job title you're applying for in the "Desired Job Title" field.</li>
      <li>Select your years of relevant experience from the dropdown menu.</li>
      <li>Click the "Generate Resume" button to create an AI-generated resume tailored to your input.</li>
      <li>Review the generated resume in the preview pane on the right.</li>
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