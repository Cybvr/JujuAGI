
import { Smartphone, Monitor, Plus } from 'lucide-react';

const InstallGuide = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Download Juju</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Smartphone className="text-blue-600 mr-3" size={24} />
              <h3 className="text-2xl font-semibold">On Your Phone</h3>
            </div>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Open Juju in your mobile browser</li>
              <li>Tap the browser menu (usually three dots)</li>
              <li>Select 'Add to Home Screen' or 'Install App'</li>
              <li>Follow the prompts to install</li>
            </ol>
          </div>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Monitor className="text-blue-600 mr-3" size={24} />
              <h3 className="text-2xl font-semibold">On Chrome Desktop</h3>
            </div>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Visit Juju in Google Chrome</li>
              <li>Look for the install icon <Plus className="inline text-blue-600" size={18} /> in the address bar</li>
              <li>Click 'Install'</li>
              <li>Juju will open in its own window</li>
            </ol>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Once installed, you can access Juju directly from your home screen or app drawer, just like any other app!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstallGuide;