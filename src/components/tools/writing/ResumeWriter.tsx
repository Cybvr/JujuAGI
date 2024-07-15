import React, { useState } from 'react';
import ToolPage from '../common/ToolPage';

const ResumeWriterTool: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [generatedResume, setGeneratedResume] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call an AI service to generate the resume
    setGeneratedResume(`Generated resume for ${jobTitle} with ${experience} years of experience and skills in ${skills}.`);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Desired Job Title"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Years of Experience"
          className="w-full p-2 border rounded"
        />
        <textarea
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Key Skills (comma-separated)"
          className="w-full p-2 border rounded h-24"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Generate Resume
        </button>
      </form>
      {generatedResume && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-bold mb-2">Generated Resume:</h3>
          <p>{generatedResume}</p>
        </div>
      )}
    </div>
  );
};

const ResumeWriterInstructions: React.FC = () => (
  <>
    <h3 className="text-xl font-semibold mb-4">How to use:</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>Enter your desired job title</li>
      <li>Input your years of experience</li>
      <li>List your key skills, separated by commas</li>
      <li>Click "Generate Resume" to create a tailored resume</li>
      <li>Review and download your AI-generated resume</li>
    </ol>
  </>
);

const ResumeWriter: React.FC = () => (
  <ToolPage
    title="AI Resume Writer"
    toolComponent={<ResumeWriterTool />}
    instructions={<ResumeWriterInstructions />}
    category="writing"
  />
);

export default ResumeWriter;