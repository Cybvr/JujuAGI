import React, { useState, useEffect } from 'react';
import { Moon, Sun, Type, ArrowUpDown, Hash, AlignLeft, Image, Crop, Minimize, Maximize, RotateCw } from 'lucide-react';

const Scribe: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageScale, setImageScale] = useState<number>(100);
  const [rotation, setRotation] = useState<number>(0);

  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) setContent(savedContent);
  }, []);

  const textTools = [
    { icon: Type, name: 'Change Case', action: changeCase },
    { icon: ArrowUpDown, name: 'Sort Lines', action: sortLines },
    { icon: Hash, name: 'Word Count', action: wordCount },
    { icon: AlignLeft, name: 'Remove Extra Spaces', action: removeExtraSpaces },
  ];

  const imageTools = [
    { icon: Crop, name: 'Crop', action: () => alert('Crop feature not implemented') },
    { icon: Minimize, name: 'Zoom Out', action: () => setImageScale(Math.max(50, imageScale - 10)) },
    { icon: Maximize, name: 'Zoom In', action: () => setImageScale(Math.min(150, imageScale + 10)) },
    { icon: RotateCw, name: 'Rotate', action: () => setRotation((rotation + 90) % 360) },
  ];

  function changeCase() {
    setContent(content.toUpperCase());
  }

  function sortLines() {
    setContent(content.split('\n').sort().join('\n'));
  }

  function wordCount() {
    const count = content.trim().split(/\s+/).length;
    alert(`Word count: ${count}`);
  }

  function removeExtraSpaces() {
    setContent(content.replace(/\s+/g, ' ').trim());
  }

  function saveContent() {
    localStorage.setItem('editorContent', content);
    alert('Content saved successfully!');
  }

  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === 'string') {
          setSelectedImage(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className={`flex flex-col h-screen ${darkMode ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-800'}`}>
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex space-x-4">
          {textTools.map((tool) => (
            <button key={tool.name} onClick={tool.action} className="p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700" title={tool.name}>
              <tool.icon size={20} />
            </button>
          ))}
        </div>
        <div className="flex space-x-4">
          {imageTools.map((tool) => (
            <button key={tool.name} onClick={tool.action} className="p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700" title={tool.name}>
              <tool.icon size={20} />
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={saveContent} className="px-4 py-2 rounded bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            Export
          </button>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
      <div className="flex flex-grow p-4">
        <div className="w-1/2 pr-2">
          <textarea
            className={`w-full h-full p-2 resize-none focus:outline-none rounded-lg ${darkMode ? 'bg-zinc-800 text-white' : 'bg-zinc-100 text-zinc-800'}`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start typing..."
          />
        </div>
        <div className="w-1/2 pl-2 flex flex-col items-center justify-center">
          {selectedImage ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Uploaded image"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  transform: `scale(${imageScale / 100}) rotate(${rotation}deg)`,
                  transition: 'transform 0.3s ease',
                }}
              />
            </div>
          ) : (
            <div className="text-center">
              <label htmlFor="image-upload" className="cursor-pointer">
                <Image size={48} className="mx-auto mb-2" />
                <span className="text-sm">Click to upload an image</span>
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          )}
        </div>
      </div>
      <div className="p-4 border-t">
        <p className="text-xs text-center">Image Scale: {imageScale}% | Rotation: {rotation}°</p>
      </div>
    </div>
  );
};

export default Scribe;