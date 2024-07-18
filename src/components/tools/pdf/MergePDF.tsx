import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import ToolPage from '../common/ToolPage';

const MergePDFTool: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [mergedPdfUrl, setMergedPdfUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
      setMergedPdfUrl(null);
    }
  };

  const mergePDFs = async () => {
    if (files.length === 0) return;

    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      const pdfBytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(pdfBytes);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const pdfBytes = await mergedPdf.save();
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    setMergedPdfUrl(URL.createObjectURL(pdfBlob));
  };

  return (
    <div className="space-y-4">
      <input 
        type="file" 
        accept=".pdf" 
        multiple 
        onChange={handleFileChange} 
        className="w-full p-2 border rounded"
      />
      <button 
        onClick={mergePDFs} 
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        disabled={files.length < 2}
      >
        Merge PDFs
      </button>
      {mergedPdfUrl && (
        <div className="space-y-2">
          <p>PDFs merged successfully!</p>
          <a 
            href={mergedPdfUrl} 
            download="merged.pdf"
            className="block text-center bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Download Merged PDF
          </a>
        </div>
      )}
    </div>
  );
};

const MergePDFInstructions: React.FC = () => (
  <ol className="list-decimal list-inside space-y-2">
    <li>Upload two or more PDF files using the file input.</li>
    <li>Click "Merge PDFs" to combine the uploaded PDFs into a single file.</li>
    <li>Once merged, you can download the resulting PDF file.</li>
  </ol>
);

const MergePDF: React.FC = () => (
  <ToolPage
    title="Merge PDF Files"
    toolComponent={<MergePDFTool />}
    instructions={<MergePDFInstructions />}
    category="pdf"
  />
);

export default MergePDF;