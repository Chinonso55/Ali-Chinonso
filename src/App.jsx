import React from 'react'
import Header from './Components/Header';
import Hero from './section/Hero';
import Projects from './section/Projects';
import About from './section/About';
import Skills from './section/Skills';
import Contact from './section/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <Projects />

      {/* About Section */}
      <About />

      {/* Skill Section */}
      <Skills /> 

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />

    </div>
  )
}

export default App;

