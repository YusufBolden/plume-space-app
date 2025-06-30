import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <div className="flex items-center space-x-3 mb-4">
        <img src="/favicon.png" alt="Logo" className="w-14 h-14" />
        <h1 className="text-5xl font-bold text-[#284283]">PlumeSpace</h1>
      </div>
      <p className="text-xl mb-8 text-gray-700">
        Discover stories, share insights, manage your blog seamlessly.
      </p>
      <div className="flex space-x-6">
        <Link
          to="/blog"
          className="bg-[#284283] text-white text-lg px-6 py-3 rounded hover:bg-[#3b5998] transition"
        >
          View Blog
        </Link>
        <Link
          to="/login"
          className="bg-[#b45309] text-white text-lg px-6 py-3 rounded hover:bg-[#c8641b] transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
