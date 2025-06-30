import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import type { Role } from '../types';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role: Role) => {
    login(role);
    if (role === "admin") {
      navigate('/admin');
    } else {
      navigate('/blog');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center space-y-8">
      <div className="flex flex-col items-center space-y-3">
        <div className="flex items-center space-x-3">
          <img src="/favicon.png" alt="Logo" className="w-14 h-14" />
          <h1 className="text-5xl font-bold text-[#284283]">PlumeSpace</h1>
        </div>
        <p className="text-xl text-gray-700">Choose how you’d like to continue</p>
      </div>
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => handleLogin("user")}
          className="w-56 bg-[#284283] text-white text-lg px-6 py-3 rounded hover:bg-[#3b5998] transition"
        >
          Continue as User
        </button>
        <button
          onClick={() => handleLogin("admin")}
          className="w-56 bg-[#b45309] text-white text-lg px-6 py-3 rounded hover:bg-[#c8641b] transition"
        >
          Continue as Admin
        </button>
      </div>
    </div>
  );
}
