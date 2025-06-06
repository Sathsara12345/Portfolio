import React from "react";
import { Button } from "../components/ui/Button";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiDownload, HiOutlineCode } from "react-icons/hi";
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Hero = () => {
  const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/src/assets/cv/resume.pdf';
  link.download = 'Pavan_Sathsara_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col items-center justify-center px-4 sm:px-6 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500/10"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0.1 }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 max-w-6xl py-12 md:py-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex justify-center md:justify-start"
            >
              <span className="px-4 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium tracking-wider">
                FULL-STACK DEVELOPER
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mt-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Pavan Sathsara</span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I craft responsive websites where technology meets creativity. Transforming ideas into digital experiences is my passion.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
                <Button 
                  onClick={handleDownloadCV}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-4 sm:px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-blue-500/25"
                >
                  <HiDownload className="text-lg" /> Download CV
                </Button>
              <Link to="/projects">
                <Button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 sm:px-6 py-3 rounded-lg flex items-center gap-2 border border-white/10 transition-all">
                  <HiOutlineCode className="text-lg" /> View Projects
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex items-center gap-2 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <span className="text-gray-400">Connect with me:</span>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/pavan-sathsara-edirisinghe/" className="text-2xl text-white/70 hover:text-blue-400 transition-colors">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/pavan_sathsara/" className="text-2xl text-white/70 hover:text-pink-400 transition-colors">
                  <FaInstagram />
                </a>
                <a href="https://github.com/Sathsara12345" className="text-2xl text-white/70 hover:text-gray-200 transition-colors">
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="relative">
              {/* Glowing effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20"></div>
              
              <img 
                src="/src/assets/img/Hero.jpeg" 
                alt="Pavan Sathsara" 
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/10 shadow-2xl z-10 relative"
              />
              
              {/* Animated rings */}
              <motion.div 
                className="absolute inset-0 border-4 border-blue-500/30 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                className="absolute -inset-4 border-4 border-purple-500/20 rounded-full"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Tech stack indicators */}
        <motion.div 
          className="absolute bottom-4 sm:bottom-10 left-0 right-0 flex justify-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="px-4 sm:px-6 py-3 bg-white/5 backdrop-blur-lg rounded-xl flex flex-col sm:flex-row gap-4 items-center border border-white/10 max-w-full overflow-x-auto">
            <span className="text-sm text-gray-400 whitespace-nowrap">Tech Stack:</span>
            <div className="flex gap-3 flex-wrap justify-center">
              {['React', 'Node.js', 'Tailwind', 'MySQL', 'Laravel', 'PostgreSQL'].map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-white/10 rounded-md text-sm font-medium whitespace-nowrap">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
