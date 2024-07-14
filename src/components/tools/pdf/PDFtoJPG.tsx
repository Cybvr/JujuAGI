import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ToolPage from '../common/ToolPage';

const PDFtoJPGTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

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
    <div 
      {...getRootProps()} 
      className="bg-blue-500 p-16 rounded-lg text-center text-white cursor-pointer"
    >
      <input {...getInputProps()} />
      <button className="bg-white text-blue-500 px-4 py-2 rounded">
        Choose file
      </button>
      <p className="mt-2">or drop files here</p>
      {file && <p className="mt-2">Selected file: {file.name}</p>}
    </div>
  );
};

const PDFtoJPGInstructions: React.FC = () => (
  <>
    <h3 className="text-xl font-semibold mb-4">Steps:</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>Select the PDF file you want to convert from your device.</li>
      <li>Our system will process your PDF and convert it to high-quality JPG images.</li>
      <li>Download your converted JPG images individually or as a zip file.</li>
    </ol>
  </>
);

const PDFtoJPG: React.FC = () => (
  <ToolPage
    title="Convert PDF to JPG"
    toolComponent={<PDFtoJPGTool />}
    instructions={<PDFtoJPGInstructions />}
    category="pdf"
  />
);

export default PDFtoJPG;