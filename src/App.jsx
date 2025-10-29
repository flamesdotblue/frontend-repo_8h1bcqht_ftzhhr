import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-400/30">
      <Navbar />
      <main>
        <Hero3D />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
