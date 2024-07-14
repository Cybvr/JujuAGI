import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ToolPage from '../common/ToolPage';

const ImageCompressorTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState<number>(80);

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
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700">
              Compression Quality: {quality}%
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
            Compress Image
          </button>
        </div>
      )}
    </div>
  );
};

const ImageCompressorInstructions: React.FC = () => (
  <>
    <h3 className="text-xl font-semibold mb-4">Steps:</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>Upload an image file (PNG, JPG, etc.).</li>
      <li>Adjust the compression quality slider as needed.</li>
      <li>Click "Compress Image" to process your image.</li>
      <li>Download your compressed image.</li>
    </ol>
  </>
);

const ImageCompressor: React.FC = () => (
  <ToolPage
    title="Image Compressor"
    toolComponent={<ImageCompressorTool />}
    instructions={<ImageCompressorInstructions />}
    category="image"
  />
);

export default ImageCompressor;