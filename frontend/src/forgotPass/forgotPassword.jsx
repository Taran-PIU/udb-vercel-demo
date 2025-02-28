import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../LoginPages/Your paragraph text (4).png';
import NetworkAnimation from '../components/NetworkAnimation';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

function ForgotPassword() {
  const navList = ['Product', 'Resources', 'Support', 'Pricing', 'Blog'];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email').trim();
    const role = formData.get('role').trim();

    const data = {
      email: email,
      role: role,
    };

    console.log('Handle Click Invoked');

    try {
      const response = await fetch(`http://localhost:5000/forgot-password`, {
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

      console.log('Response:', res);
    } catch (error) {
      console.log('Error:', error);
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
              Reset your Account
            </div>
            <div>
              <form method="POST" onSubmit={handleSubmit} className="space-y-6">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-4 py-2 text-white z-10 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your Email"
                  required
                />
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

                <button
                  type="submit"
                  className="w-full px-4 py-2 z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-blue-500/25 transition-shadow"
                >
                  Send Reset-link
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
export default ForgotPassword;
