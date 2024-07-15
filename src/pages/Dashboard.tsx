import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Settings, CreditCard, HelpCircle, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';

// Import your menu components
import DashboardContent from '../components/settings/DashboardContent';
import SettingsComponent from '../components/settings/SettingsComponent';
import Subscription from '../components/settings/Subscription';
import HelpSupport from '../components/settings/HelpSupport';

enum MenuItemName {
  Dashboard = 'Dashboard',
  Settings = 'Settings',
  Subscription = 'Subscription',
  HelpAndSupport = 'Help and Support'
}

interface MenuItem {
  name: MenuItemName;
  icon: React.ElementType;
  component: React.ComponentType;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, logOut } = useAuth();
  const [activeMenu, setActiveMenu] = useState<MenuItemName>(MenuItemName.Dashboard);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const menuItems: MenuItem[] = [
    { name: MenuItemName.Dashboard, icon: Home, component: DashboardContent },
    { name: MenuItemName.Settings, icon: Settings, component: SettingsComponent },
    { name: MenuItemName.Subscription, icon: CreditCard, component: Subscription },
    { name: MenuItemName.HelpAndSupport, icon: HelpCircle, component: HelpSupport },
  ];

  const ActiveComponent = menuItems.find(item => item.name === activeMenu)?.component || DashboardContent;

  const renderMenuItem = (item: MenuItem) => (
    <button
      key={item.name}
      onClick={() => setActiveMenu(item.name)}
      className={`flex items-center w-full px-4 py-2 mt-2 text-left rounded-md ${
        activeMenu === item.name
          ? 'bg-gray-200 dark:bg-gray-700 text-blue-600 dark:text-blue-400'
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
    >
      <item.icon className="w-5 h-5 mr-3" />
      {item.name}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header darkMode={false} setDarkMode={() => {}} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex">
          <aside className="block md:block w-64 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mr-8">
            <nav>
              {menuItems.map(renderMenuItem)}
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 mt-2 text-left text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                <LogOut className="w-5 h-5 mr-3" />
                Log out
              </button>
            </nav>
          </aside>
          <main className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-8">Welcome, {currentUser?.email || 'User'}!</h2>
            <ActiveComponent />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
