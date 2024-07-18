import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import ToolPage from '../common/ToolPage';

const RemoveBackgroundTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
    setProcessedImage(null);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ 
    onDrop, 
    accept: { 'image/*': [] },
    multiple: false 
  });

  const handleRemoveBackground = async () => {
    if (!file) return;

    setIsLoading(true);

    const formData = new FormData();
    formData.append('image_file', file);
    formData.append('size', 'auto');

    try {
      const response = await axios({
        method: 'post',
        url: 'https://api.remove.bg/v1.0/removebg',
        data: formData,
        responseType: 'arraybuffer',
        headers: {
          'X-Api-Key': 'tGUay4UJXvb5LbbbwaqMS9xn',
        },
      });

      const base64Image = Buffer.from(response.data, 'binary').toString('base64');
      setProcessedImage(`data:image/png;base64,${base64Image}`);
    } catch (error) {
      console.error('Error removing background:', error);
      alert('Error removing background. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div {...getRootProps()} className="bg-blue-500 p-16 rounded-lg text-center text-white cursor-pointer">
        <input {...getInputProps()} />
        <p>Drag 'n' drop an image here, or click to select an image</p>
      </div>
      {file && <p className="text-sm text-gray-500">{file.name}</p>}
      <button 
        onClick={handleRemoveBackground} 
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        disabled={!file || isLoading}
      >
        {isLoading ? 'Processing...' : 'Remove Background'}
      </button>
      {processedImage && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Processed Image:</h3>
          <img src={processedImage} alt="Processed" className="max-w-full h-auto" />
          <a 
            href={processedImage} 
            download="image_no_background.png"
            className="block mt-4 text-center bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Download Processed Image
          </a>
        </div>
      )}
    </div>
  );
};

const RemoveBackgroundInstructions: React.FC = () => (
  <ol className="list-decimal list-inside space-y-2">
    <li>Upload an image file by dragging and dropping or clicking to select.</li>
    <li>Click "Remove Background" to process your image.</li>
    <li>Wait for the processing to complete.</li>
    <li>Once processed, you can view and download the image with the background removed.</li>
  </ol>
);

const RemoveBackground: React.FC = () => (
  <ToolPage
    title="Remove Background"
    toolComponent={<RemoveBackgroundTool />}
    instructions={<RemoveBackgroundInstructions />}
    category="image"
  />
);

export default RemoveBackground;