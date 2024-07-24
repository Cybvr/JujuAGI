import React, { useState, useEffect } from 'react';

const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        }
        setDeferredPrompt(null);
      });
    }
  };

  if (!deferredPrompt) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-indigo-500 text-white p-4 rounded-lg shadow-lg">
      <p className="mb-2">Install Juju for easier access!</p>
      <button 
        onClick={handleInstallClick}
        className="bg-white text-indigo-500 px-4 py-2 rounded hover:bg-zinc-100"
      >
        Install
      </button>
    </div>
  );
};

export default InstallPrompt;