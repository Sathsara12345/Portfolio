import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { FaUser, FaGraduationCap, FaCertificate, FaLaptopCode } from 'react-icons/fa'

const About = () => {
    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          staggerChildren: 0.2,
          delayChildren: 0.3
        }
      }
    }
  
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: { 
        y: 0, 
        opacity: 1,
        transition: { duration: 0.6 }
      }
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500/5"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0.1 }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <Navbar />
      
        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium tracking-wider">
              ABOUT ME
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              My Journey & Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Introduction Section */}
            <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mr-4 backdrop-blur-sm border border-blue-500/10">
                  <FaUser className="text-2xl text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Introduction
                </h3>
              </div>
            
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-blue-500/5 transition-all duration-300 h-full w-full transform hover:-translate-y-1">
                <p className="text-gray-300 leading-relaxed">
                  Hi there! I'm a passionate
                  <span className="text-green-400 font-bold"> FULL STACK DEVELOPER </span> 
                  with a love for creating beautiful and functional web applications. I enjoy working with modern technologies and frameworks to bring ideas to life.
                </p>
                <div className="mt-6 p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-white/5">
                  <p className="text-white/80 italic">
                    "I believe in writing clean, efficient code that solves real-world problems and creates exceptional user experiences."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center items-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl opacity-20"></div>
                <motion.img 
                  src="/assets/img/hi_there___waving_animated_3D_web_developer-removebg-preview.png" 
                  alt="Profile" 
                  className="relative z-10 max-w-full"
                  initial={{ scale: 0.9, rotate: -5 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8,
                    yoyo: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 5
                  }}
                />
              </div>
            </motion.div>

            {/* Education Image */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center items-center order-4 md:order-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl opacity-20"></div>
                <motion.img 
                  src="/assets/img/Graduated_from_cardiff_metropolitan_university.png" 
                  alt="Education" 
                  className="relative z-10 max-w-full"
                  initial={{ scale: 0.9, rotate: 5 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8,
                    yoyo: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 6
                  }}
                />
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start order-3 md:order-4">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl mr-4 backdrop-blur-sm border border-purple-500/10">
                  <FaGraduationCap className="text-2xl text-purple-400" />
                </div>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Education
                </h3>
              </div>
            
              <div className="space-y-4 w-full">
                <motion.div 
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-purple-500/5 transition-all duration-300 transform hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-blue-500/20 rounded-full mr-3">
                      <FaGraduationCap className="h-5 w-5 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-bold text-blue-400">Bachelor's Degree</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    I hold a Bachelor's degree in <span className="font-semibold text-white">Software Engineering</span> from the <span className="font-semibold text-blue-400">Cardiff Metropolitan University</span>, where I gained a solid foundation in programming, algorithms, and software development.
                  </p>
                </motion.div>
              
                <motion.div 
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-purple-500/5 transition-all duration-300 transform hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-purple-500/20 rounded-full mr-3">
                      <FaCertificate className="h-5 w-5 text-purple-400" />
                    </div>
                    <h4 className="text-xl font-bold text-purple-400">Certifications</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    I have completed multiple courses and certifications in web development, including 
                    <span className="font-semibold text-red-400"> React</span>, 
                    <span className="font-semibold text-green-400"> Node.js</span>, and 
                    <span className="font-semibold text-yellow-400"> JavaScript</span>. 
                    These courses have equipped me with the skills needed to build modern web applications.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-xl mr-4 backdrop-blur-sm border border-blue-500/10">
                  <FaLaptopCode className="text-2xl text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                  Skills
                </h3>
              </div>
            
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-blue-500/5 transition-all duration-300 w-full transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-full mr-3">
                    <FaLaptopCode className="h-5 w-5 text-indigo-400" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-400">Technical Skills</h4>
                </div>
              
                <p className="text-gray-300 leading-relaxed mb-6">
                  With <span className="font-semibold text-white">1 year of industrial experience</span> in software development, I've built expertise in both frontend and backend technologies.
                </p>
              
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                  {[
                    { name: 'JavaScript', color: 'yellow-400' },
                    { name: 'TypeScript', color: 'blue-400' },
                    { name: 'React', color: 'cyan-400' },
                    { name: 'Node.js', color: 'green-400' },
                    { name: 'PHP', color: 'purple-400' },
                    { name: 'Laravel', color: 'red-400' },
                    { name: 'MySQL', color: 'orange-400' },
                    { name: 'PostgreSQL', color: 'blue-300' },
                    { name: 'Tailwind CSS', color: 'teal-400' }
                  ].map((skill, index) => (
                    <motion.div 
                      key={index}
                      className={`px-3 py-2 bg-white/5 rounded-lg border border-${skill.color}/20 flex items-center justify-center`}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    >
                      <span className={`text-${skill.color} font-medium`}>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Working Image */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center items-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-full blur-3xl opacity-20"></div>
                <motion.img 
                  src="/assets/img/Working_in_front_of_laptop_3D_animated_boy-removebg-preview.png" 
                  alt="Working" 
                  className="relative z-10 max-w-full"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.8,
                    yoyo: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 4
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      
        {/* Floating tech badges */}
        <motion.div 
          className="fixed bottom-10 left-0 right-0 flex justify-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="px-6 py-3 bg-white/5 backdrop-blur-lg rounded-xl flex gap-4 items-center border border-white/10">
            <span className="text-sm text-gray-400">Experience with:</span>
            <div className="flex gap-3 flex-wrap justify-center">
              {['React', 'Node.js', 'Laravel', 'MySQL', 'Tailwind'].map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-white/10 rounded-md text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    )
}

export default About