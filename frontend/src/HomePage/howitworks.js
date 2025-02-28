import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Rocket, Brain } from 'lucide-react';
import Navbar from '../components/Navbar';
import NetworkAnimation from '../components/NetworkAnimation';

function HowItWorks() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
        <Navbar />
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <NetworkAnimation />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold text-white mb-6"
            >
              How it{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Works?
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 mt-16 max-w-4xl mx-auto"
            >
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                UDBHAVX
              </span>
              , the next-gen collaborative platform that brings together
              students, mentors, jobseekers, startups, aspiring entrepreneurs,
              and investors. Powered by advanced AI algorithms, we help you find
              the right connections to grow, learn, and succeed.
            </motion.p>
          </div>
        </section>
        <section className="relative min-h-screen  flex items-center justify-center overflow-hidden">
          <NetworkAnimation />
          <div className="container mx-auto px-6 mb-16 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mt-16 text-white mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Create Your Profile
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 mt-8 max-w-4xl mx-auto"
            >
              Whether you’re a student, mentor, jobseeker, startup, or investor,
              sign up and fill out a detailed profile. Tell us about your
              expertise, skills, needs, and goals. The more information you
              provide, the better our AI can match you with the right
              opportunities.
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mt-16 text-white mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                AI-Powered Matching
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 mt-8 max-w-4xl mx-auto"
            >
              Our intelligent matching system uses cutting-edge AI algorithms to
              understand your goals and requirements, ensuring you’re connected
              with the most relevant people and opportunities. Whether you’re
              looking for a mentor, a job, an investor, or someone to
              collaborate with, we make sure the right talent meets the right
              opportunities.
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mt-16 text-white mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Start Connecting
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 mt-8 max-w-4xl mx-auto"
            >
              Once your profile is set, you’ll begin receiving personalized
              matches based on your preferences. Reach out, chat, and
              collaborate! You can schedule meetings, chat with mentors, apply
              for jobs, discuss startup ideas, or pitch investment
              opportunities—all in one place.
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mt-16 text-white mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Learning &amp; Growth
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 mt-8 max-w-4xl mx-auto"
            >
              We offer a wealth of resources, webinars, and courses designed to
              help you level up. Connect with like-minded individuals and expand
              your network, whether it’s to gain knowledge or take the next big
              leap in your career or business.
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mt-16 text-white mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Collaboration &amp; Networking
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 mt-8 max-w-4xl mx-auto"
            >
              Join groups, participate in events, and engage in meaningful
              discussions to foster collaboration and innovation. The power of
              networking is at your fingertips.
            </motion.p>
          </div>
        </section>
      </div>
    </>
  );
}

export default HowItWorks;
