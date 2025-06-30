import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import { useState } from 'react';
import { usePosts } from '../context/usePosts';
import type { Post } from '../types';

export default function Admin() {
  const { isAuthenticated, role } = useAuth();
  const { posts, addPost, removePost } = usePosts();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [toast, setToast] = useState<string | null>(null);
  const [sessionAdded, setSessionAdded] = useState(0);

  if (!isAuthenticated || role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newPost: Post = {
      id: posts.length + 1,
      slug: title.toLowerCase().replace(/\s+/g, '-'),
      title,
      content
    };

    addPost(newPost);
    setSessionAdded(sessionAdded + 1);
    setTitle('');
    setContent('');
    showToast("Post created successfully!");
  };

  const handleDelete = (id: number) => {
    removePost(id);
    showToast("Post deleted.");
  };

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      {toast && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-amber-400 text-black px-6 py-2 rounded shadow-md transition">
          {toast}
        </div>
      )}

      <p className="mb-8 text-2xl font-semibold">
        Welcome back! Check your stats, add or delete a blog post
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-[#284283] text-white p-6 rounded shadow text-center">
          <div className="text-4xl font-bold">{posts.length}</div>
          <div className="mt-2 text-lg">Total Blog Posts</div>
        </div>
        <div className="bg-[#b45309] text-white p-6 rounded shadow text-center">
          <div className="text-4xl font-bold">{sessionAdded}</div>
          <div className="mt-2 text-lg">Posts Added This Session</div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Add New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:border-[#284283] transition"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded h-32 focus:border-[#284283] transition"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Add Post
        </button>
      </form>

      <h3 className="text-xl font-semibold mb-2">Posts Added:</h3>
      {posts.length > 0 ? (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border-b pb-2 flex justify-between items-center">
              <div>
                <strong>{post.title}</strong> — <span className="text-gray-600">{post.slug}</span>
              </div>
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-lg mt-4">No posts have been added yet.</p>
      )}
    </div>
  );
}
