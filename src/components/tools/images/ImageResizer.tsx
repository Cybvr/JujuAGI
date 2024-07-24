import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ToolPage from '../common/ToolPage';

const ImageResizerTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [resizeOption, setResizeOption] = useState<'pixels' | 'percentage'>('pixels');
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
  const [resizedImage, setResizedImage] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
    setResizedImage(null);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ 
    onDrop, 
    accept: { 'image/*': [] },
    multiple: false 
  });

  const resizeImage = (img: HTMLImageElement, width: number, height: number): string => {
    const canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    if (ctx) {
      ctx.drawImage(img, 0, 0, width, height);
    }

    return canvas.toDataURL('image/jpeg');
  };

  const handleResize = () => {
    if (!file) return;

    const img = new Image();
    img.onload = () => {
      let newWidth = parseInt(width);
      let newHeight = parseInt(height);

      if (resizeOption === 'percentage') {
        newWidth = img.width * (parseInt(width) / 100);
        newHeight = img.height * (parseInt(height) / 100);
      }

      if (maintainAspectRatio) {
        if (newWidth && !newHeight) {
          newHeight = (img.height / img.width) * newWidth;
        } else if (!newWidth && newHeight) {
          newWidth = (img.width / img.height) * newHeight;
        } else if (newWidth && newHeight) {
          const ratio = Math.min(newWidth / img.width, newHeight / img.height);
          newWidth = img.width * ratio;
          newHeight = img.height * ratio;
        }
      }

      const resizedDataUrl = resizeImage(img, newWidth, newHeight);
      setResizedImage(resizedDataUrl);
    };
    img.src = URL.createObjectURL(file);
  };

  return (
    <div className="space-y-4">
      <div {...getRootProps()} className="bg-indigo-500 p-16 rounded-lg text-center text-white cursor-pointer">
        <input {...getInputProps()} />
        <p>Drag 'n' drop an image here, or click to select an image</p>
      </div>
      {file && <p className="text-sm text-gray-500">{file.name}</p>}
      <div className="flex space-x-4">
        <input 
          type="number" 
          placeholder="Width" 
          value={width} 
          onChange={(e) => setWidth(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <input 
          type="number" 
          placeholder="Height" 
          value={height} 
          onChange={(e) => setHeight(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
      </div>
      <div>
        <label className="mr-4">
          <input 
            type="radio" 
            value="pixels" 
            checked={resizeOption === 'pixels'} 
            onChange={() => setResizeOption('pixels')}
          /> Pixels
        </label>
        <label>
          <input 
            type="radio" 
            value="percentage" 
            checked={resizeOption === 'percentage'} 
            onChange={() => setResizeOption('percentage')}
          /> Percentage
        </label>
      </div>
      <div>
        <label>
          <input 
            type="checkbox" 
            checked={maintainAspectRatio} 
            onChange={(e) => setMaintainAspectRatio(e.target.checked)}
          /> Maintain aspect ratio
        </label>
      </div>
      <button 
        onClick={handleResize} 
        className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600"
        disabled={!file || (!width && !height)}
      >
        Resize Image
      </button>
      {resizedImage && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Resized Image:</h3>
          <img src={resizedImage} alt="Resized" className="max-w-full h-auto" />
          <a 
            href={resizedImage} 
            download="resized_image.jpg" 
            className="block mt-4 text-center bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Download Resized Image
          </a>
        </div>
      )}
    </div>
  );
};

const ImageResizerInstructions: React.FC = () => (
  <ol className="list-decimal list-inside space-y-2">
    <li>Upload an image file by dragging and dropping or clicking to select.</li>
    <li>Enter the desired width and/or height for your resized image.</li>
    <li>Choose whether to resize by pixels or percentage.</li>
    <li>Decide if you want to maintain the aspect ratio.</li>
    <li>Click "Resize Image" to process your image.</li>
    <li>Once resized, you can view and download the resized image.</li>
  </ol>
);

const ImageResizer: React.FC = () => (
  <ToolPage
    title="Image Resizer"
    toolComponent={<ImageResizerTool />}
    instructions={<ImageResizerInstructions />}
    category="image"
  />
);

export default ImageResizer;