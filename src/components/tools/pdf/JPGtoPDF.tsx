import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { PDFDocument } from 'pdf-lib';
import ToolPage from '../common/ToolPage';

const JPGtoPDFTool: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    setPdfUrl(null);
    setError(null);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/jpeg': ['.jpg', '.jpeg'] },
    multiple: true,
  });

  const convertToPDF = async () => {
    if (files.length === 0) return;
    setIsLoading(true);
    setError(null);

    try {
      const pdfDoc = await PDFDocument.create();
      for (const file of files) {
        const imageBytes = await file.arrayBuffer();
        const image = await pdfDoc.embedJpg(imageBytes);
        const page = pdfDoc.addPage([image.width, image.height]);
        page.drawImage(image, {
          x: 0,
          y: 0,
          width: image.width,
          height: image.height,
        });
      }
      const pdfBytes = await pdfDoc.save();
      const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
      setPdfUrl(URL.createObjectURL(pdfBlob));
    } catch (err) {
      setError('Error creating PDF. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4 p-4">
      <div
        {...getRootProps()}
        className={`p-6 border-2 border-dashed rounded ${isDragActive ? 'border-indigo-500' : 'border-gray-300'} flex justify-center items-center h-96`}
        style={{ borderWidth: '1px' }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-indigo-500">Drop the JPG files here...</p>
        ) : (
          <p className="text-gray-500">Drag & drop JPG files here, or click to select files</p>
        )}
      </div>
      <button
        onClick={convertToPDF}
        className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600"
        disabled={files.length === 0 || isLoading}
      >
        {isLoading ? 'Converting...' : 'Convert JPGs to PDF'}
      </button>
      {error && (
        <p className="text-red-500">{error}</p>
      )}
      {pdfUrl && (
        <div className="space-y-2">
          <p>PDF created successfully!</p>
          <a 
            href={pdfUrl} 
            download="converted.pdf"
            className="block text-center bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Download PDF
          </a>
        </div>
      )}
    </div>
  );
};

const JPGtoPDFInstructions: React.FC = () => (
  <ol className="list-decimal list-inside space-y-2">
    <li>Upload one or more JPG files using the file input or drag and drop area.</li>
    <li>Click "Convert JPGs to PDF" to create a PDF from your images.</li>
    <li>Once converted, you can download the resulting PDF file.</li>
    <li>If any errors occur, they will be displayed below the convert button.</li>
  </ol>
);

const JPGtoPDF: React.FC = () => (
  <ToolPage
    title="JPG to PDF Converter"
    toolComponent={<JPGtoPDFTool />}
    instructions={<JPGtoPDFInstructions />}
    category="pdf"
  />
);

export default JPGtoPDF;