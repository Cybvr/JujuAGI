import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import logo from '../logoblack.png';
import mobilelogo from '../assets/images/app/juju-192x192.png';
import { useAuth } from '../contexts/AuthContext';
import UserMenu from './UserMenu';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'All Tools', path: '/all-tools' },
    { name: 'Image', path: '/all-tools?category=image' },
    { name: 'PDF', path: '/all-tools?category=pdf' },
    { name: 'Writing', path: '/all-tools?category=writing' },
    { name: 'Convert', path: '/all-tools?category=convert' },
    { name: 'Pricing', path: '/pricing' },
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="bg-white dark:bg-zinc-800 shadow-sm sticky top-0 z-10 border-b border-zinc-300 dark:border-zinc-700 hidden md:block">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-12">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Juju Logo" 
                className="w-24 h-8 hidden md:block" 
              />
              <img 
                src={mobilelogo} 
                alt="Juju Logo" 
                className="w-10 h-10 md:hidden" 
              />
            </Link>
            <div className="hidden md:flex space-x-4 items-center">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="text-zinc-500 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {currentUser ? (
              <UserMenu />
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-white dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-600 border border-zinc-300 dark:border-zinc-600"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </>
            )}
            <button
              className="md:hidden text-zinc-600 dark:text-zinc-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-4">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="block w-full text-left py-2 text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;