import React, { useState } from 'react';
import ToolPage from '../common/ToolPage';

const TextCaseConverterTool: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const convertCase = (type: 'upper' | 'lower' | 'title') => {
    switch (type) {
      case 'upper':
        setOutputText(inputText.toUpperCase());
        break;
      case 'lower':
        setOutputText(inputText.toLowerCase());
        break;
      case 'title':
        setOutputText(
          inputText
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        );
        break;
    }
  };

  return (
    <div className="space-y-4">
      <textarea
        className="w-full p-2 border rounded"
        rows={5}
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter your text here"
      />
      <div className="flex space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => convertCase('upper')}
        >
          UPPERCASE
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => convertCase('lower')}
        >
          lowercase
        </button>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded"
          onClick={() => convertCase('title')}
        >
          Title Case
        </button>
      </div>
      <textarea
        className="w-full p-2 border rounded"
        rows={5}
        value={outputText}
        readOnly
        placeholder="Converted text will appear here"
      />
    </div>
  );
};

const TextCaseConverterInstructions: React.FC = () => (
  <>
    <ol className="list-decimal list-inside space-y-2">
      <li>Enter or paste your text in the input box</li>
      <li>Click on the desired case conversion button</li>
      <li>View the converted text in the output box</li>
    </ol>
  </>
);

const TextCaseConverter: React.FC = () => (
  <ToolPage
    title="Text Case Converter"
    toolComponent={<TextCaseConverterTool />}
    instructions={<TextCaseConverterInstructions />}
    category="writing"
  />
);

export default TextCaseConverter;