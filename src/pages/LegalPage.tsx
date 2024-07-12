import React from 'react';

const LegalPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Legal Information</h1>
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            This page contains important legal information regarding the use of Juju's services. 
            Please read this information carefully to understand our policies and your rights as a user...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;