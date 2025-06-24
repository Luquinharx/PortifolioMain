import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Technologies } from './components/Technologies';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { SoftSkills } from './components/SoftSkills';
import { Contact } from './components/Contact';
import { GridBackground } from './components/GridBackground';

function App() {
  return (
    <div className="min-h-screen bg-cyber-black text-cyber-white relative overflow-x-hidden">
      <GridBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Certificates />
        <SoftSkills />
        <Contact />
      </main>
    </div>
  );
}

export default App;