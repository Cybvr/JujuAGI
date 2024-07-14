import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ToolPage from '../common/ToolPage';

const ImageResizerTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('');

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
          <div className="mt-2 space-x-2">
            <input
              type="number"
              placeholder="Width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="p-2 border rounded"
            />
          </div>
          <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
            Resize Image
          </button>
        </div>
      )}
    </div>
  );
};

const ImageResizerInstructions: React.FC = () => (
  <>
    <h3 className="text-xl font-semibold mb-4">Steps:</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>Upload an image file (PNG, JPG, etc.).</li>
      <li>Enter the desired width and height for your resized image.</li>
      <li>Click "Resize Image" to process your image.</li>
      <li>Download your resized image.</li>
    </ol>
  </>
);

const ImageResizer: React.FC = () => (
  <ToolPage
    title="Image Resizer"
    toolComponent={<ImageResizerTool />}
    instructions={<ImageResizerInstructions />}
    category="image"
  />
);

export default ImageResizer;