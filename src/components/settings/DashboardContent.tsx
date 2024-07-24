import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Edit, Moon, Sun, Upload } from 'lucide-react';

const DashboardContent: React.FC = () => {
  const { currentUser, updateProfile } = useAuth();
  const [name, setName] = useState(currentUser?.displayName || '');
  const [isEditingName, setIsEditingName] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setDarkMode(isDarkMode);
  }, []);

  const handleNameChange = async () => {
    try {
      await updateProfile({ displayName: name });
      setIsEditingName(false);
    } catch (error) {
      console.error("Failed to update name", error);
    }
  };

  const handleDarkModeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  const handleProfilePictureChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        // Implement file upload logic here
        // For now, we'll just log the file
        console.log("File to upload:", file);
        // After successful upload, update the user's profile picture URL
        // await updateProfile({ photoURL: uploadedFileUrl });
      } catch (error) {
        console.error("Failed to upload profile picture", error);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-REGULAR mb-8">Welcome, {currentUser?.email || 'User'}!</h2>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white dark:bg-zinc-800 shadow rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="relative">
            <img
              src={currentUser?.photoURL || '/default-avatar.png'}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <label htmlFor="profile-picture-upload" className="absolute bottom-0 right-0 bg-indigo-500 rounded-full p-1 cursor-pointer">
              <Upload size={16} className="text-white" />
            </label>
            <input
              id="profile-picture-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePictureChange}
            />
          </div>
          <div className="ml-4 flex-grow">
            {isEditingName ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded px-2 py-1 mr-2 dark:bg-zinc-700 dark:text-white"
                />
                <button onClick={handleNameChange} className="text-indigo-500">Save</button>
              </div>
            ) : (
              <div className="flex items-center">
                <h2 className="text-xl font-semibold mr-2">{currentUser?.displayName}</h2>
                <button onClick={() => setIsEditingName(true)} className="text-indigo-500">
                  <Edit size={16} />
                </button>
              </div>
            )}
            <p className="text-zinc-600 dark:text-zinc-300">{currentUser?.email}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-zinc-700 dark:text-zinc-300">Dark Mode</span>
          <button
            onClick={handleDarkModeToggle}
            className={`p-2 rounded-full ${darkMode ? 'bg-indigo-500' : 'bg-zinc-300'}`}
          >
            {darkMode ? <Sun size={20} className="text-white" /> : <Moon size={20} />}
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-800 shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        {/* Add recent activity or used tools here */}
        <p className="text-zinc-600 dark:text-zinc-300">No recent activity to show.</p>
      </div>
    </div>
  );
};

export default DashboardContent;