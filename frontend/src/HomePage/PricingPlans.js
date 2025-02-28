import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Rocket, Brain } from 'lucide-react';
import Navbar from '../components/Navbar';
import NetworkAnimation from '../components/NetworkAnimation';

function PricingPlans() {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
        <NetworkAnimation />
        <Navbar />
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold text-white mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Pricing Plans!
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
              , We offer flexible pricing packages for individuals, startups,
              and enterprises, designed to cater to your specific needs and
              objectives. Choose the plan that works best for you!
            </motion.p>
          </div>
        </section>
        <section className="relative min-h-screen w-full sm:ml-2 md:ml-8 lg:ml-2 flex items-center justify-center overflow-hidden">
          <div className="container w-full md:w-3/4 mx-auto px-6 mb-16 relative z-10 text-center">
            <div className="bg-white/10 w-full mb-10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl md:text-4xl sm:text-4xl font-bold sm:mt-2 md:mt-4 text-white mb-6"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  For Individuals
                </span>
              </motion.h1>
              <div className="flex w-full gap-2 flex-row">
                <div className="bg-white/10 w-[180px] ml-[-6px] md:ml-0 md:w-3/4 backdrop-blur-lg h-2/3 p-4 md:p-8 mt-2 rounded-2xl shadow-xl border border-white/20">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[10px] md:text-lg text-gray-300 mb-8 md:mt-8 max-w-6xl text-left md:mx-auto"
                  >
                    <span className="block text-sm md:text-xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Basic Plan
                    </span>
                    Ideal for students, jobseekers, or anyone looking to connect
                    with mentors and explore opportunities.
                    <br /> Personalized AI matching Access to basic networking
                    groups
                    <br /> Apply to limited job listings and mentorship requests{' '}
                    <br />
                    Monthly resource newsletter
                    <br />
                    Limited chat and communication features
                  </motion.p>
                </div>
                <div className="bg-white/10 w-[150px] ml-[-6px] md:ml-0 md:w-3/4  backdrop-blur-lg  h-2/3 p-2 md:p-8 mt-2 rounded-2xl shadow-xl border border-white/20">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[10px] md:text-lg text-gray-300 mb-8 md:mt-8 max-w-6xl text-left mx-auto"
                  >
                    <span className="block text-sm md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Intermediate Plan
                    </span>
                    All features of Basic Plan <br /> Access to advanced
                    networking groups and events <br />
                    Apply to unlimited job listings and mentorship requests{' '}
                    <br /> Priority AI matching <br /> Access to exclusive
                    webinars and resources <br /> Unlimited messaging and chat
                    with contacts
                  </motion.p>
                </div>
                <div className="bg-white/10 w-[150px] ml-[-6px] md:ml-0 md:w-3/4 backdrop-blur-lg h-2/3 p-4 md:p-8 mt-2 rounded-2xl shadow-xl border border-white/20">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[10px] md:text-lg  text-gray-300 mb-8 md:mt-8 max-w-6xl text-left mx-auto"
                  >
                    <span className="block text-sm md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Advanced Plan
                    </span>
                    All features of Intermediate Plan <br /> Premium AI matching
                    for highly personalized connections <br /> Access to
                    industry-specific networking groups <br /> Direct access to
                    startup founders and investors <br />
                    Access to priority job listings and investment opportunities{' '}
                    <br />
                    Personalized growth recommendations and career coaching{' '}
                    <br /> Early access to new features and events
                  </motion.p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 w-full mb-10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl md:text-4xl sm:text-4xl font-bold sm:mt-2 md:mt-4 text-white mb-6"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  For Startups
                </span>
              </motion.h1>
              <div className="flex w-full gap-2 flex-row">
                <div className="bg-white/10 w-[180px] ml-[-6px] md:ml-0 md:w-3/4 backdrop-blur-lg h-2/3 p-4 md:p-8 mt-2 rounded-2xl shadow-xl border border-white/20">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[10px] md:text-lg text-gray-300 mb-8 md:mt-8 max-w-6xl text-left md:mx-auto"
                  >
                    <span className="block text-sm md:text-xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Basic Startup Plan
                    </span>
                    For early-stage startups looking to build a team and network
                    with mentors and investors.
                    <br />
                    Personalized AI matching with jobseekers and mentors <br />{' '}
                    Post job listings and startup opportunities <br /> Limited
                    access to investment opportunities
                    <br /> Basic networking group access
                    <br />
                    Monthly insights and reports on platform activity <br />{' '}
                    Limited access to resource library
                  </motion.p>
                </div>
                <div className="bg-white/10 w-[180px] ml-[-6px] md:ml-0 md:w-3/4 backdrop-blur-lg h-2/3 p-4 md:p-8 mt-2 rounded-2xl shadow-xl border border-white/20">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[10px] md:text-lg text-gray-300 mb-8 md:mt-8 max-w-6xl text-left md:mx-auto"
                  >
                    <span className="block text-sm md:text-xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Intermediate Startup Plan
                    </span>
                    Designed for growing startups with more ambitious networking
                    and hiring needs. <br />
                    All features of Basic Plan
                    <br />
                    Unlimited job and startup opportunity postings <br />
                    Access to exclusive investor pool <br />
                    Priority AI matching for potential partners and employees{' '}
                    <br /> Access to targeted startup-specific groups <br />
                    Access to premium resources and workshops <br />
                    Monthly consultations with experienced mentors
                  </motion.p>
                </div>
                <div className="bg-white/10 w-[180px] ml-[-6px] md:ml-0 md:w-3/4 backdrop-blur-lg h-2/3 p-4 md:p-8 mt-2 rounded-2xl shadow-xl border border-white/20">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[10px] md:text-lg text-gray-300 mb-8 md:mt-8 max-w-6xl text-left md:mx-auto"
                  >
                    <span className="block text-sm md:text-xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Advanced Startup Plan
                    </span>
                    For established startups seeking to scale and connect with
                    top talent and investors. <br />
                    All features of Intermediate Plan <br />
                    Advanced AI matching with top talent, mentors, and investors{' '}
                    <br />
                    Premium access to investor and partner events <br />{' '}
                    Tailored networking opportunities for strategic partnerships{' '}
                    <br />
                    Exclusive startup workshops and masterclasses <br />{' '}
                    Dedicated success manager for personalized support <br />{' '}
                    Enhanced visibility and priority placement on job and
                    investment listings
                  </motion.p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 w-full mb-10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl md:text-4xl sm:text-4xl font-bold sm:mt-2 md:mt-4 text-white mb-6"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  For Enterprises/Investors
                </span>
              </motion.h1>
              <div className="flex w-full gap-2 flex-row">
                <div className="bg-white/10 w-[180px] ml-[-6px] md:ml-0 md:w-3/4 backdrop-blur-lg h-2/3 p-4 md:p-8 mt-2 rounded-2xl shadow-xl border border-white/20">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[10px] md:text-lg text-gray-300 mb-8 md:mt-8 max-w-6xl text-left md:mx-auto"
                  >
                    <span className="block text-sm md:text-xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Basic Investor Plan
                    </span>
                    Ideal for angel investors or enterprises looking to discover
                    the next big idea.
                    <br />
                    Personalized AI matching with high-potential startups <br />
                    Access to a curated list of top entrepreneurs and projects
                    <br />
                    Priority notifications for investment opportunities <br />
                    Monthly startup growth reports <br /> Limited access to
                    startup pitches and demo days
                  </motion.p>
                </div>
                <div className="bg-white/10 w-[180px] ml-[-6px] md:ml-0 md:w-3/4 backdrop-blur-lg h-2/3 p-4 md:p-8 mt-2 rounded-2xl shadow-xl border border-white/20">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[10px] md:text-lg text-gray-300 mb-8 md:mt-8 max-w-6xl text-left md:mx-auto"
                  >
                    <span className="block text-sm md:text-xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Intermediate Investor Plan
                    </span>
                    For venture capitalists or investors looking to expand their
                    portfolio. <br /> All features of Basic Plan <br />{' '}
                    Unlimited access to startup pitches and demo days <br />{' '}
                    Advanced filtering for high-growth potential startups <br />{' '}
                    Direct communication with founders and entrepreneurs <br />{' '}
                    Priority invitations to investor networking events
                    <br /> Investment analysis and insights reports
                  </motion.p>
                </div>
                <div className="bg-white/10 w-[180px] ml-[-6px] md:ml-0 md:w-3/4 backdrop-blur-lg h-2/3 p-4 md:p-8 mt-2 rounded-2xl shadow-xl border border-white/20">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[10px] md:text-lg text-gray-300 mb-8 md:mt-8 max-w-6xl text-left md:mx-auto"
                  >
                    <span className="block text-sm md:text-xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Advanced Investor Plan
                    </span>
                    For high-level investors seeking to stay ahead of the curve
                    and build strategic partnerships. <br /> All features of
                    Intermediate Plan
                    <br /> Exclusive access to top-performing startups and
                    industry leaders
                    <br />
                    Custom startup scouting and deal-flow management <br />
                    Personalized matchmaking with key founders and CEOs
                    <br />
                    Private investor roundtables and conferences <br />
                    Direct access to due diligence reports and market analysis
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative min-h-6xl  flex items-center justify-center overflow">
          <div className="container w-3/4 mx-auto px-6 mb-16 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mt-16 text-white mb-6"
            >
              Ready to find your next opportunity? Sign up today and join the
              community where the right talent meets the right opportunities.
              Together, we can unlock your full potential!
            </motion.h1>
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get Started Now!
              </motion.button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default PricingPlans;
