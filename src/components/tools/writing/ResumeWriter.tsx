import React, { useState } from 'react';
import axios from 'axios';
import ToolPage from '../common/ToolPage';

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="jobTitle"
            value={resumeData.jobTitle}
            onChange={handleInputChange}
            placeholder="Desired Job Title"
            className="w-full p-2 border rounded"
            required
          />
          <p className="text-sm text-gray-600 mt-1">Enter the job title you're applying for.</p>
        </div>
        <div>
          <select
            name="yearsOfExperience"
            value={resumeData.yearsOfExperience}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select years of experience</option>
            <option value="0-1">0-1 years</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5-10">5-10 years</option>
            <option value="10+">10+ years</option>
          </select>
          <p className="text-sm text-gray-600 mt-1">Select your years of relevant experience.</p>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Generate Resume'}
        </button>
      </form>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Generated Resume</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {isLoading && <p>Generating resume...</p>}
        {enhancedResume && <div dangerouslySetInnerHTML={{ __html: enhancedResume.replace(/\n/g, '<br>') }} />}
      </div>
    </div>
  );
};

const ResumeWriterInstructions: React.FC = () => (
  <ol className="list-decimal list-inside space-y-2">
    <li>Enter the job title you're applying for.</li>
    <li>Select your years of relevant experience.</li>
    <li>Click "Generate Resume" to create an AI-generated resume tailored to your input.</li>
    <li>Review the generated resume in the preview pane on the right.</li>
    <li>If needed, adjust your input and generate again to refine the result.</li>
  </ol>
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