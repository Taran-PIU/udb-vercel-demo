import { Link } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Building2,
  Briefcase,
  GraduationCap,
  LineChart,
} from 'lucide-react';
import { useState } from 'react';
import './studentpage.css';
import 'react-toastify/dist/ReactToastify.css';
import logo from './Your paragraph text (4).png';
import NetworkAnimation from '../components/NetworkAnimation';

function StudentLogin() {
  const navList = ['Product', 'Resources', 'Support', 'Pricing', 'Blog'];
  const optionList = ['google', 'github'];

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (provider) => {
    const userType = 'student';
    window.location.href = `http://localhost:5000/auth/${provider}?state=${encodeURIComponent(
      userType
    )}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Invalid email format');
      return;
    }
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
    const data = {
      email: email,
      password: password,
      role: 'student',
    };
    // console.log('Sending login data:', data);
    console.log('handleclick invoked');

    try {
      const response = await fetch('https://udb-vercel-demo.vercel.app/login/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      // console.log(response);
      const res = await response.json();
      if (res.token) {
        localStorage.setItem('token', res.token);
      }
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
      console.log(res.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-6">
        <NetworkAnimation />
        <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <>
                Welcome Back to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  UDBHAVX
                </span>
              </>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Sign in to continue building the future with innovative minds.
            </p>
            <div className="sm:block">
              <div className="grid grid-cols-2 gap-4 max-w-xl">
                {[
                  'investor',
                  'company',
                  'jobseeker',
                  'founder',
                  'student',
                  '',
                ].map((feature) => (
                  <Link
                    key={feature}
                    to={feature == '' ? '/' : `/login/${feature}`}
                    className="bg-white/5 border border-white/10 rounded-lg p-4 text-gray-300 z-10"
                  >
                    {feature == ''
                      ? 'HOME'
                      : `Login as ${feature.toUpperCase()}`}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Login Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Welcome Back
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="email"
                      name="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
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
                      onChange={(e) => setPassword(e.target.value)}
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
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg py-3 font-medium shadow-lg hover:shadow-blue-500/25 transition-shadow disabled:opacity-50"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  Don't have an account?{' '}
                  <Link
                    to="/register"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  <Link
                    to="/forgot-password"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Forgot Password?
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
export default StudentLogin;
