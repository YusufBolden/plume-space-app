import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import { usePosts } from '../context/usePosts';
import PostList from '../components/PostList';

export default function BlogIndex() {
  const { isAuthenticated } = useAuth();
  const { posts } = usePosts();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const recentPosts = posts.slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      {posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <p className="text-gray-600 text-lg mb-8">No blog posts available. Check back later!</p>
      )}

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#b45309]">Recent Posts</h2>
        {recentPosts.length > 0 ? (
          <ul className="space-y-3">
            {recentPosts.map((post) => (
              <li
                key={post.id}
                className="border-b pb-2 flex justify-between items-center hover:text-[#b45309] transition"
              >
                <span className="font-semibold">{post.title}</span>
                <span className="text-gray-500 text-sm">{post.slug}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-lg">No recent posts to show.</p>
        )}
      </div>
    </div>
  );
}
