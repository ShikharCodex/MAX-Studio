import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal } from 'lucide-react';

const LiveControl = () => {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsConnecting(true);
    setTimeout(() => {
      window.open("http://10.38.133.108", "_blank");
      setIsConnecting(false);
    }, 1200);
  };

  return (
    <section className="py-24 md:py-48 bg-[#050505] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-accent-green/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-medium tracking-tight mb-4 md:mb-6">Meet the machine.</h2>
          <p className="text-lg sm:text-xl text-white/50 font-light max-w-lg mx-auto">Interact securely with the physical feeder directly from your browser.</p>
        </div>

        <div className="max-w-4xl mx-auto dark-glass-panel rounded-2xl md:rounded-3xl p-1.5 sm:p-2 md:p-3 backdrop-blur-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] md:shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="bg-[#080808] rounded-xl md:rounded-2xl overflow-hidden border border-white/5 relative min-h-[500px] md:min-h-[600px] flex flex-col">
            
            {/* Terminal Header */}
            <div className="h-10 md:h-12 border-b border-white/10 flex items-center px-4 md:px-6 justify-between bg-[#111]">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-white/40" />
                <span className="text-[10px] md:text-xs font-mono text-white/40">max_studio_kernel</span>
              </div>
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f]"></div>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 relative flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
              
              {/* Dynamic Status Display - Flex layout for better alignment */}
              <div className="w-full flex justify-between items-start absolute top-6 left-0 px-6 md:px-10 font-mono text-[10px] md:text-xs text-accent-green">
                <div className="flex flex-col gap-1.5 md:gap-2 text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-green rounded-full shadow-[0_0_8px_#4f6c58] animate-pulse"></span> 
                    SYSTEM_READY
                  </div>
                  <div className="text-white/40">PORT: 8080</div>
                </div>
                <div className="flex flex-col gap-1.5 md:gap-2 text-right text-white/40">
                  <div>TARGET IP: 10.38.133.108</div>
                  <div>SECURE CONNECTION: TRUE</div>
                </div>
              </div>

              {/* Centered 3D Level Indicator */}
              <div className="relative w-32 h-48 sm:w-40 sm:h-56 md:w-56 md:h-72 perspective-1000 my-auto mt-16 mb-12">
                <motion.div 
                  initial={{ rotateX: 10, rotateY: -10 }}
                  animate={{ rotateX: [10, 15, 10], rotateY: [-10, -5, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full relative preserve-3d"
                >
                  {/* Container back */}
                  <div className="absolute inset-0 border-[1.5px] border-white/10 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-sm -translate-z-10"></div>
                  
                  {/* Liquid/Food Level */}
                  <div className="absolute bottom-0 left-0 right-0 h-[82%] bg-gradient-to-t from-accent-orange to-accent-orange/60 rounded-b-xl md:rounded-b-2xl overflow-hidden backdrop-blur-md">
                     {/* Pellet texture */}
                     <div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMTUiLz4KPC9zdmc+')]"></div>
                     {/* Ambient light sweep */}
                     <motion.div 
                       className="absolute top-0 left-[-100%] w-[200%] h-6 bg-white/20 blur-md"
                       animate={{ x: ["0%", "50%"] }}
                       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                     />
                  </div>
                  
                  {/* Container front */}
                  <div className="absolute inset-0 border border-white/20 rounded-xl md:rounded-2xl translate-z-10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"></div>
                  
                  {/* Percentage Float perfectly centered inside */}
                  <div className="absolute inset-0 flex items-center justify-center translate-z-20">
                    <div className="font-display font-medium text-4xl sm:text-5xl md:text-6xl text-white drop-shadow-[0_0_15px_rgba(217,125,84,0.8)]">
                      82%
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Centered Action Button */}
              <div className="relative z-20 w-full flex justify-center mt-auto">
                <a
                  href="http://10.38.133.108"
                  onClick={handleConnect}
                  className={`group relative flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-full font-medium transition-all duration-500 overflow-hidden w-full sm:w-auto ${
                    isConnecting ? 'bg-accent-orange text-black' : 'bg-white text-black hover:bg-accent-green hover:text-white'
                  }`}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  {isConnecting ? (
                    <span className="relative z-10 flex items-center gap-3 font-mono text-sm tracking-widest font-bold">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"></motion.div>
                      CONNECTING...
                    </span>
                  ) : (
                    <span className="relative z-10 flex items-center gap-2 tracking-wide font-bold text-sm sm:text-base">
                      OPEN LIVE CONTROL
                      <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveControl;
