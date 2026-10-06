import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import FeederVisual from './FeederVisual';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100svh] lg:min-h-screen flex items-center justify-center pt-20 pb-8 overflow-hidden bg-background">
      {/* Dynamic Background Blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
         <motion.div 
           animate={{ 
             scale: [1, 1.2, 1],
             opacity: [0.3, 0.5, 0.3],
           }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[-10%] right-[-5%] w-[80vw] h-[80vw] max-w-[800px] bg-accent-brown/10 blur-[100px] rounded-full mix-blend-multiply"
         />
         <motion.div 
           animate={{ 
             scale: [1, 1.1, 1],
             opacity: [0.2, 0.4, 0.2],
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] bg-accent-green/10 blur-[100px] rounded-full mix-blend-multiply"
         />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-10 lg:pt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-md mb-6 sm:mb-8"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-accent-brown animate-pulse shadow-[0_0_8px_rgba(217,125,84,0.6)]"></span>
              <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] md:tracking-widest text-foreground/80 uppercase font-medium">Introducing Max Studio</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem] 2xl:text-[5.25rem] font-display font-medium tracking-tight leading-[1.05] mb-4 sm:mb-6 text-foreground w-full"
            >
              Smart feeding.<br className="hidden sm:block"/>
              <span className="text-foreground/40 block mt-2">Simple care.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-foreground/60 font-light max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10 lg:mb-12 leading-relaxed"
            >
              An intelligently designed hardware system that completely automates your pet's feeding schedule. Precision engineering meets everyday convenience.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a 
                href="http://10.38.133.108" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium overflow-hidden transition-transform active:scale-95 shadow-xl shadow-foreground/10"
              >
                <div className="absolute inset-0 w-full h-full bg-accent-brown translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Launch Interface
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a 
                href="#how-it-works" 
                className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border border-foreground/20 rounded-full font-medium hover:bg-foreground/5 hover:border-foreground/30 transition-all active:scale-95"
              >
                <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                  <Play size={14} className="text-foreground ml-0.5" />
                </div>
                <span>See how it works</span>
              </a>
            </motion.div>
          </div>

          {/* Visual Content */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[400px] mt-4 sm:mt-8 lg:mt-0 max-h-[50vh] lg:max-h-[75vh]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[400px] xl:max-w-[480px] 2xl:max-w-[520px] aspect-[3/4] max-h-[100%] flex items-center justify-center mx-auto lg:mr-0"
            >
              <div className="w-full h-full flex items-center justify-center">
                <FeederVisual />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
