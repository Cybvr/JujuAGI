import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../utils/supabase';

interface Post {
  id: number;
  title: string;
  slug: string;
  featured_image: string;
  excerpt: string;
  category: string;
}

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .neq('category', 'Changelog')
      .order('created_at', { ascending: false });

    if (error) {
      console.log('error', error);
      setError('Failed to fetch posts');
    } else {
      setPosts(data as Post[]);
    }
    setLoading(false);
  }

  if (loading) return <div className="text-center px-24 py-24">Consulting Oracle...Hold On</div>;
  if (error) return <div className="text-center py-8 text-red-600">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-16 pb-64">
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white p-8 rounded-lg mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
        <p className="text-xl">Discover our latest thoughts and insights</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Link key={post.id} to={`/blog/${post.slug}`} className={`block ${index === 0 ? 'md:col-span-2 lg:col-span-3' : ''}`}>
            <div className={`bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full ${index === 0 ? 'md:flex' : ''}`}>
              <div className={`${index === 0 ? 'md:w-1/2' : 'w-full'}`}>
                <img src={post.featured_image} alt={post.title} className="w-full h-64 object-cover" />
              </div>
              <div className={`p-6 flex flex-col justify-between ${index === 0 ? 'md:w-1/2' : 'w-full'}`}>
                <div>
                  <h2 className={`font-semibold mb-3 ${index === 0 ? 'text-3xl' : 'text-xl'}`}>{post.title}</h2>
                  <p className="text-gray-600 mb-4 text-zinc-800 dark:text-zinc-300">{post.excerpt}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;