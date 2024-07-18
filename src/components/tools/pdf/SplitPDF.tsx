import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import ToolPage from '../common/ToolPage';

const SplitPDFTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [pageRange, setPageRange] = useState('');
  const [splitPdfUrl, setSplitPdfUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      setSplitPdfUrl(null);
    }
  };

  const splitPDF = async () => {
    if (!file || !pageRange) return;

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
  };

  return (
    <div className="space-y-4">
      <input 
        type="file" 
        accept=".pdf" 
        onChange={handleFileChange} 
        className="w-full p-2 border rounded"
      />
      <input 
        type="text" 
        value={pageRange} 
        onChange={(e) => setPageRange(e.target.value)} 
        placeholder="Enter page range (e.g., 1-3, 5, 7-9)" 
        className="w-full p-2 border rounded"
      />
      <button 
        onClick={splitPDF} 
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        disabled={!file || !pageRange}
      >
        Split PDF
      </button>
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
    <li>Upload a PDF file using the file input.</li>
    <li>Enter the page range you want to extract (e.g., 1-3, 5, 7-9).</li>
    <li>Click "Split PDF" to create a new PDF with the selected pages.</li>
    <li>Once split, you can download the resulting PDF file.</li>
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