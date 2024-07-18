import React from 'react';
import { Link } from 'react-router-dom';

interface NewTool {
  title: string;
  path: string;
  image: string;
  bgColor: string;
}

const WhatsNewSection: React.FC = () => {
  const newTools: NewTool[] = [
    {
      title: "PDF to JPG",
      path: "/tool/pdf-to-jpg",
      image: "src/assets/images/ui/image1.png",
      bgColor: "bg-orange-600"
    },
    {
      title: "JPG to PDF",
      path: "/tool/jpg-to-pdf",
      image: "src/assets/images/ui/image2.png",
      bgColor: "bg-green-600"
    },
    {
      title: "Merge PDF",
      path: "/tool/merge-pdf",
      image: "src/assets/images/ui/image3.png",
      bgColor: "bg-yellow-100"
    },
    {
      title: "Split PDF",
      path: "/tool/split-pdf",
      image: "src/assets/images/ui/image4.png",
      bgColor: "bg-pink-100"
    }
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-semibold text-center mb-8 dark:text-white">What's New</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newTools.map((tool, index) => (
            <Link key={index} to={tool.path} className="group">
              <div className={`rounded-lg overflow-hidden transition-all duration-300  ${tool.bgColor}`}>
                <div className="p-4 pb-0 ">
                  <h3 className="text-md text-white font-semibold text-center mb-4">{tool.title}</h3>
                  <div className="aspect-w-16 aspect-h-9">
                    <img src={tool.image} alt={tool.title} className="object-cover rounded" />
                  </div>
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