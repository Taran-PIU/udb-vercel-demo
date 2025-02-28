import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Rocket, Brain } from 'lucide-react';
import Navbar from '../components/Navbar';
import NetworkAnimation from '../components/NetworkAnimation';

function FindOppurtunities() {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
        <NetworkAnimation />
        <Navbar />
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

        </section>
        </div>
        </>
  )
}

export default FindOppurtunities;