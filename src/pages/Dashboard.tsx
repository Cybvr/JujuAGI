import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Settings, CreditCard, HelpCircle, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/common/Header';
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
  const { logOut } = useAuth();
  const [activeMenu, setActiveMenu] = useState<MenuItemName>(MenuItemName.Dashboard);
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

  const menuItems: MenuItem[] = [
    { name: MenuItemName.Dashboard, icon: Home, component: DashboardContent },
    { name: MenuItemName.Settings, icon: Settings, component: SettingsComponent },
    { name: MenuItemName.Subscription, icon: CreditCard, component: Subscription },
    { name: MenuItemName.HelpAndSupport, icon: HelpCircle, component: HelpSupport },
  ];

  const ActiveComponent = menuItems.find(item => item.name === activeMenu)?.component || DashboardContent;

  const handleMenuItemClick = (name: MenuItemName) => {
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

  const renderMenuItem = (item: MenuItem) => (
    <button
      key={item.name}
      onClick={() => handleMenuItemClick(item.name)}
      className={`flex items-center w-full px-4 py-2 mt-2 text-left rounded-md ${
        activeMenu === item.name
          ? 'bg-zinc-200 dark:bg-zinc-700 text-indigo-600 dark:text-indigo-400'
          : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700'
      }`}
    >
      <item.icon className="w-5 h-5 mr-3" />
      {item.name}
    </button>
  );

  const tools = [
    { name: 'PDF to JPG', path: '/tool/pdf-to-jpg' },
    { name: 'JPG to PDF', path: '/tool/jpg-to-pdf' },
    { name: 'Merge PDF', path: '/tool/merge-pdf' },
    { name: 'Split PDF', path: '/tool/split-pdf' },
    { name: 'Remove Background', path: '/tool/remove-background' },
    { name: 'Image Resizer', path: '/tool/image-resizer' },
    { name: 'Image Converter', path: '/tool/image-converter' },
    { name: 'Image Compressor', path: '/tool/image-compressor' },
    { name: 'Resume Writer', path: '/tool/resume-writer' },
    { name: 'Essay Writer', path: '/tool/essay-writer' },
    { name: 'Grammar Checker', path: '/tool/grammar-checker' },
    { name: 'Text Case Converter', path: '/tool/text-case-converter' },
    { name: 'Plagiarism Detector', path: '/tool/plagiarism-detector' },
    { name: 'Word Count', path: '/tool/word-count' },
    { name: 'Character Count', path: '/tool/character-count' },
    { name: 'Lorem Ipsum Generator', path: '/tool/lorem-ipsum' },
    { name: 'Excel to PDF', path: '/tool/excel-to-pdf' },
    { name: 'CSV to Excel', path: '/tool/csv-to-excel' },
    { name: 'XML to JSON', path: '/tool/xml-to-json' },
    { name: 'XML to CSV', path: '/tool/xml-to-csv' },
  ];

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
      <Header darkMode={false} setDarkMode={() => {}} tools={tools} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Mobile Dropdown */}
          <div className="md:hidden mb-4" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg"
            >
              <span className="text-zinc-800 dark:text-zinc-200">Menu</span>
              {isDropdownOpen ? <X /> : <Menu />}
            </button>
            {isDropdownOpen && (
              <div className="mt-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                <nav className="p-2">
                  {menuItems.map(renderMenuItem)}
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 mt-2 text-left text-red-500 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md"
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Log out
                  </button>
                </nav>
              </div>
            )}
          </div>

          {/* Sidebar for desktop */}
          <aside className="hidden md:block w-64 bg-zinc-50 dark:bg-zinc-800 rounded-lg p-4 mr-8">
            <nav>
              {menuItems.map(renderMenuItem)}
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 mt-2 text-left text-red-500 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md"
              >
                <LogOut className="w-5 h-5 mr-3" />
                Log out
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-zinc-50 dark:bg-zinc-800 rounded-lg p-8">
            <ActiveComponent />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;