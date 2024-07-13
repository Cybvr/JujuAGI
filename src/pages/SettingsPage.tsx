
const SettingsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Settings</h1>
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="password">Change Password</label>
              <input type="password" id="password" className="w-full px-3 py-2 border rounded-md" />
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Preferences</h2>
          <div className="space-y-4">
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Receive email notifications</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Dark mode</span>
              </label>
            </div>
          </div>

          <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;