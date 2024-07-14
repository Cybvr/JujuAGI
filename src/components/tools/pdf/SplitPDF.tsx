import React, { useState } from 'react';

const SplitPDF: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [splitAt, setSplitAt] = useState<number>(1);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the actual splitting logic
    console.log("Splitting PDF:", file, "at page", splitAt);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Split PDF File</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="file" 
          accept=".pdf"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input 
          type="number" 
          value={splitAt}
          onChange={(e) => setSplitAt(parseInt(e.target.value))}
          min={1}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Split at page number"
        />
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={!file}
        >
          Split PDF
        </button>
      </form>
    </div>
  );
};

export default SplitPDF;