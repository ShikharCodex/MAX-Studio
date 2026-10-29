import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Terminal, Camera, Droplets, Disc } from 'lucide-react';

type ActiveNode = 'feeder' | 'camera' | 'water';

const LiveControl = () => {
  const [activeNode, setActiveNode] = useState<ActiveNode>('feeder');
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = (url: string) => {
    setIsConnecting(true);
    setTimeout(() => {
      window.open(url, "_blank");
      setIsConnecting(false);
    }, 800);
  };

  return (
    <section id="live-control" className="py-24 md:py-40 bg-[#050505] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-accent-green/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-accent-orange/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            NETWORK COMMAND CENTER
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-medium tracking-tight mb-4">
            Meet the machines.
          </h2>
          <p className="text-base sm:text-lg text-white/50 font-light max-w-lg mx-auto">
            Interact securely with all physical modules directly from your browser.
          </p>
        </div>

        {/* Node Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveNode('feeder')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs transition-all ${
              activeNode === 'feeder'
                ? 'bg-white text-black font-bold shadow-lg shadow-white/20'
                : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Disc size={14} className={activeNode === 'feeder' ? 'text-accent-brown' : ''} />
            <span>FEEDER (10.38.133.108)</span>
          </button>

          <button
            onClick={() => setActiveNode('camera')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs transition-all ${
              activeNode === 'camera'
                ? 'bg-accent-orange text-black font-bold shadow-lg shadow-accent-orange/30'
                : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Camera size={14} />
            <span>ESP32-CAM (10.38.133.55)</span>
          </button>

          <button
            onClick={() => setActiveNode('water')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs transition-all ${
              activeNode === 'water'
                ? 'bg-cyan-400 text-black font-bold shadow-lg shadow-cyan-400/30'
                : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Droplets size={14} />
            <span>WATER STATION (HC-SR04)</span>
          </button>
        </div>

        {/* Terminal Window */}
        <div className="max-w-4xl mx-auto dark-glass-panel rounded-2xl md:rounded-3xl p-1.5 sm:p-2 md:p-3 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="bg-[#080808] rounded-xl md:rounded-2xl overflow-hidden border border-white/5 relative min-h-[520px] md:min-h-[580px] flex flex-col">
            
            {/* Terminal Header */}
            <div className="h-11 md:h-12 border-b border-white/10 flex items-center px-4 md:px-6 justify-between bg-[#111]">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-white/40" />
                <span className="text-[11px] font-mono text-white/50">
                  max_studio_kernel // {activeNode.toUpperCase()}_NODE
                </span>
              </div>
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 relative flex flex-col items-center justify-between p-6 sm:p-8 md:p-10">
              
              {/* Dynamic Status Header */}
              <div className="w-full flex justify-between items-start font-mono text-[10px] md:text-xs">
                <div className="flex flex-col gap-1 text-left">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399] animate-pulse"></span> 
                    STATUS: LINK_ESTABLISHED
                  </div>
                  <div className="text-white/40">
                    DEVICE: {activeNode === 'feeder' ? 'ESP8266/ESP32 SERVO MCU' : activeNode === 'camera' ? 'ESP32-CAM AI-THINKER' : 'ARDUINO NANO ATMEGA328P'}
                  </div>
                </div>

                <div className="flex flex-col gap-1 text-right text-white/50">
                  <div className="text-accent-orange font-bold">
                    TARGET: {activeNode === 'feeder' ? '10.38.133.108:8080' : activeNode === 'camera' ? '10.38.133.55:80' : 'ARDUINO / D8 RELAY'}
                  </div>
                  <div>SECURE SUBNET: TRUE</div>
                </div>
              </div>

              {/* Dynamic Center Visualizer according to selected node */}
              <div className="my-auto py-6">
                <AnimatePresence mode="wait">
                  {activeNode === 'feeder' && (
                    <motion.div
                      key="feeder"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center"
                    >
                      {/* 3D Food Reservoir */}
                      <div className="relative w-36 h-48 sm:w-44 sm:h-56 md:w-52 md:h-64 perspective-1000 mb-4">
                        <div className="w-full h-full relative preserve-3d">
                          <div className="absolute inset-0 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm"></div>
                          
                          {/* Kibble level */}
                          <div className="absolute bottom-0 left-0 right-0 h-[82%] bg-gradient-to-t from-accent-orange to-accent-orange/70 rounded-b-2xl overflow-hidden backdrop-blur-md">
                            <motion.div 
                              className="absolute top-0 left-[-100%] w-[200%] h-6 bg-white/20 blur-md"
                              animate={{ x: ["0%", "50%"] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                          </div>

                          <div className="absolute inset-0 border border-white/20 rounded-2xl flex items-center justify-center">
                            <div className="font-display font-medium text-4xl sm:text-5xl text-white drop-shadow-[0_0_15px_rgba(217,125,84,0.8)]">
                              82%
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="font-mono text-xs text-white/60">KIBBLE HOPPER CAPACITY: 82%</div>
                    </motion.div>
                  )}

                  {activeNode === 'camera' && (
                    <motion.div
                      key="camera"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center"
                    >
                      <div className="relative w-64 sm:w-80 md:w-96 aspect-video rounded-2xl overflow-hidden border border-accent-orange/40 shadow-[0_0_30px_rgba(217,125,84,0.25)] mb-4">
                        <img src="/esp32_cam_feed.jpg" alt="ESP32 CAM" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 flex flex-col justify-between p-3 font-mono text-[10px]">
                          <div className="flex justify-between items-center text-accent-orange">
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                              LIVE 10.38.133.55
                            </span>
                            <span className="text-white">29.8 FPS</span>
                          </div>
                          <div className="text-white/80">MAX DETECTED · STABLE STREAM</div>
                        </div>
                      </div>
                      <div className="font-mono text-xs text-accent-orange">OV2640 OPTICAL SENSOR // ONLINE</div>
                    </motion.div>
                  )}

                  {activeNode === 'water' && (
                    <motion.div
                      key="water"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center"
                    >
                      <div className="relative w-36 h-48 sm:w-44 sm:h-56 md:w-52 md:h-64 perspective-1000 mb-4">
                        <div className="w-full h-full relative preserve-3d">
                          <div className="absolute inset-0 border border-cyan-500/20 rounded-2xl bg-cyan-950/20 backdrop-blur-sm"></div>
                          
                          {/* Water level */}
                          <div className="absolute bottom-0 left-0 right-0 h-[78%] bg-gradient-to-t from-blue-600 to-cyan-400 rounded-b-2xl overflow-hidden backdrop-blur-md">
                            <motion.div 
                              className="absolute top-0 left-[-100%] w-[200%] h-6 bg-white/25 blur-md"
                              animate={{ x: ["0%", "50%"] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                          </div>

                          <div className="absolute inset-0 border border-cyan-400/30 rounded-2xl flex items-center justify-center">
                            <div className="font-display font-medium text-4xl sm:text-5xl text-white drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]">
                              78%
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="font-mono text-xs text-cyan-300">ULTRASONIC DEPTH: 4.2 CM // 2.34L</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Action Buttons */}
              <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3">
                
                {/* Dynamic Direct Node Launch */}
                <button
                  onClick={() => {
                    if (activeNode === 'feeder') handleConnect('http://10.38.133.108');
                    else if (activeNode === 'camera') handleConnect('http://10.38.133.55');
                    else {
                      document.getElementById('water')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 ${
                    activeNode === 'camera'
                      ? 'bg-accent-orange text-black hover:bg-accent-orange/90'
                      : activeNode === 'water'
                      ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                      : 'bg-white text-black hover:bg-accent-green hover:text-white'
                  }`}
                >
                  {isConnecting ? (
                    <span className="flex items-center gap-2">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"></motion.div>
                      CONNECTING...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      {activeNode === 'feeder' && 'LAUNCH FEEDER (10.38.133.108)'}
                      {activeNode === 'camera' && 'LAUNCH ESP32-CAM (10.38.133.55)'}
                      {activeNode === 'water' && 'TRIGGER WATER RELAY CONTROLLER'}
                      <ExternalLink size={15} />
                    </span>
                  )}
                </button>

                {/* Direct quick button for the other device */}
                {activeNode !== 'camera' && (
                  <a
                    href="http://10.38.133.55"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-4 rounded-full font-mono text-xs text-white/80 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 flex items-center justify-center gap-2 transition-all"
                  >
                    <Camera size={14} className="text-accent-orange" />
                    <span>OPEN CAM (10.38.133.55)</span>
                  </a>
                )}

                {activeNode !== 'feeder' && (
                  <a
                    href="http://10.38.133.108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-4 rounded-full font-mono text-xs text-white/80 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 flex items-center justify-center gap-2 transition-all"
                  >
                    <span>OPEN FEEDER (10.38.133.108)</span>
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LiveControl;
