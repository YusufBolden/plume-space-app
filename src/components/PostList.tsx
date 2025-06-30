import { Link } from 'react-router-dom';
import type { PostListProps } from '../types';


export default function PostList({ posts }: PostListProps) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="border-b pb-2">
          <Link
            to={`/blog/${post.slug}`}
            className="text-xl text-[#3b82f6] hover:underline"
          >
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
