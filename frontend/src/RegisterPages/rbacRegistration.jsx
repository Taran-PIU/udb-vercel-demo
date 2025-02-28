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
  Phone,
} from 'lucide-react';
import { useState } from 'react';
import './studentRegister.css';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../LoginPages/Your paragraph text (4).png';
import { Link } from 'react-router-dom';
import NetworkAnimation from '../components/NetworkAnimation';

function RbacRegister() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const confirmPassword = formData.get('confirmPassword').trim();
    const role = formData.get('role').trim();
    const num = formData.get('num').trim();


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
    if (confirmPassword !== password) {
      alert("Passwords doesn't Match");
      return;
    }

    const data = {
      name: formData.get('name'),
      email: email,
      role: role,
      num:num,
      password: password,

    };

    console.log('Handle Click Invoked');

    try {
      const response = await fetch(`http://localhost:5000/register/${role}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

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

      console.log('Response:', res.message);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <>
      <NetworkAnimation />
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-6">
        <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Join the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Innovation Community
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Connect with students, founders, and investors to build the next
              generation of innovative products.
            </p>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-lg text-center p-8 rounded-2xl shadow-xl border border-white/20">
                <span className="text-transparent text-2xl font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Join, Where you can
                </span>
                <div className="grid grid-cols-2 mt-3 gap-4 max-w-xl">
                  {[
                    'Find co-founders',
                    'Get funded',
                    'Build your team',
                    'Learn & grow',
                    'Network with pros',
                    'Launch startups',
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="bg-white/5 border border-white/10  p-4 text-gray-300"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Join the Community
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        name="name"
                        className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      I am a...
                    </label>
                    <select
                      name="role"
                      className="w-full p-3 rounded-lg border border-gray-300 bg-transparent text-gray"
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
                </>

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
                      Mobile Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="num"
                        name="num"
                        className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+91 ••••• •••••"
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
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg py-3 font-medium shadow-lg hover:shadow-blue-500/25 transition-shadow disabled:opacity-50"
                >
                  Create Account
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  <>
                    Already have an account?{' '}
                    <Link
                      to="/login/student"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      Sign in
                    </Link>
                  </>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* <nav className="nav">
        <span className="logo">
          <img src={logo} alt="logo" className="logo" />
        </span>
        <ul className="navListL">
          {navList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>

      <div className="LoginSub">Create your Account</div>

      <div className="registerBox">
        <form method="POST" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <label htmlFor="role">Select your Role:</label>
          <select name="role">
            <option value="student">Student</option>
            <option value="investor">Investor</option>
            <option value="company">Company</option>
            <option value="jobseeker">Jobseeker</option>
            <option value="founder">Founder</option>
          </select>
          <label htmlFor="num">Mobile No</label>
          <input
            type="telephone"
            name="num"
            placeholder="Enter your Mobile No"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            required
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="text"
            name="confirmPassword"
            placeholder="Re-enter your Password"
            required
          />
          <button type="submit" className="saveButton">
            Save
          </button>
        </form>
      </div>
      <div className="rfooter">
        <span>Privacy Policy</span>
        <span>Copyright@PEG 2024</span>
      </div> */}
    </>
  );
}
export default RbacRegister;
