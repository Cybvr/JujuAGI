import React, { useState } from 'react';
import * as pdfjs from 'pdfjs-dist';
import ToolPage from '../common/ToolPage';

// Initialize pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFtoJPGTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      setImages([]);
      setError(null);
    }
  };

  const convertToJPG = async () => {
    if (!file) return;

    setIsLoading(true);
    setError(null);
    setProgress(0);
    setImages([]);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument(arrayBuffer).promise;
      const totalPages = pdf.numPages;
      const convertedImages: string[] = [];

      for (let i = 1; i <= totalPages; i++) {
        const page = await pdf.getPage(i);
        const scale = 2;
        const viewport = page.getViewport({ scale });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        if (context) {
          await page.render({ canvasContext: context, viewport }).promise;
          const jpgImage = canvas.toDataURL('image/jpeg');
          convertedImages.push(jpgImage);
        }

        setProgress(Math.round((i / totalPages) * 100));
      }

      setImages(convertedImages);
    } catch (err) {
      setError('Error processing PDF. The file might be corrupted or unsupported.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input 
        type="file" 
        accept=".pdf" 
        onChange={handleFileChange} 
        className="w-full p-2 border rounded"
      />
      <button 
        onClick={convertToJPG} 
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        disabled={!file || isLoading}
      >
        {isLoading ? 'Converting...' : 'Convert PDF to JPG'}
      </button>
      {isLoading && (
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-center mt-2">Converting: {progress}%</p>
        </div>
      )}
      {error && (
        <p className="text-red-500">{error}</p>
      )}
      {images.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Converted Images:</h3>
          {images.map((img, index) => (
            <div key={index} className="space-y-2">
              <img src={img} alt={`Page ${index + 1}`} className="max-w-full h-auto" />
              <a 
                href={img} 
                download={`page_${index + 1}.jpg`}
                className="block text-center bg-green-500 text-white p-2 rounded hover:bg-green-600"
              >
                Download Page {index + 1}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const PDFtoJPGInstructions: React.FC = () => (
  <ol className="list-decimal list-inside space-y-2">
    <li>Upload a PDF file using the file input.</li>
    <li>Click "Convert PDF to JPG" to process your PDF.</li>
    <li>Wait for the conversion to complete. You'll see a progress bar during conversion.</li>
    <li>Once converted, you can view and download each page as a JPG image.</li>
    <li>If any errors occur, they will be displayed below the convert button.</li>
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