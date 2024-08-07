import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { User, Settings, LogOut } from 'lucide-react';

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { currentUser, logOut } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logOut();
      // Redirect to home page or login page after logout
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center focus:outline-none"
      >
        <img
          src={currentUser?.photoURL || 'https://via.placeholder.com/40'}
          alt="User avatar"
          className="w-10 h-10 rounded-full"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          <div className="px-4 py-2 text-sm text-zinc-700">
            {currentUser?.displayName || 'User'}
            <br />
            {currentUser?.email}
          </div>
          <hr />
          <Link to="/dashboard" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 flex items-center">
            <User className="mr-2" size={16} /> Dashboard
          </Link>
          <Link to="/settings" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 flex items-center">
            <Settings className="mr-2" size={16} /> Settings
          </Link>
          
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 flex items-center"
          >
            <LogOut className="mr-2" size={16} /> Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;