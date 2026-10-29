import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  Zap, 
  Activity, 
  Cpu, 
  Gauge, 
  AlertTriangle, 
  Power, 
  Waves
} from 'lucide-react';

const WaterModule = () => {
  // State for tank level (0 to 100%)
  const [waterLevel, setWaterLevel] = useState<number>(78);
  const [isRelayActive, setIsRelayActive] = useState<boolean>(false);
  const [autoRefillEnabled, setAutoRefillEnabled] = useState<boolean>(true);
  const [dispenseCount, setDispenseCount] = useState<number>(4);
  const [totalWaterDispensed, setTotalWaterDispensed] = useState<number>(680); // in ml
  const [bowlLevel, setBowlLevel] = useState<number>(90); // pet bowl fill %
  const [isManualPumping, setIsManualPumping] = useState<boolean>(false);

  // Constants for ultrasonic sensor math
  const TANK_HEIGHT_CM = 20.0;
  // Ultrasonic distance from sensor (top) to liquid surface
  const ultrasonicDistance = +(TANK_HEIGHT_CM * (1 - waterLevel / 100) + 1.8).toFixed(1);
  // Volume in Litres (3.0L max tank)
  const remainingVolume = +((waterLevel / 100) * 3.0).toFixed(2);

  // Relay pump trigger simulation
  const triggerDispense = () => {
    if (isRelayActive || isManualPumping) return;

    setIsRelayActive(true);
    setIsManualPumping(true);

    // Simulate pumping 120ml into bowl over 2.5 seconds
    const pumpTimer = setTimeout(() => {
      setIsRelayActive(false);
      setIsManualPumping(false);
      setWaterLevel(prev => Math.max(10, prev - 4));
      setBowlLevel(100);
      setDispenseCount(prev => prev + 1);
      setTotalWaterDispensed(prev => prev + 120);
    }, 2500);

    return () => clearTimeout(pumpTimer);
  };

  // Auto refill logic simulation if enabled and level drops low
  useEffect(() => {
    if (autoRefillEnabled && waterLevel < 25 && !isRelayActive) {
      const startTimer = setTimeout(() => {
        setIsRelayActive(true);
        const refillTimer = setTimeout(() => {
          setWaterLevel(88);
          setIsRelayActive(false);
        }, 2500);
        return () => clearTimeout(refillTimer);
      }, 300);
      return () => clearTimeout(startTimer);
    }
  }, [waterLevel, autoRefillEnabled, isRelayActive]);

  return (
    <section id="water" className="py-24 md:py-36 bg-[#070b10] text-white relative overflow-hidden border-t border-white/5">
      {/* Ambient Water & Hydro Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#06b6d4]"></span>
              HYDRATION NODE // HC-SR04 + ARDUINO + RELAY
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight">
              Ultrasonic Smart Water Station.
            </h2>
            <p className="text-white/60 text-base sm:text-lg max-w-xl font-light mt-3">
              Automated fresh hydration powered by ultrasonic liquid depth telemetry and an Arduino-switched 5V optical relay pump.
            </p>
          </div>

          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2.5 bg-cyan-950/60 border border-cyan-500/30 px-4 py-2.5 rounded-2xl backdrop-blur-md">
              <span className={`w-3 h-3 rounded-full ${isRelayActive ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`}></span>
              <span className="font-mono text-xs text-white">
                RELAY: <span className={isRelayActive ? 'text-amber-300 font-bold' : 'text-emerald-400 font-bold'}>{isRelayActive ? 'ACTIVE (PUMPING)' : 'STANDBY (CLOSED)'}</span>
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-2xl backdrop-blur-md font-mono text-xs text-white/70">
              <Cpu size={14} className="text-cyan-400" />
              <span>MCU: ARDUINO CORE</span>
            </div>
          </div>
        </div>

        {/* MAIN INTERACTION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* TANK VISUALIZER & FLUID DYNAMICS (Spans 6 columns) */}
          <div className="lg:col-span-6 bg-[#0c1219] border border-cyan-500/20 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Waves className="text-cyan-400" size={18} />
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-300 font-bold">Reservoir Chamber Cross-Section</span>
              </div>
              <span className="font-mono text-xs text-cyan-300/80">HC-SR04 MOUNT · DISH: {bowlLevel}% FULL</span>
            </div>

            {/* Cross-section Animated SVG Visualizer */}
            <div className="relative w-full aspect-[4/3] max-w-md mx-auto flex items-center justify-center">
              
              <svg viewBox="0 0 400 320" className="w-full h-full overflow-visible">
                <defs>
                  {/* Fluid Gradient */}
                  <linearGradient id="water-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#0284c7" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#0369a1" stopOpacity="1" />
                  </linearGradient>

                  {/* Ultrasonic pulse glow */}
                  <filter id="sonar-glow">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge>
                      <feMergeNode in="blur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Outer Glass Tank Body */}
                <rect x="80" y="50" width="240" height="230" rx="18" fill="#091017" stroke="rgba(56,189,248,0.25)" strokeWidth="2" />
                
                {/* Millimeter Gauge Marks on Tank Side */}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <g key={i}>
                    <line x1="85" y1={75 + i * 23} x2="98" y2={75 + i * 23} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                    <text x="105" y={79 + i * 23} fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="monospace">
                      {(3.0 - i * 0.35).toFixed(1)}L
                    </text>
                  </g>
                ))}

                {/* Dynamic Water Liquid Body */}
                {(() => {
                  const waterHeight = Math.max(10, (waterLevel / 100) * 210);
                  const waterY = 280 - waterHeight;

                  return (
                    <g>
                      {/* Fluid fill with rounded bottom */}
                      <rect 
                        x="82" 
                        y={waterY} 
                        width="236" 
                        height={waterHeight} 
                        rx="16" 
                        fill="url(#water-grad)"
                        className="transition-all duration-700 ease-out"
                      />

                      {/* Oscillating Surface Waves */}
                      <motion.path
                        d={`M 82 ${waterY} Q 140 ${waterY - 4}, 200 ${waterY} T 318 ${waterY}`}
                        stroke="#7dd3fc"
                        strokeWidth="3"
                        fill="none"
                        animate={{
                          d: [
                            `M 82 ${waterY} Q 140 ${waterY - 5}, 200 ${waterY} T 318 ${waterY}`,
                            `M 82 ${waterY} Q 140 ${waterY + 5}, 200 ${waterY} T 318 ${waterY}`,
                            `M 82 ${waterY} Q 140 ${waterY - 5}, 200 ${waterY} T 318 ${waterY}`
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />

                      {/* Bubbles in water */}
                      <circle cx="150" cy={waterY + waterHeight * 0.5} r="3" fill="#ffffff" opacity="0.4">
                        <animate attributeName="cy" values={`${waterY + waterHeight * 0.8};${waterY + 10}`} dur="2.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.4;0.1" dur="2.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="230" cy={waterY + waterHeight * 0.7} r="4" fill="#ffffff" opacity="0.3">
                        <animate attributeName="cy" values={`${waterY + waterHeight * 0.9};${waterY + 15}`} dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.3;0" dur="3s" repeatCount="indefinite" />
                      </circle>
                    </g>
                  );
                })()}

                {/* HC-SR04 Ultrasonic Sensor Module mounted at ceiling */}
                <g transform="translate(160, 25)">
                  {/* Sensor PCB Body */}
                  <rect x="-40" y="0" width="80" height="25" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                  {/* Left Transducer (Trigger) */}
                  <circle cx="-20" cy="12" r="10" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.5" />
                  <circle cx="-20" cy="12" r="4" fill="#38bdf8" />
                  {/* Right Transducer (Echo) */}
                  <circle cx="20" cy="12" r="10" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.5" />
                  <circle cx="20" cy="12" r="4" fill="#38bdf8" />
                  
                  {/* Label */}
                  <text x="0" y="-5" fill="#38bdf8" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                    HC-SR04 SENSOR
                  </text>

                  {/* Sonar Acoustic Waves firing down */}
                  {(() => {
                    const waveTargetY = 280 - Math.max(10, (waterLevel / 100) * 210) - 25;
                    return (
                      <g filter="url(#sonar-glow)">
                        <motion.line
                          x1="0" y1="25" x2="0" y2={waveTargetY}
                          stroke="#38bdf8"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                          initial={{ opacity: 0.2 }}
                          animate={{ opacity: [0.2, 0.8, 0.2] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <motion.circle
                          cx="0" cy="25" r="8"
                          stroke="#38bdf8" strokeWidth="1.5" fill="none"
                          initial={{ r: 8, opacity: 1, y: 0 }}
                          animate={{ r: 24, opacity: 0, y: waveTargetY }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeIn" }}
                        />
                      </g>
                    );
                  })()}
                </g>

                {/* Submersible Pump & Tubing at tank floor */}
                <g transform="translate(240, 245)">
                  <rect x="0" y="0" width="40" height="30" rx="6" fill="#1e293b" stroke={isRelayActive ? "#fbbf24" : "#475569"} strokeWidth="2" />
                  <circle cx="20" cy="15" r="7" fill={isRelayActive ? "#fbbf24" : "#334155"} className={isRelayActive ? "animate-pulse" : ""} />
                  <text x="20" y="38" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace" textAnchor="middle">12V PUMP</text>
                  
                  {/* Silicone tube to bowl */}
                  <path 
                    d="M 20 0 C 20 -40, 70 -60, 90 20" 
                    fill="none" 
                    stroke={isRelayActive ? "#38bdf8" : "#334155"} 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                  />
                  {isRelayActive && (
                    <circle cx="90" cy="25" r="4" fill="#38bdf8" className="animate-ping" />
                  )}
                </g>

                {/* Water Level Percentage Center Floating Stat */}
                <text x="200" y="185" fill="#ffffff" fontSize="38" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle" filter="drop-shadow(0 0 10px rgba(0,0,0,0.8))">
                  {waterLevel}%
                </text>
                <text x="200" y="208" fill="#bae6fd" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                  {remainingVolume}L REMAINING
                </text>
              </svg>
            </div>

            {/* Interactive Level Testing Slider */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between text-xs font-mono text-white/60 mb-2">
                <span>SIMULATE WATER DEPTH</span>
                <span className="text-cyan-400 font-bold">{waterLevel}% ({ultrasonicDistance} cm to sensor)</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={waterLevel}
                onChange={(e) => setWaterLevel(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-white/10 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] font-mono text-white/40 mt-1">
                <span>EMPTY (20cm)</span>
                <span>HALF (10cm)</span>
                <span>FULL (2cm)</span>
              </div>
            </div>

          </div>

          {/* TELEMETRY, RELAY CONTROLS & PINOUT (Spans 6 columns) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Primary Metrics 4-Pack */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Metric 1: Distance */}
              <div className="bg-[#0c1219] border border-cyan-500/20 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center justify-between text-white/50 font-mono text-xs mb-2">
                  <span>ULTRASONIC ECHO</span>
                  <Gauge size={14} className="text-cyan-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-display font-medium text-white mb-1">
                  {ultrasonicDistance} <span className="text-sm font-mono text-cyan-400">cm</span>
                </div>
                <div className="text-[11px] font-mono text-white/40">Distance to water surface</div>
              </div>

              {/* Metric 2: Volume */}
              <div className="bg-[#0c1219] border border-cyan-500/20 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center justify-between text-white/50 font-mono text-xs mb-2">
                  <span>AVAILABLE WATER</span>
                  <Droplets size={14} className="text-cyan-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-display font-medium text-white mb-1">
                  {remainingVolume} <span className="text-sm font-mono text-cyan-400">/ 3.0 L</span>
                </div>
                <div className="text-[11px] font-mono text-white/40">Clean filtered reservoir</div>
              </div>

              {/* Metric 3: Relay State */}
              <div className={`border rounded-2xl p-4 sm:p-5 transition-all ${
                isRelayActive 
                  ? 'bg-amber-950/40 border-amber-500 shadow-[0_0_20px_rgba(251,191,36,0.2)]' 
                  : 'bg-[#0c1219] border-white/10'
              }`}>
                <div className="flex items-center justify-between text-white/50 font-mono text-xs mb-2">
                  <span>RELAY SWITCH</span>
                  <Power size={14} className={isRelayActive ? 'text-amber-400 animate-pulse' : 'text-emerald-400'} />
                </div>
                <div className="text-xl sm:text-2xl font-mono font-bold mb-1">
                  {isRelayActive ? (
                    <span className="text-amber-400">ENERGIZED</span>
                  ) : (
                    <span className="text-emerald-400">STANDBY</span>
                  )}
                </div>
                <div className="text-[11px] font-mono text-white/40">5V Optocoupler Channel 1</div>
              </div>

              {/* Metric 4: Daily Intake */}
              <div className="bg-[#0c1219] border border-cyan-500/20 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center justify-between text-white/50 font-mono text-xs mb-2">
                  <span>HYDRATION LOG</span>
                  <Activity size={14} className="text-cyan-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-display font-medium text-white mb-1">
                  {totalWaterDispensed} <span className="text-sm font-mono text-cyan-400">ml</span>
                </div>
                <div className="text-[11px] font-mono text-white/40">{dispenseCount} refuels completed</div>
              </div>

            </div>

            {/* Relay Action & Automation Panel */}
            <div className="bg-gradient-to-br from-[#0c131d] to-[#070b10] border border-cyan-500/30 rounded-3xl p-6 shadow-xl">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display font-medium text-xl text-white">Water Refill Controller</h3>
                  <p className="text-white/60 text-xs font-mono mt-1">Manual pump trigger or autonomous threshold replenishment.</p>
                </div>

                {/* Auto Refill Toggle Switch */}
                <div className="flex items-center gap-3 bg-black/40 px-3.5 py-2 rounded-2xl border border-white/10 self-start sm:self-auto">
                  <span className="text-xs font-mono text-white/70">AUTO-REFILL</span>
                  <button
                    onClick={() => setAutoRefillEnabled(!autoRefillEnabled)}
                    className={`w-12 h-6 rounded-full transition-colors relative flex items-center px-1 ${
                      autoRefillEnabled ? 'bg-cyan-500' : 'bg-white/20'
                    }`}
                  >
                    <motion.div
                      layout
                      className="w-4 h-4 rounded-full bg-black shadow-md"
                      animate={{ x: autoRefillEnabled ? 24 : 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </button>
                </div>
              </div>

              {/* Big Relay Dispense Button */}
              <button
                onClick={triggerDispense}
                disabled={isRelayActive}
                className={`w-full group relative overflow-hidden py-4 px-8 rounded-2xl font-mono text-sm sm:text-base font-bold tracking-wider flex items-center justify-center gap-3 transition-all duration-300 shadow-xl ${
                  isRelayActive
                    ? 'bg-amber-500 text-black cursor-not-allowed shadow-[0_0_30px_rgba(245,158,11,0.5)]'
                    : 'bg-cyan-400 hover:bg-cyan-300 text-black active:scale-98 shadow-[0_0_25px_rgba(6,182,212,0.35)]'
                }`}
              >
                {isRelayActive ? (
                  <>
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                    />
                    <span>RELAY ACTIVE // PUMPING 120ML...</span>
                  </>
                ) : (
                  <>
                    <Zap size={18} className="fill-black" />
                    <span>DISPENSE WATER (TRIGGER PUMP RELAY)</span>
                  </>
                )}
              </button>

              {waterLevel < 20 && (
                <div className="mt-4 p-3 bg-red-950/40 border border-red-500/40 rounded-xl flex items-center gap-3 text-red-300 text-xs font-mono">
                  <AlertTriangle size={16} className="text-red-400 shrink-0" />
                  <span>CRITICAL WATER LEVEL: Ultrasonic sensor triggered low liquid alert (&lt;20%). Please refill reservoir!</span>
                </div>
              )}
            </div>

            {/* Hardware Pinout & Circuit Schematic Card */}
            <div className="bg-[#090e15] border border-white/10 rounded-3xl p-6 font-mono text-xs">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <span className="text-cyan-400 font-bold uppercase tracking-widest flex items-center gap-2">
                  <Cpu size={14} />
                  Arduino & Relay Circuit Schematics
                </span>
                <span className="text-white/40">REV 2.4</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 space-y-1">
                  <div className="text-cyan-300 font-bold">HC-SR04 SENSOR PINS</div>
                  <div className="flex justify-between text-white/60"><span>Trig Pin</span><span className="text-white">Arduino D9</span></div>
                  <div className="flex justify-between text-white/60"><span>Echo Pin</span><span className="text-white">Arduino D10</span></div>
                  <div className="flex justify-between text-white/60"><span>VCC / GND</span><span className="text-white">5V / GND Rail</span></div>
                </div>

                <div className="bg-white/5 p-3 rounded-xl border border-white/5 space-y-1">
                  <div className="text-amber-300 font-bold">5V RELAY & PUMP PINS</div>
                  <div className="flex justify-between text-white/60"><span>Signal (IN)</span><span className="text-white">Arduino D8</span></div>
                  <div className="flex justify-between text-white/60"><span>Relay Contacts</span><span className="text-white">NO (Normally Open)</span></div>
                  <div className="flex justify-between text-white/60"><span>Pump Load</span><span className="text-white">12V DC 250mA</span></div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-white/50 text-[10px]">
                <span>Acoustic Wave Speed: 343 m/s (20°C calibrated)</span>
                <span className="text-emerald-400 font-bold">● SYSTEM SYNCHRONIZED</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WaterModule;
