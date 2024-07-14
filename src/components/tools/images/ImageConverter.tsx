import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ToolPage from '../common/ToolPage';

const ImageConverterTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [format, setFormat] = useState<string>('png');

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
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="mt-2 p-2 border rounded"
          >
            <option value="png">PNG</option>
            <option value="jpg">JPG</option>
            <option value="webp">WebP</option>
            <option value="gif">GIF</option>
          </select>
          <button className="ml-2 bg-green-500 text-white px-4 py-2 rounded">
            Convert Image
          </button>
        </div>
      )}
    </div>
  );
};

const ImageConverterInstructions: React.FC = () => (
  <>
    <h3 className="text-xl font-semibold mb-4">Steps:</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>Upload an image file.</li>
      <li>Select the desired output format (PNG, JPG, WebP, or GIF).</li>
      <li>Click "Convert Image" to process your image.</li>
      <li>Download your converted image.</li>
    </ol>
  </>
);

const ImageConverter: React.FC = () => (
  <ToolPage
    title="Image Converter"
    toolComponent={<ImageConverterTool />}
    instructions={<ImageConverterInstructions />}
    category="image"
  />
);

export default ImageConverter;