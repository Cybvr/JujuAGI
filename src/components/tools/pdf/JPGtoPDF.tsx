import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import ToolPage from '../common/ToolPage';

const JPGtoPDFTool: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
      setPdfUrl(null);
    }
  };

  const convertToPDF = async () => {
    if (files.length === 0) return;

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
  };

  return (
    <div className="space-y-4">
      <input 
        type="file" 
        accept=".jpg,.jpeg" 
        multiple 
        onChange={handleFileChange} 
        className="w-full p-2 border rounded"
      />
      <button 
        onClick={convertToPDF} 
        className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600"
        disabled={files.length === 0}
      >
        Convert JPGs to PDF
      </button>
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
    <li>Upload one or more JPG files using the file input.</li>
    <li>Click "Convert JPGs to PDF" to create a PDF from your images.</li>
    <li>Once converted, you can download the resulting PDF file.</li>
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