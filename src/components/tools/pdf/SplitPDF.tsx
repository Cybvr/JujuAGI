import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ToolPage from '../common/ToolPage';

const SplitPDFTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [splitPages, setSplitPages] = useState<string>('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
    console.log("File accepted:", acceptedFiles[0].name);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: false
  });

  return (
    <div className="space-y-4">
      <div 
        {...getRootProps()} 
        className="bg-blue-500 p-16 rounded-lg text-center text-white cursor-pointer"
      >
        <input {...getInputProps()} />
        <button className="bg-white text-blue-500 px-4 py-2 rounded">
          Choose PDF file
        </button>
        <p className="mt-2">or drop PDF file here</p>
      </div>
      {file && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-semibold">Selected file: {file.name}</p>
          <input 
            type="text" 
            placeholder="Enter pages to split (e.g., 1-3, 5, 7-9)" 
            value={splitPages}
            onChange={(e) => setSplitPages(e.target.value)}
            className="mt-2 w-full p-2 border rounded"
          />
        </div>
      )}
    </div>
  );
};

const SplitPDFInstructions: React.FC = () => (
  <>
    <h3 className="text-xl font-semibold mb-4">Steps:</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>Select the PDF file you want to split.</li>
      <li>Enter the page ranges you want to extract (e.g., 1-3, 5, 7-9).</li>
      <li>Click "Split PDF" to create new PDF files from the selected pages.</li>
      <li>Download your split PDF files.</li>
    </ol>
  </>
);

const SplitPDF: React.FC = () => (
  <ToolPage
    title="Split PDF File"
    toolComponent={<SplitPDFTool />}
    instructions={<SplitPDFInstructions />}
    category="pdf"
  />
);

export default SplitPDF;