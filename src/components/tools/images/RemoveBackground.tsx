import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ToolPage from '../common/ToolPage';

const RemoveBackgroundTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
    console.log("File accepted:", acceptedFiles[0].name);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
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
          Choose Image
        </button>
        <p className="mt-2">or drop image here</p>
      </div>
      {file && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-semibold">Selected file: {file.name}</p>
          <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
            Remove Background
          </button>
        </div>
      )}
    </div>
  );
};

const RemoveBackgroundInstructions: React.FC = () => (
  <>
    <h3 className="text-xl font-semibold mb-4">Steps:</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>Upload an image file (PNG, JPG, etc.).</li>
      <li>Our AI will automatically detect and remove the background.</li>
      <li>Download your image with a transparent background.</li>
    </ol>
  </>
);

const RemoveBackground: React.FC = () => (
  <ToolPage
    title="Remove Image Background"
    toolComponent={<RemoveBackgroundTool />}
    instructions={<RemoveBackgroundInstructions />}
    category="image"
  />
);

export default RemoveBackground;