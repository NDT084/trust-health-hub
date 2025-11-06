import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const BlogPost = ({ post }: { post: Post }) => {
  return (
    <Card className="overflow-hidden flex flex-col">
      <CardHeader className="p-0">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
        <CardTitle className="text-lg font-bold mb-2 line-clamp-2">{post.title}</CardTitle>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link to="#" className="flex items-center font-semibold text-teal-600 dark:text-teal-400">
          Read More <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogPost;