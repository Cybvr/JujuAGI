import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 
                    dark:bg-gradient-to-br dark:from-indigo-800 dark:to-purple-900 min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white dark:bg-black  rounded-lg shadow-xl overflow-hidden">
        <div className="p-10">
          <h1 className="text-4xl font-bold text-center mb-6 text-indigo-600">
            Simply Charming <Sparkles className="inline-block ml-2 dark:text-zinc-300" />
          </h1>
          <h2 className="text-2xl text-center mb-8 text-zinc-600 dark:text-zinc-400">
            A Collection of simple tools for simple tasks
          </h2>

          <p className="mb-6 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Welcome to Juju, where we believe in the magic of simplicity! We're on a mission to make your digital life easier, one tool at a time. Our collection of nifty gadgets is designed to tackle those everyday tasks that often feel like tiny mountains. Whether you're resizing an image, converting a file, or just need a quick spell-check, we've got you covered with a sprinkle of charm and a dash of efficiency.
          </p>

          <p className="mb-10 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            At Juju, we're all about keeping things fun, friendly, and fuss-free. We've packed our toolbox with everything you need to breeze through your to-do list, leaving you more time for the things you love. So, tell us: What can we help you with today? Whatever it is, we're here to make it simple, swift, and maybe even a little bit delightful!
          </p>

          <div className="text-center">
            <a href="/all-tools" className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:-translate-y-1">
              Explore Our Tools <Heart className="inline-block ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;