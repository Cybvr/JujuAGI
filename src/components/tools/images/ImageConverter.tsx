import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ToolPage from '../common/ToolPage';

const ImageConverterTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [convertedImage, setConvertedImage] = useState<string | null>(null);
  const [targetFormat, setTargetFormat] = useState<'jpg' | 'png' | 'webp'>('png');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
    setConvertedImage(null);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, 
    accept: { 'image/*': [] },
    multiple: false 
  });

  const convertImage = (img: HTMLImageElement, format: string): string => {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(img, 0, 0);
    }
    return canvas.toDataURL(`image/${format}`);
  };

  const handleConvert = () => {
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      const convertedDataUrl = convertImage(img, targetFormat);
      setConvertedImage(convertedDataUrl);
    };
    img.src = URL.createObjectURL(file);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2 space-y-4">
        <div
          {...getRootProps()}
          className={`p-6 border-2 border-dashed rounded ${isDragActive ? 'border-indigo-500' : 'border-gray-300'} flex justify-center items-center h-64`}
          style={{ borderWidth: '1px' }}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-indigo-500">Drop the image here...</p>
          ) : (
            <p className="text-gray-500">Drag & drop an image here, or click to select a file</p>
          )}
        </div>
        {file && <p className="text-sm text-gray-500">{file.name}</p>}
        <div>
          <label className="block mb-2">Convert to:</label>
          <select 
            value={targetFormat} 
            onChange={(e) => setTargetFormat(e.target.value as 'jpg' | 'png' | 'webp')}
            className="w-full p-2 border rounded"
          >
            <option value="jpg">JPG</option>
            <option value="png">PNG</option>
            <option value="webp">WebP</option>
          </select>
        </div>
        <button 
          onClick={handleConvert} 
          className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600"
          disabled={!file}
        >
          Convert Image
        </button>
      </div>
      <div className="w-full md:w-1/2">
        {convertedImage && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Converted Image:</h3>
            <img src={convertedImage} alt="Converted" className="max-w-full h-auto" />
            <a 
              href={convertedImage} 
              download={`converted_image.${targetFormat}`}
              className="block mt-4 text-center bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Download Converted Image
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const ImageConverterInstructions: React.FC = () => (
  <ol className="list-decimal list-inside space-y-2">
    <li>Upload an image file by dragging and dropping or clicking to select.</li>
    <li>Choose the target format (JPG, PNG, or WebP) from the dropdown.</li>
    <li>Click "Convert Image" to process your image.</li>
    <li>Once converted, you can view and download the converted image.</li>
  </ol>
);

const ImageConverter: React.FC = () => (
  <ToolPage
    title="Image Converter"
    toolComponent={<ImageConverterTool />}
    instructions={<ImageConverterInstructions />}
    category="image"
  />
);

export default ImageConverter;