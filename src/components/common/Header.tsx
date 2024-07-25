import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X, Search, ChevronDown, Image, FileText, Edit, RefreshCw, Info, Newspaper, List } from 'lucide-react';
import logo from '../../logoblack.png';
import mobilelogo from '../../assets/images/app/juju-192x192.png';
import { useAuth } from '../../contexts/AuthContext';
import UserMenu from './../UserMenu';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  tools: { name: string; path: string }[];
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode, tools }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ name: string; path: string }[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    {
      name: 'Tools',
      children: [
        { name: 'All Tools', path: '/all-tools', icon: <List size={16} /> },
        { name: 'Image', path: '/all-tools?category=image', icon: <Image size={16} /> },
        { name: 'PDF', path: '/all-tools?category=pdf', icon: <FileText size={16} /> },
        { name: 'Writing', path: '/all-tools?category=writing', icon: <Edit size={16} /> },
        { name: 'Convert', path: '/all-tools?category=convert', icon: <RefreshCw size={16} /> }
      ]
    },
    {
      name: 'About',
      children: [
        { name: 'Company', path: '/about', icon: <Info size={16} /> },
        { name: 'Blog', path: '/blog', icon: <Newspaper size={16} /> },
        { name: 'Changelog', path: '/changelog', icon: <List size={16} /> }
      ]
    },
    { name: 'FAQ', path: '/faq' },
    { name: 'Pricing', path: '/pricing' }
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  const toggleDropdown = (dropdownName: string) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      const results = tools.filter(tool =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchItemClick = (path: string) => {
    navigate(path);
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <header className="bg-white dark:bg-zinc-800 shadow-sm sticky top-0 z-10 border-b border-zinc-300 dark:border-zinc-700">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center space-x-4">
          <div className="flex items-center space-x-4 sm:space-x-16">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Juju Logo" className="w-24 h-8 hidden sm:block" />
              <img src={mobilelogo} alt="Juju Logo" className="w-10 h-10 sm:hidden" />
            </Link>
            <div className="hidden sm:flex space-x-4 md:space-x-6 items-center" ref={dropdownRef}>
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="text-zinc-500 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center"
                      >
                        {item.name} <ChevronDown size={16} className="ml-1" />
                      </button>
                      <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-zinc-700 ring-1 ring-black ring-opacity-5 ${activeDropdown === item.name ? 'block' : 'hidden'}`}>
                        {item.children.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavigation(subItem.path)}
                            className="block px-4 py-2 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-600 w-full text-left flex items-center"
                          >
                            {subItem.icon && <span className="mr-2">{subItem.icon}</span>}
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.path!)}
                      className="text-zinc-500 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block relative">
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-4 py-2 pr-10 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white w-48"
                />
                <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400">
                  <Search size={16} />
                </button>
              </form>
              {searchResults.length > 0 && (
                <div className="absolute mt-2 w-48 bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-lg">
                  {searchResults.map((result) => (
                    <button
                      key={result.path}
                      onClick={() => handleSearchItemClick(result.path)}
                      className="block w-full text-left px-4 py-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-600"
                    >
                      {result.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={toggleDarkMode}
              className="text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {currentUser ? (
              <UserMenu />
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-white dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-600"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Get Started
                </Link>
              </>
            )}
            <button
              className="sm:hidden text-zinc-600 dark:text-zinc-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mt-4 sm:hidden">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="block w-full text-left py-2 text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      {item.name}
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4">
                        {item.children.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavigation(subItem.path)}
                            className="block w-full text-left py-2 text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center"
                          >
                            {subItem.icon && <span className="mr-2">{subItem.icon}</span>}
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.path!)}
                    className="block w-full text-left py-2 text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;