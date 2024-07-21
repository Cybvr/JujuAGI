import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../utils/sanityClient';

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
          _id,
          title,
          slug,
        }`
      )
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post._id} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <Link
                to={`/blog/${post.slug.current}`}
                className="text-blue-500 hover:text-blue-600"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;