const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            At Juju, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and email address</li>
            <li>Payment information (for premium services)</li>
            <li>Usage data and preferences</li>
            <li>Information about the files you upload for processing</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Analyze usage patterns and trends</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3">3. Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">4. Data Retention</h2>
          <p className="text-gray-700 mb-4">
            We retain your personal information only for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">5. Your Rights</h2>
          <p className="text-gray-700 mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>The right to access your personal information</li>
            <li>The right to rectify inaccurate personal information</li>
            <li>The right to erase your personal information</li>
            <li>The right to restrict processing of your personal information</li>
            <li>The right to data portability</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3">6. Cookies and Similar Technologies</h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to collect and use personal information about you, including to serve interest-based advertising. For further information about the types of cookies we use, why, and how you can control them, please see our Cookie Policy.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">7. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">8. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-700">
            Email: privacy@juju.com<br />
            Address: [Your Company Address]
          </p>

          <p className="text-gray-700 mt-6">
            Last updated: [Insert Date]
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;