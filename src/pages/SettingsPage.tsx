import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'; // Assuming you have this

const SettingsPage = () => {
  const { currentUser } = useAuth();
  const [email, setEmail] = useState(currentUser?.email || '');
  const [password, setPassword] = useState('');
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted', { email, password, emailNotifications, darkMode });
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Settings</h1>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-zinc-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-zinc-700 mb-2" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border rounded-md" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-zinc-700 mb-2" htmlFor="password">Change Password</label>
              <input 
                type="password" 
                id="password" 
                className="w-full px-3 py-2 border rounded-md" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Preferences</h2>
          <div className="space-y-4">
            <div>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="mr-2" 
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                />
                <span>Receive email notifications</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="mr-2" 
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                />
                <span>Dark mode</span>
              </label>
            </div>
          </div>
          <button 
            type="submit" 
            className="mt-8 bg-indigo-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;