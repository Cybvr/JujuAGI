import React from 'react';
import { Link } from 'react-router-dom';
import { tools } from '../toolsData';
import { FileText, Image, Edit, RefreshCw, LucideIcon } from 'lucide-react';

const iconMap: { [key: string]: LucideIcon } = {
  pdf: FileText,
  image: Image,
  writing: Edit,
  convert: RefreshCw,
};

const ToolNavigation: React.FC = () => {
  return (
    <nav className="dark:bg-zinc-900 bg-white w-52 flex-shrink-0 overflow-y-auto rounded-lg p-4 hidden md:block h-[calc(100vh-2rem)]">
      <h2 className="text-sm font-semibold text-zinc-400 mb-4 sticky top-0  ">All Tools</h2>
      <div className="grid grid-cols-2 gap-2 overflow-y-auto h-[calc(100%-3rem)]">
        {tools.map((tool) => {
          const Icon = iconMap[tool.category] || FileText;
          return (
            <Link
              key={tool.id}
              to={`/tool/${tool.id}`}
              className="flex flex-col items-center justify-center p-2 text-zinc-400 hover:text-white hover:bg-zinc-700 rounded transition-colors duration-200"
            >
              <div className="border border-zinc-700 rounded-md p-2 mb-2 flex items-center justify-center w-12 h-12">
                <Icon size={20} />
              </div>
              <span className="text-xs text-center line-clamp-2">{tool.title}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default ToolNavigation;