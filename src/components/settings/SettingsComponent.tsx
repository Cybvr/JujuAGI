import React, { useState } from 'react';
import { User, Bell, Moon, Globe, Database, AlertTriangle } from 'lucide-react';

interface SettingItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: React.ReactNode;
}

const SettingItem: React.FC<SettingItemProps> = ({ icon, title, description, action }) => (
  <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center">
      <div className="text-indigo-500 mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-zinc-600">{description}</p>
      </div>
    </div>
    {action}
  </div>
);

const SettingsComponent: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<boolean>(true);
  const [language, setLanguage] = useState<string>('en');
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);

  const handleDeleteAllData = () => {
    // Implement the actual data deletion logic here
    console.log("Deleting all user data...");
    setIsDeleteDialogOpen(false);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <p className="mb-6">Adjust your account and application settings here.</p>
      <div className="space-y-6">
        <SettingItem 
          icon={<User size={24} />}
          title="Account Settings"
          description="Manage your account details and preferences"
          action={<button className="text-indigo-500 hover:underline">Edit</button>}
        />
        <SettingItem 
          icon={<Bell size={24} />}
          title="Notifications"
          description="Control your notification preferences"
          action={
            <label className="switch">
              <input 
                type="checkbox" 
                checked={notifications} 
                onChange={() => setNotifications(prev => !prev)} 
              />
              <span className="slider round"></span>
            </label>
          }
        />
        <SettingItem 
          icon={<Moon size={24} />}
          title="Dark Mode"
          description="Toggle dark mode on or off"
          action={
            <label className="switch">
              <input 
                type="checkbox" 
                checked={darkMode} 
                onChange={() => setDarkMode(prev => !prev)} 
              />
              <span className="slider round"></span>
            </label>
          }
        />
        <SettingItem 
          icon={<Globe size={24} />}
          title="Language"
          description="Choose your preferred language"
          action={
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className="border rounded p-2"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          }
        />
        <SettingItem 
          icon={<Database size={24} />}
          title="Data Management"
          description="Manage your personal data and privacy settings"
          action={
            <button 
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => setIsDeleteDialogOpen(true)}
            >
              Delete All My Data
            </button>
          }
        />
      </div>

      {isDeleteDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <h3 className="text-xl font-bold mb-4">Delete All Data</h3>
            <p className="mb-4">Are you sure you want to delete all your data? This action cannot be undone.</p>
            <div className="flex items-center space-x-2 bg-yellow-100 p-4 rounded-md mb-4">
              <AlertTriangle className="text-yellow-500" />
              <p className="text-sm text-yellow-700">
                Deleting your data will permanently remove all your account information, preferences, and usage history.
              </p>
            </div>
            <div className="flex justify-end space-x-4">
              <button 
                className="px-4 py-2 border rounded"
                onClick={() => setIsDeleteDialogOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleDeleteAllData}
              >
                Yes, Delete All My Data
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsComponent;