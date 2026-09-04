import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Vision } from './components/sections/Vision';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Vision />
      </main>

      <Footer />
    </div>
  );
}

export default App;
