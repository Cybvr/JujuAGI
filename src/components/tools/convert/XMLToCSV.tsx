import React, { useState } from 'react';
import ToolPage from '../common/ToolPage';
import { FileCode, FileText } from 'lucide-react';

const XMLToCSVTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement conversion logic here
    console.log(`Converting ${file?.name} to CSV`);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-zinc-300 border-dashed rounded-lg cursor-pointer bg-zinc-50 dark:hover:bg-bray-800 dark:bg-zinc-700 hover:bg-zinc-100 dark:border-zinc-600 dark:hover:border-zinc-500 dark:hover:bg-zinc-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <FileCode className="w-10 h-10 mb-3 text-zinc-400" />
              <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">XML file</p>
            </div>
            <input type="file" className="hidden" onChange={handleFileChange} accept=".xml" />
          </label>
        </div>
        {file && <p className="text-sm text-zinc-500">{file.name}</p>}
        <button 
          type="submit" 
          className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 flex items-center justify-center"
          disabled={!file}
        >
          <FileText className="mr-2" />
          Convert to CSV
        </button>
      </form>
    </div>
  );
};

const XMLToCSVInstructions: React.FC = () => (
  <>
    <h3 className="text-xl font-semibold mb-4">How to use:</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>Upload your XML file</li>
      <li>Click "Convert to CSV" to start the conversion</li>
      <li>Download the converted CSV file when processing is complete</li>
    </ol>
  </>
);

const XMLToCSV: React.FC = () => (
  <ToolPage
    title="XML to CSV Converter"
    toolComponent={<XMLToCSVTool />}
    instructions={<XMLToCSVInstructions />}
    category="convert"
  />
);

export default XMLToCSV;