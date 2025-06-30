import { useParams } from 'react-router-dom';
import PostContent from '../components/PostContent';
import { usePosts } from '../context/usePosts';
import type { Post } from '../types';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { posts } = usePosts();

  const post: Post | undefined = posts.find((p) => p.slug === slug);

  return (
    <div className="max-w-3xl mx-auto py-8">
      {post ? (
        <PostContent post={post} />
      ) : (
        <p className="text-red-600 text-xl font-semibold">Post not found.</p>
      )}
    </div>
  );
}
