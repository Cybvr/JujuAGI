import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Wrench, User, Settings } from 'lucide-react';

const MobileNavBar: React.FC = () => {
  const location = useLocation();
  const hiddenPaths = ['/login', '/signup', '/dashboard'];

  if (hiddenPaths.includes(location.pathname) || location.pathname.startsWith('/dashboard')) {
    return null;
  }

  const navItems = [
    { icon: <Home size={24} />, label: 'Home', path: '/' },
    { icon: <Wrench size={24} />, label: 'Tools', path: '/all-tools' },
    { icon: <User size={24} />, label: 'Account', path: '/account' },
    { icon: <Settings size={24} />, label: 'Settings', path: '/settings' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-top">
      <ul className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.label}>
              <Link
                to={item.path}
                className={`flex flex-col items-center ${
                  isActive ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {item.icon}
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNavBar;