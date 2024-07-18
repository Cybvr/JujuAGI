import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Star, Settings, Sparkles } from 'lucide-react';
// Import a different icon or component for 'Tools'

const MobileNavBar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Sparkles, label: 'Tools', path: '/all-tools' },
    { icon: Star, label: 'Favorites', path: '/favorites' },
    { icon: Settings, label: 'Settings', path: '/dashboard' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-800 shadow-top py-4">
      <ul className="flex justify-around items-center h-10">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <li key={item.label}>
              <Link
                to={item.path}
                className={`flex flex-col items-center ${
                  isActive ? 'text-zinc-800 dark:text-white' : 'text-zinc-400 dark:text-zinc-500'
                }`}
              >
                <IconComponent size={24} />
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
