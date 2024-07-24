import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import logo from '../../logoblack.png';  // Adjust the path as necessary

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-zinc-200 py-8 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 pr-6">
            <img src={logo} alt='Logo' className="mb-2 mx-0 w-1/2 h-auto filter invert" />
            <p className="text-sm text-left">
              Simple tools for simple tasks.
            </p>
          </div>
          <div className="w-full md:w-3/4 flex flex-wrap -mx-2">
            <div className="w-full md:w-1/4 mb-4 px-2 text-zinc-50  dark:text-zinc-400">
              <h4 className="text-lg font-semibold mb-2 text-zinc-600">Quick Links</h4>
              <ul>
                <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
                <li><Link to="/all-tools" className="hover:text-indigo-400">All Tools</Link></li>
                <li><Link to="/pricing" className="hover:text-indigo-400">Pricing</Link></li>
                <li><Link to="/faq" className="hover:text-indigo-400">FAQs</Link></li>
                <li><Link to="/changelog" className="hover:text-indigo-400">Changelog</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4 px-2 text-zinc-50  dark:text-zinc-400">
              <h4 className="text-lg font-semibold mb-2 text-zinc-600">Tools</h4>
              <ul>
                <li><Link to="/tool/text-to-image" className="hover:text-indigo-400">Text to Image</Link></li>
                <li><Link to="/tool/remove-background" className="hover:text-indigo-400">Remove BG</Link></li>
                <li><Link to="/tool/word-to-pdf" className="hover:text-indigo-400">Word to PDF</Link></li>
                {/* Add more tools here */}
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4 px-2 text-zinc-50  dark:text-zinc-400">
              <h4 className="text-lg font-semibold mb-2 text-zinc-600">Legal</h4>
              <ul>
                <li><Link to="/privacy" className="hover:text-indigo-400">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-indigo-400">Terms & Agreement</Link></li>
                <li><Link to="/data-deletion" className="hover:text-indigo-300">Data Protection</Link></li>
                <li><Link to="/cookies" className="hover:text-indigo-400">Cookies</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4 px-2">
              <h4 className="text-lg font-semibold mb-2 text-zinc-600">Social</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com" className="hover:text-indigo-400">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.twitter.com" className="hover:text-indigo-400">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com" className="hover:text-indigo-400">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com" className="hover:text-indigo-400">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-zinc-40 dark:text-zinc-400">
          <p>&copy; 2024 Juju. Juju is a product of Visual Core 9 Systems. All rights reserved. Made with ❤️ for the people of the internet by <a href="http://visual.ng" className="underline font-bold hover:text-indigo-400">VisualHQ</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;