        // src/pages/HomePage.tsx
        import React from 'react';
        import { Link } from 'react-router-dom';
        import { FileText, Video, Image, Zap, Lock, Download } from 'lucide-react';

        interface FeatureCardProps {
          icon: React.ReactNode;
          title: string;
          description: string;
        }

        const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-purple-600 dark:text-purple-400 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        );

        const HomePage: React.FC = () => {
          return (
            <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
              {/* Hero Section */}
              <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                  <h1 className="text-4xl font-bold mb-4">Meet your sidekick</h1>
                  <p className="text-xl mb-8">The Ultimate Hub of Tools, Add-ons & Assets for Every Creator</p>
                  <div className="space-x-4">
                    <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">Get Started</button>
                    <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-purple-600">Join Waitlist</button>
                  </div>
                </div>
              </section>

              {/* Categories Section */}
              <section className="py-20">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-12">Our Tools</h2>
                  <div className="flex justify-center mb-8">
                    <button className="mx-2 px-4 py-2 bg-purple-600 text-white rounded-full">All</button>
                    <button className="mx-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-full">Image</button>
                    <button className="mx-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-full">Document</button>
                    <button className="mx-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-full">Text</button>
                    <button className="mx-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-full">Audio</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard 
                      icon={<Image size={32} />}
                      title="Image to PDF" 
                      description="Convert images into organized PDF documents for easy sharing and archiving."
                    />
                    <FeatureCard 
                      icon={<FileText size={32} />}
                      title="Document Merger" 
                      description="Combine multiple documents into a single file effortlessly."
                    />
                    <FeatureCard 
                      icon={<FileText size={32} />}
                      title="Text Translator" 
                      description="Translate text between multiple languages quickly and accurately."
                    />
                    <FeatureCard 
                      icon={<Video size={32} />}
                      title="Audio Trimmer" 
                      description="Cut and trim audio files with precision for your perfect sound."
                    />
                  </div>
                  <div className="text-center mt-12">
                    <Link to="/all-tools" className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700">View All Tools</Link>
                  </div>
                </div>
              </section>

              {/* You can add more sections here as needed */}

            </div>
          );
        };

        export default HomePage;