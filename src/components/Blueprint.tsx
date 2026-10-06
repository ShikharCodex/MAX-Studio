import { motion, type Variants } from 'framer-motion';

const Blueprint = () => {
  const lineVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 3, ease: "easeInOut" }
    }
  };

  return (
    <section className="py-32 md:py-48 bg-black text-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-white mb-4">Under the surface.</h2>
          <p className="font-mono text-sm text-accent-green tracking-[0.3em] uppercase">Engineering Blueprint / Rev A / 2026</p>
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto h-[600px] md:h-[800px] flex items-center justify-center">
        {/* Advanced Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
        </div>
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[100px]"></div>
        
        {/* Highly Technical SVG */}
        <svg viewBox="0 0 1000 800" className="w-full h-full relative z-10 drop-shadow-[0_0_10px_rgba(79,108,88,0.3)]">
          <g stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.4">
            {/* Dimensions and rulers */}
            <line x1="100" y1="50" x2="900" y2="50" stroke="#4f6c58" strokeDasharray="5 5" />
            <text x="500" y="40" fill="#4f6c58" fontSize="12" fontFamily="monospace" textAnchor="middle">WIDTH 320MM</text>
            
            <line x1="50" y1="100" x2="50" y2="700" stroke="#4f6c58" strokeDasharray="5 5" />
            <text x="35" y="400" fill="#4f6c58" fontSize="12" fontFamily="monospace" textAnchor="middle" transform="rotate(-90 35 400)">HEIGHT 450MM</text>
          </g>

          <g stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.8">
            {/* Outer Case Outline - Isometric / Abstracted */}
            <motion.path 
              variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              d="M 350 150 L 650 150 L 650 400 L 700 400 L 700 650 L 300 650 L 300 600 L 350 600 Z" 
            />
            {/* Inner Mechanisms */}
            <motion.rect variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} x="380" y="180" width="240" height="200" rx="4" />
            <motion.circle variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} cx="500" cy="400" r="50" strokeDasharray="4 4"/>
            <motion.circle variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} cx="500" cy="400" r="40" />
            
            {/* Motor Axle */}
            <motion.path variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} d="M 500 350 L 500 450 M 450 400 L 550 400" strokeWidth="0.5" />
            
            <motion.rect variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} x="440" y="480" width="120" height="80" rx="2" />
            
            {/* Circuit traces with glowing green accent */}
            <motion.path variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} d="M 440 520 L 380 520 L 380 580" stroke="#4f6c58" strokeWidth="3" filter="drop-shadow(0 0 5px #4f6c58)" />
            <motion.path variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} d="M 560 520 L 620 520 L 620 580" stroke="#4f6c58" strokeWidth="3" filter="drop-shadow(0 0 5px #4f6c58)" />
          </g>

          {/* Technical Labels with Pointer Lines */}
          <g className="font-mono text-xs fill-white/80 tracking-widest">
            <motion.text initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} x="150" y="250">01. FOOD RESERVOIR</motion.text>
            <motion.line initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} x1="300" y1="245" x2="380" y2="245" stroke="white" strokeWidth="0.5" />
            <circle cx="380" cy="245" r="3" fill="#ffffff" />

            <motion.text initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} x="730" y="300">02. LEVEL SENSOR (IR)</motion.text>
            <motion.line initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2 }} x1="620" y1="295" x2="720" y2="295" stroke="white" strokeWidth="0.5" />
            <circle cx="620" cy="295" r="3" fill="#ffffff" />

            <motion.text initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }} x="180" y="405">03. SERVO MOTOR</motion.text>
            <motion.line initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.4 }} x1="310" y1="400" x2="450" y2="400" stroke="white" strokeWidth="0.5" />
            <circle cx="450" cy="400" r="3" fill="#ffffff" />

            <motion.text initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 }} x="730" y="525">04. MICROCONTROLLER UNIT</motion.text>
            <motion.line initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.6 }} x1="560" y1="520" x2="720" y2="520" stroke="white" strokeWidth="0.5" />
            <circle cx="560" cy="520" r="3" fill="#ffffff" />

            <motion.text initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.8 }} x="190" y="625">05. FEEDING BOWL</motion.text>
            <motion.line initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.8 }} x1="310" y1="620" x2="350" y2="620" stroke="white" strokeWidth="0.5" />
            <circle cx="350" cy="620" r="3" fill="#ffffff" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Blueprint;
