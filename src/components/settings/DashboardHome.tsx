import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Clock, Star, BarChart } from 'lucide-react';

const DashboardContent: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard title="Total Conversions" value="42" icon={<BarChart />} />
        <DashboardCard title="Favorite Tools" value="3" icon={<Star />} />
        <DashboardCard title="Recent Tools" value="5" icon={<Clock />} />
        <DashboardCard title="Available Tools" value="20" icon={<Wrench />} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardSection title="Recent Tools">
          <ul>
            <li><Link to="/tool/pdf-to-word">PDF to Word</Link></li>
            <li><Link to="/tool/image-resize">Image Resize</Link></li>
            <li><Link to="/tool/video-compress">Video Compress</Link></li>
          </ul>
        </DashboardSection>
        <DashboardSection title="Favorite Tools">
          <ul>
            <li><Link to="/tool/pdf-merge">PDF Merge</Link></li>
            <li><Link to="/tool/image-to-text">Image to Text</Link></li>
            <li><Link to="/tool/audio-trim">Audio Trim</Link></li>
          </ul>
        </DashboardSection>
        <DashboardSection title="Quick Links">
          <ul>
            <li><Link to="/all-tools">All Tools</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/upgrade">Upgrade to Premium</Link></li>
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

export default DashboardContent;