import { motion, type Variants } from 'framer-motion';

const Blueprint = () => {
  const lineVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 2.5, ease: "easeInOut" }
    }
  };

  return (
    <section id="blueprint" className="py-28 md:py-40 bg-black text-white overflow-hidden relative border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-20">
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 text-accent-green text-xs font-mono tracking-widest uppercase mb-3 border border-accent-green/20">
            SCHEMATICS & PINOUT SPECIFICATION
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-white mb-2">
            Under the surface.
          </h2>
          <p className="font-mono text-xs sm:text-sm text-accent-green tracking-[0.2em] uppercase">
            Full Engineering Blueprint // Rev B (Feeder + ESP32-CAM + Ultrasonic Water)
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto h-[650px] md:h-[820px] flex items-center justify-center px-2">
        {/* Advanced Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
        </div>
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-[30%] h-[30%] bg-accent-orange/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* Highly Technical SVG */}
        <svg viewBox="0 0 1000 800" className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(79,108,88,0.3)]">
          <g stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.4">
            {/* Dimensions and rulers */}
            <line x1="80" y1="50" x2="920" y2="50" stroke="#4f6c58" strokeDasharray="5 5" />
            <text x="500" y="40" fill="#4f6c58" fontSize="12" fontFamily="monospace" textAnchor="middle">TOTAL STATION WIDTH 580MM</text>
            
            <line x1="40" y1="80" x2="40" y2="720" stroke="#4f6c58" strokeDasharray="5 5" />
            <text x="28" y="400" fill="#4f6c58" fontSize="12" fontFamily="monospace" textAnchor="middle" transform="rotate(-90 28 400)">STATION HEIGHT 480MM</text>
          </g>

          <g stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.85">
            {/* Outer Case Outline - Feeder & Water dual chamber */}
            <motion.path 
              variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              d="M 280 140 L 520 140 L 520 380 L 740 380 L 740 660 L 220 660 L 220 580 L 280 580 Z" 
            />

            {/* Inner Kibble Mechanism */}
            <motion.rect variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} x="300" y="170" width="200" height="190" rx="4" />
            <motion.circle variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} cx="400" cy="390" r="45" strokeDasharray="4 4"/>
            <motion.circle variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} cx="400" cy="390" r="35" />
            
            {/* Motor Axle */}
            <motion.path variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} d="M 400 345 L 400 435 M 355 390 L 445 390" strokeWidth="0.8" />
            
            {/* Microcontroller & Circuit Board */}
            <motion.rect variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} x="350" y="470" width="100" height="70" rx="3" />
            
            {/* ESP32-CAM Module at Top Visor Apex */}
            <motion.rect variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} x="375" y="85" width="50" height="35" rx="3" stroke="#d97d54" strokeWidth="2" />
            <motion.circle variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} cx="400" cy="102" r="9" stroke="#d97d54" strokeWidth="2" />
            <motion.circle variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} cx="400" cy="102" r="3" fill="#d97d54" />
            <motion.path variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} d="M 370 120 L 260 220" stroke="#d97d54" strokeDasharray="3 3" opacity="0.6" />
            <motion.path variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} d="M 430 120 L 540 220" stroke="#d97d54" strokeDasharray="3 3" opacity="0.6" />

            {/* Water Tank Chamber (Right Side) */}
            <motion.rect variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} x="540" y="400" width="180" height="230" rx="6" stroke="#06b6d4" strokeWidth="1.5" />
            
            {/* Ultrasonic HC-SR04 Sensor at top of water tank */}
            <motion.rect variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} x="590" y="410" width="80" height="20" rx="2" stroke="#06b6d4" strokeWidth="2" />
            <motion.circle variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} cx="610" cy="420" r="6" stroke="#06b6d4" strokeWidth="1.5" />
            <motion.circle variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} cx="650" cy="420" r="6" stroke="#06b6d4" strokeWidth="1.5" />
            {/* Ultrasonic echo beam */}
            <motion.line variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} x1="630" y1="430" x2="630" y2="530" stroke="#06b6d4" strokeDasharray="3 3" />
            {/* Water liquid line */}
            <motion.line variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} x1="545" y1="530" x2="715" y2="530" stroke="#38bdf8" strokeWidth="2" />

            {/* 5V Relay & Pump Unit */}
            <motion.rect variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} x="650" y="580" width="45" height="35" rx="2" stroke="#fbbf24" strokeWidth="1.5" />
            
            {/* Circuit traces with glowing green accent */}
            <motion.path variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} d="M 350 500 L 290 500 L 290 560" stroke="#4f6c58" strokeWidth="3" filter="drop-shadow(0 0 5px #4f6c58)" />
            <motion.path variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} d="M 450 500 L 520 500 L 520 560 L 650 595" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 2" />
          </g>

          {/* Technical Labels with Pointer Lines */}
          <g className="font-mono text-xs fill-white/80 tracking-widest">
            
            {/* 06. ESP32-CAM */}
            <motion.text initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} x="100" y="105" fill="#d97d54" fontWeight="bold">
              06. ESP32-CAM VISION (10.38.133.55)
            </motion.text>
            <motion.line initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }} x1="330" y1="102" x2="375" y2="102" stroke="#d97d54" strokeWidth="1" />
            <circle cx="375" cy="102" r="3" fill="#d97d54" />

            {/* 01. FOOD RESERVOIR */}
            <motion.text initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} x="120" y="240">
              01. KIBBLE RESERVOIR
            </motion.text>
            <motion.line initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} x1="260" y1="235" x2="300" y2="235" stroke="white" strokeWidth="0.8" />
            <circle cx="300" cy="235" r="3" fill="#ffffff" />

            {/* 07. ULTRASONIC SENSOR */}
            <motion.text initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} x="740" y="425" fill="#38bdf8" fontWeight="bold">
              07. HC-SR04 ULTRASONIC SENSOR
            </motion.text>
            <motion.line initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2 }} x1="670" y1="420" x2="735" y2="420" stroke="#38bdf8" strokeWidth="1" />
            <circle cx="670" cy="420" r="3" fill="#38bdf8" />

            {/* 03. SERVO MOTOR */}
            <motion.text initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }} x="140" y="395">
              03. SERVO AUGER MOTOR
            </motion.text>
            <motion.line initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.4 }} x1="280" y1="390" x2="355" y2="390" stroke="white" strokeWidth="0.8" />
            <circle cx="355" cy="390" r="3" fill="#ffffff" />

            {/* 04. MICROCONTROLLER */}
            <motion.text initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 }} x="110" y="505">
              04. ESP MAIN CONTROLLER
            </motion.text>
            <motion.line initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.6 }} x1="270" y1="500" x2="350" y2="500" stroke="white" strokeWidth="0.8" />
            <circle cx="350" cy="500" r="3" fill="#ffffff" />

            {/* 08. RELAY & WATER PUMP */}
            <motion.text initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.8 }} x="740" y="600" fill="#fbbf24" fontWeight="bold">
              08. 5V OPTO RELAY & PUMP
            </motion.text>
            <motion.line initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.8 }} x1="695" y1="595" x2="735" y2="595" stroke="#fbbf24" strokeWidth="1" />
            <circle cx="695" cy="595" r="3" fill="#fbbf24" />

            {/* 05. DUAL FEED/WATER BOWL */}
            <motion.text initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 2.0 }} x="110" y="640">
              05. DUAL FEED & WATER DISH
            </motion.text>
            <motion.line initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2.0 }} x1="260" y1="635" x2="300" y2="635" stroke="white" strokeWidth="0.8" />
            <circle cx="300" cy="635" r="3" fill="#ffffff" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Blueprint;
