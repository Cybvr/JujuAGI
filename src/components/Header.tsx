// components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Juju</div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Home</Link>
          <div className="relative inline-block text-left">
            <button className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              Tools ▼
            </button>
            <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link to="/tool/image" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Image</Link>
                <Link to="/tool/document" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Document</Link>
                <Link to="/tool/text" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Text</Link>
                <Link to="/tool/audio" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Audio</Link>
                <Link to="/tool/swap" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Swap</Link>
              </div>
            </div>
          </div>
          <Link to="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Pricing</Link>
          <button onClick={() => setDarkMode(!darkMode)} className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/login" className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">Sign In</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;