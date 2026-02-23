import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import SystemDesign from './components/SystemDesign';
import ChatBot from './components/ChatBot';
import Contact from './components/Contact';

function App() {
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
