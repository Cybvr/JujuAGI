import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ToolPage from '../common/ToolPage';

const MergePDFTool: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prev => [...prev, ...acceptedFiles]);
    console.log("Files accepted:", acceptedFiles.map(file => file.name));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: true
  });

  return (
    <div className="space-y-4">
      <div 
        {...getRootProps()} 
        className="bg-blue-500 p-16 rounded-lg text-center text-white cursor-pointer"
      >
        <input {...getInputProps()} />
        <button className="bg-white text-blue-500 px-4 py-2 rounded">
          Choose PDF files
        </button>
        <p className="mt-2">or drop PDF files here</p>
      </div>
      {files.length > 0 && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Selected files:</h3>
          <ul className="list-disc list-inside">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const MergePDFInstructions: React.FC = () => (
  <>
    <h3 className="text-xl font-semibold mb-4">Steps:</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>Select two or more PDF files you want to merge.</li>
      <li>Arrange the files in the order you want them to appear in the final document.</li>
      <li>Click "Merge PDFs" to combine the files.</li>
      <li>Download your merged PDF file.</li>
    </ol>
  </>
);

const MergePDF: React.FC = () => (
  <ToolPage
    title="Merge PDF Files"
    toolComponent={<MergePDFTool />}
    instructions={<MergePDFInstructions />}
    category="pdf"
  />
);

export default MergePDF;