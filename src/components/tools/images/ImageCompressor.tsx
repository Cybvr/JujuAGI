import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ToolPage from '../common/ToolPage';

const ImageCompressorTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);
  const [compressionLevel, setCompressionLevel] = useState<number>(0.7);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
    setCompressedImage(null);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ 
    onDrop, 
    accept: { 'image/*': [] },
    multiple: false 
  });

  const compressImage = (img: HTMLImageElement, quality: number): Promise<string> => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
      }
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(URL.createObjectURL(blob));
          }
        },
        'image/jpeg',
        quality
      );
    });
  };

  const handleCompress = async () => {
    if (!file) return;

    const img = new Image();
    img.onload = async () => {
      const compressedDataUrl = await compressImage(img, compressionLevel);
      setCompressedImage(compressedDataUrl);
    };
    img.src = URL.createObjectURL(file);
  };

  return (
    <div className="space-y-4">
      <div {...getRootProps()} className="bg-indigo-500 p-16 rounded-lg text-center text-white cursor-pointer">
        <input {...getInputProps()} />
        <p>Drag 'n' drop an image here, or click to select an image</p>
      </div>
      {file && <p className="text-sm text-zinc-500">{file.name}</p>}
      <div>
        <label className="block mb-2">Compression Level:</label>
        <input 
          type="range" 
          min="0.1" 
          max="1" 
          step="0.1" 
          value={compressionLevel}
          onChange={(e) => setCompressionLevel(parseFloat(e.target.value))}
          className="w-full"
        />
        <p className="text-sm text-zinc-500 mt-1">
          {compressionLevel < 0.4 ? 'High' : compressionLevel < 0.7 ? 'Medium' : 'Low'} Compression
        </p>
      </div>
      <button 
        onClick={handleCompress} 
        className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600"
        disabled={!file}
      >
        Compress Image
      </button>
      {compressedImage && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Compressed Image:</h3>
          <img src={compressedImage} alt="Compressed" className="max-w-full h-auto" />
          <a 
            href={compressedImage} 
            download="compressed_image.jpg"
            className="block mt-4 text-center bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Download Compressed Image
          </a>
        </div>
      )}
    </div>
  );
};

const ImageCompressorInstructions: React.FC = () => (
  <ol className="list-decimal list-inside space-y-2">
    <li>Upload an image file by dragging and dropping or clicking to select.</li>
    <li>Adjust the compression level using the slider (Low, Medium, High).</li>
    <li>Click "Compress Image" to process your image.</li>
    <li>Once compressed, you can view and download the compressed image.</li>
  </ol>
);

const ImageCompressor: React.FC = () => (
  <ToolPage
    title="Image Compressor"
    toolComponent={<ImageCompressorTool />}
    instructions={<ImageCompressorInstructions />}
    category="image"
  />
);

export default ImageCompressor;