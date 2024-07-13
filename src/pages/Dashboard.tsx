import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, User, Wrench, Clock, Settings, CreditCard, HelpCircle, MessageSquare, LogOut, Menu, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

// Import your menu components
import DashboardContent from '../components/settings/DashboardContent';
import Profile from '../components/settings/Profile';
import MyTools from '../components/settings/MyTools';
import RecentConversions from '../components/settings/RecentConversions';
import SettingsComponent from '../components/settings/SettingsComponent';
import Subscription from '../components/settings/Subscription';
import HelpSupport from '../components/settings/HelpSupport';
import SendFeedback from '../components/settings/SendFeedback';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, logOut } = useAuth();
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const menuItems = [
    { name: 'Dashboard', icon: Home, component: DashboardContent },
    { name: 'Profile', icon: User, component: Profile },
    { name: 'My Tools', icon: Wrench, component: MyTools },
    { name: 'Recent Conversions', icon: Clock, component: RecentConversions },
    { name: 'Settings', icon: Settings, component: SettingsComponent },
    { name: 'Subscription', icon: CreditCard, component: Subscription },
    { name: 'Help and Support', icon: HelpCircle, component: HelpSupport },
    { name: 'Send Feedback', icon: MessageSquare, component: SendFeedback },
  ];

  const ActiveComponent = menuItems.find(item => item.name === activeMenu)?.component || DashboardContent;

  const handleMenuItemClick = (name: string) => {
    setActiveMenu(name);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header with dropdown for mobile only */}
      <header className="md:hidden bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Menu size={24} />
              <ChevronDown size={20} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-20">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleMenuItemClick(item.name)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <item.icon className="inline-block w-4 h-4 mr-2" />
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <LogOut className="inline-block w-4 h-4 mr-2" />
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar for desktop */}
        <aside className="hidden md:block w-64 bg-white dark:bg-gray-800 h-screen sticky top-0 p-4">
          <nav>
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuItemClick(item.name)}
                className={`flex items-center w-full px-4 py-2 mt-2 text-left ${
                  activeMenu === item.name
                    ? 'bg-gray-200 dark:bg-gray-700 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </button>
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 mt-2 text-left text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Log out
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          <h2 className="text-3xl font-bold mb-8">Welcome, {currentUser?.email || 'User'}!</h2>
          <ActiveComponent />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;