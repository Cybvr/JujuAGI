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

  const { getRootProps, getInputProps } = useDropzone({ 
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
    <div className="space-y-4">
      <div {...getRootProps()} className="bg-blue-500 p-16 rounded-lg text-center text-white cursor-pointer">
        <input {...getInputProps()} />
        <p>Drag 'n' drop an image here, or click to select an image</p>
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
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        disabled={!file}
      >
        Convert Image
      </button>
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