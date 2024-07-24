import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import ToolPage from '../common/ToolPage';

const QRCodeGeneratorTool: React.FC = () => {
  const [text, setText] = useState('https://example.com/');
  const [size, setSize] = useState(128);
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const qrRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert('URL copied to clipboard!');
  };

  const handleDownload = () => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector('canvas');
      if (canvas) {
        const image = canvas.toDataURL("image/jpeg");
        const link = document.createElement('a');
        link.href = image;
        link.download = 'qrcode.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 p-4 bg-white dark:bg-zinc-800 rounded-lg">
      <div className="md:w-1/2 space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">URL</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text or URL"
            className="mt-1 block w-full rounded-md border-zinc-300 focus:border-zinc-300 focus:ring focus:ring-zinc-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Size: {size}x{size}</label>
          <input
            type="range"
            min="64"
            max="256"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Foreground Color</label>
          <input
            type="color"
            value={fgColor}
            onChange={(e) => setFgColor(e.target.value)}
            className="mt-1 block w-full h-10 rounded-md border-zinc-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Background Color</label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="mt-1 block w-full h-10 rounded-md border-zinc-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      </div>
      <div className="md:w-1/2 space-y-4">
        <div ref={qrRef} className="flex justify-center items-center bg-white p-4 rounded-lg" style={{ minHeight: '300px' }}>
          {text && <QRCode value={text} size={size} fgColor={fgColor} bgColor={bgColor} />}
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-zinc-700 text-sm text-white rounded-md hover:bg-indigo-600 transition"
          >
            Copy URL
          </button>
          <button
            onClick={handleDownload}
            className="px-5 py-1 bg-zinc-700 text-sm text-white rounded-md hover:bg-indigo-600 transition border-zinc-50"
          >
            Download as JPEG
          </button>
        </div>
      </div>
    </div>
  );
};

const QRCodeGeneratorInstructions: React.FC = () => (
  <>
    <h3 className="text-xl font-semibold mb-4">How to use:</h3>
    <ol className="list-decimal list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
      <li>Enter the text or URL you want to encode.</li>
      <li>Adjust the size using the slider.</li>
      <li>Choose foreground and background colors.</li>
      <li>The QR code will generate automatically.</li>
      <li>Click "Copy URL" to copy the text/URL to clipboard.</li>
      <li>Click "Download as JPEG" to save the QR code as an image.</li>
    </ol>
  </>
);

const QRCodeGenerator: React.FC = () => (
  <ToolPage
    title="QR Code Generator"
    toolComponent={<QRCodeGeneratorTool />}
    instructions={<QRCodeGeneratorInstructions />}
    category="convert"
  />
);

export default QRCodeGenerator;