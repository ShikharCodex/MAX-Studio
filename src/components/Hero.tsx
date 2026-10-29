import { motion } from 'framer-motion';
import { ChevronRight, Camera, ExternalLink } from 'lucide-react';
import FeederVisual from './FeederVisual';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100svh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#08090d] text-white">
      {/* Dynamic Background Blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[80vw] h-[80vw] max-w-[800px] bg-accent-orange/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] bg-accent-green/10 blur-[120px] rounded-full"
        />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-6 sm:pt-10 lg:pt-0">
            
            {/* Multi-node Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-accent-orange animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
              <span className="text-[10px] md:text-xs font-mono tracking-widest text-white/80 uppercase font-semibold">
                Tri-Node IoT: Feeder · ESP32-CAM · Water Relay
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.5rem] 2xl:text-[5rem] font-display font-bold tracking-tight leading-[1.05] mb-4 sm:mb-6 text-white w-full"
            >
              Smart feeding.<br className="hidden sm:block"/>
              <span className="text-white/40 block sm:inline"> Precision care.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-white/70 font-light max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed"
            >
              Complete automated pet ecosystem: precision kibble dispenser, ESP32-CAM 24/7 vision stream (10.38.133.55), and ultrasonic smart water station with Arduino pump relay.
            </motion.p>

            {/* Hardware Direct Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
            >
              {/* ESP32-CAM Button (10.38.133.55) */}
              <a 
                href="http://10.38.133.55" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 bg-accent-orange text-black font-mono text-sm font-bold rounded-full overflow-hidden transition-all active:scale-95 shadow-lg shadow-accent-orange/30 hover:bg-orange-400"
              >
                <Camera size={16} />
                <span>ESP32 CAM (10.38.133.55)</span>
                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Feeder Interface Button (10.38.133.108) */}
              <a 
                href="http://10.38.133.108" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 bg-white text-black font-mono text-sm font-bold rounded-full overflow-hidden transition-all active:scale-95 shadow-md hover:bg-zinc-200"
              >
                <span>FEEDER (10.38.133.108)</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Jump to Camera */}
              <a 
                href="#camera" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-4 border border-white/20 rounded-full font-mono text-xs text-white/80 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all active:scale-95"
              >
                <span>EXPLORE SENSORS</span>
              </a>
            </motion.div>

            {/* Hardware Node Status Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-[11px] font-mono text-white/60"
            >
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-white/80">FEEDER: 10.38.133.108</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse"></span>
                <span className="text-white/80">CAM: 10.38.133.55</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-white/80">WATER: HC-SR04 + RELAY</span>
              </div>
            </motion.div>

          </div>

          {/* Feeder & IoT Visualizer */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end h-full min-h-[300px] sm:min-h-[400px] mt-4 sm:mt-8 lg:mt-0 max-h-[50vh] lg:max-h-[75vh]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[400px] xl:max-w-[480px] 2xl:max-w-[520px] aspect-[3/4] flex items-center justify-center mx-auto lg:mr-0"
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
