import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ToolPage from '../common/ToolPage';

const JPGtoPDFTool: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    console.log("Files accepted:", acceptedFiles.map(file => file.name));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/jpeg': ['.jpg', '.jpeg'] },
    multiple: true
  });

  return (
    <div 
      {...getRootProps()} 
      className="bg-blue-500 p-16 rounded-lg text-center text-white cursor-pointer"
    >
      <input {...getInputProps()} />
      <button className="bg-white text-blue-500 px-4 py-2 rounded">
        Choose JPG files
      </button>
      <p className="mt-2">or drop JPG files here</p>
      {files.length > 0 && (
        <p className="mt-2">Selected files: {files.map(file => file.name).join(', ')}</p>
      )}
    </div>
  );
};

const JPGtoPDFInstructions: React.FC = () => (
  <>
    <h3 className="text-xl font-semibold mb-4">Steps:</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>Select one or more JPG images you want to convert.</li>
      <li>Our system will process your images and combine them into a single PDF file.</li>
      <li>Download your converted PDF file.</li>
    </ol>
  </>
);

const JPGtoPDF: React.FC = () => (
  <ToolPage
    title="Convert JPG to PDF"
    toolComponent={<JPGtoPDFTool />}
    instructions={<JPGtoPDFInstructions />}
    category="pdf"
  />
);

export default JPGtoPDF;