import './homePage.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  Rocket,
  Brain,
  MapPin,
  Phone,
  Mail,
  LinkedinIcon,
  Instagram,
  Twitter,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import NetworkAnimation from '../components/NetworkAnimation';

function Contactus() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
        <Navbar />
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <NetworkAnimation />
          <div className="container mt-16 mx-auto p-8">
            <div className="grid mt-16 md:grid-cols-2 gap-8">
              {/* Contact Info Section */}
              <div className="bg-white/10 mb-10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
                <h2 className="text-3xl text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Contact us!
                  </span>
                </h2>
                <p className="text-gray-300">
                  We&#39;d love to hear from you! Whether you have a question,
                  feedback, or need assistance, our team is here to help. Reach
                  out to us, and we’ll get back to you as soon as possible.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-blue-400" />
                    <div>
                      <div className="text-white text-left">
                        <span className="text-white text-left">Address</span>
                        <p className="text-gray-300">
                          UdbhavX, 617, Manjeera Majestic Commercial,Opp. JNTU ,
                          KPHB, Hyderabad- 500085
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-blue-400" />
                    <div>
                      <div className="text-white text-left">
                        <span className="text-white">Phone</span>
                        <p className="text-gray-300">+91 8121965512</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-blue-400" />
                    <div>
                      <div className="text-white text-left">
                        <span className="text-white">Email</span>
                        <p className="text-gray-300">info@udbhavx.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="socialMedia flex gap-4 justify-center mt-6">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-6 h-6 text-white hover:text-blue-400 transition duration-300" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-6 h-6 text-white hover:text-pink-500 transition duration-300" />
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@udbhavx.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="w-6 h-6 text-white hover:text-red-500 transition duration-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com//"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon className="w-6 h-6 text-white hover:text-blue-600 transition duration-300" />
                  </a>
                </div>
              </div>
              {/* Contact Form Section */}
              <div className="bg-white/10 mb-10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
                <h2 className="text-3xl text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Leave us a Message!
                  </span>
                </h2>
                <form
                  action="https://formspree.io/f/xrbzkrbv"
                  method="POST"
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full p-2 border text-black border-gray-600 rounded"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full p-2 border text-black border-gray-600 rounded"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    style={{ resize: 'none' }}
                    className="w-full h-40 p-2 border border-gray-600 text-black rounded"
                    placeholder="Enter Your Message"
                  ></textarea>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full h-10 max-w-6xl  bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Contactus;
