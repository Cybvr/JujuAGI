import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../../utils/supabase';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  featured_image: string;
  created_at: string;
  reading_time: number;
}

const BlogPost: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('slug', slug)
          .single();
        if (error) throw error;
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  );

  if (!post) return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Post not found</h1>
      <Link to="/blog" className="text-indigo-500 hover:underline">Return to blog list</Link>
    </div>
  );

  return (
    <div className="bg-zinc-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Link to="/blog" className="inline-flex items-center text-indigo-500 hover:underline mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to blog
        </Link>

        {post.featured_image && (
          <img 
            src={post.featured_image} 
            alt={post.title} 
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8"
          />
        )}

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center text-zinc-600 mb-8">
          <Calendar className="mr-2" size={20} />
          <span className="mr-4">{new Date(post.created_at).toLocaleDateString()}</span>
          <Clock className="mr-2" size={20} />
          <span>{post.reading_time || '5'} min read</span>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;