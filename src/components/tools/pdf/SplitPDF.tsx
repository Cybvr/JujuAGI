import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { PDFDocument } from 'pdf-lib';
import ToolPage from '../common/ToolPage';

const SplitPDFTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [pageRange, setPageRange] = useState('');
  const [splitPdfUrl, setSplitPdfUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
    setSplitPdfUrl(null);
    setError(null);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: false,
  });

  const splitPDF = async () => {
    if (!file || !pageRange) return;
    setIsLoading(true);
    setError(null);

    try {
      const pdfBytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const ranges = pageRange.split(',').map(range => range.trim());
      const pagesToExtract = new Set<number>();
      ranges.forEach(range => {
        if (range.includes('-')) {
          const [start, end] = range.split('-').map(Number);
          for (let i = start; i <= end; i++) {
            pagesToExtract.add(i - 1); // PDF pages are 0-indexed
          }
        } else {
          pagesToExtract.add(Number(range) - 1);
        }
      });
      const newPdfDoc = await PDFDocument.create();
      const copiedPages = await newPdfDoc.copyPages(pdfDoc, Array.from(pagesToExtract));
      copiedPages.forEach(page => newPdfDoc.addPage(page));
      const newPdfBytes = await newPdfDoc.save();
      const pdfBlob = new Blob([newPdfBytes], { type: 'application/pdf' });
      setSplitPdfUrl(URL.createObjectURL(pdfBlob));
    } catch (err) {
      setError('Error splitting PDF. Please check your page range and try again.');
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
          <p className="text-indigo-500">Drop the PDF file here...</p>
        ) : (
          <p className="text-gray-500">Drag & drop a PDF file here, or click to select a file</p>
        )}
      </div>
      <input 
        type="text" 
        value={pageRange} 
        onChange={(e) => setPageRange(e.target.value)} 
        placeholder="Enter page range (e.g., 1-3, 5, 7-9)" 
        className="w-full p-2 border rounded"
      />
      <button 
        onClick={splitPDF} 
        className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600"
        disabled={!file || !pageRange || isLoading}
      >
        {isLoading ? 'Splitting...' : 'Split PDF'}
      </button>
      {error && (
        <p className="text-red-500">{error}</p>
      )}
      {splitPdfUrl && (
        <div className="space-y-2">
          <p>PDF split successfully!</p>
          <a 
            href={splitPdfUrl} 
            download="split.pdf"
            className="block text-center bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Download Split PDF
          </a>
        </div>
      )}
    </div>
  );
};

const SplitPDFInstructions: React.FC = () => (
  <ol className="list-decimal list-inside space-y-2">
    <li>Upload a PDF file using the file input or drag and drop area.</li>
    <li>Enter the page range you want to extract (e.g., 1-3, 5, 7-9).</li>
    <li>Click "Split PDF" to create a new PDF with the selected pages.</li>
    <li>Once split, you can download the resulting PDF file.</li>
    <li>If any errors occur, they will be displayed below the split button.</li>
  </ol>
);

const SplitPDF: React.FC = () => (
  <ToolPage
    title="Split PDF"
    toolComponent={<SplitPDFTool />}
    instructions={<SplitPDFInstructions />}
    category="pdf"
  />
);

export default SplitPDF;