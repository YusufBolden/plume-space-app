import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-4xl font-bold mb-4 text-red-600">404 - Page Not Found</h1>
      <p className="mb-6 text-lg">Sorry, the page you are looking for does not exist.</p>
      <Link
        to="/blog"
        className="text-xl font-semibold text-[#284283] hover:underline hover:text-[#b45309]"
      >
        Go back to Blog
      </Link>
    </div>
  );
}
