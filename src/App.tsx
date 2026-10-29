import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectStory from './components/ProjectStory';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import CameraSection from './components/CameraSection';
import WaterModule from './components/WaterModule';
import LiveControl from './components/LiveControl';
import Blueprint from './components/Blueprint';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#08090d] text-white overflow-x-hidden selection:bg-accent-orange selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ProjectStory />
        <HowItWorks />
        <Features />
        <CameraSection />
        <WaterModule />
        <LiveControl />
        <Blueprint />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
