import React from 'react'
import Navbar from '../components/Navbar'
import { Button } from '../components/ui/Button'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
    const projects = [
      {
        id: 1,
        title: "Language-Limousine",
        image: "/src/assets/img/Language_limousine.jpg",
        description: "From Airport to Hostel Student Tranporatation System for a Transportation company which is located in canada",
        tags: ["PHP", "Bootstrap", "MySQL"],
        source: "https://github.com/Thamalpath/language-limousine",
      },
      {
        id: 2,
        title: "Upload.lk",
        image: "/src/assets/img/upload.jpg",
        description: "A online business analysis platform for a multiple Economic centers which is located in Sri Lanka",
        tags: ["Laravel", "Tailwind CSS", "MySQL"],
        source: "https://github.com/Sathsara12345/Manning",
      },
    {
      id: 4,
      title: "School Management System",
      image: "/src/assets/img/SMS.jpg",
      description: "A fully computerized system for school administration with student records, attendance tracking, and grade management.",
      tags: ["MySQL", "Express", "React", "Node.js"],
      source: "https://github.com/Sathsara12345/SMS"
    }
    ]

    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2
        }
      }
    }

    const item = {
      hidden: { y: 20, opacity: 0 },
      show: { y: 0, opacity: 1 }
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
        <Navbar />
      
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500/5"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
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
      
        <div className="container mx-auto px-6 py-12   relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="px-4 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium tracking-wider">
                MY WORK
              </span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Here's a selection of my recent work. Each project represents a unique challenge and solution.
            </motion.p>
          </motion.div>
        
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                variants={item}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  ></motion.div>
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-56 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-blue-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-500/25">
                      <FaExternalLinkAlt className="text-sm" /> Live Demo
                    </Button>
                    <a 
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 border border-white/10 transition-all">
                        <FaGithub className="text-sm" /> Source Code
                      </Button>
                    </a>

                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-lg border border-white/10 transition-all inline-flex items-center gap-2">
              View All Projects <FaExternalLinkAlt className="text-sm" />
            </Button>
          </motion.div>
        </div>
      </div>
    )
}

export default Projects