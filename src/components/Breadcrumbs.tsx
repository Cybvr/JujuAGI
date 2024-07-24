import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  items: { label: string; path: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-sm mb-4">
      <ol className="list-none p-0 inline-flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {index === items.length - 1 ? (
              <span className="text-zinc-500">{item.label}</span>
            ) : (
              <Link to={item.path} className="text-indigo-500 hover:text-indigo-600">{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;