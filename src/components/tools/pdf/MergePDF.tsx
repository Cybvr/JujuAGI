import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { PDFDocument } from 'pdf-lib';
import ToolPage from '../common/ToolPage';

const MergePDFTool: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [mergedPdfUrl, setMergedPdfUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    setMergedPdfUrl(null);
    setError(null);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: true,
  });

  const mergePDFs = async () => {
    if (files.length < 2) return;
    setIsLoading(true);
    setError(null);

    try {
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
    } catch (err) {
      setError('Error merging PDFs. Please try again.');
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
          <p className="text-indigo-500">Drop the PDF files here...</p>
        ) : (
          <p className="text-gray-500">Drag & drop PDF files here, or click to select files</p>
        )}
      </div>
      <button 
        onClick={mergePDFs} 
        className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600"
        disabled={files.length < 2 || isLoading}
      >
        {isLoading ? 'Merging...' : 'Merge PDFs'}
      </button>
      {error && (
        <p className="text-red-500">{error}</p>
      )}
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
    <li>Upload two or more PDF files using the file input or drag and drop area.</li>
    <li>Click "Merge PDFs" to combine the uploaded PDFs into a single file.</li>
    <li>Once merged, you can download the resulting PDF file.</li>
    <li>If any errors occur, they will be displayed below the merge button.</li>
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