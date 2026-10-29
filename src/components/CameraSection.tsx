import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  ExternalLink, 
  Sun, 
  Moon, 
  Radio, 
  ShieldCheck, 
  Wifi, 
  Sliders, 
  Layers,
  Sparkles,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface CapturedPhoto {
  id: string;
  time: string;
  mode: string;
  src: string;
}

const CameraSection = () => {
  const [streamMode, setStreamMode] = useState<'simulated' | 'direct'>('simulated');
  const [ipAddress, setIpAddress] = useState('10.38.133.55');
  const [port, setPort] = useState('80');
  const [isFlashOn, setIsFlashOn] = useState(false);
  const [isNightVision, setIsNightVision] = useState(false);
  const [showAiOverlays, setShowAiOverlays] = useState(true);
  const [resolution, setResolution] = useState<'HD (1280x720)' | 'UXGA (1600x1200)' | 'VGA (640x480)'>('HD (1280x720)');
  const [pan, setPan] = useState(0);
  const [tilt, setTilt] = useState(-5);
  const [fps, setFps] = useState(29.8);
  const [isShutterFired, setIsShutterFired] = useState(false);
  const [capturedPhotos, setCapturedPhotos] = useState<CapturedPhoto[]>([
    {
      id: 'cap-1',
      time: '14:22:05',
      mode: 'DAY MODE',
      src: '/esp32_cam_feed.jpg'
    },
    {
      id: 'cap-2',
      time: '01:34:12',
      mode: 'NIGHT VISION',
      src: '/esp32_cam_night.jpg'
    }
  ]);
  const [currentTime, setCurrentTime] = useState<string>('');

  // Clock for camera HUD
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ` +
        `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Jitter FPS slightly for real sensor realism
  useEffect(() => {
    const fpsInterval = setInterval(() => {
      setFps(+(29.4 + Math.random() * 0.8).toFixed(1));
    }, 2000);
    return () => clearInterval(fpsInterval);
  }, []);

  const handleCaptureSnapshot = () => {
    setIsShutterFired(true);
    setTimeout(() => setIsShutterFired(false), 250);

    const newPhoto: CapturedPhoto = {
      id: `cap-${Date.now()}`,
      time: new Date().toLocaleTimeString(),
      mode: isNightVision ? 'IR NIGHT' : 'DAY STREAM',
      src: isNightVision ? '/esp32_cam_night.jpg' : '/esp32_cam_feed.jpg'
    };
    setCapturedPhotos(prev => [newPhoto, ...prev.slice(0, 4)]);
  };

  const handlePanTilt = (axis: 'pan' | 'tilt', delta: number) => {
    if (axis === 'pan') {
      setPan(prev => Math.max(-30, Math.min(30, prev + delta)));
    } else {
      setTilt(prev => Math.max(-20, Math.min(20, prev + delta)));
    }
  };

  return (
    <section id="camera" className="py-24 md:py-36 bg-[#08090c] text-white relative overflow-hidden border-t border-white/5">
      {/* Background glow & Cyber Ambient elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-accent-orange/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-accent-green/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-accent-orange/10 border border-accent-orange/30 text-accent-orange text-xs font-mono tracking-widest uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-accent-orange animate-ping"></span>
              ESP32-CAM VISION NODE
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight">
              Live Pet Surveillance.
            </h2>
            <p className="text-white/60 text-base sm:text-lg max-w-xl font-light mt-3">
              Direct low-latency optical stream powered by the ESP32-CAM module mounted directly above Max's station.
            </p>
          </div>

          {/* Quick Hardware Connect Action Card */}
          <div className="flex flex-wrap items-center gap-3 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-xl">
            <a
              href={`http://${ipAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 bg-accent-orange hover:bg-accent-orange/90 text-black px-6 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold tracking-wide transition-all shadow-[0_0_25px_rgba(217,125,84,0.35)] active:scale-95"
            >
              <Radio size={16} className="animate-pulse" />
              <span>OPEN IP: {ipAddress}</span>
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={`http://${ipAddress}:81/stream`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl font-mono text-xs font-medium transition-all"
              title="Open raw MJPEG video stream on port 81"
            >
              <span>RAW STREAM (:81)</span>
              <ExternalLink size={12} className="opacity-70" />
            </a>
          </div>
        </div>

        {/* MAIN CAMERA INTERACTION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CAMERA FEED & HUD VIEWPORT (Spans 8 columns on large screens) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              
              {/* Shutter flash animation layer */}
              {isShutterFired && (
                <div className="absolute inset-0 bg-white z-50 animate-out fade-out duration-200 pointer-events-none"></div>
              )}

              {/* Flashlight LED ambient beam simulation */}
              {isFlashOn && (
                <div className="absolute inset-0 bg-white/15 z-20 pointer-events-none mix-blend-overlay animate-pulse"></div>
              )}

              {/* Top Viewport Status HUD */}
              <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between p-4 sm:p-5 bg-gradient-to-b from-black/80 via-black/40 to-transparent font-mono text-[10px] sm:text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-600/90 text-white font-bold tracking-widest text-[9px] sm:text-[10px] animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    REC LIVE
                  </div>
                  <span className="text-white/80 hidden sm:inline">ESP32-CAM // OV2640</span>
                  <span className="text-accent-orange font-bold">IP: {ipAddress}</span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 text-white/70">
                  <div className="flex items-center gap-1.5 text-accent-green">
                    <Wifi size={12} />
                    <span>-48 dBm</span>
                  </div>
                  <div className="bg-black/50 px-2 py-0.5 rounded border border-white/10 hidden md:block">
                    {fps} FPS
                  </div>
                  <div className="text-white/90">
                    {currentTime || '2026-10-29 23:05:00'}
                  </div>
                </div>
              </div>

              {/* STREAM CONTAINER */}
              <div 
                className="relative w-full aspect-video overflow-hidden flex items-center justify-center bg-[#050608]"
                style={{
                  transform: `scale(1.05) translate(${pan * 0.4}px, ${tilt * 0.4}px)`,
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {streamMode === 'simulated' ? (
                  <>
                    <img
                      src={isNightVision ? '/esp32_cam_night.jpg' : '/esp32_cam_feed.jpg'}
                      alt="ESP32 CAM Stream"
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isNightVision ? 'brightness-110 contrast-125 saturate-150' : 'brightness-100'
                      }`}
                    />

                    {/* Scanlines & Camera Grain Overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]"></div>

                    {/* AI Bounding Boxes */}
                    {showAiOverlays && (
                      <>
                        {/* Detection Box: Dog / Max */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className={`absolute top-[32%] left-[26%] w-[38%] h-[58%] border-2 rounded-lg pointer-events-none ${
                            isNightVision ? 'border-accent-green/80 shadow-[0_0_15px_#4f6c58]' : 'border-emerald-400/90 shadow-[0_0_15px_rgba(52,211,153,0.5)]'
                          }`}
                        >
                          <div className="absolute -top-7 left-0 bg-emerald-500 text-black font-mono font-bold text-[9px] sm:text-[11px] px-2 py-0.5 rounded flex items-center gap-1.5 shadow-md">
                            <span>MAX (GOLDEN RETRIEVER)</span>
                            <span className="opacity-75">98.4%</span>
                          </div>
                          {/* Corner Reticles */}
                          <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-white"></div>
                          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-white"></div>
                          <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-white"></div>
                          <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-white"></div>
                        </motion.div>

                        {/* Detection Box: Water & Food Bowl */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 }}
                          className="absolute bottom-[8%] left-[20%] w-[24%] h-[30%] border-2 border-cyan-400/80 rounded-lg pointer-events-none shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                        >
                          <div className="absolute -top-6 left-0 bg-cyan-500 text-black font-mono font-bold text-[9px] sm:text-[10px] px-2 py-0.5 rounded flex items-center gap-1.5">
                            <span>STATION: DUAL BOWL</span>
                            <span>ACTIVE INTAKE</span>
                          </div>
                        </motion.div>
                      </>
                    )}

                    {/* Reticle in center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-10 h-10 border border-white/20 rounded-full flex items-center justify-center opacity-60">
                      <div className="w-1.5 h-1.5 bg-accent-orange rounded-full"></div>
                    </div>
                  </>
                ) : (
                  /* Direct Live ESP32-CAM Stream Embed */
                  <div className="w-full h-full relative flex flex-col items-center justify-center p-6 text-center">
                    <img
                      src={`http://${ipAddress}:81/stream`}
                      alt="Live ESP32-CAM Stream"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback when not on the same local subnet
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallbackEl = document.getElementById('cam-direct-fallback');
                        if (fallbackEl) fallbackEl.style.display = 'flex';
                      }}
                    />
                    <div id="cam-direct-fallback" className="hidden flex-col items-center justify-center gap-4 max-w-md mx-auto text-white">
                      <Radio size={40} className="text-accent-orange animate-pulse" />
                      <div className="font-display font-medium text-lg">Direct Local Wi-Fi Stream</div>
                      <p className="text-white/60 text-xs font-mono">
                        Connecting to local network host <span className="text-accent-orange font-bold">http://{ipAddress}:81/stream</span>.
                        Ensure your device is connected to the same Wi-Fi router as the ESP32-CAM module.
                      </p>
                      <div className="flex gap-3">
                        <a 
                          href={`http://${ipAddress}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-accent-orange text-black px-4 py-2 rounded-lg font-mono text-xs font-bold"
                        >
                          Launch Direct Portal
                        </a>
                        <button 
                          onClick={() => setStreamMode('simulated')}
                          className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-mono text-xs"
                        >
                          Switch to AI Simulation
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom HUD Bar & In-Camera Quick Actions */}
              <div className="p-3 sm:p-4 bg-[#0d0f12] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                
                {/* Mode Selector */}
                <div className="flex items-center gap-1.5 bg-black/60 p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => setStreamMode('simulated')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      streamMode === 'simulated' ? 'bg-white/20 text-white shadow' : 'text-white/50 hover:text-white'
                    }`}
                  >
                    AI Simulation
                  </button>
                  <button
                    onClick={() => setStreamMode('direct')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      streamMode === 'direct' ? 'bg-accent-orange text-black font-bold shadow' : 'text-white/50 hover:text-white'
                    }`}
                  >
                    Direct IP Stream
                  </button>
                </div>

                {/* Quick Toggle Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsNightVision(!isNightVision)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all ${
                      isNightVision 
                        ? 'bg-accent-green/20 border-accent-green text-accent-green font-bold shadow-[0_0_12px_rgba(79,108,88,0.5)]' 
                        : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
                    }`}
                    title="Toggle Infrared Night Vision mode"
                  >
                    {isNightVision ? <Moon size={14} /> : <Sun size={14} />}
                    <span className="hidden sm:inline">{isNightVision ? 'IR NIGHT ON' : 'DAY MODE'}</span>
                  </button>

                  <button
                    onClick={() => setIsFlashOn(!isFlashOn)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all ${
                      isFlashOn 
                        ? 'bg-yellow-400/20 border-yellow-400 text-yellow-300 font-bold shadow-[0_0_12px_rgba(250,204,21,0.5)]' 
                        : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
                    }`}
                    title="Toggle ESP32-CAM GPIO 4 Flashlight LED"
                  >
                    <Sparkles size={14} />
                    <span className="hidden sm:inline">{isFlashOn ? 'FLASH ACTIVE' : 'FLASH OFF'}</span>
                  </button>

                  <button
                    onClick={() => setShowAiOverlays(!showAiOverlays)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all ${
                      showAiOverlays 
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' 
                        : 'bg-white/5 border-white/10 text-white/50'
                    }`}
                    title="Toggle AI Object Detection Overlays"
                  >
                    <Layers size={14} />
                    <span className="hidden sm:inline">AI HUD</span>
                  </button>

                  <button
                    onClick={handleCaptureSnapshot}
                    className="flex items-center gap-2 bg-white text-black hover:bg-accent-orange font-bold px-4 py-1.5 rounded-xl transition-all active:scale-95 shadow-md"
                  >
                    <Camera size={14} />
                    <span>SNAPSHOT</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Captured Moments Gallery Strip */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 font-mono text-xs text-white/70 uppercase tracking-widest">
                  <Camera size={14} className="text-accent-orange" />
                  <span>Recent Event Captures</span>
                </div>
                <span className="text-[10px] font-mono text-white/40">STORED IN ESP32-CAM FLASH / SD</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {capturedPhotos.map((photo) => (
                  <div key={photo.id} className="relative rounded-xl overflow-hidden border border-white/10 group aspect-video bg-black/50">
                    <img src={photo.src} alt="Snapshot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2">
                      <div className="text-[9px] font-mono text-white/90 font-bold">{photo.time}</div>
                      <div className="text-[8px] font-mono text-accent-orange">{photo.mode}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* HARDWARE CONTROL & TELEMETRY PANEL (Spans 4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Direct IP Connect Card */}
            <div className="bg-gradient-to-br from-[#12141a] to-[#0c0d12] border border-white/15 rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Radio size={16} className="text-accent-orange animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-accent-orange font-bold">Node Address</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  ONLINE · PING 12ms
                </span>
              </div>

              <div className="space-y-3 mb-5">
                <div>
                  <label className="text-xs font-mono text-white/50 block mb-1">CAMERA IP ENDPOINT</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={ipAddress} 
                      onChange={(e) => setIpAddress(e.target.value)}
                      className="bg-black/60 border border-white/15 rounded-xl px-3 py-2 text-sm font-mono text-white w-full focus:outline-none focus:border-accent-orange"
                    />
                    <input 
                      type="text" 
                      value={port} 
                      onChange={(e) => setPort(e.target.value)}
                      className="bg-black/60 border border-white/15 rounded-xl px-3 py-2 text-sm font-mono text-white w-20 text-center focus:outline-none focus:border-accent-orange"
                    />
                  </div>
                </div>

                <div className="text-[11px] font-mono text-white/50 leading-relaxed">
                  Default web server port: 80. Default MJPEG camera stream port: 81.
                </div>
              </div>

              {/* Big Direct Connect Button */}
              <a
                href={`http://${ipAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-white hover:bg-accent-orange text-black font-display font-medium tracking-wide py-3.5 px-6 rounded-2xl transition-all duration-300 shadow-lg active:scale-98"
              >
                <span>OPEN PORTAL (10.38.133.55)</span>
                <ExternalLink size={16} />
              </a>
            </div>

            {/* PTZ (Pan & Tilt) Simulated Stepper */}
            <div className="bg-[#0e1014] border border-white/10 rounded-3xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-white/70 flex items-center gap-2">
                  <Sliders size={14} className="text-accent-brown" />
                  Angle & Mount Trim
                </span>
                <span className="text-[10px] font-mono text-white/40">PAN: {pan}° / TILT: {tilt}°</span>
              </div>

              <div className="flex flex-col items-center justify-center gap-2 py-2">
                <button
                  onClick={() => handlePanTilt('tilt', 5)}
                  className="w-12 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center active:scale-95 transition-all"
                  aria-label="Tilt Up"
                >
                  <ChevronUp size={20} />
                </button>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handlePanTilt('pan', -5)}
                    className="w-12 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center active:scale-95 transition-all"
                    aria-label="Pan Left"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => { setPan(0); setTilt(-5); }}
                    className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-[10px] font-mono text-white/70 uppercase"
                  >
                    RESET
                  </button>
                  <button
                    onClick={() => handlePanTilt('pan', 5)}
                    className="w-12 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center active:scale-95 transition-all"
                    aria-label="Pan Right"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                <button
                  onClick={() => handlePanTilt('tilt', -5)}
                  className="w-12 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center active:scale-95 transition-all"
                  aria-label="Tilt Down"
                >
                  <ChevronDown size={20} />
                </button>
              </div>

              {/* Stream Resolution Switcher */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-white/50 block mb-2">CAPTURE RESOLUTION</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['VGA (640x480)', 'HD (1280x720)', 'UXGA (1600x1200)'] as const).map((res) => (
                    <button
                      key={res}
                      onClick={() => setResolution(res)}
                      className={`py-2 px-2 rounded-xl text-[10px] font-mono transition-all truncate ${
                        resolution === res 
                          ? 'bg-accent-orange text-black font-bold shadow' 
                          : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
                      }`}
                    >
                      {res.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Hardware Architecture Spec Card */}
            <div className="bg-[#0e1014] border border-white/10 rounded-3xl p-6 font-mono text-xs space-y-3">
              <div className="text-xs font-mono tracking-widest text-accent-green uppercase flex items-center gap-2 mb-3">
                <ShieldCheck size={14} />
                ESP32-CAM Tech Specifications
              </div>

              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-white/50">SoC & CPU</span>
                <span className="text-white">ESP32 32-bit LX6 Dual 240MHz</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-white/50">Camera Sensor</span>
                <span className="text-white">OmniVision OV2640 2MP</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-white/50">Onboard Flash LED</span>
                <span className="text-white">High-Bright White (GPIO 4)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-white/50">Static IP Config</span>
                <span className="text-accent-orange font-bold">10.38.133.55:80</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-white/50">Memory / Storage</span>
                <span className="text-white">520KB SRAM + 4MB PSRAM</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CameraSection;
