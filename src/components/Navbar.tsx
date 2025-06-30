import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export default function Navbar() {
  const { isAuthenticated, role, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isBlogActive = location.pathname.startsWith('/blog');
  const isLoginActive = location.pathname === '/login';
  const isAdminActive = location.pathname.startsWith('/admin');
  const brandLink = isAuthenticated ? "/blog" : "/";

  return (
    <nav className="flex justify-between items-center p-4 bg-[#284283] text-white relative">
      <Link to={brandLink} className="flex items-center space-x-2">
        <img src="/plume-space-app/favicon.png" alt="Logo" className="w-14 h-14" />
        <span
          className={`text-2xl font-semibold hover:underline hover:text-[#b45309] ${
            isBlogActive ? 'underline text-[#facc15]' : ''
          }`}
        >
          PlumeSpace
        </span>
      </Link>

      {isAuthenticated && role === 'admin' && location.pathname === '/admin' && (
        <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-[#facc15]">
          Admin Dashboard
        </div>
      )}

      <div className="space-x-4 flex items-center">
        {isAuthenticated && role === 'admin' && (
          <Link
            to="/admin"
            className={`text-2xl font-semibold hover:underline hover:text-[#b45309] ${
              isAdminActive ? 'underline text-[#facc15]' : ''
            }`}
          >
            Admin
          </Link>
        )}
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="text-2xl font-semibold px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className={`text-2xl font-semibold hover:underline hover:text-[#b45309] ${
              isLoginActive ? 'underline text-[#facc15]' : ''
            }`}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
