import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import NetworkAnimation from '../components/NetworkAnimation';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { token } = useParams(); // Get token from URL

  const navigate = useNavigate();
  useEffect(() => {
    const fetchToken = async () => {
      const token = new URLSearchParams(window.location.search).get('token');

      if (token) {
        window.history.replaceState({}, document.title, '/reset-password');
      }

      if (!token) {
        alert('Unauthorized! Please generate token again.');
        navigate('/reset-password');
        return;
      }
    };
    fetchToken();
  }, []);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const password = formData.get('password').trim();
    const role = formData.get('role').trim();
    const confirmPassword = formData.get('confirmPassword').trim();

    if (
      password.length < 8 ||
      !/[a-z]/.test(password) ||
      !/[A-Z]/.test(password) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      alert(
        'Password must be at least 8 characters and include one uppercase, one lowercase, and one special character'
      );
      return;
    }
    if (confirmPassword !== password) {
      alert("Passwords doesn't Match");
      return;
    }

    const data = {
      password: password,
      role: role,
    };
    console.log(data);

    console.log('Handle Click Invoked');

    try {
      const response = await fetch(
        `http://localhost:5000/reset-password/${token}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );
      const res = await response.json();
      if (response.ok) {
        toast.success(res.message || 'Success!');
      } else {
        toast.error(
          res.message || `Error: ${response.status} ${response.statusText}`
        );
      }
      setTimeout(() => {
        window.location.href = res.redirect;
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NetworkAnimation />
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-6">
        <div className=" max-w-6xl mx-auto  items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center lg:text-left"
          >
            <div className="text-3xl font-bold text-white mb-6 text-center">
              Reset your Password
            </div>
            <div>
              <form
                method="POST"
                onSubmit={handleResetPassword}
                className="space-y-6"
              >
                <div className="z-10 pointer">
                  <label
                    htmlFor="role"
                    className="block text-lg font-medium text-gray-300 mb-2"
                  >
                    I am a...
                  </label>
                  <select
                    name="role"
                    className="w-full p-3 rounded-lg border border-gray-300 bg-transparent pointer text-gray z-10"
                  >
                    <option value="student" className="text-black">
                      Student
                    </option>
                    <option value="investor" className="text-black">
                      Investor
                    </option>
                    <option value="company" className="text-black">
                      Company
                    </option>
                    <option value="jobseeker" className="text-black">
                      Jobseeker
                    </option>
                    <option value="founder" className="text-black">
                      Founder
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-12 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-12 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full z-10 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-blue-500/25 transition-shadow"
                >
                  Save Password
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        /
      </div>
    </>
  );
};

export default ResetPassword;
