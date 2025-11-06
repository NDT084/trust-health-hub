import BlogPost from '../components/BlogPost';
import { blogPosts } from '../data';

const Blog = () => {
  return (
    <div className="container mx-auto py-20 px-4 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Health & Wellness Blog</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Stay informed with the latest health tips, news, and advice from our medical experts.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {blogPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;