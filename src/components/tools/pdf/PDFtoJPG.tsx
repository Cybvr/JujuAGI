import React, { useState } from 'react';
import axios from 'axios';
import ToolPage from '../common/ToolPage';

const PDFtoJPGTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [convertedImages, setConvertedImages] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('pdf', file);

    try {
      const response = await axios.post('/convert', formData, {
        onUploadProgress: (progressEvent) => {
          const total = progressEvent.total ?? 0; // Use 0 if total is undefined
          const percentCompleted = Math.round((progressEvent.loaded * 100) / total);
          setProgress(percentCompleted);
        }
      });

      setConvertedImages(response.data.images);
      alert('Conversion complete!');
    } catch (error) {
      console.error('Error during conversion:', error);
      alert('Error during conversion');
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="file" onChange={handleFileChange} accept=".pdf" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" disabled={!file}>
          Convert
        </button>
      </form>
      {progress > 0 && <progress value={progress} max="100" className="w-full" />}
      {convertedImages.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Converted Images:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {convertedImages.map((image, index) => (
              <img key={index} src={image} alt={`Converted page ${index + 1}`} className="w-full h-auto" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const PDFtoJPGInstructions: React.FC = () => (
  <ol className="list-decimal list-inside space-y-2">
    <li>Click "Choose File" and select a PDF file</li>
    <li>Click the "Convert" button to start the conversion process</li>
    <li>Wait for the conversion to complete</li>
    <li>View and download the converted JPG images</li>
  </ol>
);

const PDFtoJPG: React.FC = () => (
  <ToolPage
    title="PDF to JPG Converter"
    toolComponent={<PDFtoJPGTool />}
    instructions={<PDFtoJPGInstructions />}
    category="pdf"
  />
);

export default PDFtoJPG;