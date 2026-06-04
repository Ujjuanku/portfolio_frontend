import { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import SystemDesign from './components/SystemDesign';
import ChatBot from './components/ChatBot';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Disable browser scroll restoration to prevent jumping to previous position on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Force scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <main>
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <ChatBot />
        <SystemDesign />
      </main>
      <Contact />
    </div>
  );
}

export default App;
