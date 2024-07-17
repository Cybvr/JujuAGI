import React from 'react';

const DataDeletionPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Data Deletion Instructions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Right to Data Deletion</h2>
        <p className="mb-4">At Juju, we respect your privacy and your right to control your personal data. In accordance with data protection regulations, you have the right to request the deletion of your personal information from our systems.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Data Can Be Deleted</h2>
        <p className="mb-4">Upon your request, we can delete all personal information associated with your account, including but not limited to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Your account details (name, email, etc.)</li>
          <li>Usage history and preferences</li>
          <li>Any content you've created or uploaded to our platform</li>
          <li>Information collected through cookies and similar technologies</li>
        </ul>
        <p>Please note that some information may be retained for legal or legitimate business purposes.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Request Data Deletion</h2>
        <p className="mb-4">To request the deletion of your data, please follow these steps:</p>
        <ol className="list-decimal list-inside mb-4">
          <li>Log in to your Juju account</li>
          <li>Navigate to the Settings page</li>
          <li>Click on the "Privacy" or "Data Management" section</li>
          <li>Select the "Request Data Deletion" option</li>
          <li>Confirm your request by following the prompts</li>
        </ol>
        <p>Alternatively, you can email our Data Protection Officer at art@visual.ng with the subject line "Data Deletion Request".</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Deletion Process</h2>
        <p className="mb-4">Once we receive your request, we will:</p>
        <ol className="list-decimal list-inside mb-4">
          <li>Verify your identity to ensure the security of your data</li>
          <li>Process your request within 30 days</li>
          <li>Notify you once the deletion is complete</li>
        </ol>
        <p>Please be aware that once your data is deleted, it cannot be recovered.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Exceptions to Data Deletion</h2>
        <p className="mb-4">In some cases, we may be required to retain certain information for legal or legitimate business purposes. This may include:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Information necessary for tax, legal, or accounting purposes</li>
          <li>Anonymized data used for analytics or improving our services</li>
          <li>Information related to unresolved issues or disputes</li>
        </ul>
        <p>We will inform you if any of your data falls under these exceptions.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>If you have any questions about data deletion or our privacy practices, please don't hesitate to contact our Data Protection Officer at art@visual.ng.</p>
      </section>
    </div>
  );
};

export default DataDeletionPage;