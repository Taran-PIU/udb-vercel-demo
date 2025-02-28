import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Rocket, Brain } from 'lucide-react';
import Navbar from '../components/Navbar';
import NetworkAnimation from '../components/NetworkAnimation';

function LandingPage() {
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
              Innovate Together,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Build the Future
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Connect with students, founders, mentors and investors to build
              the next generation of innovative products.
            </motion.p>

            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Start Collaborating
              </motion.button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        {/* <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Powerful Features for Collaboration
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
              icon={Users}
              title="Find Your Team"
              description="Connect with like-minded individuals and form the perfect team for your next big idea."
            />
            <FeatureCard
              icon={Rocket}
              title="Launch Projects"
              description="Turn your ideas into reality with our comprehensive project management tools."
            />
            <FeatureCard
              icon={Brain}
              title="AI-Powered Matching"
              description="Our intelligent algorithm matches you with the perfect collaborators based on skills and interests."
            />
            </div>
          </div>
        </section> */}

        {/* Testimonials Section */}
        {/* <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Success Stories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
              name="Sarah Chen"
              role="Student Founder"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150"
              quote="Found my co-founder and launched our startup within 3 months of joining the platform!"
            />
            <TestimonialCard
              name="Michael Rodriguez"
              role="Angel Investor"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150"
              quote="The quality of startups and founders I've connected with here is outstanding."
            />
            <TestimonialCard
              name="Alex Thompson"
              role="Tech Lead"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150"
              quote="Met brilliant developers and built an amazing product that got acquired!"
            />
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Build Something Amazing?
            </h2>
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Join the Community
              </motion.button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
