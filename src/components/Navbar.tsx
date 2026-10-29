import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Menu, X, Camera, Droplets, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled 
            ? 'bg-[#08090d]/95 backdrop-blur-2xl py-3 border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]' 
            : 'bg-[#08090d]/80 backdrop-blur-xl py-4 border-b border-white/5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-orange animate-pulse shadow-[0_0_10px_#f97316]"></span>
              <span className="font-display font-bold text-lg sm:text-xl tracking-tighter text-white group-hover:text-accent-orange transition-colors">
                MAX STUDIO
              </span>
            </a>
            <span className="hidden xl:inline-block text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/10">
              PET IOT STATION
            </span>
          </div>

          {/* Desktop Nav Links - Always High-Contrast Crisp White & Titanium */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs font-mono font-medium tracking-wider">
            <a 
              href="#story" 
              className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all"
            >
              PROJECT
            </a>
            <a 
              href="#how-it-works" 
              className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all"
            >
              ARCHITECTURE
            </a>
            <a 
              href="#features" 
              className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all"
            >
              FEATURES
            </a>
            <a 
              href="#camera" 
              className="text-accent-orange hover:text-orange-300 hover:bg-accent-orange/10 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 font-bold"
            >
              <Camera size={13} className="text-accent-orange" />
              <span>ESP32-CAM</span>
            </a>
            <a 
              href="#water" 
              className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 font-bold"
            >
              <Droplets size={13} className="text-cyan-400" />
              <span>WATER MODULE</span>
            </a>
            <a 
              href="#blueprint" 
              className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all"
            >
              BLUEPRINT
            </a>
            <a 
              href="#team" 
              className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all"
            >
              TEAM
            </a>
          </nav>

          {/* Direct Hardware Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* ESP32-CAM Button (10.38.133.55) - High visibility */}
            <a
              href="http://10.38.133.55"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-accent-orange text-black px-4 py-2 rounded-full text-xs font-mono font-bold hover:bg-orange-400 transition-all duration-300 shadow-[0_0_18px_rgba(249,115,22,0.4)] active:scale-95"
              title="Open ESP32-CAM Stream Interface (10.38.133.55)"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
              <Camera size={13} />
              <span>10.38.133.55</span>
              <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Feeder Button (10.38.133.108) */}
            <a
              href="http://10.38.133.108"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-mono font-bold hover:bg-zinc-200 transition-all duration-300 active:scale-95 shadow-sm"
              title="Open Smart Feeder Dashboard (10.38.133.108)"
            >
              <span>FEEDER</span>
              <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[#08090d]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto text-white"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="font-display font-bold text-xl tracking-tighter text-white">MAX STUDIO</div>
              <button 
                className="p-2 text-white rounded-full hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col space-y-3 my-6 text-lg font-display font-medium">
              <a 
                href="#story" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-3 border-b border-white/10 flex items-center justify-between text-white hover:text-accent-orange"
              >
                <span>PROJECT STORY</span>
                <ChevronRight size={18} className="opacity-40" />
              </a>
              <a 
                href="#how-it-works" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-3 border-b border-white/10 flex items-center justify-between text-white hover:text-accent-orange"
              >
                <span>HOW IT WORKS</span>
                <ChevronRight size={18} className="opacity-40" />
              </a>
              <a 
                href="#features" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-3 border-b border-white/10 flex items-center justify-between text-white hover:text-accent-orange"
              >
                <span>SYSTEM FEATURES</span>
                <ChevronRight size={18} className="opacity-40" />
              </a>
              <a 
                href="#camera" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-3 border-b border-white/10 flex items-center justify-between text-accent-orange font-bold"
              >
                <span className="flex items-center gap-2">
                  <Camera size={18} />
                  ESP32-CAM (10.38.133.55)
                </span>
                <ChevronRight size={18} />
              </a>
              <a 
                href="#water" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-3 border-b border-white/10 flex items-center justify-between text-cyan-400 font-bold"
              >
                <span className="flex items-center gap-2">
                  <Droplets size={18} />
                  WATER MODULE (ULTRASONIC + RELAY)
                </span>
                <ChevronRight size={18} />
              </a>
              <a 
                href="#blueprint" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-3 border-b border-white/10 flex items-center justify-between text-white hover:text-accent-orange"
              >
                <span>TECHNICAL BLUEPRINT</span>
                <ChevronRight size={18} className="opacity-40" />
              </a>
              <a 
                href="#team" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-3 border-b border-white/10 flex items-center justify-between text-white hover:text-accent-orange"
              >
                <span>ENGINEERING TEAM</span>
                <ChevronRight size={18} className="opacity-40" />
              </a>
            </nav>

            {/* Mobile Direct IP Launchers */}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <a
                href="http://10.38.133.55"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 bg-accent-orange text-black font-mono font-bold px-6 py-4 rounded-2xl text-sm shadow-lg active:scale-98"
              >
                <Camera size={18} />
                <span>OPEN ESP32-CAM (10.38.133.55)</span>
                <ExternalLink size={16} />
              </a>

              <a
                href="http://10.38.133.108"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 bg-white text-black font-mono font-bold px-6 py-3.5 rounded-2xl text-sm active:scale-98"
              >
                <span>OPEN FEEDER (10.38.133.108)</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
