import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Clock, Star, BarChart, Zap, File, Image, Headphones } from 'lucide-react';

const DashboardContent: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Total Conversions" value="42" icon={<BarChart />} />
        <DashboardCard title="Favorite Tools" value="3" icon={<Star />} />
        <DashboardCard title="Recent Tools" value="5" icon={<Clock />} />
        <DashboardCard title="Available Tools" value="20" icon={<Wrench />} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <QuickActionCard icon={<File />} title="Convert PDF" link="/tool/pdf-convert" />
          <QuickActionCard icon={<Image />} title="Edit Image" link="/tool/image-edit" />
          <QuickActionCard icon={<Headphones />} title="Convert Audio" link="/tool/audio-convert" />
          <QuickActionCard icon={<Zap />} title="Compress Files" link="/tool/file-compress" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardSection title="Recent Tools">
          <ul className="space-y-2">
            <li><Link to="/tool/pdf-to-word" className="text-blue-500 hover:underline">PDF to Word</Link></li>
            <li><Link to="/tool/image-resize" className="text-blue-500 hover:underline">Image Resize</Link></li>
            <li><Link to="/tool/video-compress" className="text-blue-500 hover:underline">Video Compress</Link></li>
          </ul>
        </DashboardSection>
        <DashboardSection title="Favorite Tools">
          <ul className="space-y-2">
            <li><Link to="/tool/pdf-merge" className="text-blue-500 hover:underline">PDF Merge</Link></li>
            <li><Link to="/tool/image-to-text" className="text-blue-500 hover:underline">Image to Text</Link></li>
            <li><Link to="/tool/audio-trim" className="text-blue-500 hover:underline">Audio Trim</Link></li>
          </ul>
        </DashboardSection>
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <span className="text-blue-500">{icon}</span>
    </div>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

const DashboardSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {children}
  </div>
);

const QuickActionCard: React.FC<{ icon: React.ReactNode; title: string; link: string }> = ({ icon, title, link }) => (
  <Link to={link} className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center hover:bg-gray-200 transition-colors duration-300">
    <span className="text-blue-500 mb-2">{icon}</span>
    <span className="text-sm font-medium text-center">{title}</span>
  </Link>
);

export default DashboardContent;