import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface NewTool {
  title: string;
  subtitle: string;
  path: string;
  image: string;
}

const WhatsNewSection: React.FC = () => {
  const newTools: NewTool[] = [
    {
      title: "QR Code Generator",
      subtitle: "Create custom QR codes easily",
      path: "/tool/qr-code-generator",
      image: "/src/assets/images/ui/image5.png"
    },
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-12 bg-zinc-50 dark:bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 dark:text-white">What can we help you with today?</h2>
        <Slider {...settings}>
          {newTools.map((tool, index) => (
            <div key={index} className="px-2">
              <Link to={tool.path} className="group">
                <div className="dark:bg-zinc-700 rounded-lg overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={tool.image} 
                      alt={tool.title} 
                      className="object-cover w-full h-full" 
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-zinc-800 dark:text-white mb-1">{tool.title}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">{tool.subtitle}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhatsNewSection;