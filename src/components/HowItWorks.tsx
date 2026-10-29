import { motion } from 'framer-motion';

const steps = [
  { 
    num: '01', 
    title: 'LOAD', 
    desc: 'Place food inside the reservoir. The airtight design maintains absolute freshness for weeks while keeping moisture out.',
    visual: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent-brown stroke-[2] fill-none overflow-visible">
        <motion.path d="M 20 20 L 80 20 L 70 80 L 30 80 Z" strokeWidth="2.5" />
        <motion.path 
          d="M 35 70 L 65 70" 
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.path 
          d="M 40 60 L 60 60" 
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
        />
        <motion.path 
          d="M 45 50 L 55 50" 
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
        />
      </svg>
    )
  },
  { 
    num: '02', 
    title: 'DETECT', 
    desc: 'Precision infrared sensors map the food level in real-time, feeding continuous metrics to the smart core.',
    visual: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent-brown stroke-[2] fill-none overflow-visible">
        <path d="M 50 20 L 50 80" />
        <motion.circle 
          cx="50" cy="50" 
          initial={{ r: 5, opacity: 1 }}
          animate={{ r: 40, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.circle 
          cx="50" cy="50" 
          initial={{ r: 5, opacity: 1 }}
          animate={{ r: 40, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
        />
        <rect x="38" y="38" width="24" height="24" rx="6" className="fill-foreground stroke-accent-brown stroke-[2.5]" />
      </svg>
    )
  },
  { 
    num: '03', 
    title: 'DISPENSE', 
    desc: 'The motorized actuator rotates with gram-level precision to release the exact portion your pet needs.',
    visual: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent-brown stroke-[2] fill-none overflow-visible">
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="6s" repeatCount="indefinite" />
          <circle cx="50" cy="50" r="35" strokeDasharray="12 12" strokeWidth="2" opacity="0.5" />
          <circle cx="50" cy="50" r="15" strokeWidth="3" />
          <line x1="50" y1="15" x2="50" y2="35" strokeWidth="2.5" />
          <line x1="50" y1="85" x2="50" y2="65" strokeWidth="2.5" />
          <line x1="15" y1="50" x2="35" y2="50" strokeWidth="2.5" />
          <line x1="85" y1="50" x2="65" y2="50" strokeWidth="2.5" />
        </g>
      </svg>
    )
  },
  { 
    num: '04', 
    title: 'HYDRATE', 
    desc: 'Ultrasonic HC-SR04 sonar gauges the water reservoir depth. When liquid levels drop, an Arduino-triggered optical relay energizes the pump for automated fresh refilling.',
    visual: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-cyan-400 stroke-[2] fill-none overflow-visible">
        {/* Sensor at top */}
        <rect x="30" y="15" width="40" height="15" rx="3" strokeWidth="2" />
        <circle cx="40" cy="22.5" r="4" />
        <circle cx="60" cy="22.5" r="4" />
        
        {/* Waves traveling down */}
        <motion.path 
          d="M 35 40 Q 50 48, 65 40" 
          strokeWidth="1.5" 
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: 25 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M 30 50 Q 50 60, 70 50" 
          strokeWidth="1.5" 
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: 20 }}
          transition={{ duration: 1.8, delay: 0.6, repeat: Infinity, ease: "linear" }}
        />

        {/* Water surface line */}
        <path d="M 20 75 Q 35 70, 50 75 T 80 75" strokeWidth="2.5" className="stroke-cyan-300" />
        <rect x="20" y="75" width="60" height="15" rx="2" className="fill-cyan-500/20 stroke-none" />
      </svg>
    )
  },
  { 
    num: '05', 
    title: 'SURVEIL', 
    desc: 'The onboard ESP32-CAM module (10.38.133.55) streams low-latency optical video. Night vision and GPIO 4 LED flash provide 24/7 visibility into eating and drinking behavior.',
    visual: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent-orange stroke-[2] fill-none overflow-visible">
        {/* Camera outer body */}
        <rect x="25" y="30" width="50" height="42" rx="6" strokeWidth="2" />
        <circle cx="50" cy="51" r="14" strokeWidth="2" />
        <circle cx="50" cy="51" r="6" className="fill-accent-orange stroke-none" />
        <rect x="35" y="24" width="14" height="6" rx="2" strokeWidth="1.5" />
        <circle cx="65" cy="38" r="3" className="fill-red-500 stroke-none animate-pulse" />
        
        {/* Crosshair reticles */}
        <motion.line x1="20" y1="51" x2="28" y2="51" strokeWidth="1.5" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.line x1="72" y1="51" x2="80" y2="51" strokeWidth="1.5" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
      </svg>
    )
  },
  { 
    num: '06', 
    title: 'CONTROL', 
    desc: 'Take command from anywhere. Access the Feeder interface at 10.38.133.108 and the ESP32-CAM live portal at 10.38.133.55 directly through any modern web browser.',
    visual: () => (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent-brown stroke-[2] fill-none overflow-visible">
        <rect x="25" y="15" width="50" height="70" rx="8" strokeWidth="2.5" />
        <motion.line 
          x1="35" y1="35" x2="65" y2="35" strokeWidth="2.5" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} 
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} 
        />
        <motion.line 
          x1="35" y1="50" x2="55" y2="50" strokeWidth="2.5" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} 
          transition={{ duration: 1.5, delay: 0.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} 
        />
        <circle cx="50" cy="75" r="4" className="fill-accent-brown stroke-none" />
      </svg>
    )
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 lg:py-40 bg-foreground text-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-accent-brown/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] right-[-10%] w-[60vw] h-[60vw] bg-accent-green/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] bg-cyan-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-background/10 bg-background/5 backdrop-blur-md mb-6 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse shadow-[0_0_8px_rgba(217,125,84,0.8)]"></span>
              <span className="text-xs font-mono tracking-widest text-background/80 uppercase font-medium">Complete Hardware Architecture</span>
            </div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium mb-6 leading-[1.05] tracking-tight text-background">
              Intelligent <span className="text-background/40">by design.</span>
            </h3>
            <p className="text-background/60 leading-relaxed text-base sm:text-lg md:text-xl font-light mx-auto max-w-2xl">
              A synchronized integration of mechanical food portioning, ultrasonic water depth management, and live ESP32-CAM visual monitoring.
            </p>
          </motion.div>
        </div>

        {/* Alternating Cards */}
        <div className="flex flex-col gap-20 md:gap-28 lg:gap-32">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;

            return (
              <div key={i} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-10 lg:gap-16 group`}>
                
                {/* Visual Side */}
                <motion.div 
                  className="w-full lg:w-5/12 flex justify-center"
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-full lg:max-w-md aspect-square">
                    {/* Glowing background for visual */}
                    <div className="absolute inset-0 bg-accent-brown/10 blur-[50px] rounded-full group-hover:bg-accent-brown/20 transition-colors duration-700"></div>
                    <div className="relative z-10 w-full h-full drop-shadow-2xl opacity-75 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-105">
                      <step.visual />
                    </div>
                  </div>
                </motion.div>

                {/* Text Card Side */}
                <motion.div 
                  className="w-full lg:w-6/12"
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="relative p-6 sm:p-10 md:p-12 rounded-3xl bg-background/5 border border-background/10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:bg-background/10 hover:border-background/20 shadow-2xl shadow-black/50 hover:-translate-y-2">
                    
                    {/* Decorative Number */}
                    <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 pointer-events-none">
                      <span className="font-display text-8xl md:text-[10rem] font-bold tracking-tighter -mr-4 -mt-4 block text-background leading-none">{step.num}</span>
                    </div>

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-full bg-foreground border border-background/20 flex items-center justify-center mb-6 shadow-inner shadow-black/50">
                        <span className="font-display text-xl text-accent-brown font-bold">
                          {step.num}
                        </span>
                      </div>
                      
                      <h4 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium mb-4 tracking-wide text-background">{step.title}</h4>
                      <p className="text-background/60 leading-relaxed text-base sm:text-lg font-light">
                        {step.desc}
                      </p>
                    </div>

                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
