import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import logo from '../logoblack.png'; // Update the path to match your file structure

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Image', path: '/tool/image' },
    { name: 'Document', path: '/tool/document' },
    { name: 'Text', path: '/tool/text' },
    { name: 'Audio', path: '/tool/audio' },
    { name: 'Swap', path: '/tool/swap' },
  ];

  return (
    <header className="bg-white dark:bg-white shadow-sm sticky top-0 z-10 border-b border-gray-300">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo linking to home page */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Juju Logo" className="w-32 h-10" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 dark:text-gray-900 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right-side items */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link
              to="/pricing"
              className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-100 border border-gray-300 dark:hover:text-gray-900"
            >
              Premium
            </Link>
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Sign In
            </Link>
            {/* Hamburger menu button for mobile */}
            <button
              className="md:hidden text-gray-600 dark:text-gray-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;