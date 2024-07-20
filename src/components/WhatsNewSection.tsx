import React from 'react';
import { Link } from 'react-router-dom';

interface NewTool {
  title: string;
  subtitle: string;
  path: string;
  image: string;
}

const WhatsNewSection: React.FC = () => {
  const newTools: NewTool[] = [
    {
      title: "Remove Background",
      subtitle: "Easily remove image backgrounds",
      path: "/tool/remove-background",
      image: "/src/assets/images/ui/image1.png"
    },
    {
      title: "Compress Image",
      subtitle: "Reduce image file size without losing quality",
      path: "/tool/image-compressor",
      image: "/src/assets/images/ui/image2.png"
    },
    {
      title: "Resume Writer",
      subtitle: "Create professional resumes with AI assistance",
      path: "/tool/resume-writer",
      image: "/src/assets/images/ui/image3.png"
    },
    {
      title: "Compress PDF",
      subtitle: "Reduce PDF file size for easy sharing",
      path: "/tool/compress-pdf",
      image: "/src/assets/images/ui/image4.png"
    }
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 dark:text-white">What's New</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newTools.map((tool, index) => (
            <Link key={index} to={tool.path} className="group">
              <div className="dark:bg-gray-700 rounded-lg overflow-hidden ">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={tool.image} 
                    alt={tool.title} 
                    className="object-cover w-full h-full" 
                  />
                </div>
                <div className="pl-0 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{tool.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{tool.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsNewSection;