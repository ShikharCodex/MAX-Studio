import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectStory from './components/ProjectStory';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import LiveControl from './components/LiveControl';
import Blueprint from './components/Blueprint';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent-brown selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProjectStory />
        <HowItWorks />
        <Features />
        <LiveControl />
        <Blueprint />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
