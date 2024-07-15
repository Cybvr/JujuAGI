import React, { useState } from 'react';
import { User, Bell, Moon, Globe } from 'lucide-react';

interface SettingItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: React.ReactNode;
}

const SettingItem: React.FC<SettingItemProps> = ({ icon, title, description, action }) => (
  <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center">
      <div className="text-blue-500 mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    {action}
  </div>
);

const SettingsComponent: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<boolean>(true);
  const [language, setLanguage] = useState<string>('en');

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <p className="mb-6">Adjust your account and application settings here.</p>
      <div className="space-y-6">
        <SettingItem 
          icon={<User size={24} />}
          title="Account Settings"
          description="Manage your account details and preferences"
          action={<button className="text-blue-500 hover:underline">Edit</button>}
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
      </div>
    </div>
  );
};

export default SettingsComponent;