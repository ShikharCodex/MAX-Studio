import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled ? 'bg-background/90 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="font-display font-bold text-xl tracking-tighter">
              MAX STUDIO
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a href="#story" className="hover:text-accent-brown transition-colors">PROJECT</a>
            <a href="#how-it-works" className="hover:text-accent-brown transition-colors">HOW IT WORKS</a>
            <a href="#features" className="hover:text-accent-brown transition-colors">FEATURES</a>
            <a href="#team" className="hover:text-accent-brown transition-colors">TEAM</a>
          </nav>

          <div className="hidden md:block">
            <a
              href="http://10.38.133.108"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent-brown transition-all duration-300 ease-out"
            >
              <span>OPEN FEEDER</span>
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
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
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col justify-center items-center px-6"
          >
            <button 
              className="absolute top-6 right-6 p-4 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col items-center space-y-8 text-2xl font-display font-medium w-full max-w-sm">
              <a href="#story" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-2 border-b border-foreground/10">PROJECT</a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-2 border-b border-foreground/10">HOW IT WORKS</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-2 border-b border-foreground/10">FEATURES</a>
              <a href="#team" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-2 border-b border-foreground/10">TEAM</a>
              <a
                href="http://10.38.133.108"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-lg w-full active:scale-95 transition-transform"
              >
                OPEN FEEDER <ExternalLink size={18} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
