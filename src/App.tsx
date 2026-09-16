import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Architecture from '@/components/Architecture';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ProjectDetails from '@/pages/ProjectDetails';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Architecture />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="relative min-h-screen bg-bg text-[var(--text)]">
      <div className="noise" />
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
