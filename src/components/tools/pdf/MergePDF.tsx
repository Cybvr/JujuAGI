import React, { useState } from 'react';

const MergePDF: React.FC = () => {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the actual merging logic
    console.log("Merging PDFs:", files);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Merge PDF Files</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="file" 
          accept=".pdf"
          onChange={handleFileChange}
          multiple
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={!files || files.length < 2}
        >
          Merge PDFs
        </button>
      </form>
    </div>
  );
};

export default MergePDF;