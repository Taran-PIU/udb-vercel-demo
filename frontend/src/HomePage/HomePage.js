import { toast, ToastContainer } from 'react-toastify';
import './homePage.css';
import { useNavigate } from 'react-router';
import NetworkAnimation from '../components/NetworkAnimation';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SessionTrack from '../Config/sessionTrack';

function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchToken = async () => {
      const token = localStorage.getItem('token');
      let payload = '';
      let role = '';
      if (token) {
        payload = JSON.parse(atob(token.split('.')[1]));
        localStorage.setItem('role', `${payload.role}`);
        role = localStorage.getItem('role');
        console.log(`/login/${role}`);
      }
      if (!token) {
        role = localStorage.getItem('role');
        console.log('mm' + role);
        alert(`Unauthorized! Please log in.`);
        window.location.href = `/login/${role}`;
        return;
      }
      const res = await fetch('http://localhost:5000/home', {
        headers: { Authorization: token },
      });
      const result = res.json();
      toast.success(result.message);
    };
    fetchToken();
  }, [navigate]);
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/logout', {
        method: 'POST',
        headers: {
          Authorization: token,
        },
      });
      const res = await response.json();
      localStorage.removeItem('token');
      toast.success(res.message);
      setTimeout(() => {
        window.location.href = res.redirect;
      }, 3000);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  return (
    <>
    <SessionTrack />
      <NetworkAnimation />
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-6">
        <div className="w-full max-w-4xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center lg:text-left"
          >
            <div className="bg-white/10 w-full max-w-6xl backdrop-blur-lg flex flex-col items-center justify-center p-8 rounded-2xl shadow-xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Coming Soon!
              </h2>
              <div className="w-full flex justify-center">
                <button
                  className="w-full max-w-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg py-3 font-medium shadow-lg hover:shadow-blue-500/25 transition-shadow disabled:opacity-50"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
