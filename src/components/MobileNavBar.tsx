import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMagicWandSparkles, faUser } from '@fortawesome/free-solid-svg-icons';

const MobileNavBar: React.FC = () => {
  const location = useLocation();
  const hiddenPaths = ['/login', '/signup', '/dashboard'];

  if (hiddenPaths.includes(location.pathname) || location.pathname.startsWith('/dashboard')) {
    return null;
  }

  const navItems = [
    { icon: faHome, label: 'Home', path: '/' },
    { icon: faMagicWandSparkles, label: 'Tools', path: '/all-tools' },
    { icon: faUser, label: 'Account', path: '/dashboard' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-800 shadow-top">
      <ul className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.label}>
              <Link
                to={item.path}
                className={`flex flex-col items-center ${
                  isActive ? 'text-blue-500' : 'text-zinc-500 dark:text-zinc-300'
                }`}
              >
                <FontAwesomeIcon icon={item.icon} size="lg" />
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