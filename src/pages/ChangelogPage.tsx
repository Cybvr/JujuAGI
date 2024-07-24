import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';

interface ChangelogEntry {
  id: number;
  title: string;
  content: string;
  created_at: string;
  featured_image: string;
}

const ChangelogPage: React.FC = () => {
  const [entries, setEntries] = useState<ChangelogEntry[]>([]);

  useEffect(() => {
    fetchChangelog();
  }, []);

  async function fetchChangelog() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('category', 'Changelog')
      .order('created_at', { ascending: false });

    if (error) console.log('error', error);
    else setEntries(data as ChangelogEntry[]);
  }

  return (
    <div className="container mx-auto px-4 py-32 ">
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-3xl font-bold mb-8 ">Changelog</h1>
        {entries.map((entry) => (
          <div key={entry.id} className="mb-24 flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/4 pr-4 text-zinc-600 text-lg mb-2 sm:mb-0">
              {new Date(entry.created_at).toLocaleDateString()}
            </div>
            <div className="w-full sm:w-3/4">
              {entry.featured_image && (
                <img
                  src={entry.featured_image}
                  alt={entry.title}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{entry.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: entry.content }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChangelogPage;