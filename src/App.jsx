import React from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Preloader from './components/Preloader'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/contact'
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Router>
    {loading ? <Preloader /> : (
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    )}
  </Router>
  );
}

export default App;
