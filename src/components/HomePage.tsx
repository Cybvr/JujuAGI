import React from 'react';
import { FileText, Video, Image, Zap, Lock, Download } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-purple-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-600">Juju</div>
          <div className="space-x-4">
            <a href="#features" className="text-gray-600 hover:text-purple-600">Features</a>
            <a href="#tools" className="text-gray-600 hover:text-purple-600">Tools</a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-600">Pricing</a>
          </div>
          <div className="space-x-4">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700">Sign Up</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Your All-in-One File Conversion & Manipulation Tool</h1>
          <p className="text-xl mb-8">Convert, merge, compress, and edit various file types online - for free!</p>
          <div className="space-x-4">
            <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">Get Started</button>
            <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-purple-600">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Juju?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FileText size={32} />}
              title="Wide Format Support" 
              description="Convert between various file formats, including PDFs, videos, and images."
            />
            <FeatureCard 
              icon={<Zap size={32} />}
              title="Quick & Easy" 
              description="No software download required. Edit files on-the-go with our online tools."
            />
            <FeatureCard 
              icon={<Lock size={32} />}
              title="Privacy Focused" 
              description="Files are automatically deleted after 15 minutes to ensure your privacy."
            />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Powerful Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Video size={32} />}
              title="Video Compression" 
              description="Compress videos without losing quality."
            />
            <FeatureCard 
              icon={<Image size={32} />}
              title="Image Editing" 
              description="Edit images, remove backgrounds, and generate AI images."
            />
            <FeatureCard 
              icon={<Download size={32} />}
              title="File Conversion" 
              description="Convert files between different formats effortlessly."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/3">
              <h3 className="text-2xl font-bold mb-4">Free</h3>
              <ul className="mb-6 space-y-2">
                <li>✅ Access to all tools</li>
                <li>✅ Ad-supported</li>
                <li>❌ Captchas required</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700">Get Started</button>
            </div>
            <div className="bg-purple-600 text-white p-8 rounded-lg shadow-md w-full md:w-1/3">
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <ul className="mb-6 space-y-2">
                <li>✅ Access to all tools</li>
                <li>✅ Ad-free experience</li>
                <li>✅ No captchas</li>
              </ul>
              <button className="w-full bg-white text-purple-600 py-2 rounded-full hover:bg-gray-100">Upgrade Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Juju. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;